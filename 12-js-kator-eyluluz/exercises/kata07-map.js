// Kata 7: Array.map()
// Syfte: Lära sig transformera arrayer med map

console.log("=== Kata 7: Array.map() ===");

// Steg 1: Startkod - Transformera med for-loop
const names = ["anna", "erik", "sara"];
const upperNames = [];
for (let i = 0; i < names.length; i++) {
    upperNames.push(names[i].toUpperCase());
}
console.log("Med for-loop:", upperNames);

// Steg 2: Gör samma sak med map
const upperNamesMap = names.map(name => name.toUpperCase());
console.log("Med map:", upperNamesMap);
// Testa och se att det fungerar likadant

// Steg 3: Diskutera
// Vad är skillnaden mellan map och for-loop?
// När är map extra användbart?

/*
Förklaring:
- map skapar en ny array genom att köra en funktion på varje element.
- Du slipper skapa en tom array och pusha in värden manuellt.
- Koden blir kortare och lättare att läsa.
- Extra användbart när du vill transformera data, t.ex. ändra format eller räkna ut nya värden.
*/
