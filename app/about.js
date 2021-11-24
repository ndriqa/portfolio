let aboutPage = document.querySelector("#about .page")
let faqs

console.log(aboutPage);

function workOnClassAdd() {
    faqs = document.querySelectorAll(".question")
}

function openAnswer(event){
    faqs.forEach(element => {
        element.parentElement.classList.remove("opened")
    });
    event.target.parentElement.classList.add("opened")
}

function workOnClassRemoval() {

}

let aboutClassWatcher = new ClassWatcher(aboutPage, 'page_visible', workOnClassAdd, workOnClassRemoval)

