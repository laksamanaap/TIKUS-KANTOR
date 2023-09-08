const start = document.getElementById("start");
const screen = document.getElementsByClassName("screen");
const choose_corruptor = document.querySelectorAll(".choose-corruptor-btn");
const timeFunc = document.getElementById("time");
const scoreFunc = document.getElementById("score");
const game_container = document.getElementById("game-container");
const audio_badge = document.getElementById("audio_badge");
let score = 0;
let seconds = 0;
// let selected_corruptor = {};


// Swipe Up
start.addEventListener("click", () => {
  screen[0].classList.add("up");
  
  var music = new Audio("assets/audio/TikusKantor-IwanFals.mp3")
  music.volume = 0.3; //  30%
  music.play();
  music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);

  setTimeout(() => {
    audio_badge.classList.add("visible");
  }, 2000);
  setTimeout(() => {
    audio_badge.classList.add("unvisible");
  }, 8000);
})

choose_corruptor.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')
    selected_corruptor = { src, alt } // Destructure
    screen[1].classList.add('up')
    setTimeout(createCorruptor, 1000)    
    startGame();
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
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let minute = Math.floor(seconds / 60);
  let second = Math.floor(seconds % 60);
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  seconds++
  timeFunc.innerHTML = `Time: ${minute}:${second}`;

  // console.log(second)
  // second = second === '02' ? message.classList.add("visible") : setTimeout(() => { message.classList.add("unvisible"); }, 4000);
  
  if (second === 20) {
    message.classList.add("visible");
    setTimeout(() => {
      message.classList.add("unvisible");
    }, 5000);
  }

}

function getRandomPlace() {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (width - 200) + 100
  return { x, y };
}

function createCorruptor() {
  const corruptor = document.createElement('div');
  corruptor.classList.add("corruptor");
  const { x, y } = getRandomPlace();
  corruptor.style.left = `${x}px`;
  corruptor.style.top = `${y}px`;
  
  corruptor.innerHTML = `<img src="${selected_corruptor.src}" alt="${selected_corruptor.alt}"  style=" transform: rotate(${Math.random() * 360}deg); width:75px;"  />`
  game_container.appendChild(corruptor);
  addCorruptor();
}

function addCorruptor() { 
  setTimeout(createCorruptor, 1000);
  setTimeout(createCorruptor, 2000);
  // setTimeout(createCorruptor, 2500);
}


function increaseScore() { }
function catchCorruptor() { }