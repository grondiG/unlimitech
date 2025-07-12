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
  </div>
`
