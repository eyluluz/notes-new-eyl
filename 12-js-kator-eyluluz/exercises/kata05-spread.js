// Kata 5: Spread operator
// Syfte: Lära sig kombinera och kopiera arrayer och objekt med ...

console.log("=== Kata 5: Spread Operator ===");

// Steg 1: Startkod - Kombinera arrayer med concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log("Kombinerad med concat:", combined);

// Steg 2: Använd spread operator
const combinedSpread = [...arr1, ...arr2];
console.log("Kombinerad med spread:", combinedSpread);
// Testa och se att det fungerar likadant

// Steg 3: Kopiera och lägga till element
const arr1Copy = [...arr1, 7];
console.log("Kopierad och utökad:", arr1Copy);

// Steg 4: Diskutera
// Vad är fördelen med spread jämfört med concat/metoder?
// När är det extra användbart?

/*
Förklaring:
- Spread operator (...) gör det enkelt att kopiera och kombinera arrayer och objekt.
- Du kan lägga till nya element eller egenskaper direkt när du kopierar.
- Det är mer flexibelt och lättläst än concat eller Object.assign.
- Extra användbart när du vill undvika att ändra originaldata (immutability).
*/
