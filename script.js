// Get DOM elements
const box = document.getElementById('box');
const output = document.getElementById('reaction-time');

let startTime = 0;

/**
 * Generates a random hex color
 */
function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Displays the box at a random position inside the viewport
 */
function showBox() {
  const boxWidth = 100;
  const boxHeight = 100;
  const padding = 20;

  const maxTop = window.innerHeight - boxHeight - padding;
  const maxLeft = window.innerWidth - boxWidth - padding;

  const top = Math.floor(Math.random() * maxTop);
  const left = Math.floor(Math.random() * maxLeft);

  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
  box.style.backgroundColor = generateRandomColor();
  box.style.display = 'block';

  startTime = Date.now();
}

/**
 * Initiates the next round after a delay
 */
function startNextRound() {
  const delay = Math.random() * 2000 + 1000; // Between 1s and 3s
  setTimeout(showBox, delay);
}

/**
 * Handles box click and shows the reaction time
 */
function handleBoxClick() {
  const endTime = Date.now();
  const timeTaken = (endTime - startTime) / 1000; // in seconds

  output.textContent = `Your reaction time is ${timeTaken.toFixed(3)} seconds.`;

  box.style.display = 'none';
  startNextRound();
}

// Event listener and game start
box.addEventListener('click', handleBoxClick);
startNextRound();
