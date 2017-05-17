let counter = {
  run() {
    let elements = document.querySelectorAll('[data-input-count]');

    for (let i = 0; i < elements.length; i++) {
      new Counter(elements[i]);
    }
  }
};

function Counter(element) {
  let buttons = element.querySelectorAll('[data-input-count-btn]');
  let input = element.querySelector('[data-input-count-input]');
  setEvents();

  function setEvents() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => changeInput(buttons[i]));
    }

    input.addEventListener('change', () => validateInput(input));
  }

  function changeInput(button) {
    let buttonType = button.getAttribute('data-input-count-btn');
    let currentValue = parseInt(input.value);
    if (buttonType === 'minus' && currentValue > 1) {
      input.value = --currentValue;
    }
    else if (buttonType === 'plus') {
      input.value = ++currentValue;
    }
  }

  function validateInput(input) {
    let inputValue = Number(input.value);

    if (isNaN(inputValue) || inputValue < 1) {
      input.value = 1;
      element.classList.add('error');
      setTimeout(() => {
        element.classList.remove('error');
      },500)
    }
  }
}

module.exports = counter;