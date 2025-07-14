export function accordionHandler() {
    const footerTitles = document.querySelectorAll('.footer__content-item-title');

    footerTitles.forEach(title => {
        title.addEventListener('click', () => {
            const item = title.parentElement;

            document.querySelectorAll('.footer__content-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });
}
