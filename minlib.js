window.query = (selector, baseElement = document) => {
  return baseElement.querySelector(selector);
};

// querySelectorAll
window.queryAll = (selector, baseElement = document) => {
  if (typeof selector === 'string') {
    return [...baseElement.querySelectorAll(selector)];
  }

  if (selectors.length) {
    return [...selector];
  }

  return [selector];
};

// addEventListener
window.addEvent = (targets, type, listener, useCapture = false) => {
  queryAll(targets).forEach(target => {
    target.addEventListener(type, listener, useCapture);
  });
};

// DOMContentLoaded
window.loaded = (listener) => {
  addEvent(document, 'DOMContentLoaded', listener);
};
