"use strict";

// При равенстве максимальных баллов возвращается первое имя.
function findTopStudent(data) {
    if (data.length === 0) {
        return null;
    }

    let topStudent = data[0];

    for (const student of data) {
        if (student.score > topStudent.score) {
            topStudent = student;
        }
    }

    return topStudent.name;
}

module.exports = findTopStudent;
