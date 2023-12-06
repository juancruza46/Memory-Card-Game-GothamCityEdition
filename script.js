//declare state variables:
let firstCard= null;
let secondCard= null;
let remainingAttempts = 7;
let allCards = document.querySelectorAll('.slot');

//randomize deck: step one create a deck array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//Get all card layouts
const cardLayouts = document.querySelectorAll('.card-layout');

//Shuffle all the slots, using the deck array created
cardLayouts.forEach(cardLayout => {
  const slots = Array.from(cardLayout.children);
  shuffleArray(slots);
  slots.forEach(slot => cardLayout.appendChild(slot));
});

//Create a constant message display 
const message = document.querySelector('h2');

//add event listeners when you select a card: flip
function flip(e) {
  const selectedCard = e.currentTarget;
  selectedCard.className =   
  selectedCard.className.replace('backCard', '').trim();

//What occurs when two cards are chosen
if (firstCard === null) {
  firstCard = selectedCard;
  } else if (secondCard === null && selectedCard !== 
     firstCard) {
     secondCard = selectedCard;
     if (firstCard.className === secondCard.className) {
     
      //if cards match turn white; hide
      firstCard.style.backgroundColor = 'white';
      secondCard.style.backgroundColor = 'white';
      
      //Clear cards chosen
      firstCard = null;
      secondCard = null;
      message.innerHTML = 'You Got A Match!';
      
      //if all cards match end game
      let allMatched = true;
      allCards.forEach(card => {
        if (!card.style.backgroundColor || card.style.backgroundColor !== 'white') {
          allMatched = false;
        }
      });
      if (allMatched) {
        clearInterval(interval);
        message.innerHTML = 'YOU DEFEATED THE JOKER!';
       
      }
    } else {
      //if they do not match, flip back, reset
       setTimeout(() => {
        firstCard.className += ' backCard';
        secondCard.className += ' backCard';
        firstCard = null;
        secondCard = null;
        remainingAttempts --;
        //Display remaining attempts
         document.querySelector('h4').textContent = `Attempt(s): ${remainingAttempts}`;
         if (remainingAttempts <= 0) {
           clearInterval(interval);
           message.innerHTML = 'OUT OF LIVES! JOKER WINS!';
         }
        message.innerHTML = 'Not a match!';
      }, 200);
    }
  }
}
//Create a timer, if it runs out = you lose
    let timer = 100;
    let countDown = document.querySelector('h3');
    let interval = setInterval(() => {
        timer--;
        countDown.textContent = `Bomb Timer: ${timer}`;
    if (timer <= 0) {
        clearInterval(interval);
        message.innerHTML = 'The Bomb Exploded! Joker Wins!';
      
  }
}, 1000);

//new game- button
const newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", () => {
  //testing button funtionality ; FIX LATER
  location.reload();
});



