$(document).ready(() => {
  $('.display-button').on('click', () => {
    $('.main-image').toggle();
  });
  
  $('.fade-toggle-button').on('click', () => {
    $('.fade-image').fadeToggle();
  });
  
  
});
