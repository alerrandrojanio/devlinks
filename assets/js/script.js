function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  const img = document.querySelector(".profile img")

  if (body.classList.contains("light")) {
    img.setAttribute("src", "assets/img/avatar-light.png")
  } else {
    img.setAttribute("src", "assets/img/avatar-dark.png")
  }
}
