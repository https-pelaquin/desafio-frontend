$(document).ready(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const categoryId = urlParams.get('id');

    loadProducts();

    function loadProducts() {
        fetch('http://localhost:8888/api/V1/categories/' + categoryId)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                const $productItemsGrid = $('#product-items');

                console.log(data);

                data.items.forEach(product => {

                    const $formatedPrice = product.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    });

                    const html = `

                        <div class="product-item">
                            <div class="product-image">
                                <img src="${product.image}" alt="Imagem do Produto" />
                            </div>
                            <div class="product-details">
                                <p class="product-name">${product.name}</p>
                                <p class="product-price">${$formatedPrice}</p>
                                <button class="add-to-cart-button"
                                    type="button">COMPRAR</button>
                            </div>
                        </div>
                    `;

                    $productItemsGrid.append(html);
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
});
