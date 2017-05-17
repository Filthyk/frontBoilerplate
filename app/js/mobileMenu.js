let mobileMenu = {
  run() {
    let menu = document.querySelector('[data-mobile-menu]');
    let openBtn = document.querySelector('[data-mobile-menu-open]');
    let closeBtn = document.querySelector('[data-mobile-menu-close]');

    openBtn.addEventListener('click', function () {
      menu.classList.add('opened')
    });

    closeBtn.addEventListener('click', function () {
      menu.classList.remove('opened')
    });

  }
};

module.exports = mobileMenu;