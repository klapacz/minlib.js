// querySelector

const sel = (what, whence) => {
  
  if(!whence){
    whence = document;
  }
  
  if(whence.querySelector(what)){
    return whence.querySelector(what);
  } else {
    console.log(`i cant find ${what}`)
  }
  
}

// querySelectorAll

const all = (what, whence) => {
  
  if(!whence){
    whence = document;
  }

  if(whence.querySelectorAll(what).length === 0){
    console.log(`i cant find ${what}`);
  } else {
    return whence.querySelectorAll(what);
  }
  
}

// addEventListener

const addEvt = (what, when, fun) => {
  
  if(typeof what === 'string'){  
    what = all(what)
    
    what.forEach((element) => {
      element.addEventListener(when, fun);
    }) 
    
  } else if (Object.prototype.toString.call(what) === '[object NodeList]'){ 
    what.forEach((element) => {
      element.addEventListener(when, fun);
    }) 
    
  } else if (Array.isArray(what)){
      what.forEach((element) => {
        all(element).forEach((ele) => {
          ele.addEventListener(when, fun);
        })
      })
    
  } else {
    what.addEventListener(when, fun);
  }
  
}

// DOMContentLoaded

const loaded = (fun) => {
  addEvt(document, 'DOMContentLoaded', fun);
}