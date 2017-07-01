// querySelector

var sel = function sel(selectors, baseElement) {

  if (!baseElement) {
    baseElement = document;
  }

  if (baseElement.querySelector(selectors)) {
    return baseElement.querySelector(selectors);
  } else {
    console.log('i cant find ' + selectors);
  }
};

// querySelectorAll

var all = function all(selectors, baseElement) {

  if (!baseElement) {
    baseElement = document;
  }

  if (baseElement.querySelectorAll(selectors).length === 0) {
    console.log('i cant find ' + selectors);
  } else {
    return baseElement.querySelectorAll(selectors);
  }
};

// addEventListener

var addEvt = function addEvt(target, type, listener) {

  if (typeof target === 'string') {
    target = all(target);

    target.forEach(function (element) {
      element.addEventListener(type, listener);
    });
  } else if (Object.prototype.toString.call(target) === '[object NodeList]') {
    target.forEach(function (element) {
      element.addEventListener(type, listener);
    });
  } else if (Array.isArray(target)) {
    target.forEach(function (element) {
      all(element).forEach(function (el) {
        el.addEventListener(type, listener);
      });
    });
  } else {
    target.addEventListener(type, listener);
  }
};

// DOMContentLoaded

var loaded = function loaded(listener) {
  addEvt(document, 'DOMContentLoaded', listener);
};