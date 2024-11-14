const tagNum1 = document.getElementById("num1");
const tagNum2 = document.getElementById("num2");

function checkValues(num1, num2, isBigger) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Preencha ambos os números corretamente.");
    return;
  }

  if (num1 === num2) {
    alert("Os dois números são iguais.");
    return;
  }

  const result = isBigger
    ? Math.max(num1, num2)
    : Math.min(num1, num2);

  alert(`${result} é o ${isBigger ? "maior" : "menor"} entre os dois números!`);
}

function isBigger() {
  const num1 = Number(tagNum1.value);
  const num2 = Number(tagNum2.value);
  checkValues(num1, num2, true);
  clearInputs();
}

function isSmaller() {
  const num1 = Number(tagNum1.value);
  const num2 = Number(tagNum2.value);
  checkValues(num1, num2, false);
  clearInputs();
}

function clearInputs() {
  tagNum1.value = "";
  tagNum2.value = "";
}

document.getElementById("btnBigger").onclick = isBigger;
document.getElementById("btnSmaller").onclick = isSmaller;