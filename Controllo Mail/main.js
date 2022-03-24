let email = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
console.log(email);

let inserire = prompt("Dobbiamo controllare la tua email, inseriscila");
console.log(inserire);
let collegare;

for(let i = 0; i<email.length; i++){
    if (inserire==email[i]){
        alert("La tua email è accettata");
collegare = inserire;
    }

}
let negazione;
if (collegare!=inserire){
    alert("la tua email non è accettata");
}

