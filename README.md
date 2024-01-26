# concentration-project

Title : Concentration - Memory Game (Gotham Edition)
About : Concentration is a memory game, in which a player has cards faced down in front of them, and have to flip over two at a time in search of a match. If the two cards match you eiminate them, if they do not you flip them over again. The game is over, when all cards have been matched or the player has run out of attempts/time.

// --------------------------------

Technologies used:
HTML5
CSS
Javascript 

// --------------------------------

User Stories:
As a user I woulld like to :

    - start a new game once I click the start button
    - be allowed to choose any 12 cards freely
    - I would like to know when i get a match
    - I would like to keep track of : time left, remining guesses, wins/losses
    - If i win i would like to see: time spare, winner screen
    - If i lose i would like to see: points earned, time left, guesses left, and reason for losing displayed
    - Upon the game over screen, I would like the option to return to menu or start a new gane 

//----------------------------------------------------------------

URL wire fram: https://imgur.com/a/5W1gH37

1. displays menu - new game button
2. cards shuffled
3. game started, 7 guesses left, w, l, timer
4. game over: too slow (timer up)
5. last cards matched
6. winner display
7. Guesses remaining 0 ; 
8. display game over loser

// need to add new game button after game over screen is displayed
//----------------------------------------------------------------
Screenshots:

<img width="1436" alt="Screenshot 2024-01-26 at 4 42 43 PM" src="https://github.com/juancruza46/Memory-Card-Game-GothamCityEdition/assets/150645094/36dbc084-36ad-4f79-b586-2d382f8777c2">

<img width="1427" alt="Screenshot 2024-01-26 at 4 43 24 PM" src="https://github.com/juancruza46/Memory-Card-Game-GothamCityEdition/assets/150645094/ca191c15-fb0c-450f-b0e7-0b0f9945d504">

<img width="1434" alt="Screenshot 2024-01-26 at 4 43 42 PM" src="https://github.com/juancruza46/Memory-Card-Game-GothamCityEdition/assets/150645094/b4cbc64c-24c5-49b3-b6c3-d88b18d65b4c">


//----------------------------------------------------------------

Pseudocode:
Create boilerplate for HTML ; create JS ; create CSS file

Create a start game button

Card amounts will be: 12

Cards will be randomly shuffled each game

Cards will remain faced down until clicked upon 

Whene clicked cards will be revealed ( 2 at a time)

if a match = remove cards

if not a match, flip over again

the player will have a total of (7) errors

if 7 errors threshold is reached, display : game over

display you lost 
- new game button

if all cards have been matched, display : game over you won
- new game button

create a time of x minutes
if x minutes is reached and cards have not been matched, despite amount of errors display game over you lose 
- new game button

hide button
Display timer at all times


Concentration : 2.0 - What's next for the game?
- Difficulty options will be added : increase in deck size, lower/higher time limits & attempts
- New hero themes, choice to pick new backdrops & different card images
- Option to prompt user for : name
- New game clips will be added, upon winning or losing the game will cut to visual scenes
- New score displays/ trackers
- A point system will be added to award more comptetive players
- 2 player: one turn each round based mode will be added
- keep track of total games won/lost
- More sound effects
