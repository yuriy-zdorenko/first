export default function Exercise2(block) {
  if (!block) {
    alert('Error 1')
    return
  } //Перевірка наявності блоку для відповідей
  function addTitle(event) {
    event.target.setAttribute('title', event.target.textContent)
  } //Додання тайтлу при наведенні на посилання
  function removeTitle(event) {
    event.target.removeAttribute('title')
  } //Видалення тайтлу при відведенні
  let ExerciseObjects = `<div class="ExerciseSrc">
    <div class="question">Дано  три посилання. З використанням методу addEventListener, 
    removeEventListener прив'яжіть до кожного посилання обробник події, щоб при наведенні 
    на посилання в атрибут title записувався значення атрибуту href.</div><br>
      <a class="link" href="https://dist.nupp.edu.ua/">DistPortal</a>
      <a class="link" href="https://nupp.edu.ua/">Politech.ua</a>
      <a class="link" href="https://portal.nupp.edu.ua/">Portal NUPP</a>
    </div>`
  block.innerHTML = ExerciseObjects //Додання об'єктів завдання
  let Block = document.querySelector('.ExerciseSrc')
  Block.style.display = 'flex'
  Block.style.flexDirection = 'column' //Вирівнювання обєктів

  document.querySelectorAll('.link').forEach((link) => {
    link.addEventListener('mouseover', addTitle)
    link.addEventListener('mouseout', removeTitle)
  }) //Створення Івентів для кожного посилання
}
