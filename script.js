let display = document.getElementById("number-display");
let inputVal = 0;
let valueArr = [];
let operatorChoice;
let total = 0;

function clearDisplay(){
    display.value = "";
}

function inputNumbers(value){
    inputVal += value;
    display.value = inputVal;
}

function inputOperator(operator){
    valueArr.push(inputVal);
    value = 0;
    operatorChoice = operator;
    return operatorChoice;
}

function sum(){
    valueArr.push(inputVal)
    if(operatorChoice = "+"){
        total = valueArr[0] + valueArr[1];
        display.value = total;
    }
}

//document.getElementById("number-display").value += input;