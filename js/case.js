document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateInputValue("case-number-field", true);
  updateElementValue("case-amount", newCaseNumber * 59);
  totalPrice();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateInputValue("case-number-field", false);

    updateElementValue("case-amount", newCaseNumber * 59);
    totalPrice();
  });

document
  .getElementById("case-number-field")
  .addEventListener("mouseup", function () {
    const newCaseAmount = getInputValue("case-number-field") * 59;
    updateElementValue("case-amount", newCaseAmount);
    totalPrice();
  });

document
  .getElementById("case-number-field")
  .addEventListener("keyup", function () {
    const newCaseAmount = getInputValue("case-number-field") * 59;
    updateElementValue("case-amount", newCaseAmount);
    totalPrice();
  });

document.getElementById("remove-case").addEventListener("click", function () {
  document.getElementById("case").classList.add("hidden");

  updateElementValue("case-amount", 0);
  totalPrice();
});
