

var terms =["sword", "axe", "spear", "armor", "magic", "wizard", "dragon", "beholder", 
            "goblin", "orc", "fighter", "rogue", "bow", "elf", "dwarf", "human", "sorcerer", "monk", 
            "ranger", "barbarian", "dungeon", "paladin", "cleric", "dice", "druid", "bard", "warlock",
            "demogorgon", "character", "angel", "halfling", "tiefling", "dragonborn", "gnome", "pixie"];



var word = "";
//var rand = Math.floor(Math.random()*terms.length);
var to_find_arr = [];
var to_find = "";
var letters_guessed = [];
//word = terms[rand];
var numGuesses = 0;
var numWins = 0;
var targetDiv = document.getElementById("the-word");
var guessedDiv = document.getElementById("guessed-letters");
var numGuessDiv = document.getElementById("guesses-left");
var numWinsDiv = document.getElementById("num-wins");
for(var i = 0; i < word.length; i++){
    to_find_arr.forEach(function() {
        
    });
    to_find_arr[i] = "___.";
}
for(var k = 0; k < to_find_arr.length; k++){
    to_find = to_find + to_find_arr[k];
}
targetDiv.textContent = to_find;
//Event listener for user keyboard presses
document.addEventListener("DOMContentLoaded",function(event){
startplay();
});
function startplay(){
document.onkeyup = function(event){
    var userGuess = event.key.toLocaleLowerCase();
    var correct = false;

    var word = generateRandomWord();
    if(word.indexOf(userGuess)>-1){
        to_find_arr.push(userGuess)
    }
    for(var j = 0; j < word.length; j++){
        if(userGuess.toLowerCase() === word.charAt(j)){
            to_find_arr[j] = userGuess;
            to_find = "";
            correct = true;
            for(var k = 0; k < to_find_arr.length; k++){
                to_find = to_find + to_find_arr[k];
            }
            
        }
    
    }
    
    if(correct === false){
        /*for(var x = 0; x < letters_guessed.length; x++){
            if(){}
        }
        else{*/letters_guessed[numGuesses] = userGuess;
        numGuesses++;
       // }
    }

    //This is the segment where The player wins the game and then it resets and picks a new word
    if(to_find === word){
        numWins++;
        alert("Well Done!  The Word is: " + word);
        numGuesses = 0;
        rand = Math.floor(Math.random()*terms.length);
        word = terms[rand];
        to_find_arr = [];
        letters_guessed = [];
        for(var i = 0; i < word.length; i++){
            to_find_arr[i] = "___.";
        }
        to_find = "";
        for(var k = 0; k < to_find_arr.length; k++){
            to_find = to_find + to_find_arr[k];
        }
        targetDiv.textContent = to_find;
    }
    //If the user got 10 wrong guesses, the game is reset
    if(numGuesses === 10){
        alert("I'm sorry, but you rolled a natural 1!  The word was: " + word);
        numGuesses = 0;
        rand = Math.floor(Math.random()*terms.length);
        word = terms[rand];
        to_find_arr = [];
        letters_guessed = [];
        for(var i = 0; i < word.length; i++){
            to_find_arr[i] = "___.";
        }
        to_find = "";
        for(var k = 0; k < to_find_arr.length; k++){
            to_find = to_find + to_find_arr[k];
        }
        targetDiv.textContent = to_find;
    }
    targetDiv.textContent = to_find;
    guessedDiv.textContent = "[" +  letters_guessed + " ]";
    correct = false;
    numGuessDiv.textContent = 10-numGuesses;
    numWinsDiv.textContent = numWins;
   

   function generateRandomWord(){
   var rando = Math.floor(Math.random()*terms.length);
   return terms[rando];
   }
};
}


