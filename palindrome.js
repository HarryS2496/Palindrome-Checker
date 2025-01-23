function checkPalindrome() {
  const input = document.getElementById('textInput').value;
  const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]+/g, '');
  const reversedInput = cleanedInput.split('').reverse().join('');
  
  const inputResult = document.getElementById('result');

  if (cleanedInput === reversedInput) {
    inputResult.textContent = `"${input}" is a palindrome!`;
  }
  else {
    inputResult.textContent = `"${input}" is not a palindrome!`;
  }
}