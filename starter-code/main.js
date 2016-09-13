// Array of cards. There are two of each card. 
var cards = ['bluezero', 'bluezero', 'blueone','blueone', 'redzero', 'redzero', 'redone', 'redone', 'greenzero', 'greenzero', 'greenone', 'greenone', 'yellowzero', 'yellowzero', 'yellowone', 'yellowone', 'multi', 'multi'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {

  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);

    cardElement.addEventListener('click', isTwoCards);

    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }
}
//Function to shuffle the any array, credit for code belongs to https://www.kirupa.com/html5/shuffling_array_js.htm.
Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

function isTwoCards() {

  cardsInPlay.push(this.getAttribute('data-card'));
//Assigns each set of cards with an img to match. Cards may not be the prettiest to look at. 
   console.log(this.getAttribute('data-card'));
   if (this.getAttribute('data-card') === 'bluezero') {
      this.innerHTML = "<img src='http://i1262.photobucket.com/albums/ii611/dhighe25/bluezero_zpsfqxlktke.png'>"; 
   } else if (this.getAttribute('data-card') === 'blueone') {
      this.innerHTML = "<img src='http://i1262.photobucket.com/albums/ii611/dhighe25/blueone_zps7l6fmegq.png'>"; 
   } else if (this.getAttribute('data-card') === 'greenzero') {
      this.innerHTML = "<img src='http://i1262.photobucket.com/albums/ii611/dhighe25/greenzero_zpskwfznctn.png'>"; 
   } else if (this.getAttribute('data-card') === 'greenone') {
      this.innerHTML = "<img src='http://i1262.photobucket.com/albums/ii611/dhighe25/greenone_zpsb3csrayy.png'>"; 
   } else if (this.getAttribute('data-card') === 'redzero') {
      this.innerHTML = "<img src='http://i1262.photobucket.com/albums/ii611/dhighe25/redzero_zpsvzyfqpe8.png'>"; 
   } else if (this.getAttribute('data-card') === 'redone') {
      this.innerHTML = "<img src='http://i1262.photobucket.com/albums/ii611/dhighe25/redone_zpsrwszq13u.png'>"; 
   } else if (this.getAttribute('data-card') === 'yellowzero') {
      this.innerHTML = "<img src='http://i1262.photobucket.com/albums/ii611/dhighe25/yellowzero_zpswlhbxktj.png'>"; 
   }  else if (this.getAttribute('data-card') === 'yellowone') {
      this.innerHTML = "<img src='http://i1262.photobucket.com/albums/ii611/dhighe25/yellowone_zpslatanqpb.png'>"; 
   } else {
      this.innerHTML = "<img src='http://i1262.photobucket.com/albums/ii611/dhighe25/wild_zpsmtn0iass.png'>"; 
   }

//After selecting two cards, both cards will be checked to verify if they match or not
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  } 
}
//Depending on your cards you will get different alert messages
function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
   alert("Sorry, try again.");
  }
}



//shuffles the cards array so each game is different
cards.shuffle();
//Sets the game up so you can begin to match cards 
createBoard();

//Enables and disables the instructions on the page. Defaults sets instructions to on. 
function show_Unshow() {
   currentvalue = document.getElementById("show_Unshow").value;
      if(currentvalue == "Instructions"){
   document.getElementById("show_Unshow").value = "Show Instructions";
   document.getElementById("Instructions").style.visibility = "hidden";
   document.getElementById("Instructions").style.margin = "-100px";
      }else{
   document.getElementById("show_Unshow").value = "Instructions";
   document.getElementById("Instructions").style.visibility = "visible";
   document.getElementById("Instructions").style.margin = "0";
  }
}




