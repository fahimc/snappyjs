# Snappy JS  
----------
## <a name="Contribution"></a>Contribution  
This framework which design and built by the following people:  
**Fahim Chowdhury**  
**Stu Huntington**  

## <a name="About"></a>About

This a very small ES6 framework to create JS components in a pre-rendered custom HTML tags. 

With many component libraries, custom tags are rendered after the framework has loaded and this is not good for SEO.

SnappyJS will wait for the page to load and then wrap the custom tags with component functionality.   

SnappyJS is OOP with inheritance and you can have as many tags on the page and they will be their own component.


### <a name="Prerequisites"></a>Prerequisites  
Below is a list of things you will need in order to use this library:

- ES6 project

## Usage  

###Download  
Either download the tag or check the release branch. Download the snappy.js file.

Include snappy.js into your ES6 project and initialise Snappy:

```js
import Snappy from "./lib/snappy";

let Main =
{
  init()
  {
    Snappy.init();
    document.addEventListener('DOMContentLoaded', this.onLoaded.bind(this));
  },
  onLoaded()
  {

  }
};

Main.init();
```

## Creating a Component

1. Create a new ES6 file and import snappy:

```js
import Snappy from '../../lib/snappy';

``` 

2. Create a new class and Extend Snappy's **base** component:
```js
Snappy.Component.Title = class Title extends Snappy.BaseComponent {

}

```

The Class must consist of the following functions:

```js
import Snappy from '../../lib/snappy';

Snappy.Component.Title = class Title extends Snappy.BaseComponent {
    constructor(element) {
    }

    render() {
    }
}

```


3. Snappy needs to know which HTML tag you want to associate this component with, Snappy will use the class name and hypenate it. for example 'BackButton' will be 'back-button'.  

In your markup you will need to add an attribute so snappy can apply the class to the element. 'data-component' is used to bind the element and an instance of the class.

### Example of Markup:  

```js
<div data-component="title">Hello World</div>

```  


4. Snappy will pass the Class the HTML element into the constructor. You need to pass this to the `super` class so it can be injected into the Class.

```js
import Snappy from '../../lib/snappy';

Snappy.Component.Title = class Title extends Snappy.BaseComponent {
    constructor(element) {
        super(element);
    }
}

```

5. Once the component has been instantiated, Snappy will call `render` on the component. You can add your functionality via this function.

```js
import Snappy from '../../lib/snappy';

Snappy.Component.Title = class Title extends Snappy.BaseComponent {
    constructor(element) {
        super(element);
    }

    render() {
        this.element.innerHTML += '<br>Snappy Element';
    }
}

```

6. If you want to defer the render method, you can add 'data-defer-render' to the element and you now can call render() when you need to.  

### Example of Markup:  

```js
<div data-component="title" data-defer-render>Hello World</div>

```  
