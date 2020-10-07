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

// Début partie read more

const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const btn3 = document.querySelector(".button3");
btn1.addEventListener("click", read);
btn2.addEventListener("click", read);
btn3.addEventListener("click", read);

function read(e){
  const p = e.target.parentElement;
  const currentMore = p.querySelector(".more");
  if (currentMore.style.display !== "inline"){
    currentMore.style.display = "inline";
    e.target.innerText = "Read Less";
  } else {
    currentMore.style.display = "none";
    e.target.innerText = "Read More";
  }
}
// Fin partie read more