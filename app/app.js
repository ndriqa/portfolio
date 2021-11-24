const HOME = 0
const PROJECTS = 1
const ABOUT = 2
const CV = 3
const CONTACT = 4

let pages = document.querySelectorAll(".paper")

changeClickables()
addAnimationEndPageShow()

function addAnimationEndPageShow(){
    pages.forEach(element => {
        element.querySelector(".title_holder").onanimationend = () => {
            element.querySelector(".page").classList.add("page_visible")
        }
    });
}

function changeClickables(){
    pages.forEach(element => {
        if(!element.classList.contains("active")){
            element.classList.add("clickable")
        } else {
            element.classList.remove("clickable")
        }
    });
}

function paperSelect(value){
    if(pages[value].classList.contains("active")){
        console.log("already active");
    } else {
        pages.forEach(element => {
            element.classList.remove("active")
            element.querySelector(".title_holder").classList.remove("horizontal_title")
            element.querySelector(".page").classList.remove("page_visible")

        });
        pages[value].classList.add("active")
        pages[value].onanimationend = () => {
            let title_holder = pages[value].querySelector(".title_holder")
            title_holder.classList.add("horizontal_title")
        };

        changeClickables()
    }
}
