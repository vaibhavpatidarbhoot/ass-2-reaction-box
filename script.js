function showBox() {
  const boxWidth = 100;
  const boxHeight = 100;
  const padding = 20;

  const maxTop = window.innerHeight - boxHeight - padding;
  const maxLeft = window.innerWidth - boxWidth - padding;

  const top = Math.max(padding, Math.random() * maxTop);
  const left = Math.max(padding, Math.random() * maxLeft);

  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
  box.style.display = 'block';
  box.style.backgroundColor = generateRandomColor();
  startTime = Date.now();
}
