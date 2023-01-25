const btn = document.querySelector("#btn")
const getFormElement = document.querySelector("#get-form")
const postFormElement = document.querySelector("#post-form")

btn.addEventListener("click", getName)
getFormElement.addEventListener("submit", getName)
postFormElement.addEventListener("submit", postName)

function getName(event) {
  event.preventDefault()

  const name = document.querySelector("#ajax-get").value

  const xhr = new XMLHttpRequest()

  xhr.open("GET", "process.php?name=" + name, true)

  console.log("click")
  xhr.onload = function () {
    console.log(this.responseText)
  }
  xhr.send()
}


function postName(event) {
  console.log("POST initiated")
  event.preventDefault()
  const name = document.querySelector("#ajax-post").value
  const params = "name=" + name
  const xhr = new XMLHttpRequest()
  xhr.open("POST", "process.php", true)
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

  xhr.onload = function () {
    console.log(this.responseText)
  }
  xhr.send(params)
}
