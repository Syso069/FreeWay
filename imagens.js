let imagemAtor;
let imagemEstrada;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somTrilha;
let somColisao;
let somPonto;

function preload(){
    imagemEstrada = loadImage("assets/img/estrada.png");
    imagemAtor = loadImage("assets/img/ator-1.png");
    imagemCarro = loadImage("assets/img/carro-1.png");
    imagemCarro2 = loadImage("assets/img/carro-2.png");
    imagemCarro3 = loadImage("assets/img/carro-3.png");
    imagemCarros =  [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
    somTrilha = loadSound ("assets/sons/trilha.mp3");
    somColisao = loadSound ("assets/sons/colidiu.mp3");
    somPonto = loadSound ("assets/sons/pontos.wav")
}