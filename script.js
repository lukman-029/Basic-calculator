function calculate() {
  let firstValue = Number(document.getElementById("firstValue").value);
  let operator = document.getElementById("operator").value;
  let secondValue =     Number(document.getElementById("secondValue").value);

  let result;
  if (operator === "+") {
    result = firstValue + secondValue;
  } else if (operator === "-") {
    result = firstValue - secondValue;
  } else if (operator === "*") {
    result = firstValue * secondValue;
  } else if (operator === "/") {
    if (num2 === 0) {
      result = "invalid inpute, cannot be divided by 0";
    } else {
      result = firstValue / secondValue;
    }
  } else {
    result = "Invalid operator";
  }
  document.getElementById("result").innerHTML = "Result: " + result;
}
