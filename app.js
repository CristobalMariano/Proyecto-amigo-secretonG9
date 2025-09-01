

let amigos = [];


function agregarAmigo() {

    let nombre = document.getElementById('amigo').value.trim();
    

    if(nombre === ""){
        //verificar que no este vacio el campo 
        
        alert('Por favor, inserte un nombre.');
        
        return;
        
    }
    else{
        if(amigos.includes(nombre)){
            alert('este nombre ya esta en la lista');
        }else {
            amigos.push(nombre);
            actualizarLista();
            resultado.innerHTML = '';
        }       
        
    } 
    console.log(nombre);
    console.log(amigos);
    
    limpiarCaja();
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = ''; //Limpiar la caja
}



function actualizarLista(){
    //obtener el elemento de la lista
    //let listaAmigos = document.getElementById('listaAmigos');
    //limpiar la lista 
    
    listaAmigos.innerHTML = '';
    
    

    //actualizar elementos
    for(let i=0;i<amigos.length;i++){
        let li = document.createElement('li');
        li.innerHTML = amigos[i];
        listaAmigos.appendChild(li);
        
    }
    
    return;
}

function sortearAmigo() {
    
    if (listaAmigos.length == 0) {
        alert('No hay amigos en la lista');
        return;
    }else{

        listaAmigos.innerHTML = '';
        
        let sorteado = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[sorteado];
        
        
        resultado.innerHTML = `El amigo secreto es: ${amigoSeleccionado}`;

    }
    
    
    return;
    

}

agregarAmigo();
sortearAmigo();