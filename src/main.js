import './style.scss'
import phoneLogo from './assets/phone-flip.svg'
import editLogo from './assets/edit.svg'
import restockLogo from './assets/restock.svg'
import shippingLogo from './assets/shipping-fast.svg'
import unlimitechLogo from './assets/logo.svg'
import searchLogo from './assets/Search_light.svg'
import userLogo from './assets/User_light.svg'
import favLogo from './assets/Favorite_light.svg'
import bagLogo from './assets/Bag_alt_light.svg'

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
            <li class="nav__items-item">
                <a href="#" class="nav__items-item-link">Damskie buty skórzane <span>&#8964;</span></a>
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
                <img class="nav__additional__button-round-image" src="${favLogo}" alt="User Icon"/>
            </div>
        </a>
        <a class="nav__additional__button" href="#">
            <div class="nav__additional__button-round">
                <img class="nav__additional__button-round-image" src="${bagLogo}" alt="User Icon"/>
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
`
