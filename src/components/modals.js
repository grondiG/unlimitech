import {
  polbutyIcon,
  jazzowkiIcon,
  szpilkiIcon,
  balerinkiIcon,
  sandalyIcon,
  klapkiIcon,
  botkiIcon,
  kozakiIcon,
  outletIcon
} from '../assets/index.js';

export function createModals() {
  return `
    <div class="cart-overlay">
      <div class="cart">
          <div class="cart__container">
          <div class="cart__header">
              <h2 class="cart__title">Koszyk <span class="cart__item-count">(2 sztuki)</span></h2>
              <button class="cart__close-btn">
                  <i class="fa-regular fa-circle-xmark"></i>
              </button>
          </div>
          <div class="cart__items">
              <div class="cart__items-item">
                  <img class="cart__items-item__image" src="https://picsum.photos/seed/1212/620/850" alt="Półbuty mokasyny na grubej podeszwie">
                  <div class="cart__items-item__details">
                      <p class="cart__items-item__name">Półbuty mokasyny na grubej podeszwie</p>
                      <p class="cart__items-item__price-info">1 szt. x 129,99 zł</p>
                  </div>
                  <button class="cart__items-item__delete-btn">
                      <i class="fa-solid fa-trash"></i>
                  </button>
              </div>
              <div class="cart__items-item">
                  <img class="cart__items-item__image" src="https://picsum.photos/seed/3434/620/850" alt="Półbuty skóra naturalna - model 258">
                  <div class="cart__items-item__details">
                      <p class="cart__items-item__name">Półbuty skóra naturalna - model 258</p>
                      <p class="cart__items-item__price-info">1 szt. x 129,99 zł</p>
                  </div>
                  <button class="cart__items-item__delete-btn">
                      <i class="fa-solid fa-trash"></i>
                  </button>
              </div>
          </div>
          </div>
          <div class="cart__footer">
              <div class="cart__shipping-info">
                  <i class="fa-solid fa-box-open" style="color: #0068FF"></i>
                  <p>Do darmowej dostawy brakuje: <strong>39,99 zł</strong></p>
              </div>
              <div class="cart__progress-bar">
                      <div class="cart__progress-bar-fill"></div>
              </div>
              <div class="cart__total">
                  <span class="cart__total-label">Razem do zapłaty:</span>
                  <span class="cart__total-amount">129,99 zł</span>
              </div>
              <button class="cart__checkout-btn">Przejdź do koszyka</button>
          </div>
      </div>
    </div>
    
    <div class="search-modal-overlay">
        <div class="search-modal">
            <div class="search-modal__bar">
                <input type="text" class="search-modal__input" placeholder="Wyszukaj">
                <button class="search-modal__search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <button class="search-modal__close-btn">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>
            <div class="search-modal__content">
                <h2 class="search-modal__title">Wyszukiwane produkty</h2>
                <div class="search-modal__products">
                    <div class="search-modal__product-item">
                        <img src="https://picsum.photos/seed/ab1/620/850" alt="Półbuty mokasyny na grubej podeszwie">
                        <p class="search-modal__product-name">Półbuty mokasyny na grubej podeszwie</p>
                        <p class="search-modal__product-availability">Zapato | Dostępny</p>
                        <p class="search-modal__product-price">350,10zł</p>
                    </div>
                    <div class="search-modal__product-item">
                        <img src="https://picsum.photos/seed/cd2/620/850" alt="Półbuty skóra naturalna - model 258">
                        <p class="search-modal__product-name">Półbuty skóra naturalna - model 258</p>
                        <p class="search-modal__product-availability">Zapato | Dostępny</p>
                        <p class="search-modal__product-price">350,10zł</p>
                    </div>
                    <div class="search-modal__product-item">
                         <img src="https://picsum.photos/seed/ef3/620/850" alt="Półbuty mokasyny na grubej podeszwie">
                         <p class="search-modal__product-name">Półbuty mokasyny na grubej podeszwie</p>
                        <p class="search-modal__product-availability">Zapato | Dostępny</p>
                        <p class="search-modal__product-price">350,10zł</p>
                    </div>
                    <div class="search-modal__product-item">
                        <img src="https://picsum.photos/seed/gh4/620/850" alt="Półbuty skóra naturalna - model 258">
                        <p class="search-modal__product-name">Półbuty skóra naturalna - model 258</p>
                        <p class="search-modal__product-availability">Zapato | Dostępny</p>
                        <p class="search-modal__product-price">350,10zł</p>
                    </div>
                </div>
                <a href="#" class="search-modal__show-all">Pokaż wszystkie</a>
            </div>
        </div>
    </div>
        <div class="mobile-menu-overlay">
        <div class="mobile-menu">
            <div class="mobile-menu__header">
                <h2 class="mobile-menu__title">Menu</h2>
                <button class="mobile-menu__close-btn">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="mobile-menu__content">
                <ul class="mobile-menu__items">
                    <li class="mobile-menu__item">
                        <a href="#">Damskie buty skórzane</a>
                        <i class="fa-solid fa-chevron-right"></i>
                    </li>
                    <li class="mobile-menu__item"><a href="#">Bony podarunkowe</a></li>
                    <li class="mobile-menu__item"><a href="#">Nowości</a></li>
                    <li class="mobile-menu__item"><a href="#">Bestsellery</a></li>
                    <li class="mobile-menu__item sale"><a href="#">% Wyprzedaż %</a></li>
                </ul>
                <ul class="mobile-menu__user-items">
                    <li class="mobile-menu__item"><a href="#">Zaloguj / Zarejestruj</a></li>
                    <li class="mobile-menu__item"><a href="#">Schowek</a></li>
                    <li class="mobile-menu__item"><a href="#">Koszyk</a></li>
                </ul>
            </div>
            <div class="mobile-menu__footer">
                 <div class="mobile-menu__contact">
                    <a href="tel:+48000000000" class="mobile-menu__contact-item">
                        <i class="fa-solid fa-phone"></i>
                        <span>(+48) 000 000 000</span>
                    </a>
                    <a href="mailto:sklep@kontakt.com.pl" class="mobile-menu__contact-item">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <span>sklep@kontakt.com.pl</span>
                    </a>
                 </div>
                 <div class="mobile-menu__socials">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                 </div>
            </div>
    
<div class="mobile-menu__submenu">
    <div class="mobile-menu__submenu-header">
        <button class="mobile-menu__submenu-back-btn">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <h2 class="mobile-menu__submenu-title">Damskie buty skórzane</h2>
    </div>
    <div class="mobile-menu__submenu-content">
        <ul class="mobile-menu__submenu-items">
            <li>
                <a href="#">
                    <img src="${polbutyIcon}" alt="Półbuty Icon">
                    <span>Półbuty</span>
                </a>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
                <a href="#">
                    <img src="${jazzowkiIcon}" alt="Jazzówki Icon">
                    <span>Jazzówki</span>
                </a>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li class="active">
                <a href="#">
                    <img src="${szpilkiIcon}" alt="Czółenka Icon">
                    <span>Czółenka</span>
                </a>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
                <a href="#">
                    <img src="${balerinkiIcon}" alt="Baleriny Icon">
                    <span>Baleriny</span>
                </a>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
                <a href="#">
                    <img src="${sandalyIcon}" alt="Sandały Icon">
                    <span>Sandały</span>
                </a>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
                <a href="#">
                    <img src="${klapkiIcon}" alt="Klapki Icon">
                    <span>Klapki</span>
                </a>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
                <a href="#">
                    <img src="${botkiIcon}" alt="Botki Icon">
                    <span>Botki</span>
                </a>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
                <a href="#">
                    <img src="${kozakiIcon}" alt="Kozaki Icon">
                    <span>Kozaki</span>
                </a>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
                <a href="#">
                    <img src="${outletIcon}" alt="Outlet Icon">
                    <span>Outlet</span>
                </a>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li class="show-all">
                <a href="#">
                    <span>Pokaż wszystkie</span>
                </a>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
                </ul>
            </div>
            </div>
            <div class="mobile-menu__tertiary-menu">
    <div class="mobile-menu__tertiary-menu-header">
        <button class="mobile-menu__tertiary-menu-back-btn">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <h2 class="mobile-menu__tertiary-menu-title">Czółenka</h2>
         <button class="mobile-menu__tertiary-menu-close-btn">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
    <div class="mobile-menu__tertiary-menu-content">
        <ul class="mobile-menu__tertiary-menu-items">
            <li><a href="#">czółenka na słupku</a></li>
            <li><a href="#">szpilki</a></li>
            <li><a href="#">czółenka na koturnie</a></li>
            <li><a href="#">czółenka bez pięty</a></li>
            <li><a href="#">czółenka na niskim obcasie</a></li>
            <li class="show-all">
                <a href="#">Pokaż wszystkie</a>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
        </ul>
    </div>
</div>
        </div>
    </div>
  `
} 
