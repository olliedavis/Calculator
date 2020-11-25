let display = document.getElementById("number-display");


function operate (a,operator,b){
    //addition
    if (operator == "+"){
        add(a,b);
    } 
    //subtraction
    else if (operator == "-") {
        subtract(a,b);
    }
    //multiplication
    else if (operator == "*"){
        return multiply(a,b)
    }
    //division
    else if (operator == "/"){
        divide(a,b);
    }
}

function add(a,b){
    return (a + b);
}

function subtract(a,b){
    return (a - b);
}

function multiply(a, b){
    return (a * b)
}

function divide(a,b){
    return (a / b);
}

function clearDisplay(){
    document.getElementById("number-display").value = "test";
}
