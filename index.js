// Crie uma variável para armazenar o nome  e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura
// de decisão para apresentar algumas das mensagens abaixo:
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000 = Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// Saída
// Ao final deve se exebir uma mensagem:
// "O herói de nome {nome} está no nível de é {nível} e tem {xp} de experincia

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nivel = [
  'Ferro',
  'Bronze',
  'Prata',
  'Ouro',
  'Platina',
  'Ascendente',
  'Imortal',
  'Radiante',
];

rl.question('Digite o nome do Herói: ', (nomeHeroi) => {
  rl.question('Digite a quantidade de experiência do Herói: ', (xpHeroi) => {
    xpHeroi = parseInt(xpHeroi);
    verificaNivelHeroi(nomeHeroi, xpHeroi);
    rl.close();
  });
});

function verificaNivelHeroi(nomeHeroi, xpHeroi) {
  if (xpHeroi <= 1000) {
    console.log(
      `O herói de nome ${nomeHeroi} está no nível de ${nivel[0]} e tem ${xpHeroi} de experiência.`,
    );
  } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    console.log(
      `O herói de nome ${nomeHeroi} está no nível de ${nivel[1]} e tem ${xpHeroi} de experiência.`,
    );
  } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    console.log(
      `O herói de nome ${nomeHeroi} está no nível de ${nivel[2]} e tem ${xpHeroi} de experiência.`,
    );
  } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    console.log(
      `O herói de nome ${nomeHeroi} está no nível de ${nivel[3]} e tem ${xpHeroi} de experiência.`,
    );
  } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log(
      `O herói de nome ${nomeHeroi} está no nível de ${nivel[4]} e tem ${xpHeroi} de experiência.`,
    );
  } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    console.log(
      `O herói de nome ${nomeHeroi} está no nível de ${nivel[5]} e tem ${xpHeroi} de experiência.`,
    );
  } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    console.log(
      `O herói de nome ${nomeHeroi} está no nível de ${nivel[6]} e tem ${xpHeroi} de experiência.`,
    );
  } else if (xpHeroi >= 10001) {
    console.log(
      `O herói de nome ${nomeHeroi} está no nível de ${nivel[7]} e tem ${xpHeroi} de experiência.`,
    );
  } else {
    console.log('Valor inválido');
  }
}
