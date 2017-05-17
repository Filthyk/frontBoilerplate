import "inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js";
import Inputmask from "inputmask/dist/inputmask/inputmask.js";
import "inputmask/dist/inputmask/inputmask.extensions.js";
import "inputmask/dist/inputmask/inputmask.numeric.extensions.js";

let inputMask = {
  run() {
    this.phoneMask = new Inputmask("+7 (999) 99-99-999");
    this.mailMask = new Inputmask({ alias: "email"});
    this.numberMask = new Inputmask({
      alias: "decimal",
      rightAlign: false
    });

    let phoneElements = document.querySelectorAll('[data-mask="phone"]');
    let mailElements = document.querySelectorAll('[data-mask="mail"]');
    let numberElements = document.querySelectorAll('[data-mask="number"]');

    for (let i = 0; i < phoneElements.length; i++) {
      this.initPhoneMask(phoneElements[i])
    }
    for (let i = 0; i < mailElements.length; i++) {
      this.initMailMask(mailElements[i])
    }
    for (let i = 0; i < numberElements.length; i++) {
      this.initNumberMask(numberElements[i])
    }
  },

  initPhoneMask(selector) {
    this.phoneMask.mask(selector)
  },

  initMailMask(selector) {
    this.mailMask.mask(selector)
  },

  initNumberMask(selector) {
    this.numberMask.mask(selector)
  }

};

module.exports = inputMask;