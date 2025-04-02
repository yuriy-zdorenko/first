export default function Exercise1(block) {
  if (!block) {
    alert('Error 1')
    return
  } // Перевірка блоку для відповідей

  let ExerciseObjects =
    '<div class="ExercizeImage"><img src="img/unnamed.png" alt="#" class="imageType1" onclick="console.log(this.width)"><img src="img/images(1).png" alt="#" class="imageType1" onclick="console.log(this.width)"><img src="img/images.png" alt="#" class="imageType1" onclick="console.log(this.width)"> </div>'
  //Реалізовано завдання через атрибут onclick="alert(this.src)"
  block.innerHTML = ExerciseObjects //Створення об'єктів завдання
  let Block = document.querySelector('.ExercizeImage')
  Block.style.display = 'flex'
  Block.style.flexDirection = 'row' //Вирівнювання об'єктів

  // document.querySelectorAll('.imageType1').forEach((img) => {
  //   img.onclick = function () {
  //     alert(this.src)
  //   }
  // })
  // Можлива реалізація через JS
}
