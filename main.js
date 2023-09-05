const start = document.getElementById("start");
const screen = document.getElementsByClassName("screen");
const choose_corruptor = document.querySelectorAll("corruptor-list");


// Swipe Up
start.addEventListener("click", () => {
    screen[0].classList.add("up");
    console.log("click");
})

choose_corruptor.forEach(btn => {
    btn.addEventListener("click", () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        let selected_corruptor = { src, alt }
        selected_corruptor;
        screens[1].classList.add('up')
    })
})


function startGame() {}
function increaseTime() {}
function createCorruptor() {}
function getRandomCorruptor() { }
function catchCorruptor() { }
function addCorruptor() { }
function increaseScore() {}