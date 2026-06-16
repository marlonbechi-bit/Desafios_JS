/*
DESAFIO 04 - LOJA TECH

Uma loja de informática possui vários produtos cadastrados.

Crie um array de objetos contendo:
- nome
- preco

Utilize uma estrutura de repetição para mostrar apenas
os produtos que custam mais de R$ 100,00.

Exiba o nome dos produtos encontrados.
*/

const produtos = [
    { nome: "Teclado" , preco: 50},
    { nome: "Mouse" , preco: 120},
    { nome: "Monitor" , preco: 150},
    { nome: "Impressora" , preco: 101}
]

for ( let i = 0; i < produtos.length; i++) {
    if (produtos[i].preco > 100) {
        console.log(produtos[i].nome);
    }
}