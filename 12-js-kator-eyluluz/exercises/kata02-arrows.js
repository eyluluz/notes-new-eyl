// Kata 2: Funktioner och introduktion till arrow functions
// Syfte: Lära sig grunderna i funktioner och se modern syntax

console.log("=== Kata 2: Funktioner ===");

// Steg 1: Startkod - En enkel funktion
function greet() {
    console.log("Hej!");
}
greet(); // Vad skrivs ut?

// Steg 2: Lägg till en parameter
function greetWithName(name) {
    console.log("Hej " + name + "!");
}
greetWithName("Anna"); // Vad skrivs ut?

// Steg 3: Testa att returnera ett värde
function add(a, b) {
    return a + b;
}
console.log("add(2, 3) =", add(2, 3));

const adding = (a, b) => a + b;
console.log("adding(2, 3) =", adding(2, 3));
// Steg 4: Modern syntax - Arrow function
// Byt ut 'function add(a, b)' mot 'const add = (a, b) => a + b;'
// Testa och se att det fungerar likadant

// Steg 5: Introducera 'this'

/*
const person = {
    name: "Anna",
    regularGreet: function() {
        console.log("Hej, jag heter " + this.name);
    },
    arrowGreet: () => {
        // Arrow functions har inte sitt eget 'this'
        console.log("Hej, jag heter " + this.name);
    }
};
person.regularGreet(); // Vad skrivs ut?
person.arrowGreet();   // Vad skrivs ut?


// Steg 6: Diskutera
// Vad är skillnaden mellan vanlig function och arrow function?
// Hur fungerar 'this' i de olika varianterna?

/*
Förklaring:
- En vanlig function har sitt eget 'this', vilket gör att den kan användas som metod i objekt och referera till objektets egenskaper.
- Arrow functions har inte sitt eget 'this', utan "ärver" från omgivningen där de skapades. Därför fungerar de inte som metoder i objekt.
- I exemplet ovan kommer regularGreet att skriva ut namnet korrekt, medan arrowGreet inte hittar 'this.name' och ger undefined.
- Arrow functions är perfekta för små funktioner, t.ex. i map/filter/reduce, men inte som metoder i objekt.
*/
