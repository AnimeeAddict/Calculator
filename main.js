/* 

function operation() {
    var answer;
    var equation = prompt("Provide your equation:", " ");
    if (equation);
}

*/

// var input = document.getElementById('result')

// let outValue = ""
// let output = document.getElementById('result');
// var inputVal = (number)=>{
//    outValue += number;
//    inputValue();
// } 
// function inputValue() {
//     outP.value = outValue;
// }

// // function delete() {

// // }

// function add() {
//     return inputValue1 + inputValue2
// }

// function solve() {
//     let answer;
//     var equation = operator();
//     var number1 = value1();
//     var number2 = value2();

//     function operator() {
//         let equation = prompt("Would you like to add, subtract, multiply, or divide?");
//         let operation = ["add", "subtract", "multiply", "divide"];
//         if (operation.includes(equation)) {
//             return equation
//         }
//         else {
//             alert("Please give a valid operation.")
//             return operator();
//         }
//     }

//     function value1() {
//         let number1 = Number(prompt("Enter your first value."));
//         if (!isNaN(number1)) {
//             return number1
//         }
//         else {
//             alert("Please give a valid value.")
//             return value1();
//         }
//     }

//     function value2() {
//         let number2 = Number(prompt("Enter your second value."));
//         if (!isNaN(number2)) {
//             return number2
//         }
//         else {
//             alert("Please give a valid value.")
//             return value2();
//         }
//     }

//     switch (equation) {
//         case "add":
//             answer = number1 + number2
//             alert(answer)
//             break
//         case "subtract":
//             answer = number1 - number2
//             alert(answer)
//             break
//         case "multiply":
//             answer = number1 * number2
//             alert(answer)
//             break
//         case "divide":
//             answer = number1 / number2
//             alert(answer)
//             break
//     }
//     return answer
// }

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

(function () {
    var el = function (element) {
        if (element.charAt(0) === "#") {
            return document.querySelector(element);
        }

        return document.querySelectorAll(element);
    };
    
    var viewer = el("#viewer"),
        equals = el("#equals"),
        nums = el(".num"),
        ops = el(".ops"),
        theNum = "",
        oldNum = "",
        resultNum,
        operator;

    var setNum = function () {
        if (resultNum) {
            theNum = this.getAttribute("data-num");
            resultNum = "";
        } else {
            theNum += this.getAttribute("data-num");
        }
        viewer.innerHTML = theNum;
    };

    var moveNum = function () {
        oldNum = theNum;
        theNum = "";
        operator = this.getAttribute("data-ops");

        equals.setAttribute("data-result", "");
    };
    var displayNum = function () {
        oldNum = parseFloat(oldNum);
        theNum = parseFloat(theNum);

        switch (operator) {
            case "plus":
                resultNum = oldNum + theNum;
                break;
            case "minus":
                resultNum = oldNum - theNum;
                break;
            case "times":
                resultNum = oldNum * theNum;
                break;
            case "divided by":
                resultNum = oldNum / theNum;
                break;
            default:
                resultNum = theNum;
        }

        if (!isFinite(resultNum)) {
            if (isNaN(resultNum)) {
                resultNum = "Error";
            }
        }

        viewer.innerHTML = resultNum;
        equals.setAttribute("data-result", resultNum);
        oldNum = 0;
        theNum = resultNum;
    };
    var clearAll = function () {
        oldNum = "";
        theNum = "";
        viewer.innerHTML = "0";
        equals.setAttribute("data-result", resultNum);
    };

    for (var i = 0, l = nums.length; i < l; i++) {
        nums[i].onclick = setNum;
    }
    for (var i = 0, l = ops.length; i < l; i++) {
        ops[i].onclick = moveNum;
    }

    equals.onclick = displayNum;
    el("#clear").onclick = clearAll;
    el("#reset").onclick = function () {
        window.location = window.location;
    };

}());