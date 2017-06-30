# minlib.js

Minlib.js is small (~0.8kb minified) javascript library to event listener and queryselector. 

file          | weight
--------------|----------
minlib.js     | 1.16 KB
minlib.min.js | **0.82 KB**

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
>If a baseElement is document, you don't have to write this.

-----

##### example 1

minlib.js:
```javascript
sel('h1'); // baseElement is document
```

vanilla.js
```javascript
document.querySelector('h1');
```
##### example 2
minlib.js:
```javascript
sel('h1', element); // baseElement is element
```
vanilla.js:
```javascript
element.querySelector('h1');
```

[`Element.querySelector()` on MDN](https://developer.mozilla.org/pl/docs/Web/API/Element/querySelector "Mozilla developer network")

### all() (`querySelectorAll`)

Function `all()` Returns a non-live NodeList of all elements descended from the element on which it is invoked that matches the specified group of CSS selectors. 
Syntax:`all(selector, baseElement)`
>If a baseElement is document, you don't have to write this.
> `querySelectorAll` returs array so you should use `forEach()`

----

##### example 1

minlib.js: 
```javascript
all('h1'); // baseElement is document
```
vanilla.js:
```javascript
document.querySelectorAll('h1');
```

##### example 2

minlib: 
```javascript
all('h1', element); // baseElement is element
```
vanilla: 
```javascript
element.querySelectorAll('h1');
```

[`Element.querySelectorAll()` on MDN](https://developer.mozilla.org/pl/docs/Web/API/Element/querySelectorAll "Mozilla developer network")

 ### addEvt() (`addEventListener()`)
 
 Syntax: `addEvt(target, type, listener)`
 
 ----
 
##### example 1
 
minlib.js:
```javascript
addEvt('h1', 'click', yourFunction);
```
>This use `addEventListener` on all `<h1></h1>` element on page.
>>If you want use listener only on first element with `<h1></h1>` tag you should write:
>>`addEvt(sel('h1'), 'click', yourFunction)`
>>or use class/id
>
>>If you want use listener


vanilla.js:
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
vanilla.js
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

[`element.addEventListener` on MDN](https://developer.mozilla.org/pl/docs/Web/API/Element/addEventListener "Mozilla developer network")