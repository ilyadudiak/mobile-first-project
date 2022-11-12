let button = document.querySelector(".burger__button");
let menu = document.querySelector(".burger__menu")

let dropMenu = function(){
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
    } else{
        menu.classList.add("showMenu")
    }
};

button.addEventListener("click", dropMenu);

let burgerItem = document.querySelector(".burger__item");
let burgerItem2 = document.querySelector(".burger__item2");
let burgerItem3 = document.querySelector(".burger__item3");

let hideMenu = function(){
    menu.classList.remove("showMenu");
}
burgerItem.addEventListener("click", hideMenu);
burgerItem2.addEventListener("click", hideMenu);
burgerItem3.addEventListener("click", hideMenu);
