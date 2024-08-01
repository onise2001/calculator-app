const toggle = document.querySelector("#toggle-track");
const toggleInput = document.querySelector(".toggle-input");
const body = document.querySelector("body");
const pad = document.querySelector(".numbers");
const mainInput = document.querySelector("#calc-input");
const inputError = document.querySelector(".input-error");

toggle.addEventListener("click", (event) => {
  let toggleValue = Number(toggleInput.value);
  if (toggleValue === 3) {
    toggleInput.value = 1;
  } else {
    toggleInput.value = toggleValue + 1;
  }
  setSliderStyle();
});

function setSliderStyle() {
  if (toggleInput.value == 1) {
    toggle.classList = "toggle-slider default";
    body.classList = "";
  } else if (toggleInput.value == 2) {
    toggle.classList = "toggle-slider light";
    body.classList = "light";
  } else if (toggleInput.value == 3) {
    toggle.classList = "toggle-slider dark";
    body.classList = "dark";
  }
}

pad.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("number-button") ||
    (event.target.classList.contains("symbol-button") &&
      !event.target.classList.contains("reset") &&
      !event.target.classList.contains("delete") &&
      !event.target.classList.contains("equal"))
  ) {
    mainInput.value += event.target.textContent;
  }

  if (event.target.classList.contains("equal")) {
    try {
      if (mainInput.value) {
        const answer = eval(mainInput.value.replace("x", "*"));
        if (answer && isFinite(answer)) {
          mainInput.value = answer;
          inputError.classList.add("hide");
        } else {
          throw new Error();
        }
      }
    } catch {
      inputError.classList.remove("hide");
    }
  }
  if (event.target.classList.contains("reset")) {
    mainInput.value = "";
  }
  if (event.target.classList.contains("delete")) {
    mainInput.value = mainInput.value
      .split("")
      .toSpliced(mainInput.value.length - 1)
      .join("");
  }
});
