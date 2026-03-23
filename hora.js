// Valores iniciais do dia
let valorPorHora = 50;
let horasTrabalhadas = 8; // Expediente padrão

console.log("--- Resumo do Expediente ---");
console.log(`Horas iniciais: ${horasTrabalhadas}h`);

horasTrabalhadas++;
console.log(`Após hora extra (horasTrabalhadas++): ${horasTrabalhadas}h`);

//No dia seguinte ele precisou sair uma hora mais cedo para ir ao médico
horasTrabalhadas--
console.log(`Após saida antecipada (horasTrabalhadas--): ${horasTrabalhadas}`);

//Cálculo final
let taxaSistema = 15;
let pagamentoTotal = (horasTrabalhadas) * (valorPorHora) - (taxaSistema)
