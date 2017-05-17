var stickyFooter = {
    run: function() {
      if(document.querySelector('.footer') !== null){
        this.execute();

        window.addEventListener('resize', this.execute);
      };
    },
    execute: function() {
        var top = document.querySelector('header');
        var main = document.querySelector('main');
        var footer = document.querySelector('.footer');
        var footerMargin = parseInt(getComputedStyle(footer).marginTop);

        main.style.minHeight = window.innerHeight - top.offsetHeight - footer.offsetHeight - footerMargin + "px";
    }
};

module.exports = stickyFooter;
