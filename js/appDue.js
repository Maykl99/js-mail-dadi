/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


    

var machineNumber=Math.floor(Math.random()* 7);     // Numeri randomici dei due giocatori giocatore vs computer
var playerNumber=Math.floor(Math.random() *7);
var confronto;                                      // Esito del confronto fra i due giocatori


if(machineNumber > playerNumber){                  // Condizione di verifica vincitore
    alert('Ha vinto la macchina')
    confronto = 'Ha vinto la macchina con il numero '+ machineNumber + ' e tu hai perso con il numero ' + playerNumber;
}else{
    alert('Hai vinto tu!')
    confronto = 'Hai vinto tu con il numero '+ playerNumber  + ' e la macchina ha perso con il numero ' + machineNumber;
}

document.getElementById('risultato').innerHTML = confronto;  // Stampa a monitor del risultato