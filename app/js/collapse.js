var collapse = {
  run: function() {
    let elements = document.querySelectorAll('[data-collapse-btn]');
    let self = this;
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', clickHandler);
    }

    function clickHandler(event) {
      let isMobile = this.getAttribute('data-collapse-btn').indexOf('mobile') != -1;
      let isInsideBtn = this.getAttribute('data-collapse-btn').indexOf('buttonInside') != -1;

      if (isInsideBtn) {
        return event.target.hasAttribute('data-collapse-btn-inside') ?
          self.toggleCollapse(this) :
          false;
      }

      if ((isMobile && window.innerWidth < 760) || (!isMobile)){
        event.preventDefault();
        return self.toggleCollapse(this);
      }
    }


    // $(document).on('click', '[data-collapse-btn]', function(e) {
    //   if(($(this).attr('data-collapse-btn') == 'mobile' && $(window).width() < 760) || ($(this).attr('data-collapse-btn') != 'mobile')){
    //     e.preventDefault();
    //     $(this).toggleClass('active').
    //     next('[data-collapse-body]').
    //     stop().slideToggle().
    //     toggleClass('active');
    //
    //     $(this).closest('[data-collapse-wrap]').siblings().
    //     find('[data-collapse-btn]').
    //     removeClass('active').
    //     next('[data-collapse-body]').
    //     stop().slideUp().
    //     removeClass('active');
    //   }
    // })
  },

  toggleCollapse(element) {
    element.classList.toggle('active');
    element.nextElementSibling.classList.toggle('active');
  }
};

module.exports = collapse;
