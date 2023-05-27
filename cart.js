var cart = [];



function addToCart(product, price) {
  // Agregar un producto al carrito
  cart.push({product: product, price: price});

  // Actualizar la cantidad de productos en el carrito
  var cartCount = document.querySelector('#cart-module a');
  cartCount.textContent = 'Carrito (' + cart.length + ')';

  // Actualizar el contenido del carrito
  var cartDropdown = document.querySelector('#cart-module #cart-dropdown');
  var cartContent = '';
  for (var i = 0; i < cart.length; i++) {
    cartContent += '<p>' + cart[i].product + ': $' + cart[i].price + '</p>';
  }
  cartDropdown.innerHTML = cartContent;

  // Mostrar el carrito
  cartDropdown.style.display = 'block';
}

var addToCartForm = document.querySelector('#add-to-cart-form');
addToCartForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var productName = document.querySelector('#product-name').value;
  var productPrice = document.querySelector('#product-price').value;
  addToCart(productName, productPrice);
});

function toggleCart() {
	// Mostrar o ocultar el carrito
	var cartDropdown = document.querySelector('#cart-module #cart-dropdown');
	if (cartDropdown.style.display === 'block') {
		cartDropdown.style.display = 'none';
	} else {
		cartDropdown.style.display = 'block';
	}
}
