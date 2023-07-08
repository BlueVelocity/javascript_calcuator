let displayElement = document.getElementById('')
let operatorToggle = true;
let numberOne = '';
let numberTwo = '';
let operator = '';
let resume = '';

inputDisplay = '';

function display(input) {
    if ( inputDisplay.length >= 25) {
        alert('Too many numbers. Please complete operation or clear field');
    } else {
        inputDisplay += input;
        document.getElementById('displayOutput').innerHTML = inputDisplay;
    }
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
    answer = Number.parseInt(num1) + Number.parseInt(num2);
    inputDisplay = '';
    document.getElementById('displayOutput').innerHTML = answer;
    clearMemoryLite()
}

function subtractionPrintToDisplay(num1, num2) {
    let answer = undefined;
    answer = num1 - num2;
    inputDisplay = '';
    document.getElementById('displayOutput').innerHTML = answer;
    clearMemoryLite()
}

function multiplicationPrintToDisplay(num1, num2) {
    let answer = undefined;
    answer = num1 * num2;
    inputDisplay = '';
    document.getElementById('displayOutput').innerHTML = answer;
    clearMemoryLite()
}

function divisionPrintToDisplay(num1, num2) {
    let answer = undefined;
    answer = num1 / num2;
    inputDisplay = '';
    document.getElementById('displayOutput').innerHTML = answer;
    clearMemoryLite()
}

function clearMemory() {
    operatorToggle = true;
    numberOne = '';
    numberTwo = '';
    operator = '';
    resume = '';
    inputDisplay = '';
    document.getElementById('displayOutput').innerHTML = "";
}

function clearMemoryLite() {
    operatorToggle = true;
    operator = '';
    resume = '';
    numberOne = '';
    numberTwo = '';
}