const APIURL = "https://api.github.com/users"

const btn = document.querySelector("#btn")
const usersContainerElement = document.querySelector("#users")

btn.addEventListener("click", loadUsers)

function loadUsers() {
  const xhr = new XMLHttpRequest()

  xhr.open("GET", APIURL, true)

  xhr.onload = function () {
    const users = JSON.parse(this.response)
    console.log(users)

    for (let user of users) {
      const element = document.createElement("p")
      element.textContent = user.login
      usersContainerElement.querySelector("ul").append(element)
    }
  }

  xhr.send()
}
