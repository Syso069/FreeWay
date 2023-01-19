let xCarros = [810, 810, 810];
let yCarros = [40, 96, 150];
let velocidadeCarros = [3, 4, 3.5];

function mostraCarro (){
    for ( let i = 0; i < imagemCarros.length; i = i + 1){
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}

function movimentaCarro (){
    for (let i = 0; i < imagemCarros.length; i = i + 1 ){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoCarro (){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
        if(passaTela(xCarros[i])){
            xCarros[i] = 810;
        }
    }
}

function passaTela (xCarro){
    return xCarro < -50;
}