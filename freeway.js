function setup() {
    createCanvas(800, 400);
    somTrilha.loop();
}

function draw() {
    background(imagemEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoCarro();
    verificaColisao();
    incluiPontos();
    marcaPontos();
}