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

//takes the number from sum and pushes it to a new array. 
function inputOperator(operator){
    valueArr.push(inputVal);
    inputVal = 0;
    currentArr = [];
    operatorChoice = operator;
    return operatorChoice;
}
//takes both the strings from the valueArr array and retuns a floating point number which is added together
function totalSum(){
    valueArr.push(inputVal)
    if(operatorChoice = "+"){
        sum1 += parseFloat(valueArr[0]);
        sum2 += parseFloat(valueArr[1]);
        total = (sum1 + sum2);
        display.value = "";
        display.value = total;
        inputVal = 0
        valueArr[0] = total;
        valueArr.pop();
        valueArr.pop();
    }
}


/* To Do:

:: Allow user to chain operations
:: Add other operators
:: Round down total
:: Create an error message for when the user tries to divide by 0
:: Add a backspace button
:: Create darkmode/lightmode swtich

*/
