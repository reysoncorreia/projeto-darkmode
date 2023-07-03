function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem 
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "assets/avatar-light.png")}

    else {
      // se tiver dark mode, manter a imagem
      img.setAttribute("src", "assets/avatar.png")
    }

    //pegar a tag alt 
    const alt = document.querySelector("alt")

    //substituir o texto quando estiver em dark mode  
    if (html.classList.contains("light")) {
      alt.setAttribute("alt", "reyson de oculos")
    }

}