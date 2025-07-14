export function initDropdownHandler() {
  const dropdownTrigger = document.querySelector('.dropdown-hover-item');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const dropdownIcon = document.querySelector('.dropdown-hover-item i.nav__items-item-link-down');

  if (dropdownTrigger && dropdownMenu) {
      dropdownTrigger.addEventListener('click', (e) => {
          console.log(e.target.classList)
          if(e.target.classList.contains('nav__items-item-link') ||
              e.target.classList.contains('nav__items-item-link-down')) {

              if (dropdownMenu.style.display === 'flex') {
                  dropdownMenu.style.display = 'none';
                  dropdownIcon.classList.remove('fa-chevron-up');
                  dropdownIcon.classList.add('fa-chevron-down');
              } else {
                  dropdownMenu.style.display = 'flex';
                  dropdownIcon.classList.remove('fa-chevron-down');
                  dropdownIcon.classList.add('fa-chevron-up')
              }
          }
      });

      document.addEventListener('click', (event) => {
          if (!dropdownTrigger.contains(event.target) && !dropdownMenu.contains(event.target)) {
              dropdownMenu.style.display = 'none';
              dropdownIcon.classList.remove('fa-chevron-up');
              dropdownIcon.classList.add('fa-chevron-down');
          }
      });
  }
} 
