document.getElementById('sendBtn').addEventListener('click', () => {
    const num = document.getElementById('numberInput').value;
  
    fetch('/square', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ number: num })
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('result').textContent = `Квадрат числа: ${data.square}`;
      })
      .catch(error => {
        document.getElementById('result').textContent = 'Помилка запиту';
        console.error(error);
      });
  });
  