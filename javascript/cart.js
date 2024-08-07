function addToCart(image, name, price) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(item => item.image === image);
    if (existingItemIndex >= 0) {
        // If it exists, increase the quantity
        cart[existingItemIndex].quantity++;
    } else {
        // If it does not exist, add a new item
        cart.push({
            image,
            name,
            price,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}

function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear the cart container

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}"> <!-- Ensure the folder path is correct -->
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity('${item.image}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity('${item.image}', 1)">+</button>
                </div>
                <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-button" onclick="removeFromCart('${item.image}')">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

function updateQuantity(image, change) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    const itemIndex = cart.findIndex(item => item.image === image);
    if (itemIndex >= 0) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1); // Remove item if quantity is zero or less
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Refresh the cart display
}

function removeFromCart(image) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart = cart.filter(item => item.image !== image);

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Refresh the cart display
}

function placeOrder() {
    // Get the cart from localStorage and parse it
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log('Cart:', cart); // Debugging line

    // Check if cart is null, undefined, or empty
    if (!cart || cart.length === 0) {
        alert('No items selected. Please add items to the cart before placing an order.');
        return;
    }

    // Clear the cart
    localStorage.removeItem('cart');

    // Redirect to payment page
    window.location.href = 'payment.html';
}

// Initialize the cart display on page load
document.addEventListener('DOMContentLoaded', displayCart);