/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let userWord = prompt("enter a word");
let isPalindrome;

    function palindromyCheck(word) {
        word = word.toLowerCase();
        let wordLength = word.length;
        for (let i = 0; i < wordLength; i++) {
          if (word[i] !== word[wordLength - 1 - i]) {
              return false;
          }
        }
        return true;
       }


console.log("Is the word a palindrome? " + palindromyCheck(userWord));