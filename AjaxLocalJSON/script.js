const btnElement1 = document.querySelector("#button1")
const btnElement2 = document.querySelector("#button2")
const userContainerElement = document.querySelector("#user")
const usersContainerElement = document.querySelector("#users")

btnElement1.addEventListener("click", getUser)
btnElement2.addEventListener("click", getUsers)

function getUser() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "user.json", true)

  xhr.onload = function () {
    if (this.status == 200) {
      const user = JSON.parse(this.response)
      userContainerElement.textContent = `Name: ${user.name}  Email: ${user.email}`
    }
  }
  xhr.send()
}

function getUsers() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "users.json", true)
  console.log("clicked")
  xhr.onload = function () {
    if (this.status == 200) {
      const users = JSON.parse(this.response)

      usersContainerElement.append(document.createElement("ul"))

      for (let user of users) {
        const nameElement = document.createElement("li")
        const emailElement = document.createElement("li")
        nameElement.textContent = `Name: ${user.name}`
        emailElement.textContent = `Email: ${user.email}`

        usersContainerElement.querySelector("ul").append(nameElement)
        usersContainerElement.querySelector("ul").append(emailElement)
      }
    }
  }
  xhr.send()
}

getUsers()
