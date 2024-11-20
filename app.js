// Function to append value to the display
function appendtodisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

// Function to calculate the result of the expression in the display
function calculateResult() {
  const display = document.getElementById('display');
  try {
    // Evaluate the expression and display the result
    display.value = eval(display.value);
  } catch (error) {
    // If the expression is invalid, show an error message
    display.value = 'Error';
  }
}

