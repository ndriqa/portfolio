let notes = document.querySelectorAll(".note")
let noteWidth = 300;
let page = document.querySelector("#notes .page")

if(notes[0]) {
    noteWidth = notes[0].offsetWidth
}

function workOnClassAdd() {
    shuffleNotes()
}

function workOnClassRemoval() {

}

let classWatcher = new ClassWatcher(page, 'page_visible', workOnClassAdd, workOnClassRemoval)


function getMaxZ(){
    let max = 0
    notes.forEach(element => {
        if(parseInt(element.style.zIndex) > max){
            max = parseInt(element.style.zIndex)
        }
    });
    return max;
}

notes.forEach(element => {
    element.onclick = function() {
        element.style.zIndex = getMaxZ() + 1
    }
});

function shuffleNotes(){
    let noteContainer = document.querySelector(".note_container").getBoundingClientRect()
    
    notes.forEach(element => {
        let nextX = Math.floor(Math.random() * (noteContainer.width - noteWidth * 2) * 0.6) + noteWidth / 2
        let nextY = Math.floor(Math.random() * (noteContainer.height - noteWidth * 2) * 0.6) 
        let nextZ = Math.floor(Math.random() * 5)
        let nextRotation = Math.floor(Math.random() * 31) - 15
        
        element.style.left = nextX + "px";
        element.style.top = nextY + "px";
        element.style.zIndex = nextZ
        element.style.transform = `rotate(${nextRotation}deg)`
    });
}