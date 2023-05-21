//scroll suave
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  var home = document.querySelector(".menus1 a:first-child li");
  var apresentacao = document.querySelector(".menus1 a:nth-child(2) li");
  var projetos = document.querySelector(".menus1 a:nth-child(3) li");
  var contato = document.querySelector(".menus1 a:last-child li");
  
  home.addEventListener("click", function() {
    smoothScroll(".my-container", 1000);
  });
  
  apresentacao.addEventListener("click", function() {
    smoothScroll("#content-container", 1000);
  });
  
  projetos.addEventListener("click", function() {
    smoothScroll("#content-container-card", 1000);
  });
  
  contato.addEventListener("click", function() {
    smoothScroll("#content-container-form", 1000);
  });

var menuToggle = document.getElementById('menu-toggle');
var menus = document.querySelector('.menus1');


//menu responsivo
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.menus');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  navMenu.classList.toggle('open');
})

document.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburgerMenu.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

