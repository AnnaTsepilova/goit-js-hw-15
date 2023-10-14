const inputRange = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");

textToChange.style.fontSize = `${inputRange.value}px`;

inputRange.addEventListener("input", () => {
  textToChange.style.fontSize = `${inputRange.value}px`;
});
