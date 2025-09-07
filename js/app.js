let amigos = [];

/*Función para agregar amigos al array amogos*/
/*function AgregarAmigo() {
  let nombre = prompt("Ingresa el nombre de tu amigo"); //Pide al usuario ingresar el nombre de un amigo
  amigos.push(nombre); //Permite agregar el nombre de un amigo al array amigos
  console.log(amigos); //muestra en la consola el nombre del amigo agregado
}*/

const AgregarAmigo = () => {
  const nombre = prompt("Ingresa el nombre de tu amigo"); //Pide al usuario ingresar el nombre de un amigo

  if (nombre) {
    amigos.push(nombre); //Permite agregar el nombre de un amigo al array amigos
    console.log(amigos); //muestra en la consola el nombre del amigo agregado
    return amigos;
  } else {
    alert("No ingresaste ningun nombre");
    return null;
  }
};
