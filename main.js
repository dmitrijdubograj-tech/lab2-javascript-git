"use strict";

const calculateAverage = require("./calculateAverage.js");
const findTopStudent = require("./findTopStudent.js");
const filterFailed = require("./filterFailed.js");
const addLetterGrade = require("./addLetterGrade.js");

const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

const passScore = 60;

console.log("Средний балл группы: " + calculateAverage(grades));
console.log("Лучший студент: " + findTopStudent(grades));
console.log("Список должников: " +
    JSON.stringify(filterFailed(grades, passScore)));
console.log("Итоговый массив с буквенными оценками:");
console.log(JSON.stringify(addLetterGrade(grades), null, 2));
