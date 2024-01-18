// Button Variables
var zero = document.getElementById("0")
var one = document.getElementById("1")
var two = document.getElementById("2")
var three = document.getElementById("3")
var four = document.getElementById("4")
var five = document.getElementById("5")
var six = document.getElementById("6")
var seven = document.getElementById("7")
var eight = document.getElementById("8")
var nine = document.getElementById("9")
var dot = document.getElementById("dot")
var plus = document.getElementById("+")
var subtract = document.getElementById("-")
var divide = document.getElementById("/")
var multiply = document.getElementById("*")
var equal = document.getElementById("eq")

// display variables
var n1 = document.getElementById("number1")
var theOperator = document.getElementById("theOperator")
var n2 = document.getElementById("number2")
var resultant = document.getElementById("resultant")

// misc. variables
var stateChecker = 0
var intermediateNumber = ""

// plan:
// 1 - adding numbers -> changes intermedate number
// 2 - pressing any of the operators sets the intermediate number as either n1 or n2 depending on the state checker
// 3 - when pressing the equal sign it uses the operator selected on the 2 numbers

// 1.
function add0 (){
    intermediateNumber += "0"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function add1 (){
    intermediateNumber.innerText += "1"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function add2(){
    intermediateNumber.innerText += "2"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function add3 (){
    intermediateNumber.innerText += "3"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function add4 (){
    intermediateNumber.innerText += "4"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function add5 (){
    intermediateNumber.innerText += "5"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function add6 (){
    intermediateNumber.innerText += "6"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function add7 (){
    intermediateNumber.innerText += "7"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function add8 (){
    intermediateNumber.innerText += "8"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function add9 (){
    intermediateNumber.innerText += "9"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function addDot(){
    intermediateNumber.innerText += "."
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}

// 2.
// 

function addPlus (){
    
    theOperator.innerText = "+"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        stateChecker = 1
        intermediateNumber = ""
    }
    else if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function addMinus (){
    theOperator.innerText = "-"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        stateChecker = 1
        intermediateNumber = ""
    }
    else if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function addDivide (){
    theOperator.innerText = "/"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        stateChecker = 1
        intermediateNumber = ""
    }
    else if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
function addMultiply(){
    theOperator.innerText = "*"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        stateChecker++
        intermediateNumber = ""
    }
    else if(stateChecker === 1){
        n2.innerText = intermediateNumber
    }
}
// break

// 3.
function lastEquation (){
    if (theOperator.innerText === "+"){
        resultant.innerText = n1.innerText + n2.innerText
    }
    if (theOperator.innerText === "-"){
        resultant.innerText = n1.innerText - n2.innerText
    }
    if (theOperator.innerText === "/"){
        resultant.innerText = n1.innerText / n2.innerText
    }
    if (theOperator.innerText === "*"){
        resultant.innerText = n1.innerText * n2.innerText
    }
    else {
        console.log("Please select a operator")
    }
}


// event listeners
zero.addEventListener("click" , add0)
one.addEventListener("click" , add1)
two.addEventListener("click" , add2)
three.addEventListener("click" , add3)
four.addEventListener("click" , add4)
five.addEventListener("click" , add5)
six.addEventListener("click" , add6)
seven.addEventListener("click" , add7)
eight.addEventListener("click" , add8)
nine.addEventListener("click" , add9)
dot.addEventListener("click" , addDot)
plus.addEventListener("click" , addPlus)
subtract.addEventListener("click" , addMinus)
divide.addEventListener("click" , addDivide)
multiply.addEventListener("click" , addMultiply)
equal.addEventListener("click" , lastEquation)



// testing below