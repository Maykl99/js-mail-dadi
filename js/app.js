/*  Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Buon lavoro!  */


var listaAccessi=['Marta@mail.gmail', 'Marco@mail.gmail', 'Matteo@mail.gmail', 'Mattia@mail.gmail'];
var emailUtent= prompt('Inserisci la tua email');
var trovato = false;


for(var i=0; i<listaAccessi.length; i++){

    if(emailUtent == listaAccessi[i]){
        trovato= true;
    }
}

if(trovato== true){
    alert('trovata');
}else{
    alert('non trovata')
}

//var valore= emailUtent;

/* if(emailUtent == listaAccessi[0]){
    alert('email valida')
}
else if(emailUtent == listaAccessi[1]){
    alert('email valida 1')
}
else if(emailUtent == listaAccessi[2]){
    alert('email valida')
}
else if(emailUtent == listaAccessi[3]){
    alert('email valida')
}

else{
    alert('email non valida')
}   */

