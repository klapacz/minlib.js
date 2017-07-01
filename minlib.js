// querySelector

const sel = (selectors, baseElement) => {
  
  if(!baseElement){
    baseElement = document;
  }
  
  if(baseElement.querySelector(selectors)){
    return baseElement.querySelector(selectors);
  } else {
    console.log(`i cant find ${selectors}`)
  }
  
}

// querySelectorAll

const all = (selectors, baseElement) => {
  
  if(!baseElement){
    baseElement = document;
  }

  if(baseElement.querySelectorAll(selectors).length === 0){
    console.log(`i cant find ${selectors}`);
  } else {
    return baseElement.querySelectorAll(selectors);
  }
  
}

// addEventListener

const addEvt = (target, type, listener) => {
  
  if(typeof target === 'string'){  
    target = all(target)
    
    target.forEach((element) => {
      element.addEventListener(type, listener);
    }) 
    
  } else if (Object.prototype.toString.call(target) === '[object NodeList]'){ 
    target.forEach((element) => {
      element.addEventListener(type, listener);
    }) 
    
  } else if (Array.isArray(target)){
      target.forEach((element) => {
        all(element).forEach((el) => {
          el.addEventListener(type, listener);
        })
      })
    
  } else {
    target.addEventListener(type, listener);
  }
  
}

// DOMContentLoaded

const loaded = (listener) => {
  addEvt(document, 'DOMContentLoaded', listener);
}