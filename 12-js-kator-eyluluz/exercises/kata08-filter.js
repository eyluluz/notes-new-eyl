// Kata 8: Array.filter()
// Syfte: Lära sig filtrera arrayer med filter

console.log("=== Kata 8: Array.filter() ===");

// Steg 1: Startkod - Filtrera med for-loop
const numbers = [5, 12, 8, 130, 44];
const overTen = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        overTen.push(numbers[i]);
    }
}
console.log("Med for-loop:", overTen);

// Steg 2: Gör samma sak med filter
const overTenFilter = numbers.filter(num => num > 10);
console.log("Med filter:", overTenFilter);
// Testa och se att det fungerar likadant

// Steg 3: Diskutera
// Vad är skillnaden mellan filter och for-loop?
// När är filter extra användbart?

/*
Förklaring:
- filter skapar en ny array med bara de element som uppfyller ett villkor.
- Du slipper skriva if-satser och pusha in värden manuellt.
- Koden blir kortare och tydligare.
- Extra användbart när du vill plocka ut vissa värden ur en stor mängd data, t.ex. alla godkända betyg eller alla produkter över ett visst pris.
*/
