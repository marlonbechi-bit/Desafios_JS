// Desafio 02 - Média da turma

/* 
Crie um array [] com 5 notas
- Utilize um loop para:
    - Somar todas as notas
    - Calcular a média

Mostrar no console/output o seguinte:
Média da turma: 10.0
*/

let notas = [7.5, 8.4, 9.3, 6.2, 5.1];
let soma = 0;

for (let i = 0; i <= notas.length; i++) {
    soma += notas[i];
}
let media = soma / notas.length;

console.log("Soma das notas:", soma);
console.log("Média da turma:", media);