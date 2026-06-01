 // Desafio 01 - Cadastro de Pessoa

/* 
    Crie um objeto chamado pessoa contendo:
    - nome
    - idade
    - cidade

    Após a criação:
    - Altere a idade
    - Adicione uma profissão
    - Remova a cidade

    No fim, exiba o objeto final.
*/


const pessoa = {
    nome: "Marlon R. Becchi",
    idade: 32,
    cidade: "Capanema"
}

console.log(pessoa);


pessoa.idade = 30;
pessoa.profissao = "Vendedor";
delete pessoa.cidade;

console.log(pessoa);

