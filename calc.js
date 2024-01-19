// Button Variables from HTML
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

// variables for the Display Screen and Calculation
var n1 = document.getElementById("number1")
var theOperator = document.getElementById("theOperator")
var n2 = document.getElementById("number2")
var resultant = document.getElementById("resultant")

// misc. variables for calculation
var stateChecker = 0
var intermediateNumber = ""

// original plan:
// 1 - adding numbers -> changes intermedate number
// 2 - pressing any of the operators sets the intermediate number as either n1 or n2 depending on the state checker
// 3 - when pressing the equal sign it uses the operator selected on the 2 numbers

// 1.
// pressing these buttons will make the intermediate number something and either assign it to N1 or N2 depending on the stateChecker's state
function add0(){
    intermediateNumber += "0"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 2){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
        stateChecker = 0
        return
    }
}
function add1(){
    intermediateNumber += "1"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 2){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
        stateChecker = 0
    }
}
function add2(){
    intermediateNumber += "2"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 2){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
        stateChecker = 0
    }
}
function add3(){
    intermediateNumber += "3"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 2){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
        stateChecker = 0
    }
}
function add4(){
    intermediateNumber += "4"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 2){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
        stateChecker = 0
    }
}
function add5(){
    intermediateNumber += "5"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 2){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
        stateChecker = 0
    }
}
function add6(){
    intermediateNumber += "6"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 2){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
        stateChecker = 0
    }
}
function add7(){
    intermediateNumber += "7"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 2){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
        stateChecker = 0
    }
}
function add8(){
    intermediateNumber += "8"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 2){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
        stateChecker = 0
    }
}
function add9(){
    intermediateNumber += "9"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 2){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
        stateChecker = 0
    }
}
function addDot(){
    intermediateNumber += "."
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(intermediateNumber)
    }
    if(stateChecker === 2){
        n1.innerText = intermediateNumber
        console.log(intermediateNumber)
        stateChecker = 0
    }
}

// 2.
// Operator Buttons, this decides what will happen between the two numbers selected

function addPlus(){
    
    theOperator.innerText = "+"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        intermediateNumber = ""
        console.log(theOperator.innerText)
        stateChecker = 1
        return
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(theOperator.innerText)
    }
    else if (stateChecker === 2){
        n1.innerText = resultant.innerText
        stateChecker = 1
        console.log(theOperator.innerText)
    }
}
function addMinus(){
    theOperator.innerText = "-"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        intermediateNumber = ""
        console.log(theOperator.innerText)
        stateChecker = 1
        return
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(theOperator.innerText)
    }   
    else if (stateChecker === 2){
        n1.innerText = resultant.innerText
        stateChecker = 1
        console.log(theOperator.innerText)
    }
}
function addDivide(){
    theOperator.innerText = "/"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        intermediateNumber = ""
        console.log(theOperator.innerText)
        stateChecker = 1
        return
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(theOperator.innerText)
    }
    if (stateChecker === 2){
        n1.innerText = resultant.innerText
        console.log(theOperator.innerText)
        stateChecker = 1

    }
}
function addMultiply(){
    theOperator.innerText = "*"
    if(stateChecker === 0){
        n1.innerText = intermediateNumber
        intermediateNumber = ""
        console.log(theOperator.innerText)
        stateChecker = 1
        return
    }
    if(stateChecker === 1){
        n2.innerText = intermediateNumber
        console.log(theOperator.innerText)
        
    }
    else if (stateChecker === 2){
        n1.innerText = resultant.innerText
        stateChecker = 1
        console.log(theOperator.innerText)
    }
}

// 3.
// when equal button is pressed, it processes the entire equation and spits out the result, resetting the other numbers for a new calculation
function lastEquation(){
    if (theOperator.innerText === "") {
        console.log("Please select a operator")
        return
    }
    console.log("=")
    if (theOperator.innerText === "+"){
        resultant.innerText = parseFloat(n1.innerText) + parseFloat(n2.innerText)
    }
    if (theOperator.innerText === "-"){
        resultant.innerText = parseFloat(n1.innerText) - parseFloat(n2.innerText)
    }
    if (theOperator.innerText === "/"){
        if(n2.innerText !== "0"){
            resultant.innerText = parseFloat(n1.innerText) / parseFloat(n2.innerText)
        } else if (n2.innerText === "0"){
            resultant.innerText = "Can't Divide by 0"
        }
    }
    if (theOperator.innerText === "*"){
        resultant.innerText = parseFloat(n1.innerText) * parseFloat(n2.innerText)
    }

    console.log(resultant.innerText)
    stateChecker = 2
    intermediateNumber = ""
    theOperator.innerText = ""
    n1.innerText = ""
    n2.innerText = ""
}


// event listeners for buttons
zero.addEventListener("click",add0)
one.addEventListener("click",add1)
two.addEventListener("click",add2)
three.addEventListener("click",add3)
four.addEventListener("click",add4)
five.addEventListener("click",add5)
six.addEventListener("click",add6)
seven.addEventListener("click",add7)
eight.addEventListener("click",add8)
nine.addEventListener("click",add9)
dot.addEventListener("click",addDot)
plus.addEventListener("click",addPlus)
subtract.addEventListener("click",addMinus)
divide.addEventListener("click",addDivide)
multiply.addEventListener("click",addMultiply)
equal.addEventListener("click",lastEquation)