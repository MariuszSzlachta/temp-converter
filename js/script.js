var button = document.querySelector(".button"),
  output = document.querySelector(".temp-output"),
  tempValue;

button.addEventListener('click', function() {
  tempValue = window.prompt('Enter temp in Fahrenheit');
  console.log(Number(tempValue));

  if (tempValue != "" && tempValue !== "null" && Number(tempValue)) {
    output.innerHTML = tempValue + ' stopni Fahrenheita to ' + (tempValue * 1.8 + 32) + ' stopni Celsiusza';
  } else {
    output.innerHTML = 'Zapisz poprawnie temperaturę';
  }
});

 