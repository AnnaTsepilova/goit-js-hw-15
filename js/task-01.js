const textInput = document.querySelector("#validation-input");
const quantitySymbols = document.querySelector('[data-length="6"]');

textInput.addEventListener("blur", () => {
  textInput.classList.remove("valid");
  textInput.classList.remove("invalid");

  if (
    textInput.value.length === Number.parseInt(quantitySymbols.dataset.length)
  ) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});
