/*
DESAFIO 06 - FILME FAVORITO

Crie um objeto chamado filme contendo:
- título
- genero
- ano

Crie uma função responsável por receber este objeto 
e exibir todas as informações formatadas no console
utilizando o template string.

O objetivo é praticar a manipulação de 
objetos e passagem de parâmetros para funções.
*/

let filme = {
    título: "Avengers",
    gênero: "Ficção/Ação",
    ano: 2012
}

function exibirFilme() {
    console.log(`
        Título: ${filme.título}
        Gênero: ${filme.gênero}
        Ano: ${filme.ano}
        `);
}

exibirFilme();