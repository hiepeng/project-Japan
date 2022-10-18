const element = document.getElementById("menu-header");
function myFunc() {
  if(element.classList.contains('show-menu')){
    element.classList.remove('show-menu')
    element.style.display = "none";
  } else{
      element.style.display = "flex";
      element.classList.add("show-menu");
  }
}

function closeMenu() {
  const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 768){
    element.style.display = "none";
  }
}