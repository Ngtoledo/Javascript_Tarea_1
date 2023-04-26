const num1 = parseInt(prompt("Ingresa el primer número: "));
while (isNaN(num1)) {
  num1 = parseInt(prompt("Ingresa un número válido para el primer número: "));
}

const num2 = parseInt(prompt("Ingresa el segundo número: "));
while (isNaN(num2)) {
  num2 = parseInt(prompt("Ingresa un número válido y distinto al primer número para el segundo número: "));
}

const arr1 = [];
const arr2 = [];

for (let i = 0; i < num1; i++) {
  arr1.push(Math.round(Math.random() * 9 + 1));
}

for (let j = 0; j < num2; j++) {
  arr2.push(Math.round(Math.random() * 9 + 1));
}

console.log("El primer array es: " + arr1);
console.log("El segundo array es: " + arr2);

const arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i]) && !arr3.includes(arr1[i])) {
    arr3.push(arr1[i]);
  }
}

console.log("El tercer array con elementos comunes y únicos es: " + arr3);           
