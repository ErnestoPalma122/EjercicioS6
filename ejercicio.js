// Ejercicio 1: Saludar a cada persona
let nombres = prompt("Ejercicio 1:\nIngresa nombres separados por espacios:");
let listaNombres = nombres.split(" ");
let saludos = "";
for (let nombre of listaNombres) {
  saludos += `¡Hola ${nombre}!\n`;
}
alert(saludos);

// Ejercicio 2: Encontrar el menor número
let numerosTexto = prompt("Ejercicio 2:\nIngresa números separados por espacios:");
let numeros = numerosTexto.split(" ").map(Number);
let menor = Math.min(...numeros);
alert(`El número menor es: ${menor}`);

// Ejercicio 3: Sumar todos los números
let numerosTexto2 = prompt("Ejercicio 3:\nIngresa números separados por espacios para sumarlos:");
let numeros2 = numerosTexto2.split(" ").map(Number);
let suma = 0;
for (let num of numeros2) {
  suma += num;
}
alert(`La suma de los números es: ${suma}`);

// Ejercicio 4: Verificar si un valor existe
let valoresTexto = prompt("Ejercicio 4:\nIngresa valores separados por espacios para guardarlos:");
let valores = valoresTexto.split(" ");
let valorBuscado = prompt("¿Qué valor deseas buscar?");
if (valores.includes(valorBuscado)) {
  alert(`El valor ${valorBuscado} se encuentra entre los valores originales.`);
} else {
  alert(`El valor ${valorBuscado} NO se encuentra entre los valores originales.`);
}

// Ejercicio 5: Buscar el índice de un valor
let valoresTexto2 = prompt("Ejercicio 5:\nIngresa valores separados por espacios:");
let valores2 = valoresTexto2.split(" ");
let valorIndice = prompt("¿Qué valor deseas buscar?");
let indice = valores2.indexOf(valorIndice);
if (indice !== -1) {
  alert(`El valor ${valorIndice} se encuentra en el índice ${indice}.`);
} else {
  alert(`El valor ${valorIndice} no se ha encontrado.`);
}
