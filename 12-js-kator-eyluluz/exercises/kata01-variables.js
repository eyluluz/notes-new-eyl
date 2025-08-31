// Kata 1: Variabler med var, let och const
// Syfte: Förstå skillnaden mellan var, let och const steg för steg
/*
console.log("=== Kata 1: Variabler ===");

// Steg 1: Startkod
let name = "Anna";
console.log("Startvärde:", name); // Anna

// Steg 2: Ändra värdet
name = "Erik";
console.log("Efter ändring:", name); // Erik

// Steg 3: Byt ut 'var' mot 'const' och kör igen
// const name = "Anna";
// console.log("Startvärde:", name); // Anna
// name = "Erik"; // Vad händer nu? Testa och observera felet i konsolen
// console.log("Efter ändring:", name);

// Steg 4: Byt ut 'var' mot 'let' och kör igen
// let name = "Anna";
// console.log("Startvärde:", name); // Anna
// name = "Erik";
// console.log("Efter ändring:", name); // Erik

// Steg 5: Diskutera
// Vad är skillnaden mellan var, let och const?
// När ska man använda let? När ska man använda const?
// Testa gärna med egna variabler och se vad som händer.
 
/*
Förklaring:
- var är den gamla variabeltypen i JavaScript och används sällan idag. Den kan "läcka" utanför block och är svår att hålla koll på.
- let är modern och används när värdet ska kunna ändras, t.ex. en räknare i en loop.
- const används när värdet aldrig ska ändras, t.ex. ett namn eller en konstant. Om du försöker ändra en const-variabel får du ett fel.
Rekommendation: Använd alltid const om du kan, och let om du måste ändra värdet.
*/
