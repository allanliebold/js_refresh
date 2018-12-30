// Javascript Practice Project 1
var scores, roundScore, winningScore, activePlayer, gamePlaying; // Declare universal variables used by different functions
var lastRoll; // Only works with one die

init(); // start the game on page load

// Roll Button event listener
document.querySelector('.btn-roll').addEvenListener('click', function() {
  if(gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
    /* This only works for one die. 
    if(dice === 6 && lastRoll === 6) {
      scores[activePlayer] = 0; // if player rolls two 6s in a row, that player's score is reset to 0.
      document.querySelector('#score-' + activePlayer.textContent = '0';
      nextPlayer(); // turn ends 
    }
    */
    if (dice1 !== 1 && dice2 !== 1) { 
      roundScore += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer(); // Round ends if current player rolls a 1 on either die
    }
  }
});

// Hold Button event listener
document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  
  var input = document.querySelector('.final-score').value; // sets the final/winning score
  if(input) { // if a custom winning score is entered, take that input and set it as the winningScore
    winningScore = input; 
  } else { // if no custom winning score is entered, set winningScore to the default 100
    winningScore = 100; 
  }
  
  if(scores[activePlayer] >= winningScore) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false; // end the game
  } else {
    nextPlayer();
  }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // ternary statement
    roundScore = 0;
    // lastRoll = 0; // lastRoll is reset to 0. Need a last roll 1 and 2. 
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init());

function init() {
   gamePlaying = true; // begin game
   scores = [0, 0];
   activePlayer = 0;
   roundScore = 0; 
   // lastRoll = 0; 
   document.querySelector('.dice-1').style.display = 'none';
   document.querySelector('.dice-2').style.display = 'none';
   document.getElementById('score-0').textContent = '0';
   document.getElementById('score-1').textContent = '0';
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';
   document.querySelector('name-0').textContent = 'Player 1';
   document.querySelector('name-1').textContent = 'Player 2';
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-1-panel').classList.remove('active'); 
   
   // active class must be removed before being activated in case it is already active
   document.querySelector('.player-0-panel').classList.add('active'); 
}

/* Coding Challenges
  [x] Player loses entire score if two 6s are rolled in a row. Keep the last roll for the current player in a variable. 
  [x] Allow players to set custom winning score. 
  [x] Add a second die. Player round ends if a 1 is rolled on either. 
*/
