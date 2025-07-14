export function initSearchHandler() {
  const searchInputNav = document.querySelector('.nav__additional__search-input');
  const searchModalOverlay = document.querySelector('.search-modal-overlay');
  const searchModalCloseBtn = document.querySelector('.search-modal__close-btn');
  const searchModalInput = document.querySelector('.search-modal__input');

  const openSearchModal = () => {
      searchModalOverlay.classList.add('active');
      searchModalInput.focus();
  };

  const closeSearchModal = () => {
      searchModalOverlay.classList.remove('active');
  };

  if (searchInputNav) {
      searchInputNav.addEventListener('click', openSearchModal);
  }

  if (searchModalCloseBtn) {
      searchModalCloseBtn.addEventListener('click', closeSearchModal);
  }

  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModalOverlay.classList.contains('active')) {
          closeSearchModal();
      }
  });
} 