function cambiartexto() {

  let titulo = document.getElementById("cambiartexto");
  // cambia el texto
  titulo.textContent = "GoodBye";
}

let encabezado = document.querySelector("h2")
    encabezado.style.color = "orange";

let encabezadoclick = document.getElementById("clickeable");
encabezadoclick.addEventListener("click", function(){
    encabezadoclick.style.color = "brown";
} );
