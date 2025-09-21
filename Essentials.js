
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.closest('li');
      const id = product.dataset.id;
      const name = product.dataset.name;
      const price = product.dataset.price;

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      const existing = cart.find(item => item.id === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          id,
          name,
          price: parseFloat(price),
          quantity: 1
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      // Redirect to cart page
      window.location.href = 'cart.html';
    });
  });
  
  if (confirm(`${name} added to cart! Go to your cart now?`)) {
  window.location.href = 'cart.html';
}
