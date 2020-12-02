// Definisco variabili per i numeri random e i numeri inseriti dall'utente
var randomNumber = [];



// verifico che vengano restituiti 5 numeri
while (randomNumber < 5) {
  var number = createRandom(1,100);
  randomNumber.push(number);
  if (!randomNumber.includes(number)) {
      randomNumber.push(number);
  }
}

// * creo funzione setTimeout per impostare un timer di 30s al termine del quale verrà chiesto 
// all'utente tramite un Prompt di inserire,uno alla volta, i numeri generati dal computer

setTimeout(function() {
    var userNumbers = []; 
    for (var i = 0; i < 5; i++) {
    userNumber = Number(prompt("Inserisci, uno alla volta, i numeri apparsi precedentemente"));
    if (!userNumbers.includes(userNumber)) {
        userNumbers.push(userNumber)
        }
    }
},30000);


// definisco una funzione che crea numeri randomici compresi fra l'uno e il cento

function createRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}