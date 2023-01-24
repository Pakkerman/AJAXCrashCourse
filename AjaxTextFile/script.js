const btn = document.querySelector("#button")

btn.addEventListener("click", loadText)

const outputElement = document.querySelector("#text-output")

function loadText() {
  // create XHR Object

  // readyState Values:
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  const xhr = new XMLHttpRequest()
  xhr.open("GET", "sample.txt", true)

  console.log("readystate: ", xhr.readyState) // ready state 1

  // Optional - used for loaders
  xhr.onprogress = function () {
    console.log("readystate: ", xhr.readyState) // ready state 3
  }

  // onreadystatechange method, NOTE: Use this or onload + onerror
  xhr.onreadystatechange = function () {
    // readyState Values:
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready
    console.log("readystate: ", xhr.readyState) // run through readyState 2, 3, 4
    if (this.readyState == 4 && this.status == 200) {
      console.log("file received")
      document.body.removeChild(btn)
      outputElement.textContent = this.response
    }
    if (this.status == 404) {
      console.log("not found")
      outputElement.textContent = this.response
    }
  }

  // onload method, NOTE: Use this or onreadystatechange
  // xhr.onload = function () {
  // console.log("readystate: ", xhr.readyState) // Only have 1 and 4 readyState
  //   if (this.status == 200) console.log("get text file")
  // }

  xhr.onerror = function () {
    console.log("Request Error")
  }

  xhr.send()
}
