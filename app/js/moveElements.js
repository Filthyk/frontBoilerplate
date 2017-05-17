let moveElements = {
  run() {
    let elements = document.querySelectorAll('[data-move-element]');
    runMove();
    window.addEventListener('resize', runMove);

    function runMove() {
      if (window.innerWidth > 760) {
        moveElements('desktop');
      }
      else {
        moveElements('mobile');
      }
    }

    function moveElements(device) {
      for (let i = 0; i < elements.length; i++) {
        let elementName = elements[i].getAttribute('data-move-element');
        document.querySelector(`[data-move-${device}-root="${elementName}"]`).appendChild(elements[i])
      }
    }
  }
};

module.exports = moveElements;