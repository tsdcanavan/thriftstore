$(window).scroll(function() {
  const oVal = $(window).scrollTop() / 240;
  return $('.blur').css('opacity', oVal);
});
