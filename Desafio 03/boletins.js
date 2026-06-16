/*
DESAIO 03 - SISTEMA DE APROVAÇÃO

Crie uma função chamada vericarAluno() que receba:
- nome
- nota

Regras:
- Nota maior ou igual a 7 -> Aprovado
- Nota maior ou igual a 5 e menor que 7 -> Recuperação
- Nota menor que 5 -> Reprovado

Exiba uma mensagem informando a situação do aluno.
*/

function verificarAluno(nome, nota) {
    if (nota >= 7) {
        console.log(nome + " Aprovado.");
    } else if (nota >= 5 && nota < 7) {
        console.log(nome + " Recuperação.");
    } else {
        console.log(nome + " Reprovado.");
    }
}

verificarAluno("João", 8);
verificarAluno("Maria", 6);
verificarAluno("Pedro", 4);