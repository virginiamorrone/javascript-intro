// 1. Mostrar algo en la consola (abrí F12 para verlo)
console.log("¡Hola, Mundo! El script se cargó correctamente.");

// 2. Buscar los elementos del HTML por su id
const campoNombre = document.getElementById("nombre");
const botonSaludar = document.getElementById("boton-saludar");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

// 3. Una variable que va a cambiar (por eso usamos let)
let cantidadSaludos = 0;

// 4. Una función que arma el saludo
function crearSaludo(persona) {
  return `¡Hola, ${persona}! Bienvenido/a a JavaScript`;
}

// 5. Una función que se ejecuta al hacer clic
function alHacerClic() {
  const nombre = campoNombre.value.trim(); // .trim() quita espacios sobrantes

  // 6. Una condición: ¿escribió algo?
  if (nombre === "") {
    mensaje.textContent = "Escribe tu nombre en el campo para recibir un saludo.";
    mensaje.classList.add("error");
    return; // salimos de la función
  }

  mensaje.classList.remove("error");
  mensaje.textContent = crearSaludo(nombre);

  cantidadSaludos = cantidadSaludos + 1;
  contador.textContent = `Saludos enviados: ${cantidadSaludos}`;

  console.log(`Se saludó a ${nombre}`);
}

// 7. Conectar el botón con la función (evento "click")
botonSaludar.addEventListener("click", alHacerClic);

// Extra: también saludar al presionar Enter dentro del campo
campoNombre.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    alHacerClic();
  }
});
