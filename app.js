let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemento( elemento, texto){
   let elementoHTML= document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}
function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
   if(numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento('p',`Acertaste el Número en ${intentos}${(intentos===1)? "vez" : "veces"}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    //El usuario no acertó
      if( numeroDeUsuario > numeroSecreto) {
         asignarTextoElemento('p','El Número Secreto es Menor');
        }else{
           asignarTextoElemento('p','El Número Secreto es Mayor');
       
        }
        intentos++;
        limpiarCaja();
   
  }   
  return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
    
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
 if(listaNumerosSorteados.length==numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
      // si el número generado esta en la lista
      if(listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();

      }else{
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
  
   }
 
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('P',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}



function reiniciarJuego(){


//limpiar la caja
limpiarCaja();
//indicar mensaje de intervalo de números
//Generar el número alearorio
//Inicializar el número de intentos
condicionesIniciales();
//Deshabilitar el boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();
