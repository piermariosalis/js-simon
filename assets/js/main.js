// Definisco variabili per i numeri random e i numeri inseriti dall'utente
var randomNumber = [];

var userNumber = [];


while (randomNumber < 5) {
  var number = createRandom(1,100);
  randomNumber.push(number);
  if (!randomNumber.includes(number)) {
      randomNumber.push(number);
  }
}

// definisco una funzione che crea numeri randomici compresi fra l'uno e il cento

function createRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}