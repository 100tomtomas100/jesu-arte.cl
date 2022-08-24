//navbar for desktop and tablet
// const navBar = (() => {
//   let nav = $(function(){
//     $(".navbar").load("navbar.html");
//   });
//   return {nav};
// })();  
// //navbar for mobile
// const navBarMob = (() => {
//   let nav = $(function(){
//     $(".navbar-mobile").load("navbar-mobile.html");
//   });
//   return {nav};
// })();


const expandNavBar = (() => {   
    let buttons = document.getElementById("navbar-mobile-buttons"); 
    let expand = document.getElementById("burger-menu").addEventListener("click", () => {
        if (buttons.style.display === "none") {
        buttons.style.display = "block";
        } else {
        buttons.style.display = "none"
        };
    });   
    let close = document.querySelectorAll("#content, .footer-mobile");
        close.forEach(element => {
            element.addEventListener("click",() => {
                if (buttons.style.display === "block") {
                    buttons.style.display = "none";
                }                
            });
        });
})();
const navbarBackground = (() => {
    const navbarMobil = document.querySelector('.navbar-mobile');
    const navbar = document.querySelector('.navbar');
    const navbarButtons = document.querySelector("#navbar-mobile-buttons");
    window.onscroll = () => {
      if (window.scrollY > 0 && window.innerWidth <= 768) {
          navbar.style.background = "rgb(234, 242, 248, 0.8)";
          navbarMobil.style.background = "rgb(234, 242, 248, 0.5)";
      } 
      //navbar to close on scrolling
      if (window.scrollY > 0 
        && navbarButtons.style.display != "none"
        && window.innerWidth < 481) {
          document.getElementById("navbar-mobile-buttons").style.display = "none";
      }  
    }; 
})();
