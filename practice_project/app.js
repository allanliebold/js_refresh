var scores, roundScore, winningScore, activePlayer, lastRoll, gamePlaying; // Declare universal variables used by different functions
init(); // start the game on page load

// Roll Button event listener
document.querySelector('.btn-roll').addEvenListener('click', function() {
  if(gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if(dice === 6 && lastRoll === 6) {
      scores[activePlayer] = 0; // if player rolls two 6s in a row, that player's score is reset to 0.
      document.querySelector('#score-' + activePlayer.textContent = '0';
      nextPlayer(); // turn ends 
    }
    
    lastRoll = dice; // update lastRoll variable to the new roll, after checking if player has rolled two 6s. 
    
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer(); // Round ends if current player rolls a 1
    }
  }
});

// Hold Button event listener
document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  
  var input = document.querySelector('.final-score').value; // sets the final/winning score
  if(input) {
    var winningScore = input; 
  } else {
    winningScore = 100; 
  }
  
  if(scores[activePlayer] >= input) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
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
    lastRoll = 0; // lastRoll is reset to 0
    
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
   lastRoll = 0; 
  
   document.querySelector('.dice').style.display = 'none';
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
  [ ] Allow players to set custom winning score. 
  [ ] Add a second die. Player round ends if a 1 is rolled on either. 
*/
