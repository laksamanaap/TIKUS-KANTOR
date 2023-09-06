const start = document.getElementById("start");
const screen = document.getElementsByClassName("screen");
const choose_corruptor = document.querySelectorAll(".choose-corruptor-btn");
const timeFunc = document.getElementById("time");
const scoreFunc = document.getElementById("score");
let score = 0;
let seconds = 0;
let selected_corruptor = {};

// Swipe Up
start.addEventListener("click", () => {
    screen[0].classList.add("up");
    // console.log("click");
})

choose_corruptor.forEach((btn, index) => {
  btn.addEventListener("click", () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_corruptor = { src, alt } // Destructure
        screen[1].classList.add('up')
        startGame();
        // console.log(index);
        // document.querySelector(".tes").innerHTML = selected_corruptor.alt[index];
    })
})

// for (let i = 0; i < choose_corruptor.length; i++) {
//     const btn = choose_corruptor[i];
//     console.log(btn);

//   btn.addEventListener("click", () => {
//     const img = btn.querySelector('img');
//     const src = img.getAttribute('src');
//     const alt = img.getAttribute('alt');
//     const selected_corruptor = { src, alt }; // Destructure
//     screen[1].classList.add('up');
      
//   });
// }

function startGame() {
  // document.querySelector(".tes").innerHTML = 'Game Started';
  setInterval(increaseTime,1000);
}

function increaseTime() {
  let minute = Math.floor(seconds / 60);
  let second = seconds % 60;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  timeFunc.innerHTML = `Time: ${minute}:${second}` // Template Literals
  seconds++
}

function createCorruptor() {}
function getRandomCorruptor() { }
function catchCorruptor() { }
function addCorruptor() { }
function increaseScore() {}