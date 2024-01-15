let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8, 9, 10];

let differenzaDiElementi = Math.abs(array1.lunghezza - array2.lunghezza);

for (let i = 0; i < differenzaDiElementi; i++) {
    if (array1.lunghezza < array2.lunghezza) {
        array1.push("Nuovo elemento");
    } else {
        array2.push("Nuovo elemento");
    }
}
console.log("Array1 dopo l'aggiunta di elementi:", array1);
console.log("Array2 dopo l'aggiunta di elementi:", array2);
