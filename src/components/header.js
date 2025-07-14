import { phoneLogo, editLogo, shippingLogo, restockLogo } from "../assets/index.js";

export function createHeader() {
  return `
    <div class="header">
      <ul class="header__items">
          <li class="header__items-item">
              <img src="${phoneLogo}" class="header__items-item-logo" alt="Phone Logo" loading="lazy">
              <a href="#" class="header__items-item-content">(+48) 000 000 000</a>
          </li>
          <li class="header__items-item">
              <img src="${editLogo}" class="header__items-item-logo" alt="Email Logo" loading="lazy">
              <a href="#" class="header__items-item-content">Napisz do nas!</a>
          </li>
          <li class="header__items-item">
              <img src="${shippingLogo}" class="header__items-item-logo" alt="Shipping Logo" loading="lazy">
              <a href="#" class="header__items-item-content">Darmowa dostawa</a>
          </li>
          <li class="header__items-item">
              <img src="${restockLogo}" class="header__items-item-logo" alt="Return Logo" loading="lazy">
              <a href="#" class="header__items-item-content">30 dni na darmowy zwrot</a>
          </li>
      </ul>
    </div>
  `;
}
