# Bruno Pelaquin 

### Documentação sobre o projeto frontend

Nesse projeto foi utilizado a biblioteca do Jquery para facilitar, simplificar e aumentar as possibilidades com Javascript.

Também foi utilizado LESS com compilador em tempo real no navegador (não é muito recomendado pois afeta diretamente a performance do site, mas como o projeto é pequeno, optei por utilizar dessa maneira simplificada)

Precisei customizar o arquivo app.js para permitir que outros arquivos html fossem carregados no navegador.

Nas páginas de categorias fiz uso de parâmetros na url com o ID da categoria, então um script recupera essa informação, faz a requisição e carrega os respectivos produtos da categoria.

Para o filtro funcionar precisei alterar basicamente todo o código que eu já havia criado para o load dos produtos nas categorias, foi um pouco complexo mas está funcionando perfeitamente. O script carrega os filtros de forma dinâmica recuperando a key e a label do parâmetro "Filters" do json, então faz a filtragem nos produtos com base na key.

Tempo necessário para implementação contando com imprevistos e contratempos: 7h
