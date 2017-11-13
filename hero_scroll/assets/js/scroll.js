$(window).scroll(function() {
  const oVal = $(window).scrollTop() / 240;
  return $('.blur').css('opacity', oVal);
});

$(loginLink).on('click', function() {
  console.log('login clicked');
});

$(regLink).on('click', function() {
  console.log('sign up clicked');
})
