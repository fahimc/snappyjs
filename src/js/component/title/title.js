import Snappy from '../../lib/snappy';

Snappy.Component.Title = class Title extends Snappy.BaseComponent {
    constructor(element) {
        super(element);
    }

    render() {
        this.element.innerHTML += '<br>Snappy Element';
    }
}
