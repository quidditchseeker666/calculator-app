let currentValue = '0';
let previousValue = '';
let operator = '';

const currentDisplay = document.getElementById('current');
const previousDisplay = document.getElementById('previous');

// Add number or operator to display
function addValue(value) {
    // If current is "0" and user presses a number
    if (currentValue === '0' && value !== '.' && !isOperator(value)) {
        currentValue = value;
    }
    // If user presses operator
    else if (isOperator(value)) {
        if (previousValue && operator) {
            calculate();
        }
        previousValue = currentValue;
        operator = value;
        previousDisplay.textContent = previousValue + ' ' + getSymbol(operator);
        currentValue = '0';
    }
    // Prevent multiple dots
    else if (value === '.' && currentValue.includes('.')) {
        return;
    }
    // Normal number press
    else {
        currentValue += value;
    }

    currentDisplay.textContent = currentValue;
}

// Calculate result
function calculate() {
    if (!previousValue || !operator) return;

    let prev = parseFloat(previousValue);
    let curr = parseFloat(currentValue);
    let result;

    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/':
            if (curr === 0) {
                alert('❌ Cannot divide by zero!');
                clearAll();
                return;
            }
            result = prev / curr;
            break;
        case '%': result = prev % curr; break;
        default: return;
    }

    // Round to avoid floating point issues
    result = Math.round(result * 100000000) / 100000000;

    previousDisplay.textContent = previousValue + ' ' + getSymbol(operator) + ' ' + currentValue + ' =';
    currentValue = String(result);
    currentDisplay.textContent = currentValue;
    previousValue = '';
    operator = '';
}

// Clear everything
function clearAll() {
    currentValue = '0';
    previousValue = '';
    operator = '';
    currentDisplay.textContent = '0';
    previousDisplay.textContent = '';
}

// Delete last character
function deleteLast() {
    if (currentValue.length === 1 || currentValue === '0') {
        currentValue = '0';
    } else {
        currentValue = currentValue.slice(0, -1);
    }
    currentDisplay.textContent = currentValue;
}

// Check if value is operator
function isOperator(value) {
    return ['+', '-', '*', '/', '%'].includes(value);
}

// Get display symbol
function getSymbol(op) {
    switch (op) {
        case '*': return '×';
        case '/': return '÷';
        case '-': return '−';
        default: return op;
    }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') addValue(e.key);
    else if (e.key === '.') addValue('.');
    else if (e.key === '+') addValue('+');
    else if (e.key === '-') addValue('-');
    else if (e.key === '*') addValue('*');
    else if (e.key === '/') { e.preventDefault(); addValue('/'); }
    else if (e.key === '%') addValue('%');
    else if (e.key === 'Enter' || e.key === '=') calculate();
    else if (e.key === 'Backspace') deleteLast();
    else if (e.key === 'Escape') clearAll();
});

console.log('🧮 Calculator loaded!');

