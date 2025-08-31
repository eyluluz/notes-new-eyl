// Kata 12: Kombinera ES6-koncept
// Syfte: Träna på att använda flera ES6-syntax samtidigt

console.log("=== Kata 12: Combine ES6 Concepts ===");

// Steg 1: Startkod - Array med studenter
const students = [
    { name: "Anna", grades: [85, 92, 78] },
    { name: "Erik", grades: [88, 79, 91] },
    { name: "Sara", grades: [90, 95, 87] }
];
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name, "har betyg:", students[i].grades);
}

// Steg 2: Plocka ut namn och betyg med destructuring
// for (const student of students) {
//     const { name, grades } = student;
//     console.log(name, "har betyg:", grades);
// }

// Steg 3: Räkna ut medelvärde med map och arrow function
// const presentations = students.map(student => {
//     const avg = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
//     return `${student.name} har medelvärde ${Math.round(avg)}`;
// });
// console.log(presentations);

// Steg 4: Diskutera
// Hur kan du kombinera flera ES6-koncept för att lösa större problem?
// Testa gärna med egna data och funktioner.

/*
Förklaring:
- Genom att kombinera destructuring, map, arrow functions och reduce kan du lösa komplexa problem med kort och tydlig kod.
- Du kan plocka ut värden, räkna ut medelvärden och skapa presentationer på några rader.
- Det är så modern JavaScript används i riktiga projekt!
*/
