// Kata 9: Array.reduce()
// Syfte: Lära sig summera och bearbeta arrayer med reduce

console.log("=== Kata 9: Array.reduce() ===");

// Steg 1: Startkod - Summera med for-loop
const prices = [10, 25, 15, 40];
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}
console.log("Summa med for-loop:", total);

// Steg 2: Gör samma sak med reduce
const totalReduce = prices.reduce((sum, price) => sum + price, 0);
console.log("Summa med reduce:", totalReduce);
// Testa och se att det fungerar likadant

// Steg 3: Diskutera
// Vad kan reduce göra som map/filter inte kan?
// När är reduce extra användbart?

/*
Förklaring:
- reduce kan "sammanfatta" en array till ett enda värde, t.ex. en summa, ett medelvärde eller ett objekt.
- map och filter skapar alltid nya arrayer, men reduce kan skapa vad som helst.
- Extra användbart för att räkna ut totalsummor, medelvärden eller bygga upp komplexa resultat från en lista.
*/
