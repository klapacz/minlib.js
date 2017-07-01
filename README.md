# minlib.js

Minlib.js is small (~0.8kb minified) javascript library to event listener and queryselector. 

file (ES6)    | weight
--------------|-------------
minlib.js     | ~1.3 KB
minlib.min.js | **0.653 KB**

file (with support for old browsers)    | weight
----------------------------------------|--------------
forOldBrowsers/minlib.js                | ~1.33 KB
forOldBrowsers/minlib.min.js            | **0.711 KB**

## Instalation

1.Include minlib.min.js on your page before the closing `</body>` tag
```html
<script src="/path/to/minlib.min.js"></script>
```
2.**Enjoy :D**

## Documentation

### sel() (`querySelector`) 

Function `sel()` returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors.

Syntax:`sel(selector, baseElement)` 
>   Tips :
>>  1.If a baseElement is document, you don't have to write this.

[`Element.querySelector()` on MDN](https://developer.mozilla.org/pl/docs/Web/API/Element/querySelector "Element.querySelector() - MDN")

##### example 1

minlib.js:
```javascript
sel('h1'); // baseElement is document
```

[vanilla.js:](http://vanilla-js.com/)
```javascript
document.querySelector('h1');
```
##### example 2
minlib.js:
```javascript
sel('h1', element); // baseElement is element
```
[vanilla.js:](http://vanilla-js.com/)
```javascript
element.querySelector('h1');
```

### all() (`querySelectorAll`)

Function `all()` Returns a non-live NodeList of all elements descended from the element on which it is invoked that matches the specified group of CSS selectors. 

Syntax:`all(selector, baseElement)`

>   Tips :
>> 1.If a baseElement is document, you don't have to write this.
>
>> 2.`querySelectorAll` returs NodeList(array) so you should use [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach "NodeList.forEach() - MDN")

[`Element.querySelectorAll()` on MDN](https://developer.mozilla.org/pl/docs/Web/API/Element/querySelectorAll "Element.querySelectorAll - MDN")

##### example 1

minlib.js: 
```javascript
all('h1'); // baseElement is document
```
[vanilla.js:](http://vanilla-js.com/)
```javascript
document.querySelectorAll('h1');
```

##### example 2

minlib.js: 
```javascript
all('h1', element); // baseElement is element
```
[vanilla.js:](http://vanilla-js.com/)
```javascript
element.querySelectorAll('h1');
```

 ### addEvt() (`addEventListener()`)
 
 Syntax: `addEvt(target, type, listener)`
 
 In target you can write: 
 1. [Element](https://developer.mozilla.org/en-US/docs/Web/API/element "Element - MDN") (example 5, example 3)
 2. [NodeLIst](https://developer.mozilla.org/pl/docs/Web/API/NodeList "NodeList - MDN")
 3. Selector (example 1)
 4. Array with selectors. (example 2)

[`element.addEventListener` on MDN](https://developer.mozilla.org/pl/docs/Web/API/Element/addEventListener "Mozilla developer network") 

##### example 1
 
minlib.js:
```javascript
addEvt('h1', 'click', yourFunction);
```
> Tip:
>>  This use `addEventListener` on all `<h1></h1>` element on page.
>>  If you want to use listener only on the first element with `<h1></h1>` tag you should write in target: 
>>  `sel('h1')`  or `all('h1')[0]`.


[vanilla.js:](http://vanilla-js.com/)
```javascript
document.querySelectorAll('h1').forEach(function (element) {
    element.addEventListner('click', yourFunction);
});
```

##### example 2

minlib.js:
```javascript
addEvt(['h1', 'h2', 'p'], 'click', yourFunction);
```
[vanilla.js:](http://vanilla-js.com/)
```javascript
['h1', 'h2', 'p'].forEach(function (element) {
    document.querySelectorAll(element).forEach(function (el) {
        el.addEventListner('click', yourFunction);
    });
});
```

##### example 3

minlib.js:
```javascript
addEvt(sel('h1'), 'click', fuction () {
    //code
});
```

##### example 4
minlib.js:
```javascript
addEvt(all('h1')[2], 'click'. yourFunction);
```

##### example 5
minlib.js:
```javascript
addEvt(element, 'click', yourFunction);
```

### loaded() (`DOMContentLoaded`,  `$( document ).ready(function() {})`)

Syntax: `loaded(listener)`

minlib.js:
```javascript
loaded(function(){
    //code
});
```

vanilla.js:
```javascript
document.addEventListener('DOMContentLoaded', function () {
    //code
});
```

jQuery:
```javascript
$( document ).ready(function() {
    //code
});
```