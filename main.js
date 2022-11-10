const ce = document.querySelector("#ce");
const display = document.querySelector(".display");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const gleich = document.querySelector("#gleich");
const zero = document.querySelector("#null");
const eins = document.querySelector("#eins");
const zwei = document.querySelector("#zwei");
const drei = document.querySelector("#drei");
const vier = document.querySelector("#vier");
const fuenf = document.querySelector("#fuenf");
const sechs = document.querySelector("#sechs");
const sieben = document.querySelector("#sieben");
const acht = document.querySelector("#acht");
const neun = document.querySelector("#neun");
const punkt = document.querySelector("#punkt");

let numbers = [];
let zeichen = [];
let equalIsPressed = false;

function undoLast() {
  const newContent = [...display.textContent]
    .filter((el, ind, arr) => ind !== arr.length - 1).join("");
  display.textContent = newContent;
}

function addNumber(num) {
  display.textContent += num;
}

function addSign(signString) {
  if (!equalIsPressed) numbers.push(parseFloat(display.textContent));
    display.textContent = "";
    zeichen.push(signString)
    equalIsPressed = false;
}

function handleResult() {
  if (numbers.length === 0) return null;
  numbers.push(parseFloat(display.textContent));
  let result = numbers[0];
  display.textContent = "";
  for (let i = 1, j = 0; i < numbers.length, j < zeichen.length; i++, j++) {
    switch (zeichen[j]) {
      case '+':
        result += numbers[i];
        break;
      case '-':
        result -= numbers[i];
        break;
    }
  }
  display.textContent = result;
  numbers.length = 0;
  numbers.push(result);
  zeichen = [];
  equalIsPressed = true;
}

function deleteResult() {
  equalIsPressed = false;
  numbers.length = 0;
  zeichen.length = 0;
  display.textContent = "";
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "0":
      addNumber(0);
      break;
    case "1":
      addNumber(1);
      break;
    case "2":
      addNumber(2);
      break;
    case "3":
      addNumber(3);
      break;
    case "4":
      addNumber(4);
      break;
    case "5":
      addNumber(5);
      break;
    case "6":
      addNumber(6);
      break;
    case "7":
      addNumber(7);
      break;
    case "8":
      addNumber(8);
      break;
    case "9":
      addNumber(9);
      break;
    case "+":
      addSign("+");
      break;
    case "-":
      addSign("-");
      break;
    case ".":
      addNumber(".");
      break;
    case "Enter":
      handleResult();
      break;
    case "=":
      handleResult();
      break;
    case "Escape":
      deleteResult();
      break;
    case "Delete":
      deleteResult();
      break;
    case "Backspace":
      undoLast();
      break;
  }
});

ce.addEventListener("click", () => {
  deleteResult();
})
plus.addEventListener("click", () => {
  addSign("+");
});
minus.addEventListener("click", () => {
  addSign("-");
});
zero.addEventListener("click", () => addNumber(0));
eins.addEventListener("click", () => addNumber(1));
zwei.addEventListener("click", () => addNumber(2));
drei.addEventListener("click", () => addNumber(3));
vier.addEventListener("click", () => addNumber(4));
fuenf.addEventListener("click", () => addNumber(5));
sechs.addEventListener("click", () => addNumber(6));
sieben.addEventListener("click", () => addNumber(7));
acht.addEventListener("click", () => addNumber(8));
neun.addEventListener("click", () => addNumber(9));
punkt.addEventListener("click", () => addNumber("."))
gleich.addEventListener("click", () => {
  handleResult();
});