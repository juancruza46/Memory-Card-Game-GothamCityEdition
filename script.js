//start ganme button/hide event listene
//Select a card addEventListener("click", handleMove)
//Flip the card
function flip(e) {
    const selectedCard = e.currentTarget;
    selectedCard.className = selectedCard.className.replace('backCard','').trim();
}
//Crete funtion if-else if 2 cards match: hide them, else flip them again and keep trying


//Card amounts will be: 12
//Cards will be randomly shuffled
    //const shuffle
    //for loop (let i=0; i < deck.length; i++)
    //math floor/random function

    //new temporary array
    //deck [1] = deck[shuffle]
    // figure out how to spread them


//Cards will remain faced down until clicked upon event listeer
    //function that will allow you to flip a card()
    //seclect all cards query selector
    //go through every card arrow function (click, flipcard)


//When clicked cards will be revealed ( 2 at a time
//if a match = remove cards
//if not a match, flip over again, prmpt user to try again
    //if (===)
       // return : x 
       // Display "match" message ! & hide
        //else flip back over, minus one guess 

//the player will have a total of 5 errors
//if 5 errors threshold is reached, display : game over
    //function limits attempts ()
    //if (guesses=0, if guesses >5, guesses++)
        // game over
    //else try again

//WIN OR LOSE
//display you lost 
//new game button
//if all cards have been matched, display : game over you won
//new game button
    //function render ()
    //if winner === matchedAll 
    //text inner html (Winner) 
        //display points, time, attempts
    //else inner html (loser)
        //display points, time, attempts

//create a timer of 5 minutes
//if 5 minutes is reached and cards have not been matched, despite amount of errors display game over you lose 
//new game button
    
//display timer 5 minutes: counts down
    //constant timer id = set interval 
    //count -- minus
    //if count is truthy take action
    //else take another action
    //use the style.visibility to hide timer
    //milliseconds unit

//display wins if win +1
//dispay losses + 1
//determine if you won or lost
    //reults will be w ond l
    //winner === 

    //function render scores ()
    //winner ===t
    //if results === x , return t
