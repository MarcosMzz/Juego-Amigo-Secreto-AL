// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la 
// lógica para resolver el problema.
let listaNombres = [];
let cantidadAmigos = 0;

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if(listaNombres.includes(nombreAmigo) || esNuloOESpacioEnBlanco(nombreAmigo)){
        asignarTextoElemento("informacion_lista", "Por favor ingrese un amigo distinto o no ingrese un espacio en blanco");
    }else{
      listaNombres.push(nombreAmigo);
        asignarTextoElemento("informacion_lista", "Amigo " + nombreAmigo + " Agregado con exito");
        crearLi(listaNombres);
        limpiarCaja();
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarListaAmigos(){
    asignarTextoElemento(listaAmigos, listaNombres);
    return;
}

function esNuloOESpacioEnBlanco(amigo) {
    //Nos fijamos si es null o undefined
    if (amigo == null) {
      return true;
    }

    // Si es un string, trimeala para fijar si esta vacia
    if (typeof amigo === 'string') {
      return amigo.trim().length === 0;
    }

    //Si es no nula/undefined y no una string, considerala que no nulla o que no tiene espacios en blanco
    return false;
}

function sortearAmigo(){
  let numeroAmigoSorteado = Math.floor(Math.random()*listaNombres.length);
    
  let amigoSorteado = listaNombres[numeroAmigoSorteado];
    
  let lista = document.getElementById("resultado");
  asignarTextoElemento("resultado", "");
  let nuevoElementoLista = document.createElement("li");
  nuevoElementoLista.textContent = "Felicidades, " + amigoSorteado + ", fuiste el amigo sorteado";
  lista.appendChild(nuevoElementoLista);
  return;

}

function crearLi(listaDeAmigos){
  let lista = document.getElementById("listaAmigos");
  asignarTextoElemento("listaAmigos", "");

  for(let amigo of listaDeAmigos){
    let nuevoElementoLista = document.createElement("li");
    nuevoElementoLista.textContent = amigo;
    lista.appendChild(nuevoElementoLista);
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#amigo").value = "";
  return;
}

  //Codigo para que el input solo puedan ser letras(No admite espacios ni numeros)
  document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('amigo');

    inputField.addEventListener('input', function(event) {
      // Reemplaza cualquier caracter que no sea una letra con un espacio en blanco
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
    });
  });