// querySelector

let sel = (selectors, baseElement) => {
  
  if(!baseElement){
    baseElement = document;
  }
  
  return baseElement.querySelector(selectors);
}

// querySelectorAll

let all = (selectors, baseElement) => {
  
  if(!baseElement){
    baseElement = document;
  }

  return baseElement.querySelectorAll(selectors)
}

// addEventListener

let addEvt = (target, type, listener) => {
  
  if(typeof target === 'string'){ 
    
    target = all(target);
    
    for(element of target){
      element.addEventListener(type, listener);
    };
  } else if (Object.prototype.toString.call(target) === '[object NodeList]'){ 
    
    for(element of target){
      element.addEventListener(type, listener)
    };
  } else if (Array.isArray(target)){
    
    for(element of target){
      for(el of all(element)){
        el.addEventListener(type, listener);
      }
    }
  } else {
    
    target.addEventListener(type, listener);
  }
  
};

// DOMContentLoaded

let loaded = (listener) => {
  addEvt(document, 'DOMContentLoaded', listener);
};