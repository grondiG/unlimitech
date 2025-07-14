export function createProducts() {
  return `
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
                    <img src="https://picsum.photos/seed/653445/620/850" alt="Product 1" class="latest__products__carousel-slide-product-image" loading="lazy">
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
                    <img src="https://picsum.photos/seed/2137/620/850" alt="Product 2" class="latest__products__carousel-slide-product-image" loading="lazy">
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
                    <img src="https://picsum.photos/seed/2131/620/850" alt="Product 3" class="latest__products__carousel-slide-product-image" loading="lazy">
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
                    <img src="https://picsum.photos/seed/3211/620/850" alt="Product 4" class="latest__products__carousel-slide-product-image" loading="lazy">
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
                    <img src="https://picsum.photos/seed/4455/620/850" alt="Product 5" class="latest__products__carousel-slide-product-image" loading="lazy">
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
                    <img src="https://picsum.photos/seed/5566/620/850" alt="Product 6" class="latest__products__carousel-slide-product-image" loading="lazy">
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
                    <img src="https://picsum.photos/seed/6677/620/850" alt="Product 7" class="latest__products__carousel-slide-product-image" loading="lazy">
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
                    <img src="https://picsum.photos/seed/7788/620/850" alt="Product 8" class="latest__products__carousel-slide-product-image" loading="lazy">
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
                    <img src="https://picsum.photos/seed/8899/620/850" alt="Product 9" class="latest__products__carousel-slide-product-image" loading="lazy">
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
                    <img src="https://picsum.photos/seed/9900/620/850" alt="Product 10" class="latest__products__carousel-slide-product-image" loading="lazy">
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
                    <img src="https://picsum.photos/seed/1010/620/850" alt="Product 11" class="latest__products__carousel-slide-product-image" loading="lazy">
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
                    <img src="https://picsum.photos/seed/1111/620/850" alt="Product 12" class="latest__products__carousel-slide-product-image" loading="lazy">
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
  `;
}
