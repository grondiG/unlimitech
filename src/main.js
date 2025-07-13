import './style.scss'

import unlimitechLogo from './assets/logo.svg'

import phoneLogo from './assets/icons/phone-flip.svg'
import editLogo from './assets/icons/edit.svg'
import restockLogo from './assets/icons/restock.svg'
import shippingLogo from './assets/icons/shipping-fast.svg'
import searchLogo from './assets/icons/Search_light.svg'
import userLogo from './assets/icons/User_light.svg'
import favLogo from './assets/icons/Favorite_light.svg'
import bagLogo from './assets/icons/Bag_alt_light.svg'
import newsletterLogo from './assets/icons/newsletter.svg'
import arrowRightLogo from './assets/icons/arrow_right.svg'

import inpostKurierLogo from './assets/companies/InPost_kurier.svg'
import inpostLogo from './assets/companies/inpost_logotyp.svg'
import blikLogo from './assets/companies/Blik_logo 1.svg'
import przelewyLogo from './assets/companies/przelewy24-logo 1.svg'
import payPoLogo from './assets/companies/paypo.svg'
import paypalLogo from './assets/companies/1024px-PayPal_logo 1.svg'
import facebookLogo from './assets/companies/facebook (50).svg'
import instagramLogo from './assets/companies/instagram (48).svg'
import tiktokLogo from './assets/companies/tik-tok (6).svg'

import balerinkiIcon from './assets/categories/balerinki_60_60px 1.svg'
import botkiIcon from './assets/categories/botki_60_60px.svg'
import jazzowkiIcon from './assets/categories/jazzowki_60_60px.svg'
import klapkiIcon from './assets/categories/klapki_60_60px 1.svg'
import kozakiIcon from './assets/categories/kozaki_60_60px.svg'
import outletIcon from './assets/categories/outlet_60_60px.svg'
import polbutyIcon from './assets/categories/polbuty_60_60px.svg'
import sandalyIcon from './assets/categories/sandaly_60_60px.svg'
import szpilkiIcon from './assets/categories/szpiki_60_60px.svg'


document.querySelector('#app').innerHTML = `
      <div class="header">
        <ul class="header__items">
            <li class="header__items-item">
                <img src="${phoneLogo}" class="header__items-item-logo" alt="Phone Logo">
                <a href="#" class="header__items-item-content">(+48) 000 000 000</a>
            </li>
            <li class="header__items-item">
                <img src="${editLogo}" class="header__items-item-logo" alt="Phone Logo">
                <a href="#" class="header__items-item-content">Napisz do nas!</a>
            </li>
            <li class="header__items-item">
                <img src="${shippingLogo}" class="header__items-item-logo" alt="Phone Logo">
                <a href="#" class="header__items-item-content">Darmowa dostawa</a>
            </li>
            <li class="header__items-item">
                <img src="${restockLogo}" class="header__items-item-logo" alt="Phone Logo">
                <a href="#" class="header__items-item-content">30 dni na darmowy zwrot</a>
            </li>
            
      </ul>
  </div>
  <div class="container">
    <div class="nav">
        <div class="nav__logo">
            <img src="${unlimitechLogo}" class="nav__logo-image" alt="Unlimitech Logo">
        </div>
        <ul class="nav__items">
            <li class="nav__items-item dropdown-hover-item">
                <a href="#" class="nav__items-item-link">Damskie buty skórzane 
                <i class="nav__items-item-link-down fa fa-chevron-down"></i>
                </a>
<div class="dropdown-menu">
    <div class="dropdown-menu__categories">
        <ul>
            <li>
                <img src="${polbutyIcon}" alt="Półbuty Icon">
                <span>Półbuty</span>
            </li>
            <li>
                <img src="${jazzowkiIcon}" alt="Jazówki Icon">
                <span>Jazówki</span>
            </li>
            <li>
                <img src="${szpilkiIcon}" alt="Czółenka Icon">
                <span>Czółenka</span>
            </li>
            <li>
                <img src="${balerinkiIcon}" alt="Baleriny Icon">
                <span>Baleriny</span>
            </li>
            <li>
                <img src="${sandalyIcon}" alt="Sandały Icon">
                <span>Sandały</span>
            </li>
            <li>
                <img src="${klapkiIcon}" alt="Klapki Icon">
                <span>Klapki</span>
            </li>
            <li class="active">
                <img src="${botkiIcon}" alt="Botki Icon">
                <span>Botki</span>
            </li>
            <li>
                <img src="${kozakiIcon}" alt="Kozaki Icon">
                <span>Kozaki</span>
            </li>
            <li>
                <img src="${outletIcon}" alt="Outlet Icon">
                <span>Outlet</span>
            </li>
            <li>
                <a href="#" class="dropdown-menu__categories-showall">Pokaż wszystkie</a>
            </li>
        </ul>
    </div>
    <div class="dropdown-menu__navigation">
    <div class="dropdown-menu__navigation__links">
        <ul>
            <li><a href="#">sztyblety</a></li>
            <li><a href="#">botki płaskie</a></li>
            <li><a href="#">botki na słupku</a></li>
            <li><a href="#">botki sznurowane</a></li>
            <li><a href="#">workery</a></li>
            <li><a href="#">botki dziurkowane</a></li>
            <li><a href="#">botki wiosenne</a></li>
            <li><a href="#">botki z wycięciem</a></li>
            <li><a href="#">botki ażurowe</a></li>
        </ul>
    </div>
    <div class="dropdown-menu__navigation__links">
        <ul>
            <li><a href="#">botki na obcasie</a></li>
            <li><a href="#">botki kowbojki</a></li>
            <li><a href="#">botki na szpilce</a></li>
            <li><a href="#">botki ocieplane</a></li>
            <li><a href="#">botki jesienne</a></li>
            <li><a href="#">botki zimowe</a></li>
            <li><a href="#">botki na koturnie</a></li>
            <li><a href="#">botki letnie</a></li>
        </ul>
    </div>
    <div class="dropdown-menu__navigation__image">
        <img src="https://picsum.photos/seed/34534111/1275/1750" alt="Person wearing black boots">
    </div>
    </div>
</div>
            </li>
            <li class="nav__items-item">
                <a href="#" class="nav__items-item-link">Bony podarunkowe</a>
            </li>
            <li class="nav__items-item">
                <a href="#" class="nav__items-item-link">Nowości</a>
            </li>
            <li class="nav__items-item">
                <a href="#" class="nav__items-item-link">Bestsellery</a>
            </li>
            <li class="nav__items-item">
                <a href="#" class="nav__items-item-link danger">Wyprzedaż</a>
            </li>
        </ul>
        <div class="nav__additional">
        <div class="nav__additional__search">
            <input type="text" class="nav__additional__search-input" placeholder="Wyszukaj"/>
            <a href="#" class="nav__additional__search-button">
                <img class="nav__additional__search-button-image" src="${searchLogo}" alt="Search Icon"/>
            </a>
        </div>
        <a class="nav__additional__button" href="#">
            <div class="nav__additional__button-round">
                <img class="nav__additional__button-round-image" src="${userLogo}" alt="User Icon"/>
            </div>
        </a>
        <a class="nav__additional__button" href="#">
            <div class="nav__additional__button-round">
                <img class="nav__additional__button-round-image" src="${favLogo}" alt="Favourite Icon"/>
            </div>
        </a>
        <a class="nav__additional__button cart-toggle-button" href="#">
            <div class="nav__additional__button-round">
                 <img class="nav__additional__button-round-image" src="${bagLogo}" alt="Cart Icon"/>
            </div>
        </a>
        </div>
    </div>
    <div class="hero">
        <div class="hero__carousel">
          <div class="hero__carousel-slide"
            style="background-image: url('https://picsum.photos/seed/1/1920/1080'">
            <div class="hero__carousel-slide-content">
              <h1 class="hero__carousel-slide-content-title">Nowa kolekcja</h1>
              <p class="hero__carousel-slide-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <a href="#" class="hero__carousel-slide-button">Zobacz więcej</a>
          </div>
          <div class="hero__carousel-slide"
            style="background-image: url('https://picsum.photos/seed/2/1920/1080'">
           <div class="hero__carousel-slide-content">
              <h1 class="hero__carousel-slide-content-title">Nowa kolekcja</h1>
              <p class="hero__carousel-slide-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <a href="#" class="hero__carousel-slide-button">Zobacz więcej</a>
          </div>
          <div class="hero__carousel-slide"
            style="background-image: url('https://picsum.photos/seed/3/1920/1080'">
           <div class="hero__carousel-slide-content">
              <h1 class="hero__carousel-slide-content-title">Nowa kolekcja</h1>
              <p class="hero__carousel-slide-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <a href="#" class="hero__carousel-slide-button">Zobacz więcej</a>
          </div>
        </div>
        </div>
        <div class="gallery">
           <div class="item photo big">
                <div class="content">
                <img class="photothumb" alt="photo" src="https://picsum.photos/seed/321/1920/1080"/>
                </div>
           </div>
            <div class="item photo small">
                <div class="content">
                <img class="photothumb" alt="photo" src="https://picsum.photos/seed/123/1920/1080"/>
                </div>
           </div>
           <div class="item photo big">
                <div class="content">
                <img class="photothumb" alt="photo" src="https://picsum.photos/seed/432/1920/1080"/>
                </div>
           </div>
           <div class="item photo small">
                <div class="content">
                <img class="photothumb" alt="photo" src="https://picsum.photos/seed/543/1920/1080"/>
                </div>
           </div>
           <div class="item photo big">
                <div class="content">
                <img class="photothumb" alt="photo" src="https://picsum.photos/seed/542/1920/1080"/>
                </div>
           </div>
           <div class="item photo big">
                <div class="content">
                <img class="photothumb" alt="photo" src="https://picsum.photos/seed/654/1920/1080"/>
                </div>
           </div>
           <div class="item photo small">
                <div class="content">
                <img class="photothumb" alt="photo" src="https://picsum.photos/seed/762/1920/1080"/>
                </div>
           </div>
           <div class="item photo small">
                <div class="content">
                <img class="photothumb" alt="photo" src="https://picsum.photos/seed/621/1920/1080"/>
                </div>
           </div>
        </div>
        <div class="latest">
            <div class="latest__header">
                <ul class="latest__header__categories">
                    <li class="latest__header__categories-item active"><a href="#">Promocje</a></li>
                    <li class="latest__header__categories-item"><a href="#">Nowości</a></li>
                    <li class="latest__header__categories-item"><a href="#">Bestsellery</a></li>
                </ul>
                <a href="#" class="latest__header__show-all">Zobacz wszystkie</a>
            </div>
            <div class="latest__products">
                <div class="latest__products__carousel">
                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge bestseller">bestseller</p>
                            <p class="latest__products__carousel-slide-product-badges-badge new">nowość</p>
                        </div>
                        <img src="https://picsum.photos/seed/653445/620/850" alt="Product 1" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Półbuty mokasyny na grubej podeszwie</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <p class="latest__products__carousel-slide-product-price">350,10zł</p>
                        </div>
                    </div>
                </div>
                
                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge sale">promocja</p>
                        </div>
                        <img src="https://picsum.photos/seed/2137/620/850" alt="Product 2" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Półbuty mokasyny na grubej podeszwie</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <div class="discount__block">
                                <p class="latest__products__carousel-slide-product-price-discount">350,10zł</p>
                                <p class="latest__products__carousel-slide-product-price disabled">399,99zł</p>
                            </div>
                            <p class="latest__products__carousel-slide-product-price-discount-text">Najniższa cena z 30 dni przed obniżką: 399,99zł</p>
                        </div>
                    </div>
                </div>
                
                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge bestseller">bestseller</p>
                            <p class="latest__products__carousel-slide-product-badges-badge new">nowość</p>
                        </div>
                        <img src="https://picsum.photos/seed/2131/620/850" alt="Product 3" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Półbuty mokasyny na grubej podeszwie</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <p class="latest__products__carousel-slide-product-price">350,10zł</p>
                        </div>
                    </div>
                </div>
                
                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge sale">promocja</p>
                        </div>
                        <img src="https://picsum.photos/seed/3211/620/850" alt="Product 4" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Półbuty mokasyny na grubej podeszwie</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <div class="discount__block">
                                <p class="latest__products__carousel-slide-product-price-discount">350,10zł</p>
                                <p class="latest__products__carousel-slide-product-price disabled">399,99zł</p>
                            </div>
                            <p class="latest__products__carousel-slide-product-price-discount-text">Najniższa cena z 30 dni przed obniżką: 399,99zł</p>
                        </div>
                    </div>
                </div>
                
                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge bestseller">bestseller</p>
                        </div>
                        <img src="https://picsum.photos/seed/4455/620/850" alt="Product 5" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Eleganckie buty skórzane</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <p class="latest__products__carousel-slide-product-price">420,50zł</p>
                        </div>
                    </div>
                </div>
                
                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge new">nowość</p>
                        </div>
                        <img src="https://picsum.photos/seed/5566/620/850" alt="Product 6" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Sportowe sneakersy</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <p class="latest__products__carousel-slide-product-price">280,00zł</p>
                        </div>
                    </div>
                </div>
                
                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge sale">promocja</p>
                        </div>
                        <img src="https://picsum.photos/seed/6677/620/850" alt="Product 7" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Klasyczne oxfordy</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <div class="discount__block">
                                <p class="latest__products__carousel-slide-product-price-discount">299,99zł</p>
                                <p class="latest__products__carousel-slide-product-price disabled">349,99zł</p>
                            </div>
                            <p class="latest__products__carousel-slide-product-price-discount-text">Najniższa cena z 30 dni przed obniżką: 349,99zł</p>
                        </div>
                    </div>
                </div>
                
                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge bestseller">bestseller</p>
                            <p class="latest__products__carousel-slide-product-badges-badge new">nowość</p>
                        </div>
                        <img src="https://picsum.photos/seed/7788/620/850" alt="Product 8" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Wysokie botki zimowe</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <p class="latest__products__carousel-slide-product-price">450,00zł</p>
                        </div>
                    </div>
                </div>

                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge sale">promocja</p>
                        </div>
                        <img src="https://picsum.photos/seed/8899/620/850" alt="Product 9" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Letnie sandały</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <div class="discount__block">
                                <p class="latest__products__carousel-slide-product-price-discount">199,99zł</p>
                                <p class="latest__products__carousel-slide-product-price disabled">249,99zł</p>
                            </div>
                            <p class="latest__products__carousel-slide-product-price-discount-text">Najniższa cena z 30 dni przed obniżką: 249,99zł</p>
                        </div>
                    </div>
                </div>
                
                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge new">nowość</p>
                        </div>
                        <img src="https://picsum.photos/seed/9900/620/850" alt="Product 10" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Casualowe loafersy</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <p class="latest__products__carousel-slide-product-price">320,00zł</p>
                        </div>
                    </div>
                </div>
                
                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge bestseller">bestseller</p>
                        </div>
                        <img src="https://picsum.photos/seed/1010/620/850" alt="Product 11" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Trekkingowe buty górskie</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <p class="latest__products__carousel-slide-product-price">380,00zł</p>
                        </div>
                    </div>
                </div>
                
                <div class="latest__products__carousel-slide">
                    <div class="latest__products__carousel-slide-product">
                        <div class="latest__products__carousel-slide-product-badges">
                            <p class="latest__products__carousel-slide-product-badges-badge sale">promocja</p>
                            <p class="latest__products__carousel-slide-product-badges-badge new">nowość</p>
                        </div>
                        <img src="https://picsum.photos/seed/1111/620/850" alt="Product 12" class="latest__products__carousel-slide-product-image">
                        <div class="product-info">
                            <p class="latest__products__carousel-slide-product-title">Modne czółenka</p>
                            <p class="latest__products__carousel-slide-product-availability">Zapato | Dostępny</p>
                            <div class="discount__block">
                                <p class="latest__products__carousel-slide-product-price-discount">179,99zł</p>
                                <p class="latest__products__carousel-slide-product-price disabled">220,00zł</p>
                            </div>
                            <p class="latest__products__carousel-slide-product-price-discount-text">Najniższa cena z 30 dni przed obniżką: 220,00zł</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="newsletter" style="background-image: url('${newsletterLogo}')">
            <div class="newsletter__content">
               <h2 class="newsletter__content-title">Chcesz otrzymać <span class="newsletter__content-title-percentage">5%</span> zniżki na swoje zakupy?</h2>
               <p class="newsletter__content-text">Zapisz się do naszego newslettera i jako pierwsza dowiedz się o nowościach, promocjach i ofertach specjalnych!</p>
            </div>
            <div class="newsletter__form">
                <div class="newsletter__form-email">
                    <input type="email" class="newsletter__form-email-input" placeholder="Wpisz swój e-mail" />
                    <a class="newsletter__form-email-button">
                        <img src="${arrowRightLogo}" alt="submit" class="newsletter__form-email-button-image" />
                    </a>
                    <span class="newsletter__form-email-error">&#9888; Proszę podać prawidłowy adres e-mail.</span>
                </div>
                <div class="newsletter__form-checkbox">
                    <input id="mail" type="checkbox" class="newsletter__form-checkbox-input"/>
                    <label for="mail" class="newsletter__form-checkbox-text">Akceptuję Regulamin i Politykę Prywatności.</label>
                </div>
            </div>
        </div>
       <div class="footer">
        <div class="footer__content">
            <div class="footer__content-item">
            <h3 class="footer__content-item-title">O nas</h3>
           <p class="footer__content-item-text">Poznajmy się</p>
           <p class="footer__content-item-text">Skontaktuj się z nami</p>
           <p class="footer__content-item-text">Dołącz do nas</p>
       </div>
       <div class="footer__content-item">
           <h3 class="footer__content-item-title">Informacje</h3>
           <p class="footer__content-item-text">Regulamin</p>
           <p class="footer__content-item-text">Polityka prywatności</p>
           <p class="footer__content-item-text">Zasady gwarancji</p>
       </div>
       <div class="footer__content-item">
           <h3 class="footer__content-item-title">Twoje konto</h3>
           <p class="footer__content-item-text">Twoje konto</p>
           <p class="footer__content-item-text">Twoje zamówienia</p>
           <p class="footer__content-item-text">Logowanie</p>
           <p class="footer__content-item-text">Rejestracja</p>
       </div>
       <div class="footer__content-item">
           <h3 class="footer__content-item-title">Obsługa klienta</h3>
           <p class="footer__content-item-text">Dostawa i płatność</p>
           <p class="footer__content-item-text">Wymiana</p>
           <p class="footer__content-item-text">Zwrot</p>
           <p class="footer__content-item-text">Reklamacje</p>
           <p class="footer__content-item-text">FAQ</p>
       </div>
       <div class="footer__content-item">
           <h3 class="footer__content-item-title">Skontaktuj się z nami</h3>
           <p class="footer__content-item-text contact">
           <img src="${phoneLogo}" class="footer__content-item-icon" alt="Phone Icon">
            (+48) 000 000 000
           </p>
           <p class="footer__content-item-text contact">
              <img src="${editLogo}" class="footer__content-item-icon" alt="Email Icon">
           sklep@kontakt.com.pl
           </p>
           <p class="footer__content-item-text">Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w godzinach 8:00 - 16:00</p>
       </div>
   </div>
   <div class="footer__bottom">
    <div class="footer__bottom-companies">
        <h2>Dostawa i płatność</h2>
        <div class="footer__bottom-companies-logos">
               <img src="${inpostKurierLogo}" class="footer__bottom-companies-logo" alt="InPost Kurier Logo"/>
               <img src="${inpostLogo}" class="footer__bottom-companies-logo" alt="InPost Logo"/>
               <img src="${blikLogo}" class="footer__bottom-companies-logo" alt="Blik Logo"/>
               <img src="${przelewyLogo}" class="footer__bottom-companies-logo" alt="Przelewy24 Logo"/>
               <img src="${payPoLogo}" class="footer__bottom-companies-logo" alt="PayPo Logo"/>
               <img src="${paypalLogo}" class="footer__bottom-companies-logo" alt="PayPal Logo"/>
        </div>
    </div>
    <div class="footer__bottom-socialmedia">
        <h2>Social media</h2>
        <div class="footer__bottom-socialmedia-logos">
            <a href="#" class="footer__bottom-socialmedia-logo">
                <img src="${facebookLogo}" alt="Facebook Logo"/>
            </a>
            <a href="#" class="footer__bottom-socialmedia-logo">
                <img src="${instagramLogo}" alt="Instagram Logo"/>
            </a>
            <a href="#" class="footer__bottom-socialmedia-logo">
                <img src="${tiktokLogo}" alt="TikTok Logo"/>
            </a>
           </div>
    </div>
   </div>
</div>
  </div>
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
`

document.querySelector(".newsletter__form-email-button").addEventListener("click", (event) => {
    event.preventDefault();
    const emailInput = document.querySelector(".newsletter__form-email-input");
    const emailError = document.querySelector(".newsletter__form-email-error");
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        emailError.style.display = "none";
        emailInput.value = "";
    } else {
        emailError.style.display = "block";
    }
});

// JS for Dropdown Menu
document.addEventListener('DOMContentLoaded', () => {
    const dropdownTrigger = document.querySelector('.dropdown-hover-item');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownIcon = document.querySelector('.dropdown-hover-item i.nav__items-item-link-down');

    const cartToggleButton = document.querySelector('.cart-toggle-button');
    const cartOverlay = document.querySelector('.cart-overlay');
    const cartCloseButton = document.querySelector('.cart__close-btn');

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



        const toggleCart = (e) => {
            e.preventDefault(); // Prevent the anchor tag from navigating
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

    document.addEventListener('click', (event) => {
        if (!dropdownTrigger.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
            dropdownIcon.classList.remove('fa-chevron-up');
            dropdownIcon.classList.add('fa-chevron-down');
        }
    });
});
