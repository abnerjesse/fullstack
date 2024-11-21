// let randomArray = []

// function createRandomArray() {
//     for (let index = 0; index < 12; index++) {
//         randomArray.push(Math.floor(Math.random() * 12) + 1)
//     }

//     document.getElementById("random-array").textContent = randomArray
// }

// function evenFilter() {
//     let evenArray = []
//     for (let index = 0; index < randomArray.length; index++) {
//         if (randomArray[index] % 2 == 0) {
//             evenArray.push(randomArray[index])
//         }
//     }

//     document.getElementById("print-result").innerHTML = `
//         <span id="result-array">${evenArray}</span>
//     `
// }

// function oddFilter() {
//     let oddArray = []
//     for (let index = 0; index < randomArray.length; index++) {
//         if (randomArray[index] % 2 != 0) {
//             oddArray.push(randomArray[index])
//         }
//     }

//     document.getElementById("print-result").innerHTML = `
//         <span id="result-array">${oddArray}</span>
//     `
// }

// document.body.onload = createRandomArray
// document.getElementById("even").onclick = evenFilter
// document.getElementById("odd").onclick = oddFilter

//By GPT
let randomArray = [];

function createRandomArray() {
  randomArray = Array.from({ length: 12 }, () => Math.floor(Math.random() * 12) + 1);
  document.getElementById("random-array").textContent = randomArray.join(", ");
}

function filterArray(type) {
  const filteredArray = randomArray.filter(num => (type === "even" ? num % 2 === 0 : num % 2 !== 0));
  document.getElementById("print-result").innerHTML = `
    <span class="result-array">${filteredArray.join(", ")}</span>
  `;
}

document.body.onload = createRandomArray;
document.getElementById("even").onclick = () => filterArray("even");
document.getElementById("odd").onclick = () => filterArray("odd");