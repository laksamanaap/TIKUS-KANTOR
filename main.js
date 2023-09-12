const start = document.getElementById("start");
const screen = document.getElementsByClassName("screen");
const choose_corruptor = document.querySelectorAll(".choose-corruptor-btn");
const timeFunc = document.getElementById("time");
const scoreFunc = document.getElementById("score");
const game_container = document.getElementById("game-container");
const audio_badge = document.getElementById("audio_badge");
var start_game = false;
var isTimeIncrease = false;
var isCorruptorSpawn = false;
let score = 0;
let seconds = 0;
let selected_corruptor = {};


// Swipe Up
start.addEventListener("click", () => {
  screen[0].classList.add("up");
  !start_game;

  var music = new Audio("assets/audio/TikusKantor-IwanFals.mp3")
  music.volume = 0.3; //  30%
  music.play();
  music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);

  setTimeout(() => {
    audio_badge.classList.add("visible");
  }, 1000);
  setTimeout(() => {
    audio_badge.classList.add("unvisible");
  }, 9000);
})

choose_corruptor.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')
    selected_corruptor = { src, alt } // Destructure
    screen[1].classList.add('up');
    setTimeout(createCorruptor, 1000);    
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
  if (!start_game) {
    setInterval(increaseTime, 1000);
    start_game = true;
  } 
}

// function gameOver() {
//   start_game = false;
//   score = 0;
//   scoreFunc.innerHTML = `Score: ${score}`
//   console.log("game-over tes");
// }

function increaseTime() {
  let minute = Math.floor(seconds / 60);
  let second = Math.floor(seconds % 60);
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  seconds++
  timeFunc.innerHTML = `Time: ${minute}:${second}`;

  console.log(second)
  // console.log(minute)
  // second = second === '02' ? message.classList.add("visible") : setTimeout(() => { message.classList.add("unvisible"); }, 4000);
  
  if (second === 15) {
    message.classList.add("visible");
    // console.log(message)
    setTimeout(() => {
      message.classList.add("unvisible");
    }, 5000);
  }

  // if (second === 10) {
  //   gameOver();
  // }
}

function getRandomPlace() {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width - height) 
  const y = Math.random() * (width - height) 
  console.log(x,y);
  console.log(width);
  return { x, y };
}

function createCorruptor() {
  const corruptor = document.createElement('div');
  corruptor.classList.add("corruptor");
  const { x, y } = getRandomPlace();
  corruptor.style.left = `${x}px`;
  corruptor.style.top = `${y}px`;
  
  corruptor.innerHTML = `<img src="${selected_corruptor.src}" alt="${selected_corruptor.alt}"  style=" transform: rotate(${Math.random() * 360}deg); width:125px;"  />`
  
  corruptor.addEventListener('click', catchCorruptor)
  
  game_container.appendChild(corruptor);
  // addCorruptor();
}

function addCorruptor() { 
  setTimeout(createCorruptor, 1000);
  setTimeout(createCorruptor, 1000);
  setTimeout(createCorruptor, 2000);
}

function catchCorruptor() {
  // console.log("clicked")
  increaseScore();
  this.remove();
  addCorruptor();
}

function increaseScore() {
  score++;
  scoreFunc.innerHTML = `Score: ${score}`

  console.log(score);

  if (score === 50) {
    message_scored.classList.add("visible");
    setTimeout(() => {
    message_scored.classList.add("unvisible");
    }, 5000);
  }
}
 
