const calculatorDiv = document.createElement("div")
calculatorDiv.classList.add("calculator")
document.body.append(calculatorDiv)

const display = document.createElement("p")
display.classList.add("display")

display.addEventListener("click", function(){
    if(display.innerText.length > 0){
        display.innerText = display.innerText.slice(0, -1)
        if(!display.innerText.split("").some(char => !isNaN(char))) display.innerText = ""
    }
})

function calc(display){
    const result = Function(`return ${display.innerText}`)();
    display.innerText = result
}

function calculator(){
    const buttons = [ "AC", "+-", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "=" ]
    const containerButton = document.createElement("div")
    containerButton.classList.add("containerButton")

    buttons.forEach(element =>{
        const input = document.createElement("input")
        input.type = "button"
        input.classList.add("button")
        input.value = element

        if(typeof element === "number" || element === "."){
            element !== 0 ? input.classList.add("darkGray") : input.classList.add("darkGray", "buttonZero")
            input.addEventListener("click", function(){
                if(element === "."){
                    let secondNumber = display.innerText.split("+")[1]
                    if(secondNumber){
                        if(!secondNumber.includes(".")) display.innerText += element
                    }else if(!(display.innerText).includes(".") && display.innerText.length > 0){
                        display.innerText += element
                    }
                }else if(display.innerText.length < 10) {
                    if (display.innerText.length > 0 || element !== 0) {
                        if(display.innerText === "0"){
                            display.innerText = element
                        }else display.innerText += element;
                    }
                }
            })
        }else if(["AC", "+-", "%"].includes(element)){
            input.classList.add("gray")
            input.addEventListener("click", function(){
                if(display.innerText.length > 0){
                    if(element === "AC"){
                        display.innerText = ""
                    }else if(element === "+-"){
                        let exercise = display.innerText.split(/(?<!\()\s*[-/*+%]\s*/)

                        if(exercise[1]){
                            let firstNumber = exercise[0].split("")
                            let secondNumber = exercise[1].split("")
                            let op = ["/", "*", "+", "%", "-"].find(op => display.innerText.includes(op))

                            if(secondNumber.includes("-")){
                                secondNumber.shift()
                                secondNumber.shift()
                                secondNumber.pop()
                                firstNumber.push(op)
                                secondNumber.unshift(firstNumber.join(""))
                                display.innerText = secondNumber.join("")
                            }else{
                                if(op === "-"){
                                    op = "+"
                                    firstNumber.push(op)
                                }else{
                                    secondNumber.unshift("(", "-")
                                    secondNumber.push(")")
                                    secondNumber.join("")
                                    firstNumber.push(op)
                                }
                                secondNumber.unshift(firstNumber.join(""))
                                display.innerText = secondNumber.join("")
                            }
                        }else{
                            let firstNumber = exercise[0].split("")

                            if(display.innerText.includes("-")){
                                firstNumber.shift()
                                firstNumber.shift()
                                firstNumber.pop()
                                display.innerText = firstNumber.join("")
                            }else{
                                firstNumber.unshift("(", "-")
                                firstNumber.push(")")
                                display.innerText = firstNumber.join("")
                            }
                        }
                    }else{
                        if(!["/", "*", "-", "+", "%"].some(op => display.innerText.includes(op))) display.innerText += element
                    }
                }
            })
        }else{
            input.classList.add("orange")
            input.addEventListener("click", function(){
                if(element === "=") calc(display)
                else if(display.innerText.length > 0){
                    if (!["/", "*", "+", "%"].some(op => display.innerText.includes(op))) display.innerText += element
                }
            })
        }
        containerButton.append(input)
    })
    return calculatorDiv.append(display, containerButton)
}

calculator()