const Snappy = {

  init: function() {
    document.addEventListener('DOMContentLoaded', this.onDOMLoaded.bind(this));
  },

  onDOMLoaded: function(event) {
    this.renderComponents();
  },
  Component: {},
  renderComponents: function() {
    for (let key in this.Component) {
      let componentName = (this.camelCaseToDash(key));
      let elements = document.querySelectorAll(`[data-component=${componentName}]`);

      elements = Array.prototype.slice.call(elements);

      elements.forEach(function(element) {
        let component = new this.Component[key](element);

        element.component = component;
        let hasDefer = element.hasAttribute('data-defer-render');
       if(!hasDefer)component.render();
      }.bind(this));
    }
  },
  camelCaseToDash(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  },
  BaseComponent: class {
    constructor(element) {
      this.element = element;

      if (window.$) {
        this.$element = $(element);
        this.$window = $(window);
        this.$body = $('body');
      }
    }
    render(){

    }
  }

};

export default Snappy;
