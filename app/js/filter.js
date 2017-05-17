let filter = {
  run() {
    let btnOpen = document.querySelector('[data-filter-open]');
    let btnClose = document.querySelector('[data-filter-close]');
    let filter = document.querySelector('[data-filter]');

    if (filter) {
      btnOpen.addEventListener('click', function () {
        filter.classList.add('opened');
      });

      btnClose.addEventListener('click', function () {
        filter.classList.remove('opened');
      });
    }
  }
};

module.exports = filter;