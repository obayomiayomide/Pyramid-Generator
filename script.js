var countInput = document.getElementById("count-input");
var characterInput = document.getElementById("character-input");
//let checkInverted = document.getElementById();
const generateBtn = document.getElementById("generate-btn");
let output = document.getElementById("output");
let count = Number(countInput.value);
let character = characterInput.value;
let rows = [];
let result = ""
let inverted = false;

generateBtn.addEventListener("click", generatePyramid);

function generatePyramid() {
  let count = Number(countInput.value);
  let character = characterInput.value;
  result = "";
  rows = [];
  if ((count <= 20) && (count > 0) && character) {
    for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
    }
    
    for (const row of rows) {
      result = result + "\n" + row;
    }

    console.log(result);
    output.innerText = `${result}`;
    
    countInput.value = "";
    characterInput.value = "";
    
  } else if (count > 20 && character) {
    alert("Number of rows exceeded");
  } else if (count && character == false) {
    alert("Please insert a character");
  } else if (count === 0 && character) {
    alert("Please insert the number of rows");
  } else if (count === 0 && character == false) {
    alert("Please insert the number of rows and a character");
  }
}

function padRow(rowNumber, rowCount) {
  character = characterInput.value;
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// function padRow(rowNumber, rowCount) {
//   character = characterInput.value;
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }

// // Loop code 1
// for (let i = 1; i <= count; i++) {
//     if (inverted) {
//         rows.push(padRow(i, count));
//     } else {
//         rows.unshift(padRow(i, count));
//     }
// }


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

// let result = ""

// for (const row of rows) {
//   result = result + "\n" + row;
// }

// console.log(result);