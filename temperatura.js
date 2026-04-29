//Conversão de temperturas

const cidade ="Curitiba";
const tempCelsius = 18.5;

const tempFahrenheit = tempCelsius * (9/5) + 32;
const tempKelvin = tempCelsius + 273.15;
const variacaoDiaria = 26.3 - tempCelsius;

console.log(`Temperatura em ${cidade} hoje está ${tempCelsius}.`);
console.log(`Celsius: ${tempCelsius}`);

//Fazer console.log para Fahrenheit e para Kelvin

const tempFahrenheit = tempCelsius * (9/5) + 32;
const tempkKelvin = tempCelsius + 273.15;
const variacaoDiaria = 26.3 - tempCelsius;
console.log(`Temperatura em ${cidade} hoje está ${tempCelsius}.`);
console.log(`Celsius: ${tempCelsius} Cº`);
console.log(`Fahrenheit: ${tempFahrenheit.toFixed(1)} Fº`);
console.log(`Kelvin: ${tempKelvin} K°)
console.log(`\nVariação prevista: ${variacaoDiaria}`)

//Tecla Alt Gr + tecla colchetes para fazer
