const nameKey = "name"

window.onload = () => {
  let name = localStorage.getItem(nameKey)
  if (name && name != "") {
    greetUser(name)
  }
}

const showGreeting = () => {
  let nameInput = document.getElementById("input-name")

  if (nameInput && nameInput.value !== "") {
    let name = nameInput.value
    localStorage.setItem(nameKey, name)
    greetUser(name)
  }
}

const greetUser = (name) => {
  let greetingOutput = document.getElementById("output")
  if (greetingOutput && name !== "") {
    greetingOutput.innerHTML = "Hello " + name + "!"
  }
}