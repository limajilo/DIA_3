// DOM Data object model permite modificar el html desde javascript y tambien el css

let ejecutar = document.getElementById("btnEjecutar");
//Guardamos un boton html en una variable para eso se usa DOM

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre:");
  alert("Tu nombre es: " + nombre);
};

// Recomendacion los eventos al final
// EVENTOS
ejecutar.onclick = () => {
  cambiarNombre();
};
