$(window).scroll(
  function () {
    const $navbar = $('.main-nav');
    $navbar.toggleClass('first-segment', $(this).scrollTop() > 50);
    $navbar.toggleClass('second-segment', $(this).scrollTop() > 890); //todo  convert px to rem
  });
