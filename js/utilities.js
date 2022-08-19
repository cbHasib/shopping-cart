function updateElementValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function updateInputValue(elementId, isIncrease) {
  const element = document.getElementById(elementId);
  let elementValue = parseFloat(element.value);

  if (isIncrease) {
    elementValue += 1;
  } else {
    elementValue -= 1;
  }
  element.value = elementValue;
  return elementValue;
}

function getInputValue(elementId) {
  const elementString = document.getElementById(elementId).value;
  const elementValue = parseFloat(elementString);
  return elementValue;
}

function getElementValue(elementId) {
  const elementString = document.getElementById(elementId).innerText;
  const elementValue = parseFloat(elementString);
  return elementValue;
}
