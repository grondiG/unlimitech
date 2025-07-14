export function initNewsletterHandler() {
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
} 