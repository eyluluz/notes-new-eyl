// Kata 3: Strängar och template literals
// Syfte: Lära sig bygga strängar och använda modern ES6-syntax

console.log("=== Kata 3: Strängar och template literals ===");

// Steg 1: Startkod - Strängkonkatenering
var name = "Anna";
var city = "Stockholm";
var message = "Hej " + name + "! Välkommen till " + city + ".";
console.log(message); // Vad skrivs ut?

//ny
var message = `Hej ${name}! Välkommen till ${city}.`;
console.log(message); // Vad skrivs ut?

var info = `Namn: ${name}
Stad: ${city}`;
console.log(info);

// Steg 2: Förbättra med template literals
// Byt ut message mot:
// var message = `Hej ${name}! Välkommen till ${city}.`;
// Testa och se att det fungerar likadant

// Steg 3: Multirad-strängar
// Skapa en presentation med flera rader:
// var info = `Namn: ${name}
// Stad: ${city}`;
// console.log(info);

// Steg 4: Diskutera
// Vad är fördelarna med template literals jämfört med +?
// När är det extra användbart?

/*
Förklaring:
- Template literals (backticks och ${}) gör det enklare att bygga strängar med variabler.
- Du slipper plus-tecken och kan skriva multirad-strängar direkt.
- Det blir lättare att läsa och underhålla koden, särskilt när många variabler ska in i en sträng.
- Extra användbart för HTML, e-post eller meddelanden där layouten är viktig.
*/
