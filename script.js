let displayElement = document.getElementById('')
let operatorToggle = true;
let numberOne = '';
let numberTwo = '';
let operator = '';
let resume = '';
let answer = undefined;
let tempHistoryInput = undefined;
let historyCounter = 0;

inputDisplay = '';

let historyElement = document.getElementById('output-history-list');
let newHistoryElement = document.createElement('li');

//limits the display input to 25 characters
//will prompt the user-agent when character limit is reached
function display(input) {
    if ( inputDisplay.length >= 25) {
        alert('Too many numbers. Please complete operation or clear field');
    } else {
        inputDisplay += input;
        document.getElementById('displayOutput').innerHTML = inputDisplay;
    }
}

//used to update the display when an input is selected
//limits the operator count to one
function displayOperator(input) {
    if (operatorToggle == true) {
        inputDisplay += input;
        document.getElementById('displayOutput').innerHTML = inputDisplay;
        operatorToggle = false;
    } 
}

//called when the equal button is pressed
function equals() {
    //converts input to array to be read by check loops
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

    //cycles through second number set
    for (i = resume; i < inputArray.length; i++) {
        numberTwo += inputArray[i];
    }

    //stores history for use before equals operator in printToHistoryFunction
    tempHistoryInput = inputDisplay;

    //checks operator in use and prints to display, soft resets memory
    switch(operator) {
        case '+' :
            answer = Number.parseInt(numberOne) + Number.parseInt(numberTwo);
            output();
            break;
        case '-' :
            answer = numberOne - numberTwo;
            output();
            break;
        case '*' :
            answer = numberOne * numberTwo;
            output();
            break;
        case '/' :
            answer = numberOne / numberTwo;
            output();
            break;
    }
}

//output calculation, will clear memory upon completion
function output() {
    printToHistory()
    inputDisplay = '';
    document.getElementById('displayOutput').innerHTML = answer;
    clearMemoryLite()
}

//clears non-display memory
function clearMemoryLite() {
    operatorToggle = true;
    operator = '';
    resume = '';
    numberOne = '';
    numberTwo = '';
    answer = '';
}

//clears all memory
function clearMemory() {
    clearMemoryLite();
    inputDisplay = '';
    tempHistoryInput = undefined;
    document.getElementById('displayOutput').innerHTML = "";
}

//prints display + answer to history output
function printToHistory() {    
    newHistoryElement.textContent = tempHistoryInput + ' = ' + answer;
    historyElement.appendChild(newHistoryElement);
    historyCounter += 1 ;
    console.log(historyCounter);
}