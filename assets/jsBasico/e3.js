let dia = prompt("Ingrese un dia de la semana").toLocaleLowerCase();

if(
    dia == "lunes"||dia == "martes" ||dia == "miercoles" ||
    dia == "jueves" ||
    dia == "viernes" ||
){
    alert("Entre semana");
}
else{
    alert("Favor ingresar solo un dia de la semana");

}