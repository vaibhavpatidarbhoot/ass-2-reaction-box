// Select necessary DOM elements
const box = document.getElementById('box');
const output = document.getElementById('reaction-time');

let startTime = 0;

/**
 * Generates a random hexadecimal color string
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
 * Displays the box at a random position on screen
 */
function showBox() {
  const maxTop = window.innerHeight - 100;
  const maxLeft = window.innerWidth - 100;

  box.style.top = `${Math.random() * maxTop}px`;
  box.style.left = `${Math.random() * maxLeft}px`;
  box.style.display = 'block';
  box.style.backgroundColor = generateRandomColor();
  startTime = Date.now();
}

/**
 * Hides the box and shows a new one after a random delay
 */
function startNextRound() {
  const delay = Math.random() * 2000 + 1000; // 1–3 seconds
  setTimeout(showBox, delay);
}

/**
 * Handles the click on the box and calculates the reaction time
 */
function handleBoxClick() {
  const endTime = Date.now();
  const timeTaken = (endTime - startTime) / 1000;

  output.textContent = `Your reaction time is ${timeTaken.toFixed(3)} seconds.`;
  box.style.display = 'none';
  box.style.backgroundColor = generateRandomColor(); // Change color after result

  startNextRound();
}

// Initialize game
box.addEventListener('click', handleBoxClick);
startNextRound();
