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
    let calcualtion =Number(a)+Number(b)
    numberOne = calcualtion
    text.textContent = numberOne
}

function subtract(a,b) {
   let calcualtion =Number(a)-Number(b)
    numberOne = calcualtion
    text.textContent = calcualtion

}

function multiply(a,b) {
    let calcualtion =Number(a) * Number(b)
    text.textContent = calcualtion
    numberOne = calcualtion
}

function divide(a,b) {
    if (Number(b) === 0){
        alert("0 sa neda delit")
        numberTwo = ""
        numberOne = ""
        operator = ""
        return
    }
    let calcualtion = Number(a) / Number(b)
    text.textContent = calcualtion
    numberOne = calcualtion
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
            numberOne += this.value
            text.textContent = displayTextOnDisplay()

        } else {
            numberTwo += this.value
            text.textContent = displayTextOnDisplay()
        }
    })
})
operacie.forEach(operacia => {
    operacia.addEventListener("click", function (){
        operator = this.value
        text.textContent = displayTextOnDisplay()

        /*2+2+2 kalkulacie*/
        if (numberTwo !== ""){
            operate()
            numberTwo = ""
        }


    })
})