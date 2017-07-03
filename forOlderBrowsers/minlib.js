(function () {
  "use strict";
  
  // querySelector

  var sel = function (selectors, baseElement) {  
    if(!baseElement){
      baseElement = document;
    };
    return baseElement.querySelector(selectors);
  };

  // querySelectorAll

  var all = function (selectors, baseElement) {
    var toReturn = [];
    
    if(!baseElement){
      baseElement = document;
    };
    
    baseElement.querySelectorAll(selectors).forEach(function (element) {
      toReturn.push(element);
    });
    
    return toReturn;
  };

  // addEventListener

  var addEvt = function (target, type, listener)  {

    if (Array.isArray(target) || typeof target === 'string'){ 
      if(!Array.isArray(target)){
        target = all(target);
      };
      target.forEach(function (element) {
        element.addEventListener(type, listener);
      });
    } else {
      target.addEventListener(type, listener);
    };

  };

  // DOMContentLoaded

  var loaded = function (listener) {
    addEvt(document, 'DOMContentLoaded', listener);
  };
  
  // export
  
  window.sel = sel;
  window.all = all;
  window.addEvt = addEvt;
  window.loaded = loaded;
  
}());