export function showBurgerMenu() {
    const burgerMenu = document.querySelector('.menu-toggle-button');
    if(window.innerWidth <= 1330) {
        burgerMenu.classList.add('active');
    }
    window.addEventListener('resize', function(event) {
        if (window.innerWidth <= 1330) {
            burgerMenu.classList.add('active');
        } else {
            burgerMenu.classList.remove('active');
        }
    }, true);
}

export function toggleMenu(){
    const menuToggleButton = document.querySelector('.menu-toggle-button');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const shoesSubmenuTrigger = document.querySelector('.mobile-menu__item:first-child'); // The 'Damskie buty' item
    const submenu = document.querySelector('.mobile-menu__submenu');
    const submenuBackBtn = document.querySelector('.mobile-menu__submenu-back-btn');
    const submenuItems = document.querySelectorAll('.mobile-menu__submenu-items li');
    const czolenkaTrigger = document.querySelector('.mobile-menu__submenu-items li:nth-child(3)'); // "Czółenka" item
    const tertiaryMenu = document.querySelector('.mobile-menu__tertiary-menu');
    const tertiaryMenuBackBtn = document.querySelector('.mobile-menu__tertiary-menu-back-btn');
    const tertiaryMenuCloseBtn = document.querySelector('.mobile-menu__tertiary-menu-close-btn');

    const openMenu = () => {
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.add('active');
            submenu.classList.remove('active');
            mobileMenu.classList.remove('mobile-menu--submenu-active');
        }
    };

    const closeMenu = () => {
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
            submenu.classList.remove('active');
            tertiaryMenu.classList.remove('active'); // NEW
            mobileMenu.classList.remove('mobile-menu--submenu-active');
        }
    };

    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            openMenu();
        });
    }

    if (mobileMenuCloseBtn) {
        mobileMenuCloseBtn.addEventListener('click', closeMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) {
                closeMenu();
            }
        });
    }

    if (shoesSubmenuTrigger) {
        shoesSubmenuTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            submenu.classList.add('active');
            mobileMenu.classList.add('mobile-menu--submenu-active');
        });
    }

    if (submenuBackBtn) {
        submenuBackBtn.addEventListener('click', () => {
            submenu.classList.remove('active');
            mobileMenu.classList.remove('mobile-menu--submenu-active');
        });
    }

    if (submenuItems) {
        submenuItems.forEach(item => {
            item.addEventListener('click', () => {
                submenuItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });
    }

    if (czolenkaTrigger) {
        czolenkaTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            tertiaryMenu.classList.add('active');
        });
    }

    if (tertiaryMenuBackBtn) {
        tertiaryMenuBackBtn.addEventListener('click', () => {
            tertiaryMenu.classList.remove('active');
        });
    }

    if (tertiaryMenuCloseBtn) {
        tertiaryMenuCloseBtn.addEventListener('click', closeMenu);
    }
}
