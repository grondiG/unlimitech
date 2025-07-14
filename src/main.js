import './style.scss'

import { createHeader } from './components/header.js'
import { createNavigation } from './components/navigation.js'
import { createHero } from './components/hero.js'
import { createGallery } from './components/gallery.js'
import { createProducts } from './components/products.js'
import { createNewsletter } from './components/newsletter.js'
import { createFooter } from './components/footer.js'
import { createModals } from './components/modals.js'

import { initNewsletterHandler } from './handlers/newsletter.js'
import { initDropdownHandler } from './handlers/dropdown.js'
import { initCartHandler } from './handlers/cart.js'
import { initSearchHandler } from './handlers/search.js'
import { accordionHandler } from "./handlers/accordion.js";
import { showBurgerMenu, toggleMenu } from "./handlers/showBurgerMenu.js";

function buildApp() {
  return `
    ${createHeader()}
  <div class="container">
      ${createNavigation()}
      ${createHero()}
      ${createGallery()}
      ${createProducts()}
      ${createNewsletter()}
      ${createFooter()}
    </div>
    ${createModals()}
  `
}

document.querySelector('#app').innerHTML = buildApp()

document.addEventListener('DOMContentLoaded', () => {
  initNewsletterHandler()
  initDropdownHandler()
  initCartHandler()
  initSearchHandler()
  accordionHandler()
  showBurgerMenu()
  toggleMenu()
})
