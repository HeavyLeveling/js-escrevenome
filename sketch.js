let palavra;

function setup() {
  createCanvas(600, 400);
  
  palavra = palavraAleatoria();
}
  
function palavraAleatoria() {
  let palavras = ["Vem aí os melhores Esportes", "Natação🏊‍♀️", "Ciclismo🚴‍♀️", "Corrida🏃‍♀️", "Futebol⚽"];
  
  return random(palavras);
}

function inicializaCores() {
  
  background("blue");
  fill("white");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function draw() {
  
  inicializaCores();

  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
}


