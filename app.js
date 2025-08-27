// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la 
// lógica para resolver el problema.
let listaNombres = [];
let cantidadAmigos = 0;

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if(listaNombres.includes(nombreAmigo) || esNuloOESpacioEnBlanco(nombreAmigo)){
        asignarTextoElemento("informacion_lista", "Por favor ingrese un amigo distinto o no ingrese un espacio en blanco")
    }else{
        listaNombres.push(nombreAmigo);
        asignarTextoElemento("informacion_lista", "Amigo " + nombreAmigo + " Agregado con exito")
        asignarTextoElemento("listaAmigos", listaNombres)
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarListaAmigos(){
    asignarTextoElemento(listaAmigos, listaNombres);
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
    console.log(numeroAmigoSorteado);
    console.log(listaAmigos.length);
    let amigoSorteado = listaNombres[numeroAmigoSorteado];
    asignarTextoElemento("resultado", "Felicidades, " + amigoSorteado + ", fuiste el amigo sorteado");
}