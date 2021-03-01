// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


var bottoneRisultato = document.getElementById('btn_genera');
console.log(btn_genera);

bottoneRisultato.addEventListener('click',

  function ()  {
    // Inserisco la parola
    var parolaUtente = document.getElementById('parola').value;
    console.log(parolaUtente);

    var parolaUtenteReverse = giraParola(parolaUtente);

    if (parolaUtente == parolaUtenteReverse) {
      document.getElementById('risultato').innerHTML = ("La parola " + parolaUtente + " è palindroma.");
    }
    else {
      document.getElementById('risultato').innerHTML = ("La parola " + parolaUtente + " non è palindroma.");
    }

    // Funzione per girare la parola
    function giraParola(parola) {
      var parolaReverse = "";

      //  -1 perché parte da 0
      for (var i = parola.length - 1; i >= 0; i--) {
        parolaReverse += parola[i];
      }

      return parolaReverse;
    }
  }
);


// Funzione contratta
// function giraParola(parolaFunction) {
//   var parolaReverseFunction = "";
//   parolaReverseFunction = parola.split('').reverse.('').join('');
// }
