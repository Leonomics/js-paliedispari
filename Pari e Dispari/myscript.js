/*L’utente sceglie pari o dispari 
e inserisce un numero da 1 a 5.*/
let pariDispari = prompt("write \"E\" for Even or \"O\" for Odd").toUpperCase();
let number = prompt("enter a number between 1 and 5");
number = parseInt(number);
checkPariDispari(pariDispari);
checkNumber(number);

let minNumber = 1;
let maxNumber = 5;

//Generiamo un numero random (sempre da 1 a 5) per il computer
function generateRandomNumber(minNumber, maxNumber){
    const computerNumber = Math.floor(Math.random()*(maxNumber - minNumber + 1)) + minNumber;
    return computerNumber;
}

let computerNumber = generateRandomNumber(minNumber, maxNumber);

game(pariDispari, number, computerNumber);

/*Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/
function game(userPariDispari, userNumber, computerNumber){
    console.log("your number is: " + userNumber);
    console.log("the computer number: " + computerNumber);
    console.log("you chose: " + userPariDispari);

    let sum = userNumber + computerNumber;
    console.log("the sum is: " + sum);

    if(userPariDispari == "E"){
        if(sum%2==0){
            console.log("You Won");
        }else if(sum%2!=0){
            console.log("You Lose");
        }
    }else if(userPariDispari == "O"){
        if(sum%2!=0){
            console.log("You Won");
        }else if(sum%2==0){
            console.log("You Lose");
        }
    }
}

//Funzioni che controllano i valori inseriti dall'utente
function checkPariDispari(pariDispari){
    if(pariDispari.valueOf() == "E"){
        return;
    }else if(pariDispari.valueOf() == "O"){
        return;
    }else{
        console.warn("enter a valid character");
        return;
    }   
}
function checkNumber(number){
    if(number<1 || number>5){
        console.warn("enter a number in the 1 to 5 range");
        return;
    }
}



