const btn = document.querySelector("#btn")

btn.addEventListener("click", getName)

function getName() {
  console.log("clickk")
  const xhr = new XMLHttpRequest()

  xhr.open("GET", "process.php", true)

  xhr.onload = function () {
    console.log(this.responseText)
  }
  xhr.send()
}
