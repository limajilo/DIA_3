// DOM Data object model permite modificar el html desde javascript y tambien el css

//Guardamos un boton html en una variable para eso se usa DOM
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre:");
  //   alert("Tu nombre es: " + nombre);
  nombreUsuario.innerHTML = "Bienvenido/a :" + nombre;
};

// Recomendacion los eventos al final
// EVENTOS
ejecutar.onclick = () => {
  cambiarNombre();
};
