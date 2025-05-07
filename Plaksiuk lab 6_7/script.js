function date(){
    const now = new Date()
    return now.toString().split(' GMT')[0]
}

function game(){
    let gameStart = confirm("Чи хочете почати гру?")
    let randomNum = Math.round(Math.random() * 50)
    let count = 0
    while (gameStart){
        let numUser = +prompt("Введіть число від 0 до 50")
        if(!isNaN(numUser) && (numUser >= 0 && numUser <= 50)){
            count++
            if(numUser === randomNum){
                alert(`Ви перемогли! \nЗа ${count} спроб ви вгадали число ${randomNum}`)
                let again = confirm("Чи хочете зіграти ще раз?")
                if(!again) break
            }else{
                let diff = Math.abs(randomNum - numUser)
                let continuePlaying
                console.log(`${date()} Спроба ${count}: число ${numUser} - не вірно`)
                if(diff > 10){
                    continuePlaying = confirm("До числа ще - \"холодно\".\nЧи хочете спробувати знову?")
                    if(!continuePlaying) break
                }else if(diff > 5 && diff <= 10){
                    continuePlaying = confirm("До числа вже - \"тепло\".\nЧи хочете спробувати знову?")
                    if(!continuePlaying) break
                }else if(diff >= 0 && diff <= 5){
                    continuePlaying = confirm("Чило вже близько - \"гаряче\".\nЧи хочете спробувати знову?")
                    if(!continuePlaying) break
                }
            }
        }else{
            alert("Ви не правильно ввели дані!")
        }
    }
}

game()