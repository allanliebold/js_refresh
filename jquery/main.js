$(document).ready(() => {
  $('.display-button').on('click', () => {
    $('.main-image').toggle();
  });
  
  $('.fade-toggle-button').on('click', () => {
    $('.fade-image').fadeToggle();
  });
  
  $('.slide-toggle-button').on('click', () => {
    $('.slide-image').slideToggle();
    $('.fade-image').slideToggle();
    $('.first-image').slideToggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })
});
