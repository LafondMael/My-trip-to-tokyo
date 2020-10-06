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

// Début partie read more
let i = 0;
function read(){
  if(!i){
    document.getElementById("more1").style.display = "inline";
    document.getElementById("dots1").style.display = "none";
    document.getElementById("read").innerHTML = "Read less";
    i=1;
  } else {
    document.getElementById("more1").style.display = "none";
    document.getElementById("dots1").style.display = "inline";
    document.getElementById("read").innerHTML = "Read more";
    i=0;
  }
}
// Fin partie read more