

  function addToCart(image, name, price) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({
        image,
        name,
        price
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}