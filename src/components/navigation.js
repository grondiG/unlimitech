import { 
  unlimitechLogo, 
  searchLogo, 
  userLogo, 
  favLogo, 
  bagLogo,
  hamburgerLogo,
  polbutyIcon,
  jazzowkiIcon,
  szpilkiIcon,
  balerinkiIcon,
  sandalyIcon,
  klapkiIcon,
  botkiIcon,
  kozakiIcon,
  outletIcon
} from '../assets/index.js'

export function createNavigation() {
  return `
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
        <a class="nav__additional__button menu-toggle-button" href="#">
            <div class="nav__additional__button-round">
                 <img class="nav__additional__button-round-image" src="${hamburgerLogo}" alt="Menu Icon"/>
            </div>
        </a>
        </div>
    </div>
  `
}



