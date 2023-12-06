//declare state variables:
let firstCard= null;
let secondCard= null;

//Create a constant message display 
const message = document.querySelector('h2');

//add event listeners when you select a card
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
      let allCards = document.querySelectorAll('.slot');
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
      //stop the clock
       setTimeout(() => {
        firstCard.className += ' backCard';
        secondCard.className += ' backCard';
        firstCard = null;
        secondCard = null;
        message.innerHTML = 'Not a match!';

      }, 200);
    }
  }
}
//Create a timer, if it runs out = you lose
    let timer = 50;
    let countDown = document.querySelector('h3');
    let interval = setInterval(() => {
        timer--;
        countDown.textContent = `Timer: ${timer}`;
    if (timer <= 0) {
        clearInterval(interval);
        message.innerHTML = 'Out of Time! Joker Wins !';
      
  }
}, 1000);

//new game- button
const newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", () => {
  //testing button funtionality ; FIX LATER
  location.reload();
});




