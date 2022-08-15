//navbar for desktop and tablet
const navBar = (() => {
  let nav = $(function(){
    $(".navbar").load("navbar.html");
  });
  return {nav};
})();  
//navbar for mobile
const navBarMob = (() => {
  let nav = $(function(){
    $(".navbar-mobile").load("navbar-mobile.html");
  });
  return {nav};
})();

const navbarBackground = (() => {
  const navbarMobil = document.querySelector('.navbar-mobile');
  const navbar = document.querySelector('.navbar');
window.onscroll = () => {
  if (window.scrollY > 100) {
      navbar.style.background = "rgb(234, 242, 248, 0.5)";
      navbarMobil.style.background = "rgb(234, 242, 248, 0.5)";
  } else {
      navbar.style.backgroundColor = "transparent";
      navbarMobil.style.backgroundColor = "transparent";
  }
  //navbar to close on scrolling
  if (window.scrollY > 0 && document.getElementById("navbar-mobile-buttons").style.display === "") {
      document.getElementById("navbar-mobile-buttons").style.display = "none";
  }
};
})();