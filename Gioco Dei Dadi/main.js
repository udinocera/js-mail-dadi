let personalcomputer = Math.floor( ( Math.random() * 6 ) + 1 );

console.log("Il computer lancia il numero: " + personalcomputer);

let giocatore1 = Math.floor( ( Math.random() * 6 ) + 1 );

console.log("Hai lanciato il numero: " + giocatore1);

if(giocatore1 > personalcomputer) {
    console.log("Vincente!");
}else if(giocatore1 < personalcomputer) {
    console.log("Perdente!");
}else 
{
console.log("Pareggio!");
}
    

