window.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  const boton = document.getElementById("cambiarColor");

  boton.addEventListener("click", () => {
    const coloresFondo = ["#f0f8ff", "#ffebcd", "#faebd7", "#ffe4e1", "#e6e6fa"];
    const coloresTitulo = ["#ff4500", "#008000", "#0000ff", "#800080", "#ff1493"];
    const fuentesTitulo = ["Arial", "Verdana", "Georgia", "Courier New", "Tahoma"];

    document.body.style.backgroundColor = coloresFondo[Math.floor(Math.random() * coloresFondo.length)];
    h1.style.color = coloresTitulo[Math.floor(Math.random() * coloresTitulo.length)];
    h1.style.fontFamily = fuentesTitulo[Math.floor(Math.random() * fuentesTitulo.length)];
  });
});
