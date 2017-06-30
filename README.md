# minlib.js

Minlib is small (~0.8kb minified) javascript library to event listener and queryselector. 

file          | weight
--------------|----------
minlib.js     | 1.16 KB
minlib.min.js | **0.82 KB**

## How to use ?

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
document.querySelector('h1')
```
##### example 2
minlib.js:
```javascript
sel('h1', element) // baseElement is element
```
vanilla.js:
```javascript
element.querySelector('h1')
```

[`Element.querySelector()` on MDN](https://developer.mozilla.org/pl/docs/Web/API/Element/querySelector)

### all() (`querySelectorAll`)

Function `all()` Returns a non-live NodeList of all elements descended from the element on which it is invoked that matches the specified group of CSS selectors. 
Syntax:`all(selector, baseElement)`
>If a baseElement is document, you don't have to write this.
> `querySelectorAll` returs array so you should use `forEach()`

----

##### example 1

minlib.js: 
```javascript
all('h1') // baseElement is document
```
vanilla.js:
```javascript
document.querySelectorAll('h1')
```

##### example 2

minlib: 
```javascript
all('h1', element) // baseElement is element
```
vanilla: 
```javascript
element.querySelectorAll('h1')
```

[`Element.querySelectorAll()` on MDN](https://developer.mozilla.org/pl/docs/Web/API/Element/querySelectorAll)

 ### addEvt() (`addEventListener()`)
 
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
element.addEventListner('click', yourFunction)
})
```
2.**minlib:**
```javascript
addEvt(['h1', 'h2', 'p'], 'click', yourFunction)
```
**vanilla**
```javascript
document.querySelectorAll('h1').forEach(function (element) {
element.addEventListner('click', yourFunction)
})   
document.querySelectorAll('h2').forEach(function (element) {
element.addEventListner('click', yourFunction)
})
document.querySelectorAll('p').forEach(function (element) {
element.addEventListner('click', yourFunction)
})
```

3.**minlib:**
```javascript
addEvt(sel('h1'), 'click', fuction () {
//code
})
```

4.**minlib:**
```javascript
addEvt(all('h1'), 'click'. yourFunction)
```
5.**minlib:**
```javascript
addEvt(element, 'click', yourFunction)
```

### loaded (`DOMContentLoaded`,  `$( document ).ready(function() {})`)
**minlib:**
```javascript
loaded(function(){
    //code
})
```

**vanilla:**
```javascript
document.addEventListener('DOMContentLoaded', function () {
    //code
})
```

**jQuery:**
```javascript
$( document ).ready(function() {
    //code
})
```