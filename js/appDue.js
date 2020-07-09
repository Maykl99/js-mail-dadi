/* Gioco dei dadi
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

var numeroCasuale=Math.floor(Math.random()* 7);
numeroMacchina=numeroCasuale;
var giocatoreCasuale=prompt('Scegli un numero fra 1 e 6');
numeroGiocatore=giocatoreCasuale;

if(numeroGiocatore > numeroCasuale){
    alert('Hai vinto tu!')
}else{
    alert('Ha vinto la macchina!')
}