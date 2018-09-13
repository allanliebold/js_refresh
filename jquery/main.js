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
  
  $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  });
  
});
