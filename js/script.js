var button1 = document.querySelector('.button-1'),
  button2 = document.querySelector('.button-2'),
  output = document.querySelector('.temp-output'),
  info = document.querySelector('.info'),
  temp1,
  temp2,
  tempValue;


var toFahrenheit = function (tempValue) {
  return Math.round(tempValue * 1.8 + 32);
};

var toCelsius = function (tempValue) {
  return Math.round((tempValue - 32) / 1.8);
};

//fun water statement
function waterStatementCels(tempValue, currentCallback) {
  if (currentCallback == 'toFahrenheit') {

    if (tempValue > 0 && tempValue < 100) {
      info.innerHTML = 'In this temperature water is a liquid';
    } else if (tempValue >= 100) {
      info.innerHTML = 'In this temperature water is a gas';
    } else {
      info.innerHTML = 'In this temperature water is a frost';
    }
  } else if (currentCallback == 'toCelsius') {

    if (tempValue > 32 && tempValue < 212) {
      info.innerHTML = 'In this temperature water is a liquid';
    } else if (tempValue >= 212) {
      info.innerHTML = 'In this temperature water is a gas';
    } else {
      info.innerHTML = 'In this temperature water is a frost';
    }
  }
}

function calculate(callback) {
  var currentCallback = callback.name;
  tempValue = window.prompt('Enter temp value');
  if (callback == toCelsius) {
    temp1 = ' Fahrenheit';
    temp2 = ' Celsius';
  } else {
    temp2 = ' Fahrenheit';
    temp1 = ' Celsius';
  }

  if (tempValue != "" && tempValue != "null" && !isNaN(tempValue) && (typeof (tempValue) != 'object')) {
    output.innerHTML = tempValue + temp1 + ' is ' + callback(tempValue) + temp2;
    waterStatementCels(tempValue, currentCallback);
  } else {
    output.innerHTML = 'Incorrect format, try again';
    info.innerHTML = "";
  }
};

button1.addEventListener('click', function () {
  calculate(toCelsius);
});
button2.addEventListener('click', function () {
  calculate(toFahrenheit);
});