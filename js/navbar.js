const navBar = (() => {
  let nav = $(function(){
    $(".navbar").load("navbar.html");
  });
  return {nav};
})();  