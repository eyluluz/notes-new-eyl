// Kata 10: Objekt och shorthand
// Syfte: Lära sig vad objekt är, hur de används och hur man skriver dem med modern syntax

console.log("=== Kata 10: Object Shorthand ===");

// Steg 1: Vad är ett objekt?
// Ett objekt är en samling egenskaper (properties) och metoder (functions)
const student = {
    name: "Anna",
    age: 25,
    likesCoffee: true
};
console.log("Studentens namn:", student.name);
console.log("Studentens ålder:", student.age);
console.log("Gillar kaffe?", student.likesCoffee);

// Steg 2: Lägg till en metod
student.greet = function() {
    return "Hej, jag heter " + this.name;
};
console.log(student.greet());

// Steg 3: Skapa objekt med variabler och shorthand
const name = "Erik";
const age = 22;
const person = {
    name, // shorthand
    age, // shorthand
    greet() {
        return `Hej, jag heter ${this.name}`;
    }
};
console.log(person.greet());

// Steg 4: Diskutera
// Vad är ett objekt? Hur kan man använda dem?
// Vad är fördelen med shorthand och metoder?
// När är objekt extra användbara?

/*
Förklaring:
- Ett objekt är ett sätt att samla data och funktioner som hör ihop, t.ex. en student med namn, ålder och metoder.
- Du kan skapa objekt med {} och lägga till egenskaper och metoder.
- Shorthand gör koden kortare när variabelnamnet och egenskapen är samma.
- Metoder i objekt används för att utföra uppgifter som hör till objektet.
- Objekt är grunden för all modern JavaScript och används överallt: i appar, API:er och när du vill strukturera data.
*/
