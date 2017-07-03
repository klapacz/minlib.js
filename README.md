# minlib.js

Minlib.js is small and simple javascript library to adding event listeners and searching elements by CSS selectors.

file (ES6)    | weight
--------------|-------------
minlib.js     | 1.04 KB
minlib.min.js | **0.500 KB**

file (with support for old browsers)    | weight
----------------------------------------|---------
forOldBrowsers/minlib.js                | 3.13 KB
forOldBrowsers/minlib.min.js            | 1.89 KB

## Instalation

Include minlib.min.js on your page before the closing `</body>` tag
```html
<script src="/path/to/minlib.min.js"></script>
```

## Documentation

### sel() ([`Element.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector "Element.querySelector() - MDN")) 

Function `sel()` returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors.

Syntax:`sel(selector, baseElement)` 

If a baseElement is document, you don't have to write this.

##### example 1

```javascript
sel('h1'); // returns first h1 element (baseElement is document)
```

##### example 2
```javascript
let el = sel('.container')  // returns element with class container
sel('h1', el);              // returns first h1 element from el (baseElement is el)
```

##### exmaple 3

```javascript
sel('header h1')
```

### all() ([`Element.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll "Element.querySelectorAll - MDN"))

Function `all()` returns a Array (not NodeList) of all elements descended from the element on which it is invoked that matches the specified group of CSS selectors. 


Syntax:`all(selector, baseElement)`

In selector you can write:

1. String with selector (example 1)
2. String with selectors (example 2)

If a baseElement is document, you don't have to write this.

>`all()` returs Array so you should use[`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of "for...of - MDN") [(`or forEach()`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "Array.prototype.forEach() - MDN")

##### example 1

```javascript
all('h1'); // returns array with all h1 elements (baseElement is document)
```

##### example 2

```javascript
all('h1, p') // returns array with all h1 and p elements 
```

##### example 3

```javascript
all('h1', element); // returns array with all h1 elements from element (baseElement is element)
```


 ### addEvt() ([`element.addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener "element.addEventListener - MDN") )
 
 Syntax: `addEvt(target,`[`type,`](https://developer.mozilla.org/en-US/docs/Web/Events "Event reference - MDN")`listener)`
 
 In target you can write: 
 1. [Element ](https://developer.mozilla.org/en-US/docs/Web/API/element "Element - MDN") (or a function that returns an element) (example 3, example 4, example 5, example 6)
1. String with selector (example 1)
2. String with selectors (example 2)

##### example 1
 
minlib.js:
```javascript
addEvt('h1', 'click', yourFunction); // sets event listener on all h1 element
```
> Tips:
>> 1.This use `addEventListener` on all `<h1></h1>` element on page.
>
>> 2.If you want to use listener only on the first element with `<h1></h1>` tag you should write in target: 
>>  `sel('h1')`  or `all('h1')[0]`.

##### example 2

```javascript
addEvt('h1, h2, p', 'click', yourFunction); // sets event listener on all h1 h2 and p element 
```
In [vanilla.js](http://vanilla-js.com/) you have to write:
```javascript
document.querySelectorAll('h1, h2, p').forEach(function (element) {
    element.addEventListener('click', yourFunction);
});
```

##### example 3
```javascript
addEvt(sel('#row'), 'click', fuction () {
    //code in anonymous function 
});
```

##### example 4

```javascript
addEvt(all('.button')[1], 'click', yourFunction); // sets event listener on second element with button class
```

##### example 5

```javascript
let el = sel('.container')
addEvt(el, 'click', yourFunction);
```

##### example 5  

```javascript
let div = document.createElement('div')
addEvt(div, 'click', yourFunction);
```

### loaded() ([`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded "DOMContentLoaded - MDN"))

 function `loaded()` start when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. 

Syntax: `loaded(listener)`

##### example

```javascript
loaded(function(){
    //code
});
```

## License

The MIT License (MIT)