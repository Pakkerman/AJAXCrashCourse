const btn = document.querySelector("#btn")
const usersListContainerElement = document.querySelector("#users-list")

btn.addEventListener("click", loadUsers)

function loadUsers() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "users.php", true)

  xhr.onload = function () {
    if (this.status == 200) {
      const users = JSON.parse(this.responseText)

      for (let user of users) {
        const item = document.createElement("h5")
        item.innerText = `ID: ${user.id} is ${user.name}`
        usersListContainerElement.append(item)
      }
    }
  }
  xhr.send()
}

// loadUsers()
