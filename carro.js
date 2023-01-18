let xCarro = 810;
let yCarro = 40;
let velocidadeCarro1 = 3;

let xCarro2 = 810;
let yCarro2 = 96;
let velocidadeCarro2 = 4;

let xCarro3 = 810;
let yCarro3 = 150;
let velocidadeCarro3 = 3.5;

function mostraCarro (){
    image(imagemCarro, xCarro, yCarro, 50, 40);
    image(imagemCarro2, xCarro2, yCarro2, 50, 40);
    image(imagemCarro3, xCarro3, yCarro3, 50, 40);
}


function movimentaCarro(){
    xCarro -= velocidadeCarro1;
    xCarro2 -= velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
  }

function voltaPosicaoCarro(){
    if(xCarro < -50){
        xCarro = 810;
    }

    if(xCarro2 < -50){
        xCarro2 = 810;
    }

    if(xCarro3 < -50){
        xCarro3 = 810;
    }
}