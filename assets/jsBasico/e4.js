// DOM Data object model permite modificar el html desde javascript y tambien el css

// Local Storage: Base de datos de los navegadores
// Ahora se guardara el nombre ingresado por el usuario en el local starage

//Guardamos un boton html en una variable para eso se usa DOM
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre:");
  //   alert("Tu nombre es: " + nombre);
  nombreUsuario.innerHTML = "Bienvenido/a :" + nombre;
  localStorage.setItem("nombre", nombre);
};

// tomar el valor de local storage
if (localStorage.getItem("nombre")) {
    nombreUsuario.innerHTML= "Bienvenido/a " +localStorage.getItem("nombre")
}

// Recomendacion los eventos al final
// EVENTOS
ejecutar.onclick = () => {
  cambiarNombre();
};
