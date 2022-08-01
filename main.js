//Registro de usuario y asignación de legajo, si no se ingresa un nombre
// se activa el bucle while hasta que el usuario lo haga.
// Mediante el Alert visualizamos el legajo asignado y
//mediante el console.log visualizamos la lista completa.

for (let i = 1; i <= 10; i++) {
  let ingresarNombre = prompt("Registrese con su nombre");
  while (ingresarNombre == false) {
    ingresarNombre = prompt("Debe ingresar un nombre");
  }
  alert(" Legajo" + i + " Nombre: " + ingresarNombre);
  console.log("Legajo" + i + " Nombre: " + ingresarNombre);
}
