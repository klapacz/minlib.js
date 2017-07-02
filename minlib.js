// querySelector

let sel = (selectors, baseElement) => {
  
  if(!baseElement){
    baseElement = document;
  }
  
  return baseElement.querySelector(selectors);
}

// querySelectorAll

let all = (selectors, baseElement) => {
  let toReturn;
  
  if(!baseElement){
    baseElement = document;
  }
  if(Array.isArray(selectors)){
    toReturn = []
    
    for(element of selectors){
      for(el of baseElement.querySelectorAll(element)){
        toReturn.push(el);
      } 
    } 
  } else {
    toReturn = baseElement.querySelectorAll(selectors)
  }

  return toReturn;
}

// addEventListener

let addEvt = (target, type, listener) => {
  
  if(typeof target === 'string'){ 
    
    target = all(target);
    
    for(element of target){
      element.addEventListener(type, listener);
    };
  } else if (target instanceof NodeList || Array.isArray(target)){ 
    
    for(element of target){
      element.addEventListener(type, listener)
    };
  } else {
    
    target.addEventListener(type, listener);
  }
  
};

// DOMContentLoaded

let loaded = (listener) => {
  addEvt(document, 'DOMContentLoaded', listener);
};