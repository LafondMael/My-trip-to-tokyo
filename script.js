const homePageLogo = document.querySelector('.logo');
const homePageImg = document.querySelector('.logo img');
const homePageLink = document.createElement('a');
homePageLink.href = "index.html";
homePageLink.appendChild(homePageImg);
homePageLogo.appendChild(homePageLink);

const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}

// Début bouton top
const topBtn = document.querySelector(".topButton");
let scrollPos = 0;

window.addEventListener("scroll", function(){
  scrollPos = window.scrollY;
  if(scrollPos > 300){
    topBtn.style.display="block";
  } else if (scrollPos < 300){
    topBtn.style.display ="none";
  }
});

topBtn.addEventListener("click", function(){
  document.documentElement.scrollTop = 0;
})
// Fin bouton top