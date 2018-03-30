var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.dice').style.display = 'none';

function btn() {
  
}

// document.querySelector('.btn-roll').addEventListener('click', btn); // btn is a callback function

// anonymous function

document.querySelector('.element').addEvenListener('click', function() {
  console.log('This is an anonymous function.');
});

