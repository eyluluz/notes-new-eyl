// Kata 11: for...of Loops
// Syfte: Lära sig iterera över arrayer med modern syntax

console.log("=== Kata 11: for...of Loops ===");

// Steg 1: Startkod - Iterera med for-loop
const fruits = ["äpple", "banan", "apelsin"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Jag gillar", fruits[i]);
}

// Steg 2: Gör samma sak med for...of
// for (const fruit of fruits) {
//     console.log("Jag gillar", fruit);
// }
// Testa och se att det fungerar likadant

// Steg 3: Diskutera
// Vad är fördelen med for...of jämfört med for-loop?
// När är for...of extra användbart?

/*
Förklaring:
- for...of är enklare och mer läsbar när du bara vill gå igenom alla element i en array.
- Du slipper hålla reda på index och kan direkt jobba med värdena.
- Extra användbart för arrayer, strängar och andra "itererbara" saker.
*/
