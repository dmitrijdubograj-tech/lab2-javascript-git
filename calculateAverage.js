"use strict";

// Средний балл. Для пустой группы среднее не определено.
function calculateAverage(data) {
    if (data.length === 0) {
        return null;
    }

    let sum = 0;

    for (const student of data) {
        sum += student.score;
    }

    return sum / data.length;
}

module.exports = calculateAverage;
