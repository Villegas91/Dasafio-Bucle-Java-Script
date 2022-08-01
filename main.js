//Registro de usuario y asignación de legajo, si no se ingresa un nombre
// se hace un break

for (let i = 1; i <= 10; i++) {
  let ingresarNombre = prompt("Registrese con su nombre");
  while (ingresarNombre == false) {
    ingresarNombre = prompt("Debe ingresar un nombre");
  }
  alert(" Legajo" + i + " Nombre: " + ingresarNombre);
  console.log("Legajo" + i + " Nombre: " + ingresarNombre);
}
