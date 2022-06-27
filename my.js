const msvr = document.querySelector('p2');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

msvr.addEventListener('mouseover', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

