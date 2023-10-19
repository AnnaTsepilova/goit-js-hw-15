function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtnClick);

destroyBtn.addEventListener("click", onDestroyBtnClick);

function onDestroyBtnClick(event) {
  destroyBoxes();
}

function onCreateBtnClick(event) {
  createBoxes(inputNumber.value);
}

function createBoxes(amount) {
  let currentSizeBox = 30;
  let boxes = [];

  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");

    box.style.width = `${currentSizeBox}px`;
    box.style.height = `${currentSizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginTop = "5px";
    box.style.marginBottom = "5px";
    box.style.borderRadius = "5px";

    currentSizeBox += 10;

    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes(event) {
  const boxesToDestroy = document.querySelectorAll("#boxes div");
  boxesToDestroy.forEach((box) => box.remove());

  currentSizeBox = 30;
}
