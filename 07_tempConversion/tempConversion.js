const convertToCelsius = function(num) {
  celsius = (num - 32)/1.8
  celsius = Number(celsius.toFixed(1))
  return celsius;

};

const convertToFahrenheit = function(temp) {
  fahrenheit = (temp * 1.8) + 32
  fahrenheit = Number(fahrenheit.toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
