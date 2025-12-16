const body = document.body
body.style.margin = '0';
body.style.fontFamily = 'Arial, sans-serif';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.minHeight = '100vh';
body.style.backgroundColor = '#F0FAF5';

const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.padding = '50px';
container.style.background = '#4C3B4D';
container.style.borderRadius = '20px';
container.style.boxShadow = '10px 10px 0px rgba(0,0,0,0.3)';
container.style.width = '90vw';
container.style.maxWidth = '400px';
container.style.aspectRatio = '3 / 4';
body.appendChild(container);

const h2 = document.querySelector('h2');
h2.style.color = 'white';
h2.style.fontSize = '1.8rem';
h2.style.marginBottom = '30px';
container.appendChild(h2)

const input = document.getElementById('numberInput');
input.style.padding = '10px';
input.style.fontSize = '1rem';
input.style.border = '1px solid #ccc';
input.style.borderRadius = '5px';
input.style.marginBottom = '10px';
input.style.width = '200px';
input.style.textAlign = 'center';
container.appendChild(input)

const button = document.getElementById('sendBtn');
button.style.padding = '10px 20px';
button.style.fontSize = '1rem';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.backgroundColor = '#08C45D';
button.style.color = 'white';
button.style.cursor = 'pointer';
button.style.transition = 'background 0.3s';
button.style.width = '220px';
container.appendChild(button)

button.onmouseenter = () => button.style.backgroundColor = '#45a049';
button.onmouseleave = () => button.style.backgroundColor = '#4CAF50';

const result = document.getElementById('result');
result.style.marginTop = '20px';
result.style.fontSize = '1.2rem';
result.style.color = 'white';
container.appendChild(result)
