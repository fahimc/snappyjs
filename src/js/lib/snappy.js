const Snappy = {

  init: function() {
    document.addEventListener('DOMContentLoaded', this.onDOMLoaded.bind(this));
  },

  onDOMLoaded: function(event) {
    this.renderComponents();
  },

  renderComponents: function() {
    for (let key in this.Component) {
      let elements = document.querySelectorAll(`${this.Component[key].tagName}:not([data-defer-snappy])`);

      elements = Array.prototype.slice.call(elements);

      elements.forEach(function(element) {
        let component = new this.Component[key](element);

        element.component = component;
        component.render();
      }.bind(this));
    }
  },

  Component: {},

  BaseComponent: class {
    constructor(element) {
      this.element = element;

      if (window.$) {
        this.$element = $(element);
        this.$window = $(window);
        this.$body = $('body');
      }
    }
  }

};

export default Snappy;
