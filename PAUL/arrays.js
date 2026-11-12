// 21.1
// const taula = [];
// taula[0] = "Hola";
// taula[1] = "Adeu";
// console.log(taula);

// 21.2
// let taula = [];
// taula[0] = "Hola";
// taula[1] = "Adeu";
// console.log(taula);
// taula[2] = "Nom";
// console.log(taula);
// taula[1] = ", ";
// console.log(taula);

// 21.3 
// let taula = [23, 45, 98, 73];
// console.log(taula[0] + taula[2]);
// taula[6] = taula[0] + taula[2];
// console.log(taula);

// 21.4
// let numero = Number(prompt("Introdueix un número:"));
// let taula = [];
// taula[0] = numero * 2;
// taula[1] = numero * 3;
// console.log(taula);

// 21.5
// let num1 = Number(prompt("Introdueix el primer número:"));
// let num2 = Number(prompt("Introdueix el segon número:"));
// let taula = [];
// taula[0] = num1 + num2;
// taula[1] = num1 - num2;
// taula[2] = num1 * num2;
// taula[3] = num1 / num2;
// console.log(taula);

// 21.6
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// console.log(taula[0]);
// console.log(taula[taula.length - 1]);
// 21.7
// for (let i = 0; i < taula.length; i++) {
//     console.log(taula[i]);
// }
// 21.8
// let suma = 0;
// for (let i = 0; i < taula.length; i++) {
//     suma = suma + taula[i];
// }
// console.log(suma);
// 21.9
// let taula2 = [];
// for (let i = 0; i < taula.length; i++) {
//     taula2[i] = taula[i] + 25;
// }
// console.log(taula2);
// 21.10
// let mitjana = suma / taula.length;
// console.log(mitjana);
// 21.11
// let gran = taula[0];
// let petit = taula[0];
// for (let i = 0; i < taula.length; i++) {
//     if (taula[i] > gran) {
//         gran = taula[i];
//     }

//     if (taula[i] < petit) {
//         petit = taula[i];
//     }
// }
// console.log(gran);
// console.log(petit);
// 21.12
// let parells = [];
// for (let i = 0; i < taula.length; i++) {
//     if (taula[i] % 2 == 0) {
//         parells.push(taula[i]);
//     }
// }
// console.log(parells);
// 21.13
// let valor = Number(prompt("Introdueix un valor:"));
// let comptador = 0;
// for (let i = 0; i < taula.length; i++) {
//     if (taula[i] == valor) {
//         comptador++;
//     }
// }
// console.log(comptador);