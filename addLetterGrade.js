"use strict";

// Возвращаем копии объектов с новым полем letter.
function addLetterGrade(data) {
    const result = [];

    for (const student of data) {
        let letter;

        if (student.score >= 90) {
            letter = "A";
        } else if (student.score >= 75) {
            letter = "B";
        } else {
            letter = "C";
        }

        result.push({ ...student, letter: letter });
    }

    return result;
}

module.exports = addLetterGrade;
