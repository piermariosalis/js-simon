// 1 Definisco variabili per i numeri random e i numeri inseriti dall'utente
var randomNumber = [];
// var userNumbers = [];




// 3 verifico che vengano restituiti 5 numeri
while (randomNumber.length < 5) {
  var number = createRandom(1,100);
    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
}
console.log(number);
// 4 Con alert mostro 5 numeri generati in maniera randomica
alert(`Numeri generati: [${randomNumber}]`); // Backtick in macOS = "ALT + F9"


// 5 creo funzione setTimeout per impostare un timer di 30s al termine del quale verrà chiesto
// all'utente tramite un Prompt di inserire,uno alla volta, i numeri generati dal computer

setTimeout(function() {
    var userNumbers = [];
    for (var i = 0; i < 5; i++) {
    userNumber = Number(prompt("Inserisci, uno alla volta, i numeri apparsi precedentemente"));
    if (!userNumbers.includes(userNumber)) {
        userNumbers.push(userNumber)
        }
    }

// 6 Con ciclo for verifico quanti e quali numeri sono stati indovinati
    var checkedNumber = [];
    for (c=0; c < userNumber.length; c++) {
        if (!userNumbers.includes(userNumber)) {
            checkedNumber.push(userNumbers);
        }
    }
// 7 Con messaggi di allerta espongo i risultati della verifica effettuata con ciclo for
    alert(`Sono stati indovinati : [${checkedNumber.length}]` );
    alert(`Ì numeri azzeccati: [${checkedNumber}]`);

},30000);

// 2 definisco una funzione che crea numeri randomici compresi fra l'uno e il cento

function createRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
