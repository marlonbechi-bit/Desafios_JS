/*

DESAFIO 07 - RANKING DE JOGADORES

Uma competição precisa exibir a classificação dos participantes.

Crie um array contendo o nome de 4 jogadpres.

Utilize uma estrutura de repetição para mostrar:

1° Jogador
2° Jogador
3° Jogador
4° Jogador

A posição deve ser gerada automaticamente pelo sistema.
*/

let jogadores = ["Luiz", "Gabriel", "Lucas", "Pâmela"];

for (let i = 0; i < jogadores.length; i++) {
  console.log(`${[i + 1]}° Jogador: ${jogadores[i]}`);
}