$(document).ready(() => {
   loadMegaMenus();
    

    function loadMegaMenus() {

        fetch('http://localhost:8888/api/V1/categories/list')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const $megamneu = $('#megamenu');
            const $sidebarCategoryList = $('#sidebar-category-list');

            data.items.forEach(category => {
                const html = `
                    <li>
                        <a href="desafio-frontend/category?id=${category.id}">${category.name}</a>
                    </div>
                `;

                $megamneu.append(html);

                if ($($sidebarCategoryList)) {
                    $sidebarCategoryList.append(html);
                }
            });
        })
        .catch(error => {
            console.error(error);
        });
    }
});
