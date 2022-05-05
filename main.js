/* 

function operation() {
    var answer;
    var equation = prompt("Provide your equation:", " ");
    if (equation);
}

*/

var input = document.getElementById('result')

let outValue = ""
let outP = document.getElementById('result');
console.log(outP);
// function for the math equations
var inputVal = (number)=>{
   outValue += number;
   inputValue();
} 
function inputValue() {
    outP.value = outValue;
}








function add() {
    return inputValue1 + inputValue2
}



function solve() {
    let answer;
    var equation = operator();
    var number1 = value1();
    var number2 = value2();

    function operator() {
        let equation = prompt("Would you like to add, subtract, multiply, or divide?");
        let operation = ["add", "subtract", "multiply", "divide"];
        if (operation.includes(equation)) {
            return equation
        }
        else {
            alert("Please give a valid operation.")
            return operator();
        }
    }

    function value1() {
        let number1 = Number(prompt("Enter your first value."));
        if (!isNaN(number1)) {
            return number1
        }
        else {
            alert("Please give a valid value.")
            return value1();
        }
    }

    function value2() {
        let number2 = Number(prompt("Enter your second value."));
        if (!isNaN(number2)) {
            return number2
        }
        else {
            alert("Please give a valid value.")
            return value2();
        }
    }

    switch (equation) {
        case "add":
            answer = number1 + number2
            alert(answer)
            break
        case "subtract":
            answer = number1 - number2
            alert(answer)
            break
        case "multiply":
            answer = number1 * number2
            alert(answer)
            break
        case "divide":
            answer = number1 / number2
            alert(answer)
            break
    }
    return answer
}

/*
    var equation = prompt("Would you like to add, subtract, multiply, or divide?");
    var number1 = Number(prompt("Enter your first value."));
    var number2 = Number(prompt("Enter your second value."));
    
    if (isNaN(number1) || isNaN(number2) || equation !== "add" || equation !== "subtract" || equation !== "multiply" || equation !== "divide") {
        alert("Please give a valid number and operation.");
    }
    else (!isNaN(number1) && !isNaN(number1)); {
        switch (equation) {
            case "add":
                answer = number1 + number2
                break
            case "subtract":
                answer = number1 - number2
                break
            case "multiply":
                answer = number1 * number2
                break
            case "divide":
                answer = number1 / number2
                break
        }
        return answer
    }

}



    if (number1 !== NaN && number2 !== NaN) {
        switch (equation) {
            case "add":
                answer = number1 + number2
            break
            case "subtract":
                answer = number1 - number2
            break
            case "multiply":
                answer = number1 * number2
            break
            case "divide":
                answer = number1 / number2
                break
        }
        alert(answer)
    }
    else if (number1 == NaN || number2 == NaN || equation !== "add" || equation !== "subtract" || equation !== "multiply" || equation !== "divide"); {
        alert("Please give a valid number and operation.")
    }
    return answer
}





switch (equation) {
    case "add":
        var answer = number1 + number2
        alert(answer)
    break
    case "subtract":
        var answer = number1 - number2
        alert(answer)
    break
    case "multiply":
        var answer = number1 * number2
        alert(answer)
    break
    case "divide":
        var answer = number1 / number2
        alert(answer)
        break
}
*/