let amigos = [];

const AgregarAmigo = () => {
  const nombre = document.getElementById("amigo").value;
  document.getElementById("amigo").value = ""; // limpia el campo de teto despues de agregar el texto;

  if (nombre) {
    amigos.push(nombre); //Permite agregar el nombre de un amigo al array amigos
    return amigos;
  } else {
    alert("Por favor ingrese un nombre");
    return null;
  }
};

const MostrarAmigos = () => {
  const listaAmigos = document.getElementById("lista-amigos");
  listaAmigos.innerHTML = ""; //Limpia la lista antes de mostrar los amigos agregados
  //Recorriendo el array amigos y mostrando los amigos agregados

  /*amigos.forEach((amigo) => {
    const lista = document.createElement("li"); //Crear un elemento lista en el dom
    //lista.textContent = amigo; // Establece el texto del elemento lista con el nombre del amigo ingresado en el array
    //listaAmigos.appendChild(lista); //Agrega el elemento hijo lista a la lista de amigos
  });*/

  for (let i = 0; i < amigos.length; i++) {
    console.log(`Amigo ${i + 1}: ${amigos[i]}`);
    const lista = document.createElement("li");
    lista.textContent = `Amigo ${i + 1}: ${amigos[i]}`;
    listaAmigos.appendChild(lista);
  }

  return listaAmigos;
};

const RealizarSorteo = () => {
  const sortear = Math.floor(Math.random() * amigos.length);
  console.log(sortear);

  const AmigoSecreto = document.getElementById("resultado");
  AmigoSecreto.textContent = `Los amigos secretos son: ${amigos[sortear]} y ${amigos[sortear === amigos.length - 1 ? 0 : sortear + 1]}`;

  return AmigoSecreto;
};
