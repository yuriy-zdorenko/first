const body = document.body;
body.style.margin = '0';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.height = '100vh';
body.style.background = '#F0FAF5';
body.style.fontFamily = 'Arial, sans-serif';

const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.padding = '20px';
container.style.background = '#4C3B4D';
container.style.borderRadius = '20px';
container.style.boxShadow = '10px 10px 0px rgba(0,0,0,0.3)';
container.style.width = '90vw';
container.style.maxWidth = '400px';
container.style.aspectRatio = '3 / 4';
body.appendChild(container);

const display = document.createElement('input');
display.type = 'text';
display.readOnly = true;
display.style.width = '92%';
display.style.fontSize = '2em';
display.style.padding = '15px';
display.style.marginBottom = '20px';
display.style.border = 'none';
display.style.borderRadius = '10px';
display.style.background = '#F0FAF5';
display.style.textAlign = 'right';
container.appendChild(display);

const buttons = [
  '7', '8', '9', '÷',
  '4', '5', '6', '×',
  '1', '2', '3', '−',
  '0', '.', '=', '+',
  'C'
];

const grid = document.createElement('div');
grid.style.display = 'grid';
grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
grid.style.gap = '10px';
grid.style.width = '100%';
container.appendChild(grid);

buttons.forEach(label => {
  const button = document.createElement('button');
  button.textContent = label;
  button.style.padding = '20px';
  button.style.fontSize = '1.5em';
  button.style.border = 'none';
  button.style.borderRadius = '10px';
  button.style.background = ['÷','×','−','+','=','C'].includes(label) ? '#08C45D' : '#ddd';
  button.style.color = ['÷','×','−','+','=','C'].includes(label) ? '#fff' : '#000';
  button.style.cursor = 'pointer';
  button.style.transition = 'background 0.2s';

  button.onmouseenter = () => button.style.opacity = '0.9';
  button.onmouseleave = () => button.style.opacity = '1';

  button.onclick = () => handleButtonClick(label);
  grid.appendChild(button);
});

let currentInput = '';

function handleButtonClick(label) {
  if (label === 'C') {
    currentInput = '';
  } else if (label === '=') {
    try {
      const expr = currentInput
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/−/g, '-');
      currentInput = eval(expr).toString();
    } catch {
      currentInput = 'Помилка';
    }
  } else {
    if (currentInput === 'Помилка') currentInput = '';
    currentInput += label;
  }
  display.value = currentInput;
}

function adjustFontSize() {
  const width = window.innerWidth;
  display.style.fontSize = width < 400 ? '1.5em' : '2em';
}
window.addEventListener('resize', adjustFontSize);
adjustFontSize();