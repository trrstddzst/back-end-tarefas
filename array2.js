const alunos = ["Ana", "Bruna", "Carla"];

alunos.push("Diego") // Adiciona um elemento no final do aarray
alunos.unshift("Alan"); //Adiciona elementos no início do array
console.log(alunos);

const removido = alunos.pop()
console.log(removido)
console.log(alunos)

console.log(alunos.indexOf("Carla"));
console.log(alunos.lastIndexOf("Pedro"));

console.log(alunos.includes(Ana)); //Retorna o valor booleano
console.log(alunos.includes("Paula"));