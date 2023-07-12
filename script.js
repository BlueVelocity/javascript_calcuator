let displayElement = document.getElementById('')
let previousInput = '';
let answer = undefined;
let tempHistoryInput = undefined;
let historyCounter = 0;

inputDisplay = '';

let historyElement = document.getElementById('output-history-list');
let newHistoryElement = document.createElement('span');

// displays a number character within the display
// limits the display input to 25 characters, will prompt the user-agent when character limit is reached
function display(input) {
    if ( inputDisplay.length >= 25) {
        alert('Calculator poorly programmed, memory unstable. Please complete operation or clear field');
    } else {
        inputDisplay += input;
        previousInput = input;
        document.getElementById('displayOutput').innerHTML = inputDisplay;
        operatorToggle = true
    }
}

// used to update the display when an operator is selected
function displayOperator(input) {
    if (operatorToggle == true) {
        inputDisplay += input;
        document.getElementById('displayOutput').innerHTML = inputDisplay;
        operatorToggle = false;
    }
}

// called when the equal button is pressed
function equals() {
    
    // converts input to array to be read by check loops
    let resume = undefined;
    let inputArray = inputDisplay.split('');
    let calcArray = [];
    let tempNumber = '';
    let tempOperator = '';

    //checks for no value and start and end of input, if so, insert a '0' into array
    if (inputArray[0] == '+' || inputArray[0] == '-' || inputArray[0] == '*' || inputArray[0] == '/') {
        inputArray.unShift('0');
    }

    if (inputArray[inputArray.length - 1] == '+' || inputArray[inputArray.length - 1] == '-' || inputArray[inputArray.length - 1] == '*' || inputArray[inputArray.length - 1] == '/') {
        inputArray.push('0');
    }

    //creates array from input, separates integers and operators relationally within the array
    for (i = 0; i < inputArray.length; i++) {
        if (/\d+/.test(inputArray[i])) {
            tempNumber += inputArray[i];
        } else {
            resume = i + 1;
            tempOperator = inputArray[i];
            calcArray.push(`${tempNumber}`, `${tempOperator}`);
            tempNumber = '';
            tempOperator = '';
        }
    }
    calcArray.push(`${tempNumber}`);

    // computational logic following order of operations
    for (i= 0; i < calcArray.length; i++) {
        if (calcArray[i] === '*' || calcArray[i] === '/') {
            let output = null;
            if (calcArray[i] === '/') {
                output = calcArray[i-1] / calcArray[i+1];
            } else {
                output = calcArray[i-1] * calcArray[i+1];
            }
            calcArray.splice(i+2, 0, output);
            calcArray.splice(i-1, 3);
            i -= 2;
        }
    }

    for (i=0; i < calcArray.length; i++) {
        if (calcArray[i] === '+' || calcArray[i] === '-') {
            let output = null;
            if (calcArray[i] === '+') {
                output = Number.parseInt(calcArray[i-1]) + Number.parseInt(calcArray[i+1]);
            } else {
                output = calcArray[i-1] - calcArray[i+1];
            }
            calcArray.splice(i+2, 0, output);
            calcArray.splice(i-1, 3);
            i -= 2;
        }
    }

    //converts array to int, then to string
    let output = calcArray[0];
    answer = output.toString();

    // stores history for use before equals operator in printToHistoryFunction
    tempHistoryInput =  inputDisplay;

    outputToDisplay();
}

// output calculation, will clear memory upon completion
function outputToDisplay() {
    printToHistory();
    inputDisplay = '';
    document.getElementById('displayOutput').innerHTML = answer;
    clearMemoryLite()
}

// prints display + answer to history output
function printToHistory() {
    historyElement.parentNode.insertBefore(newHistoryElement, historyElement.nextSibling)
    newHistoryElement.textContent = tempHistoryInput + ' = ' + answer;
    historyCounter += 1 ;
    console.log(`historyCounter = ${historyCounter}`)
}

// clears non-display memory
function clearMemoryLite() {
    resume = '';
    numberOne = '';
    numberTwo = '';
    answer = '';
    startNull = false;
    endNull = true;
}

// clears all memory
function clearMemory() {
    clearMemoryLite();
    inputDisplay = '';
    tempHistoryInput = undefined;
    document.getElementById('displayOutput').innerHTML = "";
}