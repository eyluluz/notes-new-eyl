// Kata 6: Defaultvärden för funktioner
// Syfte: Lära sig använda defaultvärden för parametrar

console.log("=== Kata 6: Default Parameters ===");

// Steg 1: Startkod - Funktion utan defaultvärde
function greet(name) {
    return "Hej " + name + "!";
}
console.log(greet()); // Vad skrivs ut?

// Steg 2: Lägg till defaultvärde
function greet2(name = "Vän") {
     return "Hej " + name + "!";
 }
 console.log(greet2()); // Vad skrivs ut nu?

 console.log(greet("Anna")); // Vad skrivs ut?

// Steg 3: Diskutera
// När är det bra att använda defaultvärden?
// Testa gärna med egna funktioner och flera defaultvärden.

 /*
Förklaring:
- Defaultvärden gör att funktioner fungerar även om man glömmer att skicka med en parameter.
- Det minskar risken för buggar och gör koden mer robust.
- Extra användbart för funktioner där vissa värden ofta är samma, t.ex. språk eller standardinställningar.
*/
