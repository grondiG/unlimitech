export function initCartHandler() {
  const cartToggleButton = document.querySelector('.cart-toggle-button');
  const cartOverlay = document.querySelector('.cart-overlay');
  const cartCloseButton = document.querySelector('.cart__close-btn');

  const toggleCart = (e) => {
      e.preventDefault();
      cartOverlay.classList.toggle('active');
  };

  if (cartToggleButton) {
      cartToggleButton.addEventListener('click', toggleCart);
  }

  if (cartCloseButton) {
      cartCloseButton.addEventListener('click', toggleCart);
  }

  if (cartOverlay) {
      cartOverlay.addEventListener('click', (e) => {
          if (e.target === cartOverlay) {
              cartOverlay.classList.remove('active');
          }
      });
  }
} 
