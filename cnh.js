const idade = 16;
const maiorIdade = idade >= 18;
const possuiCNH = false;

const podeDigirir = maiorIdade && possuiCNH;
console.log('Pode viajar sozinho?', podeDigirir);

const podeViajarSozinho = maiorIdade || possuiCNH;
console.log('Pode viajar sozinho?', podeViajarSozinho);

const precisaAcompanhante = !maiorIdade

console.log('Precisa de acompanhante?', precisaAcompanhante)