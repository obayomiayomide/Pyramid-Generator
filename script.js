let characterInput = document.getElementById("character-input");
let countInput = document.getElementById("count-input");
let checkInverted = document.getElementById();


// const character = "#";
// const count = 8;
// const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Loop code 1
for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.push(padRow(i, count));
    } else {
        rows.unshift(padRow(i, count));
    }
}


// Loop code 1
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count));
// }

//Loop code 2
// while (rows.length < count) {
//     rows.push(padRow(rows.length + 1, count));
// }

//Loop Code 1 for Inverted Pyramid
// for (let i = count; i > 0; i--) {
//     rows.push(padRow(i, count));
// }

//Loop Code 2 for Inverted Pyramid
// for (let i = 1; i <= count; i++) {
//     rows.unshift(padRow(i, count));
// }

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);