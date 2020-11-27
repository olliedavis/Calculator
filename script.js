let display = document.getElementById("number-display");
let inputVal = 0;
let valueArr = [];
let operatorChoice;
let total = 0;
let currentArr = [];

function clearDisplay(){
    display.value = "";
    currentArr = [];
}

function firstSum(value){
    currentArr.push(value);
    inputVal = currentArr.join("");
    display.value = inputVal;
}

function secondSum(value){
    inputVal = 0;
    currentArr.push(value)
    inputVal = currentArr.join("");
    display.value = inputVal;
}

function inputOperator(operator){
    valueArr.push(inputVal);
    operatorChoice = operator;
    return operatorChoice;
}

function sum(){
    valueArr.push(inputVal)
    if(operatorChoice = "+"){
        total = valueArr[0] + valueArr[1];
        display.value = "";
        display.value = total;
    }
}




//secondSum{
//}

function decider(value){
    if (valueArr[0] = ""){
        firstSum(value);
    } else{
        secondSum(value);
    }
}