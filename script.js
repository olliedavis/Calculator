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
//Checks the valueArr to see if the first number has been chosen, if not then it knows that the value entered is the first sum.  
function decider(value){
    if (valueArr.length < 1){
        firstSum(value);
    } else{
        secondSum(value);
    }
}

//takes the value of the function and pushes it to the array, displaying it in the process. When pressed again, it gets added to the array and then joined together to make one number. 
function firstSum(value){
    currentArr.push(value);
    inputVal = currentArr.join("");
    display.value = inputVal;
}

function secondSum(value){
    if(currentArr[1] == undefined){
        inputVal = 0;
        currentArr = [];
    }
    currentArr.push(value)
    inputVal = currentArr.join("");
    display.value = inputVal;
}
//when run, it takes the number from firstSum and pushes it to a new array. 
function inputOperator(operator){
    valueArr.push(inputVal);
    operatorChoice = operator;
    return operatorChoice;
}
//when run, it takes the takes both the strings from firstSum and secondSum and retuns a floating point number which is added together
function sum(){
    valueArr.push(inputVal)
    if(operatorChoice = "+"){
        sum1 += parseFloat(valueArr[0]);
        sum2 += parseFloat(valueArr[1]);
        total = (sum1 + sum2);
        display.value = "";
        display.value = total;
    }
}


