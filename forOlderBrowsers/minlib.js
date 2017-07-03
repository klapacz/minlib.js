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

    var toReturn = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = baseElement.querySelectorAll(selectors)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        toReturn.push(element);
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

    return toReturn;
  };

  // addEventListener

  var addEvt = function addEvt(target, type, listener) {

    if (typeof target === 'string') {

      target = all(target);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = target[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var element = _step2.value;

          element.addEventListener(type, listener);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      ;
    } else if (Array.isArray(target)) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {

        for (var _iterator3 = target[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _element = _step3.value;

          _element.addEventListener(type, listener);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      ;
    } else {

      target.addEventListener(type, listener);
    }
  };

  // DOMContentLoaded

  var loaded = function loaded(listener) {
    addEvt(document, 'DOMContentLoaded', listener);
  };

  //export

  window.sel = sel;
  window.all = all;
  window.addEvt = addEvt;
  window.loaded = loaded;
})();