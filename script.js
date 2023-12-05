//start ganme button/hide event listene
//Select a card addEventListener("click", handleMove)
//declare state variables:
let firstCard= null;
let secondCard= null;

//Create a constant message display
const message = document.querySelector('h4');

//flip the cards over
function flip(e) {
  const selectedCard = e.currentTarget;
  selectedCard.className = selectedCard.className.replace('backCard', '').trim();

//What occurs when two cards are chosen
  if (firstCard === null) {
    firstCard = selectedCard;
  } else if (secondCard === null && selectedCard !== firstCard) {
    secondCard = selectedCard;
    if (firstCard.className === secondCard.className) {
      //if cards match turn white; hide
      firstCard.style.backgroundColor = 'white';
      secondCard.style.backgroundColor = 'white';
      firstCard = null;
      secondCard = null;
      message.innerHTML = 'You Got A Match!';
    } else {
      setTimeout(() => {
        //if cardss do not match flip back to origin state
        firstCard.className += ' backCard';
        secondCard.className += ' backCard';
        firstCard = null;
        secondCard = null;
        message.innerHTML = 'Not a natch!';
      }, 200);
    }
  }
}

    let timer = 50;//or 3 min
    let countDown = document.querySelector('h3');//assign to h3
    //function for countdown, make sure it works before adding to top function
    let interval = setInterval(() => {
        timer--;
        countDown.textContent = `Timer: ${timer}`;
    if (timer <= 0) {
        clearInterval(interval);
        message.innerHTML = 'Out of Time!';
  }
}, 1000);

