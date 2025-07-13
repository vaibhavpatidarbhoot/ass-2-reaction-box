// script.js
const box = document.getElementById('box');
const result = document.getElementById('result');

let startTime, endTime;

// Function to display the box at a random position with a random color
function showBox() {
  const top = Math.random() * (window.innerHeight - 100);
  const left = Math.random() * (window.innerWidth - 100);

  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
  box.style.display = 'block';
  box.style.backgroundColor = getRandomColor();
  startTime = Date.now();
}

// Function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to delay appearance of box randomly
function appearAfterDelay() {
  const delay = Math.random() * 2000 + 1000;
  setTimeout(showBox, delay);
}

// Function to handle click and calculate reaction time
function handleBoxClick() {
  endTime = Date.now();
  const reactionTime = (endTime - startTime) / 1000;
  result.textContent = `Your reaction time is ${reactionTime.toFixed(3)} seconds.`;
  box.style.display = 'none';
  appearAfterDelay();
}

box.addEventListener('click', handleBoxClick);

// Start the game
appearAfterDelay();
