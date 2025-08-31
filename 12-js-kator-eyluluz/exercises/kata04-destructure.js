// Kata 4: Destructuring av objekt
// Syfte: Lära sig plocka ut värden ur objekt på ett enklare sätt

console.log("=== Kata 4: Destructuring Objects ===");

// Steg 1: Startkod - Plocka ut värden på "gammalt" sätt
const person = { name: "Anna", age: 25, city: "Stockholm" };
console.log("Namn:", person.name);
console.log("Ålder:", person.age);

// Steg 2: Introducera destructuring
// Byt ut ovan mot:
// const { name, age } = person;
// console.log("Namn:", name);
// console.log("Ålder:", age);
// Testa och se att det fungerar likadant

// Steg 3: Diskutera
// Vad är fördelen med destructuring?
// När är det extra användbart?

/*
Förklaring:
- Destructuring gör det enkelt att plocka ut värden ur objekt och arrayer med kort syntax.
- Du slipper skriva person.name, person.age osv, och kan istället få ut flera värden på en rad.
- Extra användbart när du jobbar med funktioner som tar emot objekt eller när du vill göra koden mer läsbar.
*/
