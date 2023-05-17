const numberInput = document.getElementById('numberInput');
const output = document.getElementById('output');

numberInput.addEventListener('input', handleInput);

function handleInput() {
  const value = parseInt(numberInput.value);

  if (isNaN(value)) {
    output.textContent = '';
  } else if (value < 0) {
    output.textContent = 'Enter a positive value';
  } else if (value % 2 === 0) {
    const evenNumbers = [value + 2, value + 4, value + 6];
    output.textContent = 'Next 3 even numbers: ' + evenNumbers.join(', ');
  } else {
    const oddNumbers = [value + 2, value + 4, value + 6];
    output.textContent = 'Next 3 odd numbers: ' + oddNumbers.join(', ');
  }
}
