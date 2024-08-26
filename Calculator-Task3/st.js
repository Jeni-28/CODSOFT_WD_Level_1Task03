
const display = document.querySelector('input[name="display"]');


function appendValue(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}


function deleteLastChar() {
    display.value = display.value.toString().slice(0, -1);
}


function calculate() {
    try {
        
        display.value = eval(display.value);
    } catch (e) {
        
        display.value = 'Error';
    }
}


document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'AC') {
            clearDisplay();
        } else if (value === 'DE') {
            deleteLastChar();
        } else if (value === '=') {
            calculate();
        } else {
            appendValue(value);
        }
    });
});
