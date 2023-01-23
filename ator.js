let xAtor = 100;
let yAtor = 367;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
   image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
   if(keyIsDown(87)){
      yAtor -=2;
   }
    
   if(keyIsDown(83)){
      if(podeSeMover()){
         yAtor +=2;
      }
   }
  
   if(keyIsDown(65)){
         xAtor -=1;
   }
  
   if(keyIsDown(68)){
         xAtor +=1;
   }
  
}

function verificaColisao(){
   for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
         voltaPosicaoInicial();
         if(pontosMaiorZero()){
            meusPontos -= 1;
         }
         somColisao.play();
      }
   }
}

function voltaPosicaoInicial(){
   yAtor = 367;
}

function incluiPontos (){
   textSize(22);
   textAlign(CENTER);
   fill(color(255, 105, 180));
   text(meusPontos, width / 5, 26);
}

function marcaPontos(){
   if(yAtor < 15){
      meusPontos += 1;
      voltaPosicaoInicial();
      somPonto.play();
   }
}

function pontosMaiorZero(){
   return meusPontos > 0;
}

function podeSeMover (){   
   return yAtor < 367;
}
