document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updateInputValue("phone-number-field", true);
    updateElementValue("phone-amount", newPhoneNumber * 1219);
    totalPrice();
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updateInputValue("phone-number-field", false);

    updateElementValue("phone-amount", newPhoneNumber * 1219);
    totalPrice();
  });

document
  .getElementById("phone-number-field")
  .addEventListener("mouseup", function () {
    const newPhoneAmount = getInputValue("phone-number-field") * 1219;
    updateElementValue("phone-amount", newPhoneAmount);
    totalPrice();
  });

document
  .getElementById("phone-number-field")
  .addEventListener("keyup", function () {
    const newPhoneAmount = getInputValue("phone-number-field") * 1219;
    updateElementValue("phone-amount", newPhoneAmount);
    totalPrice();
  });

document.getElementById("remove-phone").addEventListener("click", function () {
  document.getElementById("phone").classList.add("hidden");

  updateElementValue("phone-amount", 0);
  totalPrice();
});
