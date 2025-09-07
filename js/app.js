let amigos = [];

const AgregarAmigo = () => {
  const nombre = document.getElementById("amigo").value;
  document.getElementById("amigo").value = ""; // limpia el campo de teto despues de agregar el texto;

  if (nombre) {
    amigos.push(nombre); //Permite agregar el nombre de un amigo al array amigos
    console.log(amigos); //muestra en la consola el nombre del amigo agregado
    return amigos;
  } else {
    alert("Por favor ingrese un nombre");
    return null;
  }
};
