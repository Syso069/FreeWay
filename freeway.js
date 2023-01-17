let imagemAtor;
let imagemEstrada;
let imagemCarro;

let xCarro = 810;

let yAtor = 367;
let xAtor = 100;

function preload(){
    imagemEstrada = loadImage("assets/img/estrada.png");
    imagemAtor = loadImage("assets/img/ator-1.png");
    imagemCarro = loadImage("assets/img/carro-1.png")
}

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(imagemEstrada);
    image(imagemAtor, xAtor, yAtor, 30, 30);
    image(imagemCarro, xCarro, 40, 50, 40);
    movimentaCarro();
    movimentaAtor();
}

function movimentaCarro(){
  xCarro -=3;
}

function movimentaAtor(){
    if(keyIsDown(87)){
      yAtor -=2;
    }
    
    if(keyIsDown(83)){
       yAtor +=2;
    }
  
    if(keyIsDown(65)){
       xAtor -=2;
    }
  
    if(keyIsDown(68)){
       xAtor +=2;
    }
  
}