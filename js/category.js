
$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);

    const categoryId = urlParams.get('id');

    const jsonUrl = 'http://localhost:8888/api/V1/categories/' + categoryId;

    fetch(jsonUrl)
        .then(res => res.json())
        .then(data => {
            renderFilters(data.filters, data.items);
            renderProducts(data.items);
        });

    function renderFilters(filters, items) {
        const filterContainer = $('#filter-options');
        filterContainer.empty();

        filters.forEach(filterGroup => {

            const key = Object.keys(filterGroup)[0];
            const label = filterGroup[key];

            filterContainer.append(`<p class="filter-option-title">${label}</p>`);

            const values = [...new Set(items.map(item => item.filter[0][key]))];

            values.forEach(value => {
                const button = $('<li>')
                    .addClass('filter-option')
                    .attr('data-filter-key', key)
                    .attr('data-filter-value', value)
                    .text(value);
                filterContainer.append(button);
            });
        });
    }

    function renderProducts(products) {
        const productContainer = $('#product-items');
        productContainer.empty();

        products.forEach(product => {
            const $formatedPrice = product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });

            const card = $(`
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
            `);

            productContainer.append(card);
        });
    }

    $(document).on('click', '.filter-option', function () {
        const key = $(this).data('filter-key');
        const value = $(this).data('filter-value');

        fetch(jsonUrl)
            .then(res => res.json())
            .then(data => {
                const filteredItems = data.items.filter(item => item.filter[0][key] === value);
                renderProducts(filteredItems);
            });
    });
});
