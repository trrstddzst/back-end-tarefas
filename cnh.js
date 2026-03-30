const idade = 15
const maiorIdade = idade >= 18;
const possuiCNH = false;

const podedirigir = maiorIdade && possuiCNH; //and
console.log('Pode viajar sozinho?', podedirigir);

const podeViajarSozinho = maiorIdade || possuiCNH
console.log('Pode viajar sozinho?', podeViajarSozinho);

const precisadeacompanhante = !maiorIdade;
console.log('precisa de acompanhante?', precisadeacompanhante);


