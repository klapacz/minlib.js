# minlib.js

Simple and light javascript library for event delegation and queryselector.

- - - -
## How to use ?

1.Include minlib on your page before the closing </body> tag
```html
<script src="/path/to/minlib.js"></script>
```
2.**Enjoy**

## Documentation

### sel() (`querySelector`) 

example:

1.**minlib:**
```javascript
sel('h1');
```
or
```javascript
sel('h1', document)
```

**vanilla**
```javascript
document.querySelector('h1')
```

----

2.**minlib:** 
```javascript
sel('h1', element)
```
**vanilla:** 
```javascript
element.querySelector('h1')
```

### all() (`querySelectorAll`)

example:

1.**minlib:** 
```javascript
all('h1')
```
or
```javascript
all('h1', document)
```
**vanilla:**
```javascript
document.querySelectorAll('h1')
```     
----
2.**minlib:** 
```javascript
all('h1', element)
```
**vanilla:** 
```javascript
element.querySelectorAll('h1')
```

> `querySelectorAll` retur array so you should use `forEach()`

 ### addEvt() (`addEventListener()`)
 
 example: 
 
1.**minlib:**
```javascript
addEvt('h1', 'click', yourFunction);
```
>This use `addEventListener` on all `<h1></h1>` element on page.
> If you want use listener only on first element with `<h1></h1>` tag you should write it:
>
```javascript
addEvt(sel('h1'), 'click', yourFunction)
```
> or use class/id

**vanilla:**
```javascript
document.querySelectorAll('h1').forEach(function (element) {
element.addEventListner('click', yourFunction)
})
```
----
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
----
3.**minlib:**
```javascript
addEvt(sel('h1'), 'click', fuction () {
//code
})
```
----
4. **minlib:**
```javascript
addEvt(all('h1'), 'click'. yourFunction)
```
----
5. **minlib:**
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