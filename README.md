# minlib.js

Simple and light javascript library for event delegation and queryselector.

- - - -

## Documentation

### querySelector 

example:

1. **minlib:**
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
2. **minlib:** 
     ```javascript
     sel('h1', element)
     ```
     **vanilla:** 
     ```javascript
     element.querySelector('h1')
     ```

### querySelectorAll

example:

1. **minlib:** 
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
2. **minlib:** 
     ```javascript
     all('h1', element)
     ```
     **vanilla:** 
     ```javascript
     element.querySelectorAll('h1')
     ```
     
 ### addEventListener
 
 example: 
 
 1. **minlib:**
    ```javascript
    addEvt('h1', 'click', yourFunction);
    ```
    **vanilla:**
    ```javascript
    document.querySelectorAll('h1').forEach(function (element) {
        element.addEventListner('click', yourFunction)
    })
    ```
2. **minlib:**
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
3. **minlib:**
    ```javascript
    addEvt(sel('h1'), 'click', fuction () {
        //code
    })
    ```
4. **minlib:**
    ```javascript
    addEvt(all('h1'), 'click'. yourFunction)
    ```
5. **minlib:**
    ```javascript
    addEvt(element, 'click', yourFunction)
    ```