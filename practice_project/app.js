var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
document.querySelector('.dice').style.display = 'none';

/*
function btn() {
  This is a callback function.  
}

document.querySelector('.btn-roll').addEventListener('click', btn); 
*/

// anonymous function

document.querySelector('.element').addEvenListener('click', function() {
  dice = Math.floor(Math.random() * 6) + 1;
});

