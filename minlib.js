(function () {
  "use strict";

  // variables

  let element,
      el;

  // querySelector

  const sel = (selectors, baseElement) => {

    if(!baseElement){
      baseElement = document;
    }

    return baseElement.querySelector(selectors);
  }

  // querySelectorAll

  const all = (selectors, baseElement) => {
    let toReturn;

    if(!baseElement){
      baseElement = document;
    }
    if(Array.isArray(selectors)){
      toReturn = [];

      for(element of selectors){
        for(el of baseElement.querySelectorAll(element)){
          toReturn.push(el);
        } 
      } 
    } else {
      toReturn = baseElement.querySelectorAll(selectors);
    }

    return toReturn;
  }

  // addEventListener

  const addEvt = (target, type, listener) => {

    if(typeof target === 'string'){ 

      target = all(target);

      for(element of target){
        element.addEventListener(type, listener);
      };
    } else if (target instanceof NodeList || Array.isArray(target)){ 

      for(element of target){
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