const box = document.getElementById('box');
const output = document.getElementById('reaction-time');

let startTime = 0;

/**
 * Generates a random hexadecimal color.
 */
function generateRandomColor() {
  const chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Displays the box in a random location within the viewport.
 */
function showBox() {
  const boxSize = box.offsetWidth;
  const maxTop = window.innerHeight - boxSize - 20;
  const maxLeft = window.innerWidth - boxSize - 20;

  const randomTop = Math.random() * maxTop;
  const randomLeft = Math.random() * maxLeft;

  box.style.top = `${randomTop}px`;
  box.style.left = `${randomLeft}px`;
  box.style.display = 'block';
  box.style.backgroundColor = generateRandomColor();
  startTime = Date.now();
}

/**
 * Initiates a new box appearance after a random delay.
 */
function startNextRound() {
  const delay = Math.random() * 2000 + 1000; // 1-3 seconds
  setTimeout(showBox, delay);
}

/**
 * Handles box click and reaction time calculation.
 */
function handleBoxClick() {
  const endTime = Date.now();
  const reaction = (endTime - startTime) / 1000;
  output.textContent = `Your reaction time is ${reaction.toFixed(3)} seconds.`;

  box.style.display = 'none';
  box.style.backgroundColor = generateRandomColor(); // Color change after click

  startNextRound();
}

// Start the game
box.addEventListener('click', handleBoxClick);
startNextRound();
