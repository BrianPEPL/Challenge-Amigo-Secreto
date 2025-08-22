// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Ingresar Nombres de amigos
    //Crear un Array para almacenar Nombres
let listaAmigos = [];
let nombreVacio = "";
let tamanoListaAmigos = 0;

    //Implementar una funcion para agregar nombres de amigos
function agregarAmigo(){
    let nombreNuevo = document.getElementById('amigo').value;
    //Validar si el nombre esta vacio
    if ( nombreNuevo == nombreVacio) {
        alert("El nombre se encuentra vacío");
    } else {
        listaAmigos.push(nombreNuevo);
        console.log(listaAmigos);
        limpiarCaja(); 
        //asignarTextoElemento('ul#listaAmigos',`${nombreNuevo}`) 
        actualizarListaAmigos();      
    }    
}
    //Implementar una funcion para actualizar y mostrar nombres en lista
function actualizarListaAmigos(){
    let elementoLista = document.getElementById('listaAmigos');
    elementoLista.innerHTML = ''; // Limpiar la lista actual
    
    // Crear y agregar cada nombre como un elemento <li>
    listaAmigos.forEach(function(nombre, index) {
        let elementoLi = document.createElement('li');
        elementoLi.textContent = nombre;
        elementoLista.appendChild(elementoLi);
    });
}

//Sortear el nombre y mostrar nombre
    //Sortear nombre
function sortearAmigo(){
        let tamanoListaAmigos = listaAmigos.length;

        if (tamanoListaAmigos == 0) {
            alert("No hay amigos en la lista para sortear");
            return;
        }

        //console.log(tamanoListaAmigos);
        let numeroAmigoSorteado = Math.floor(Math.random()*tamanoListaAmigos);
        console.log(listaAmigos[numeroAmigoSorteado]);
        asignarTextoElemento('ul#resultado',`El amigo secreto sorteado es: ${listaAmigos[numeroAmigoSorteado]}`)
        
    }
    //Mostrar nombre en la pantalla
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    }


//Limpiar la Caja
function limpiarCaja(){
    document.querySelector('#amigo').value = '';    
}
limpiarCaja();

