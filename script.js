/* function setAvatar() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
} */

function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Mudar a imagem a partir do tema

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver dark mode, adicionar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
}
