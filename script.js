
function didIWin (givenNumber, findNumber) {
    return givenNumber === findNumber;
}

/*function promptNumber() {
    let givenNumber = prompt("Devinez un nombre entre 1 et 50 !");
    return parseInt(givenNumber);
}*/ 

function gameplay() {
    let givenNumber = Number(guessField.value);
    if (isNaN(givenNumber) || givenNumber <= minRange || givenNumber >= maxRange) {
        result.textContent = "Veuillez entrer un nombre valide.";
        return;
    }
    guessCount++;
     if (didIWin(givenNumber, findNumber) === false) {
        if (givenNumber > findNumber) {
            result.textContent = "C'est moins !";
            maxRange = givenNumber;
            range.textContent = `${minRange} < ? < ${maxRange}`;
        } else if (givenNumber < findNumber) {
            result.textContent = "C'est plus !";
            minRange = givenNumber;
            range.textContent = `${minRange} < ? < ${maxRange}`;
        }
    } else {
        result.textContent = "Bravo ! Vous avez deviné le nombre !";
        range.textContent = ``;
        guessField.remove() ;
        guessSubmit.remove() ;
    }
    guessField.value = "";
    guesses.textContent = "Nombre de tentatives : " + guessCount;
}

function numberToGuess() {
    let numberGuess = parseInt(prompt("Entrez un nombre entre 1 et 50"));
    if ((numberGuess > 50 || numberGuess < 1) || isNaN(numberGuess)) {
        alert("Le nombre doit être compris entre 1 et 50");
        return numberToGuess();
    } else {
        return numberGuess;
    }
}



let findNumber = numberToGuess();
let guessCount = 0;
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let range = document.getElementById("range");
let result = document.getElementById("result");
let guesses = document.getElementById("guessCount");
let minRange = 0;
let maxRange = 50;
guessSubmit.addEventListener("click", gameplay);
