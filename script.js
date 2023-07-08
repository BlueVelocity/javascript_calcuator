let displayElement = document.getElementById('')
let operatorToggle = true;
let numberOne = '';
let numberTwo = '';
let operator = '';
let resume = '';

inputDisplay = '';

function display(input) {
    inputDisplay += input;
    document.getElementById('displayOutput').innerHTML = inputDisplay;
}

function displayOperator(input) {
    if (operatorToggle == true) {
        inputDisplay += input;
        document.getElementById('displayOutput').innerHTML = inputDisplay;
        operatorToggle = false;
    } 
}

function equals() {
    inputArray = inputDisplay.split('');
    for (i = 0; i < inputArray.length; i++) {
        if (/\d+/.test(inputArray[i])) {
            numberOne += inputArray[i];
        } else {
            resume = i + 1;
            operator = inputArray[i];
            break;
        }
    }

    for (i = resume; i < inputArray.length; i++) {
        numberTwo += inputArray[i];
    }

    switch(operator) {
        case '+' :additionPrintToDisplay(numberOne, numberTwo);
            break;
        case '-' :subtractionPrintToDisplay(numberOne, numberTwo);
            break;
        case '*' :multiplicationPrintToDisplay(numberOne, numberTwo);
            break;
        case '/' :divisionPrintToDisplay(numberOne, numberTwo);
            break;
    }
    console.log(numberOne);
    console.log(resume);
    console.log(numberTwo);
    console.log(operator);
}

function additionPrintToDisplay(num1, num2) {
    let answer = undefined;
    answer = num1 + num2;
    document.getElementById('displayOutput').innerHTML = answer;
}

function subtractionPrintToDisplay(num1, num2) {
    let answer = undefined;
    answer = num1 - num2;
    document.getElementById('displayOutput').innerHTML = answer;
}

function multiplicationPrintToDisplay(num1, num2) {
    let answer = undefined;
    answer = num1 * num2;
    document.getElementById('displayOutput').innerHTML = answer;
}

function divisionPrintToDisplay(num1, num2) {
    let answer = undefined;
    answer = num1 / num2;
    document.getElementById('displayOutput').innerHTML = answer;
}