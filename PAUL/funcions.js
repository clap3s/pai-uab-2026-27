// 3.1.- Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció.

// function parellOImparell(num) {
//     if (num % 2 == 0) {
//         return "El nombre és parell";
//     } else {
//         return "El nombre és imparell";
//     }
// }

// let numero = Number(prompt("Introdueix un número:"));
// console.log(parellOImparell(numero));


// 3.2.- Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin múltiples de 100, però no els que siguin múltiples de 400.

// let any = Number(prompt("Introdueix un any:"));

// if (any % 400 == 0 || (any % 4 == 0 && any % 100 != 0)) {
//     console.log("L'any és de traspàs");
// } else {
//     console.log("L'any no és de traspàs");
// }


// 3.3.- Fes un script que inclogui una funció que, donat un enter N, retorni la suma de 1/n² per a tots els nombres n entre 1 i N.

// function sumaSerie(N) {
//     let suma = 0;

//     for (let n = 1; n <= N; n++) {
//         suma = suma + (1 / (n * n));
//     }

//     return suma;
// }

// let N = Number(prompt("Introdueix un número:"));
// console.log("El resultat és: " + sumaSerie(N));


// 3.4.- Fes una funció que calculi la nota final d'un alumne. Si la nota d'avaluació continuada és major o igual que 5, la nota final serà 0.2 * NOTA_AC + 0.4 * NOTA_PRACT + 0.4 * NOTA_EXAMEN. Si és menor que 5, serà 0.4 * NOTA_PRACT + 0.6 * NOTA_EXAMEN. La funció ha de retornar la nota numèrica i la nota en format lletra.

// function calcularNota(AC, PRACT, EXAMEN) {
//     let notaFinal;
//     let lletra;

//     if (AC >= 5) {
//         notaFinal = 0.2 * AC + 0.4 * PRACT + 0.4 * EXAMEN;
//     } else {
//         notaFinal = 0.4 * PRACT + 0.6 * EXAMEN;
//     }

//     if (notaFinal < 5) {
//         lletra = "D";
//     } else if (notaFinal < 6.5) {
//         lletra = "C";
//     } else if (notaFinal < 8) {
//         lletra = "B";
//     } else if (notaFinal < 10) {
//         lletra = "A";
//     } else {
//         lletra = "H";
//     }

//     return notaFinal.toFixed(2) + " - " + lletra;
// }

// let AC = Number(prompt("Introdueix la nota d'avaluació continuada:"));
// let PRACT = Number(prompt("Introdueix la nota de pràctiques:"));
// let EXAMEN = Number(prompt("Introdueix la nota de l'examen:"));

// console.log(calcularNota(AC, PRACT, EXAMEN));


// 3.5.- Fes una funció que, donada una frase, retorni el nombre de paraules que tenen exactament 5 caràcters. Les paraules acaben quan apareix una coma o un espai en blanc.

// function comptarParaules(frase) {
//     let comptador = 0;
//     let llargada = 0;

//     for (let i = 0; i < frase.length; i++) {
//         if (frase[i] == " " || frase[i] == "," || frase[i] == ".") {
//             if (llargada == 5) {
//                 comptador++;
//             }
//             llargada = 0;
//         } else {
//             llargada++;
//         }
//     }

//     return comptador;
// }

// let frase = prompt("Introdueix una frase:");
// console.log("Paraules de 5 caràcters: " + comptarParaules(frase));


// 3.6.- Modifica la funció anterior perquè es pugui comptar el nombre de paraules d'una llargada determinada. Per fer-ho, afegim un segon paràmetre que indiqui el nombre de lletres que volem comptar.

// function comptarParaulesLlargada(frase, llargadaBuscada) {
//     let comptador = 0;
//     let llargada = 0;

//     for (let i = 0; i < frase.length; i++) {
//         if (frase[i] == " " || frase[i] == "," || frase[i] == ".") {
//             if (llargada == llargadaBuscada) {
//                 comptador++;
//             }
//             llargada = 0;
//         } else {
//             llargada++;
//         }
//     }

//     return comptador;
// }

// let frase2 = prompt("Introdueix una frase:");

// console.log("Paraules de 7 lletres: " + comptarParaulesLlargada(frase2, 7));
// console.log("Paraules de 4 lletres: " + comptarParaulesLlargada(frase2, 4));
// console.log("Paraules de 3 lletres: " + comptarParaulesLlargada(frase2, 3));


// 3.7.- Fes una funció que, donada una frase, retorni en una taula quantes paraules hi ha amb 1, 2, 3, 4, 5, 6 o 7 lletres.

// function comptarParaulesTaula(frase) {
//     let comptadors = [0, 0, 0, 0, 0, 0, 0];
//     let llargada = 0;

//     for (let i = 0; i < frase.length; i++) {
//         if (frase[i] == " " || frase[i] == "," || frase[i] == ".") {
//             if (llargada >= 1 && llargada <= 7) {
//                 comptadors[llargada - 1]++;
//             }
//             llargada = 0;
//         } else {
//             llargada++;
//         }
//     }

//     return comptadors;
// }

// let frase3 = prompt("Introdueix una frase:");
// let resultat = comptarParaulesTaula(frase3);

// for (let i = 0; i < resultat.length; i++) {
//     console.log("Paraules de " + (i + 1) + " lletres: " + resultat[i]);
// }