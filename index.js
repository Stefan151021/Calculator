const equals  = document.querySelector(".equals")
const cislo= document.querySelectorAll(".cislo")
const operacie = document.querySelectorAll(".operacie")
const ac =document.querySelector(".ac")

let   text = document.getElementById("text")
let   numberOne   = ""
let   operator    = ""
let   numberTwo   = ""
let   newCalculation = true

function displayTextOnDisplay() {
    return text.textContent = numberOne.toString() + operator.toString() + numberTwo.toString()
}

function operate() {
    if (operator ==="+"){
        add(numberOne,numberTwo)
    } else if (operator ==="-"){
        subtract(numberOne,numberTwo)
    } else if (operator ==="*"){
        multiply(numberOne,numberTwo)
    }else if (operator ==="/") {
        divide(numberOne,numberTwo)
    }
}

function add(a,b) {
    let calcualtion = Number(a) + Number(b)
    numberOne = Math.round(calcualtion * 1000000) / 1000000
    text.textContent = numberOne
}

function subtract(a,b) {
    let calcualtion = Number(a) - Number(b)
    numberOne = Math.round(calcualtion * 1000000) / 1000000
    text.textContent = numberOne
}

function multiply(a,b) {
    let calcualtion = Number(a) * Number(b)
    numberOne = Math.round(calcualtion * 1000000) / 1000000
    text.textContent = numberOne
}

function divide(a,b) {
    if (Number(b) === 0){
        alert("0 sa neda delit")
        numberTwo = ""
        numberOne = ""
        operator = ""
        return null
    }
    let calcualtion = Number(a) / Number(b)
    numberOne = Math.round(calcualtion * 1000000) / 1000000
    text.textContent = numberOne
}

ac.addEventListener("click", () => {
    numberOne = ""
    numberTwo = ""
    operator = ""
    newCalculation = true
    text.textContent = "0"
})

equals.addEventListener("click",() => {
    if (newCalculation){
        if (numberOne && numberTwo && operator){
            operate()
            operator = ""
            numberTwo = ""
        }
        newCalculation = false
    }
})

cislo.forEach(c => {
    c.addEventListener("click", function (){

        if (!newCalculation){
            numberOne = ""
            newCalculation = true
        }
        if (operator ===""){
            if (this.value === "." && numberOne.includes(".")){
                return
            }
            numberOne += this.value
            text.textContent = displayTextOnDisplay()
        } else {
            if (this.value === "." && numberTwo.includes(".")){
                return
            }
            numberTwo += this.value
            text.textContent = displayTextOnDisplay()
        }
    })
})

operacie.forEach(operacia => {
    operacia.addEventListener("click", function (){

        if (!newCalculation) {
            operator = this.value
            newCalculation = true
            text.textContent = displayTextOnDisplay()
            return
        }

        operator = this.value
        text.textContent = displayTextOnDisplay()

        /*2+2+2 kalkulacie*/
        if (numberTwo !== ""){
            operate()
            numberTwo = ""
        }
    })
})