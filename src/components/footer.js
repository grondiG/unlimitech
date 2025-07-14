import {
  phoneLogo,
  editLogo,
  inpostKurierLogo,
  inpostLogo,
  blikLogo,
  przelewyLogo,
  payPoLogo,
  paypalLogo,
  facebookLogo,
  instagramLogo,
  tiktokLogo,
} from "../assets/index.js";

export function createFooter() {
  return `
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
        <img src="${phoneLogo}" class="footer__content-item-icon" alt="Phone Icon" loading="lazy">
         (+48) 000 000 000
        </p>
        <p class="footer__content-item-text contact">
           <img src="${editLogo}" class="footer__content-item-icon" alt="Email Icon" loading="lazy">
        sklep@kontakt.com.pl
        </p>
        <p class="footer__content-item-text">Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w godzinach 8:00 - 16:00</p>
    </div>
</div>
<div class="footer__bottom">
 <div class="footer__bottom-companies">
     <h2>Dostawa i płatność</h2>
     <div class="footer__bottom-companies-logos">
            <img src="${inpostKurierLogo}" class="footer__bottom-companies-logo" alt="InPost Kurier Logo" loading="lazy"/>
            <img src="${inpostLogo}" class="footer__bottom-companies-logo" alt="InPost Logo" loading="lazy"/>
            <img src="${blikLogo}" class="footer__bottom-companies-logo" alt="Blik Logo" loading="lazy"/>
            <img src="${przelewyLogo}" class="footer__bottom-companies-logo" alt="Przelewy24 Logo" loading="lazy"/>
            <img src="${payPoLogo}" class="footer__bottom-companies-logo" alt="PayPo Logo" loading="lazy"/>
            <img src="${paypalLogo}" class="footer__bottom-companies-logo" alt="PayPal Logo" loading="lazy"/>
     </div>
 </div>
 <div class="footer__bottom-socialmedia">
     <h2>Social media</h2>
     <div class="footer__bottom-socialmedia-logos">
         <a href="#" class="footer__bottom-socialmedia-logo">
             <img src="${facebookLogo}" alt="Facebook Logo" loading="lazy"/>
         </a>
         <a href="#" class="footer__bottom-socialmedia-logo">
             <img src="${instagramLogo}" alt="Instagram Logo" loading="lazy"/>
         </a>
         <a href="#" class="footer__bottom-socialmedia-logo">
             <img src="${tiktokLogo}" alt="TikTok Logo" loading="lazy"/>
         </a>
        </div>
 </div>
</div>
    </div>
  `;
}
