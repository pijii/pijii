function addToInput(value) {
    //shortcut for DOM
    const inputElement = document.getElementById('userInput');
    //Changing the Value
    inputElement.value += value;
}

function clearInput(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        // if there is value in input
        inputElement.value = '';
    }
}

function calculateResult() {
    const inputElement = document.getElementById('userInput');
    try {
        const expression = inputElement.value
        //replace the value thru global search
            .replace(/÷/g, '/') 
            .replace(/×/g, '*'); 
        //evaluating the result
        const result = eval(expression);
        //putting the value into the Input
        inputElement.value = result;
    } catch (error) {
        //if the function is error
        inputElement.value = 'Error';
    }
}                          