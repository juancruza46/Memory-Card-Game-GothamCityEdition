//declare state variables:
let firstCard= null;
let secondCard= null;
//Attempts display
let remainingAttempts = 7;
let allCards = document.querySelectorAll('.slot');
let gameEnded = false; //turn off game

//randomize deck:
function shuffleArray(array) {
  //goes through the array - reverse
  for (let i = array.length - 1; i > 0; i--) {
    //random num 0-1 + swap element position
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//Get all card layouts
const cardLayouts = document.querySelectorAll('.card-layout');

//Shuffle all the slots, using the deck array created
cardLayouts.forEach(cardLayout => {
  //grabbing all the "cards" inside each row
  const slots = Array.from(cardLayout.children);
  shuffleArray(slots);
  slots.forEach(slot => cardLayout.appendChild(slot));
});

//Create a constant message display 
const message = document.querySelector('h2');

//add event listeners when you select a card: flip
function flip(e) {
  if (gameEnded){
    return;//hides the cards
  }
  
  const selectedCard = e.currentTarget;
  selectedCard.className = selectedCard.className.replace('backCard', '').trim();

//What occurs when two cards are chosen
if (firstCard === null) {
  //firstCard is assigned the value of the current selected card
  firstCard = selectedCard;
  //Verifys the selection of the second card, green light
  } else if (secondCard === null && selectedCard !== firstCard) {
     secondCard = selectedCard;
     if (firstCard.className === secondCard.className) {
     
      //if cards match turn white; hide
      firstCard.style.backgroundColor = 'white';
      secondCard.style.backgroundColor = 'white';
      
      //Clear cards chosen
      firstCard = null;
      secondCard = null;
      message.innerHTML = 'You Got A Match!';
      
      //Verify if al cards are matched
      let allMatched = true;
      allCards.forEach(card => {
        //a card doesnt have a new bg yet, or all cards aren't white, game is not done
        if (!card.style.backgroundColor || card.style.backgroundColor !== 'white') {
          allMatched = false;
        }
      });
      if (allMatched) {
        clearInterval(interval);
        gameEnded = true; //end game here
        message.innerHTML = 'YOU DEFEATED THE JOKER!'; 
        const winAudio = document.getElementById('winner');
           winAudio.play();
      }
    } else {
      //if they do not match, flip back, reset
       setTimeout(() => {
        firstCard.className += ' backCard';
        secondCard.className += ' backCard';
        firstCard = null;
        secondCard = null;

         //Keeps it from going negative
         if (remainingAttempts > 0) {
            remainingAttempts --;
            document.querySelector('h4').textContent = `Attempt(s): ${remainingAttempts}`;
         }
        //Display remaining attempts
         if (remainingAttempts <= 0 && !gameEnded) {
           clearInterval(interval);
           gameEnded = true;
           message.innerHTML = 'OUT OF TRIES! JOKER WINS!';
         } else {
          message.innerHTML = 'Not a match!';
           const jokerLaughAudio = document.getElementById('jokerLaugh');
           jokerLaughAudio.play();
         }
      }, 200);
    }
  }
}
//Create a timer, if it runs out = you lose
    let timer = 40;
    let countDown = document.querySelector('h3');
    let interval = setInterval(() => {
        timer--;
        countDown.textContent = `Bomb Timer: ${timer}`;
    if (timer <= 0) {
        clearInterval(interval);
        gameEnded = true;
        message.innerHTML = 'The Bomb Exploded! Joker Wins!';
      
  }
}, 1000);

//new game- button
const newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", () => {
  //testing button funtionality ; FIX LATER
  location.reload();
});

