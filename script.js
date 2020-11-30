let display = document.getElementById("number-display");
let inputVal = 0;
let valueArr = [];
let operatorChoice;
let total = 0;
let currentArr = [];
let sum1 = 0;
let sum2 = 0;

//Reloads the page, clearing all variables in the process
function clearDisplay(){
    location.reload();
}

//takes the value of the function and pushes it to the array, displaying it in the process. When pressed again, it gets added to the array and then joined together to make one number. 
function sum(value){
    currentArr.push(value);
    inputVal = currentArr.join("");
    display.value = inputVal;
}

//takes the number from sum and pushes it to a new array
function inputOperator(operator){
    if (!valueArr.length == 1){
        valueArr.push(inputVal);
        inputVal = 0;
    };
    currentArr = [];
    operatorChoice = operator;
    return operatorChoice;
}
//takes both the strings from the valueArr array and retuns a floating point number;
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
    display.value = "";
    display.value = total;
    valueArr[0] = total;
    valueArr.length = 1;
    return total;
    }


/* To Do:

:: Allow user to chain operations - Currently works if equal is pressed after each sum 
:: Round down total
:: Add a backspace button
:: Create darkmode/lightmode swtich

*/
