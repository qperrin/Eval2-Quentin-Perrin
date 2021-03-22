const setTozero = (elements) => {
  elements.forEach((element) => {
    element.innerText = 0;
  });
};

const updateDisplay = (value, el) => {
  el.innerText = value;
};

export { setTozero, updateDisplay };
