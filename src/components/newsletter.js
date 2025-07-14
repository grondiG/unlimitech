import { newsletterLogo, arrowRightLogo } from '../assets/index.js'

export function createNewsletter() {
  return `
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
  `
} 