let arrayNumeri = [];
let somma = 0;

while (somma < 50) {
    let numero = parseInt(prompt("Inserisci un numero:"));

    if (!isNaN(numero)) {
        arrayNumeri.push(numero);

        somma = arrayNumeri.reduce((acc, val) => acc + val, 0);
    } else {
        alert("Inserisci un numero valido.");
    }
}

console.log("Array finale:", arrayNumeri);
console.log("La somma degli elementi è:", somma);
