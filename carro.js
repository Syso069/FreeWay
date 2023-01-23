let xCarros = [810, 810, 810, 810, 810, 810];
let yCarros = [40, 96, 150, 210, 265, 315];
let velocidadeCarros = [3, 4, 3.5, 6, 4.5, 3.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro (){
    for ( let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro (){
    for (let i = 0; i < imagemCarros.length; i++ ){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoCarro (){
    for (let i = 0; i < imagemCarros.length; i++){
        if(passaTela(xCarros[i])){
            xCarros[i] = 810;
        }
    }
}

function passaTela (xCarro){
    return xCarro < -50;
}