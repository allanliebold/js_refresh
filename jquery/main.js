// Jquery exercises
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
  
  $('.menu-button').on('mouseenter', () => {
  $('.nav-menu').removeClass('hide');
  $('.menu-button').addClass('button-active')
   	.animate({
     	fontSize: '24px'
   	}, 200)
  });
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    }).animate({
      fontSize: '18px'
    }, 200);
  });
});
