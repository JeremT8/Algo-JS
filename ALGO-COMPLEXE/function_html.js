function getOption(year) {
    return "<option>" + year + "</option>";
}

function getYear(startYear, numberOfYears, inTheFutur = false) {
    html = "<select>";

    for (let i = 0; i < numberOfYears; i++) {
        html += getOption(startYear + i);
    }

    html += "</select>";

    return html;
}

console.log(getYear(1997, 25));