function totalPrice() {
  const subtotal = parseFloat(
    (getElementValue("phone-amount") + getElementValue("case-amount")).toFixed(
      2
    )
  );
  const tax = parseFloat((subtotal * (10 / 100)).toFixed(2));

  updateElementValue("subtotal", subtotal);
  updateElementValue("tax", tax);
  updateElementValue("total", parseFloat((subtotal + tax).toFixed(2)));
}



document.getElementById('btn-check-out').addEventListener('click', function(){
    const total =  getElementValue("total");
    alert('You need to pay: '+'$'+total);
})