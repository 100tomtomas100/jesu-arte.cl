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
