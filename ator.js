let yAtor = 367;
let xAtor = 100;
let colisao = false;

function mostraAtor(){
   image(imagemAtor, xAtor, yAtor, 30, 30);
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

function verificaColisao(){
   for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
         colidiu();
      }
   }
}

function colidiu(){
   yAtor = 367;
}