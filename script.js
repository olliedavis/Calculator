let display = document.getElementById("number-display");
let inputVal = 0;
let valueArr = [];
let operatorChoice;
let total = 0;
let currentArr = [];
let sum1 = 0;
let sum2 = 0;

//Reloads the page, resetting all variables in the process
function clearDisplay(){
    location.reload();
}

//takes the value of the function and pushes it to the array, displaying it in the process. When pressed again, it gets added to the array and then joined together to make one number. 
function sum(value){
    if(value == "." && currentArr.includes(".")){
        value = "";
        }
    currentArr.push(value);
    inputVal = currentArr.join("");
    display.value = inputVal;
}

//takes the number from sum and pushes it to a new array.
//if valueArr is not populated, then we know it's the first time it's being run. As such, it will push inputVal to valueArr and then get reset
//if operatorChoice is populated, then we know it's not the first time being run. So it returns the total so it can be chained without the use of the equal operator 
function inputOperator(operator){
    if (!valueArr.length == 1){
        valueArr.push(inputVal);
        inputVal = 0;
    };
    if(operatorChoice != undefined) {
        totalSum()
        inputVal = 0;

    }
    currentArr = [];
    operatorChoice = operator;
    return operatorChoice;
}
//takes both the strings from the valueArr array and retuns a floating point number;
//once total has been defined, sets the valueArr equal only the total so that it can be chained
function totalSum(){
    valueArr.push(inputVal)
    sum1 = parseFloat(valueArr[0]);
    sum2 = parseFloat(valueArr[1]);
    if(operatorChoice == "+"){
        total = (sum1 + sum2);
    } else if(operatorChoice == "*"){
        total = (sum1 * sum2);
    }else if (operatorChoice == "-"){
        total = (sum1 - sum2);
    }else if(operatorChoice == "/"){
        if(sum1 == "0" || sum2 == "0"){
            alert("Are you tryin to kill me??")
        } else{
            total = (sum1 / sum2);
        }
    }
    total = (Math.floor(total * 100000) / 100000);
    display.value = total;
    valueArr[0] = total;
    valueArr.length = 1;
    operatorChoice = "";

    return total;
    }

function backButton(){
    currentArr = currentArr.slice(0,-1);
    inputVal = inputVal.slice(0,-1);
    display.value = inputVal;
}

/* To Do:

:: Create darkmode/lightmode swtich
:: Keyboard Shortcuts


*/
