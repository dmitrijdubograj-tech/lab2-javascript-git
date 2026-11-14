"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const calculateAverage = require("../calculateAverage.js");
const findTopStudent = require("../findTopStudent.js");
const filterFailed = require("../filterFailed.js");
const addLetterGrade = require("../addLetterGrade.js");

const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

test("Данные задания: среднее, лидер, должники и буквенные оценки", () => {
    assert.equal(calculateAverage(grades), 77.6);
    assert.equal(findTopStudent(grades), "Денис");
    assert.deepEqual(filterFailed(grades, 60), ["Студент_X"]);
    assert.deepEqual(
        addLetterGrade(grades).map(student => student.letter),
        ["B", "A", "B", "B", "C"]
    );
});

test("Порог сдачи: 59 не сдано, 60 и 61 сдано", () => {
    const boundary = [
        { name: "Ниже", score: 59 },
        { name: "Ровно", score: 60 },
        { name: "Выше", score: 61 }
    ];
    assert.deepEqual(filterFailed(boundary, 60), ["Ниже"]);
});

test("Границы буквенных оценок: 74, 75, 89 и 90", () => {
    const data = [74, 75, 89, 90].map(score => ({ name: "Тест", score }));
    assert.deepEqual(
        addLetterGrade(data).map(student => student.letter),
        ["C", "B", "B", "A"]
    );
});

test("Пустая группа и группа из одного студента", () => {
    assert.equal(calculateAverage([]), null);
    assert.equal(findTopStudent([]), null);
    assert.deepEqual(filterFailed([], 60), []);
    assert.deepEqual(addLetterGrade([]), []);
    const single = [{ name: "Один", score: 60 }];
    assert.equal(calculateAverage(single), 60);
    assert.equal(findTopStudent(single), "Один");
    assert.deepEqual(filterFailed(single, 60), []);
});

test("При равном максимуме выбирается первый студент", () => {
    const tied = [
        { name: "Первый", score: 92 },
        { name: "Второй", score: 92 }
    ];
    assert.equal(findTopStudent(tied), "Первый");
});

test("Исходные записи не меняются, все их поля сохраняются", () => {
    const original = Object.freeze([
        Object.freeze({ name: "А", score: 90, group: "Группа 1" })
    ]);
    assert.equal(calculateAverage(original), 90);
    assert.equal(findTopStudent(original), "А");
    assert.deepEqual(filterFailed(original, 60), []);
    const result = addLetterGrade(original);
    assert.deepEqual(result, [
        { name: "А", score: 90, group: "Группа 1", letter: "A" }
    ]);
    assert.notStrictEqual(result, original);
    assert.notStrictEqual(result[0], original[0]);
    assert.equal(Object.hasOwn(original[0], "letter"), false);
});
