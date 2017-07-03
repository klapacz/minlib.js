(function () {
  "use strict";
  
  // querySelector

  const sel = (selectors, baseElement = document) => {
    
    return baseElement.querySelector(selectors);
  }

  // querySelectorAll

  const all = (selectors, baseElement = document) => {
    let toReturn = [];
    
    for(let element of baseElement.querySelectorAll(selectors)){
      toReturn.push(element)
    }

    return toReturn;
  }

  // addEventListener

  const addEvt = (target, type, listener) => {

    if(typeof target === 'string'){ 

      target = all(target);

      for(let element of target){
        element.addEventListener(type, listener);
      };
    } else if (Array.isArray(target)){ 

      for(let element of target){
        element.addEventListener(type, listener);
      };
    } else {

      target.addEventListener(type, listener);
    }

  };

  // DOMContentLoaded

  const loaded = (listener) => {
    addEvt(document, 'DOMContentLoaded', listener);
  };
  
  //export
  
  window.sel = sel;
  window.all = all;
  window.addEvt = addEvt;
  window.loaded = loaded;
  
}());