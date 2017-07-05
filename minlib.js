// querySelector
window.query = (selector, baseElement = document) => {
  return baseElement.querySelector(selector);
};

// querySelectorAll
window.queryAll = (selector, baseElement = document) => {
  if (typeof selector === 'string') {
    return [...baseElement.querySelectorAll(selector)];
  }

  if (selector.length) {
    return [...selector];
  }

  return [selector];
};

// eventDelegation
window.addDelegation = (parents, targets, type, listener) => {
  
  let check = (event) => {
    let element = event.target;
    
    if(targets[0] === '.'){
      let target = targets.slice(1, targets.length)
      
      for(let currentClass of element.classList){
        if(currentClass == target){
          listener(element, event)
        }
      }
    } 
    
    if (targets[0] === '#'){
      let target = targets.slice(1, targets.length)
      
      if(target = element.id){
        listener(element, event)
      }
    }
    
    if(element.tagName.toLowerCase() === targets){
      listener(element, event);
    }
  }
  
  for(let parent of queryAll(parents)){
    parent.addEventListener(type, check, event);
  }
}

// addEventListener
window.addEvent = (targets, type, listener, useCapture = false) => {
  queryAll(targets).forEach(target => {
    target.addEventListener(type, listener, useCapture);
  });
};

// load
window.loaded = (listener) => {
  addEvent(window, 'load', listener);
};