let displayElement = document.getElementById('')
let inputArrayString = null;
let operatorToggle = true;

let inputDisplay = '';

function display(input) {
    inputDisplay += input
    document.getElementById('displayOutput').innerHTML = inputDisplay;
}

function displayOperator(input) {
    if (operatorToggle === true) {
        inputDisplay += input;
        document.getElementById('displayOutput').innerHTML = inputDisplay;
        operatorToggle = false;
    } 
}