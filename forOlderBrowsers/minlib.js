function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
  "use strict";

  // querySelector

  var sel = function sel(selectors) {
    var baseElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    return baseElement.querySelector(selectors);
  };

  // querySelectorAll

  var all = function all(selectors) {
    var baseElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    return [].concat(_toConsumableArray(baseElement.querySelectorAll(selectors)));
  };

  // addEventListener

  var addEvt = function addEvt(target, type, listener) {

    if (Array.isArray(target) || typeof target === 'string') {
      if (!Array.isArray(target)) {
        target = all(target);
      };
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = target[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;

          element.addEventListener(type, listener);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      ;
    } else {
      target.addEventListener(type, listener);
    };
  };

  // DOMContentLoaded

  var loaded = function loaded(listener) {
    addEvt(document, 'DOMContentLoaded', listener);
  };

  // export

  window.sel = sel;
  window.all = all;
  window.addEvt = addEvt;
  window.loaded = loaded;
})();