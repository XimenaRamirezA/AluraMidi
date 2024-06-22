function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0;contador < listaDeTeclas.length;contador ++ ){
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  console.log(contador)

  const idAudio = `#sonido_${instrumento}`; //funcion especial para modificarla etiqueta de cada instrumento y ponerla en elboton correspondiente
  console.log(idAudio)

  tecla.onclick = function () { //function () es una función anónima
    playSonido(idAudio);  
  };
  tecla.onkeydown = function (evento) { //onkeydown la tecla ya es presionada
     //EL triple igualdad === verifica que sea igual también en el tipo de dato 
    if(evento.code === 'Space' || evento.code === 'Enter'){
      tecla.classList.add('activa');
    }
    console.log(evento.code === 'Space' || evento.code === 'Enter')
    

  }
  tecla.onkeyup = function () { //onkeyup la tecla ya NO es presionada
    tecla.classList.remove('activa');
  }

}







