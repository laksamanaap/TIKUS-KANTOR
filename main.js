const start = document.getElementById("start");
const screen = document.getElementsByClassName("screen");
const choose_corruptor = document.querySelectorAll(".choose-corruptor-btn");
const score = [];
const seconds = [];

// Swipe Up
start.addEventListener("click", () => {
    screen[0].classList.add("up");
    // console.log("click");
})

// choose_corruptor.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const img = btn.querySelector('img')
//         const src = img.getAttribute('src')
//         const alt = img.getAttribute('alt')
//         selected_corruptor = { src, alt } // Destructure
//         screen[1].classList.add('up')
//         // console.log(src.length);
//     })
// })

for (let i = 0; i < choose_corruptor.length; i++) {
    const btn = choose_corruptor[i];
    console.log(btn);

  btn.addEventListener("click", () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const selected_corruptor = { src, alt }; // Destructure
    screen[1].classList.add('up');
      
      document.querySelector(".tes").innerHTML = selected_corruptor.alt;
  });
}




function startGame() {}
function increaseTime() {}
function createCorruptor() {}
function getRandomCorruptor() { }
function catchCorruptor() { }
function addCorruptor() { }
function increaseScore() {}