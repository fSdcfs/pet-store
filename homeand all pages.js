// ========== Cart Functions ==========
const cartItems = document.getElementById("cart-items");
const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = button.getAttribute("data-price");

    const li = document.createElement("li");
    li.innerHTML = `
      ${name} - ₹${price}
      <button class="remove-btn">Remove</button>
      <button class="buy-btn">Buy</button>
    `;
    cartItems.appendChild(li);

    // Remove item from cart
    li.querySelector(".remove-btn").addEventListener("click", () => {
      li.remove();
    });

    // Buy button no longer shows alert
    li.querySelector(".buy-btn").addEventListener("click", () => {
      li.remove();
    });
  });
});

// ========== Checkout Form Enhancement ==========
const checkoutForm = document.getElementById("checkout-form");

if (checkoutForm) {
  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const payment = document.getElementById("payment").value;

    if (!name || !address || !payment) {
      alert("Please fill in all fields.");
      return;
    }

    // Clear cart and form
    cartItems.innerHTML = "";
    checkoutForm.reset();

    // Show order placed alert
    alert("🎉 Your order has been placed! Thank you, " + name + "!");
  });
}