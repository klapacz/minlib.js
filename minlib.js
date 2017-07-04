(function () {
  "use strict";
  
  // querySelector

  const sel = (selectors, baseElement = document) => {  
    return baseElement.querySelector(selectors);
  };

  // querySelectorAll

  const all = (selectors, baseElement = document) => {
      return [...baseElement.querySelectorAll(selectors)];
  };

  // addEventListener

  const addEvt = (target, type, listener) => {

    if (Array.isArray(target) || typeof target === 'string'){ 
      if(!Array.isArray(target)){
        target = all(target);
      };
      for(let element of target){
        element.addEventListener(type, listener);
      };
    } else {
      target.addEventListener(type, listener);
    };

  };

  // DOMContentLoaded

  const loaded = (listener) => {
    addEvt(document, 'DOMContentLoaded', listener);
  };
  
  // export
  
  window.sel = sel;
  window.all = all;
  window.addEvt = addEvt;
  window.loaded = loaded;
  
}());