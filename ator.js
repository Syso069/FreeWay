let yAtor = 367;
let xAtor = 100;

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