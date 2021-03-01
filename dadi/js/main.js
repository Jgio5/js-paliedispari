// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo se l'utente ha vinto.

// Salvo il bottono in una variabile
var bottoneGenera = document.getElementById('btn_genera');
console.log(btn_genera);

// rimango in attesa dell'evento "click" sul bottone
bottoneGenera.addEventListener('click',

// Il bottone viene cliccato
  function () {
    // input "Pari o Dispari"
    var pariODispariUtente = document.getElementById('pari_dispari').value;
    console.log("L'utente ha scelto: " + pariODispariUtente);

    // input "numero da 1 a 5"
    var numeroUtente = parseInt(document.getElementById('num_inserire').value);
    console.log("Il numero dell'utente: " + numeroUtente);

    // Stampo nell'HTML le opzioni scelte dall'utente
    document.getElementById('risultato-utente').innerHTML = numeroUtente + " " + pariODispariUtente;

    // generiamo numero numero Random PC
    var numeroPC = Math.floor((Math.random() * 5) + 1);
    console.log("Il numero del pc é: " + numeroPC);
    document.getElementById('risultato-pc').innerHTML = numeroPC;

    //sommiamo numero Utente e PC
    var numeroTotale = numeroPC + numeroUtente;
    console.log("La somma dei due numeri è: " + numeroTotale);

    if (pariODispariUtente == "pari") {
      if (numeroTotale % 2 == 0) {
        document.getElementById('risultato-finale').innerHTML = "Il vincitore è l'utente";
        console.log("Il vincitore è l'utente");
      }
      else {
        console.log("Il vincitore è il pc");
        document.getElementById('risultato-finale').innerHTML = "Il vincitore è il PC";
      }
    }
    else if (pariODispariUtente == "dispari") {
      if (numeroTotale % 2 == 1) {
        console.log("Il vincitore è l'utente");
        document.getElementById('risultato-finale').innerHTML = "Il vincitore è l'utente";
      }
      else {
        console.log("Il vincitore è il pc");
        document.getElementById('risultato-finale').innerHTML = "Il vincitore è il PC";
      }
    }
  }
);
