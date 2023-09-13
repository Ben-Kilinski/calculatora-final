const screenDisplay = document.querySelector(".screen")
const buttons = document.querySelectorAll("button")

let calculation = []
let accumulativeCalculation

function calculate(button) {
    const digit = button.textContent
    
    if (digit == "CLEAR"){
        calculation = []
        screenDisplay.textContent = "."
    }
    else if (digit == "="){
        // console.log(accumulativeCalculation)
        screenDisplay.textContent = eval(accumulativeCalculation)
    }
    else {
        calculation.push(digit)
        accumulativeCalculation = calculation.join(" ")
        screenDisplay.textContent = accumulativeCalculation
    }
}

buttons.forEach(button => button.addEventListener("click", () => calculate(button)))