document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.querySelector('.card-container'); // Seleciona a div com a classe "card-container"
    const cartCounter = document.querySelector('.icon-cart span'); // Seleciona o elemento que exibe o número de itens no carrinho
    let cartCount = 0; // Inicializa o contador do carrinho

    // Array de informações sobre as t-shirts
    const tshirts = [
        { 
            name: 'T-shirt 100% Algodão', 
            basePrice: 29.90, 
            rating: 4.5,
            images: {
                branco: './site/assets/img/moda/t-shirt_white copy.jpg',
                preto: './site/assets/img/moda/t-shirt_black.jpg',
                rosa: './site/assets/img/moda/t-shirt_purple.jpg'
            },
            colors: { // Adiciona cores personalizadas para este modelo
                branco: '#d8d8d8',
                preto: '#5c5a5b',
                rosa: '#7675a2'
            }
        },
        { 
            name: 'T-shirt Estonada', 
            basePrice: 49.90, 
            rating: 4.0,
            images: {
                branco: './site/assets/img/moda/t-shirt_lightPink.jpg',
                preto: './site/assets/img/moda/t-shirt_lightOrange.jpg',
                rosa: './site/assets/img/moda/t-shirt_yellow.jpg'
            },
            colors: { // Adiciona cores personalizadas para este modelo
                branco: '#d2a4ab',
                preto: '#d98568',
                rosa: '#e4d86a'
            }
        },
        { 
            name: 'T-shirt Vintage', 
            basePrice: 49.90, 
            rating: 3.5,
            images: {
                branco: './site/assets/img/moda/psd t-shirt_dark-gray.jpg',
                preto: './site/assets/img/moda/psd t-shirt_military.jpg',
                rosa: './site/assets/img/moda/psd t-shirt_marrom.jpg'
            },
            colors: { // Adiciona cores personalizadas para este modelo
                branco: '#c2c2b6',
                preto: '#848779',
                rosa: '#7e656c'
            }
        },
        { 
            name: 'T-shirt Cores', 
            basePrice: 49.90, 
            rating: 5.0,
            images: {
                branco: './site/assets/img/moda/psd t-shirt_gold.jpg',
                preto: './site/assets/img/moda/psd t-shirt_rasberry.jpg',
                rosa: './site/assets/img/moda/psd t-shirt_red.jpg'
            },
            colors: { // Adiciona cores personalizadas para este modelo
                branco: '#dba660',
                preto: '#cb71a1',
                rosa: '#c16074'
            }
        }
        
    ];

    // Função para formatar o preço como R$XX,XX
    function formatPrice(price) {
        return price.toFixed(2).replace('.', ',');
    }

    // Função para criar a classificação em estrelas
    function createRatingStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="bi bi-star-fill star"></i>';
            } else if (i - rating < 1) {
                stars += '<i class="bi bi-star-half star"></i>';
            } else {
                stars += '<i class="bi bi-star star"></i>';
            }
        }
        return stars;
    }

    // Função para criar um card de t-shirt
    function createTshirtCard(tshirt, index) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${tshirt.images.branco}" alt="${tshirt.name}" class="tshirt-image">
            <h2 class="title">${tshirt.name}</h2>
            <div class="rating">
              ${createRatingStars(tshirt.rating)}
            </div>
            <div class="options">
                <div class="size">
                    <label for="size-${index}">Tamanho:</label>
                    <select id="size-${index}" class="size-select">
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                    </select>
                </div>
                <div class="color">
                    <label for="color">Cor:</label>
                    <div class="color-options">
                        <input type="radio" id="color-branco-${index}" name="color-${index}" value="branco" checked>
                        <label for="color-branco-${index}" class="color-circle" style="background-color: ${tshirt.colors.branco};"></label>

                        <input type="radio" id="color-preto-${index}" name="color-${index}" value="preto">
                        <label for="color-preto-${index}" class="color-circle" style="background-color: ${tshirt.colors.preto};"></label>

                        <input type="radio" id="color-rosa-${index}" name="color-${index}" value="rosa">
                        <label for="color-rosa-${index}" class="color-circle" style="background-color: ${tshirt.colors.rosa};"></label>
                    </div>
                </div>
            </div>
            <p class="price">R$${formatPrice(tshirt.basePrice)}</p>
            <button class="add-to-cart">Adicionar ao Carrinho</button>
        `;

        // Add event listeners for color and size changes
        card.querySelectorAll(`input[name="color-${index}"]`).forEach(radio => {
            radio.addEventListener('change', function() {
                const selectedColor = this.value;
                const imageElement = card.querySelector('.tshirt-image');
                imageElement.src = tshirt.images[selectedColor];
            });
        });

        card.querySelector('.size-select').addEventListener('change', function() {
            const selectedSize = this.value;
            const priceElement = card.querySelector('.price');
            let price = tshirt.basePrice;

            if (selectedSize === 'M') {
                price += 5.00; // Incremento de preço para tamanho M
            } else if (selectedSize === 'G') {
                price += 10.00; // Incremento de preço para tamanho G
            }

            priceElement.textContent = `R$${formatPrice(price)}`;
        });

        // Adicionar evento de clique para adicionar ao carrinho
        card.querySelector('.add-to-cart').addEventListener('click', function() {
            cartCount++;
            updateCartCounter(cartCount);
        });

        return card;
    }

    // Função para atualizar o contador do carrinho
function updateCartCounter(count) {
    cartCounter.textContent = count;
}

// Criar e adicionar os cards de t-shirt ao container
tshirts.forEach((tshirt, index) => {
    const card = createTshirtCard(tshirt, index);
    cardContainer.appendChild(card);
});

// Adicionar evento de clique para adicionar ao carrinho em cada cartão
cardContainer.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

});








