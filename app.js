var scores, roundScore, winningScore, activePlayer, gamePlaying; 
var lastRoll; 

init(); 

document.querySelector('.btn-roll').addEvenListener('click', function() {
 if(gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
});
