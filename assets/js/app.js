/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/foundation-sites/dist/js/foundation.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/foundation-sites/dist/js/foundation.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Abide: function() { return /* binding */ Abide; },
/* harmony export */   Accordion: function() { return /* binding */ Accordion; },
/* harmony export */   AccordionMenu: function() { return /* binding */ AccordionMenu; },
/* harmony export */   Box: function() { return /* binding */ Box; },
/* harmony export */   Core: function() { return /* binding */ Foundation; },
/* harmony export */   CoreUtils: function() { return /* binding */ foundation_core_utils; },
/* harmony export */   Drilldown: function() { return /* binding */ Drilldown; },
/* harmony export */   Dropdown: function() { return /* binding */ Dropdown; },
/* harmony export */   DropdownMenu: function() { return /* binding */ DropdownMenu; },
/* harmony export */   Equalizer: function() { return /* binding */ Equalizer; },
/* harmony export */   Foundation: function() { return /* binding */ Foundation; },
/* harmony export */   Interchange: function() { return /* binding */ Interchange; },
/* harmony export */   Keyboard: function() { return /* binding */ Keyboard; },
/* harmony export */   Magellan: function() { return /* binding */ Magellan; },
/* harmony export */   MediaQuery: function() { return /* binding */ MediaQuery; },
/* harmony export */   Motion: function() { return /* binding */ Motion; },
/* harmony export */   Move: function() { return /* binding */ Move; },
/* harmony export */   Nest: function() { return /* binding */ Nest; },
/* harmony export */   OffCanvas: function() { return /* binding */ OffCanvas; },
/* harmony export */   Orbit: function() { return /* binding */ Orbit; },
/* harmony export */   ResponsiveAccordionTabs: function() { return /* binding */ ResponsiveAccordionTabs; },
/* harmony export */   ResponsiveMenu: function() { return /* binding */ ResponsiveMenu; },
/* harmony export */   ResponsiveToggle: function() { return /* binding */ ResponsiveToggle; },
/* harmony export */   Reveal: function() { return /* binding */ Reveal; },
/* harmony export */   Slider: function() { return /* binding */ Slider; },
/* harmony export */   SmoothScroll: function() { return /* binding */ SmoothScroll; },
/* harmony export */   Sticky: function() { return /* binding */ Sticky; },
/* harmony export */   Tabs: function() { return /* binding */ Tabs; },
/* harmony export */   Timer: function() { return /* binding */ Timer; },
/* harmony export */   Toggler: function() { return /* binding */ Toggler; },
/* harmony export */   Tooltip: function() { return /* binding */ Tooltip; },
/* harmony export */   Touch: function() { return /* binding */ Touch; },
/* harmony export */   Triggers: function() { return /* binding */ Triggers; },
/* harmony export */   "default": function() { return /* binding */ Foundation; },
/* harmony export */   onImagesLoaded: function() { return /* binding */ onImagesLoaded; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof2(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, e, o, r) {
  var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(o, t);
  } : p;
}
function _toPrimitive(t, r) {
  if ("object" != _typeof2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof2(i) ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// Core Foundation Utilities, utilized in a number of places.

/**
 * Returns a boolean for RTL support
 */
function rtl() {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir') === 'rtl';
}

/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */
function GetYoDigits() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var namespace = arguments.length > 1 ? arguments[1] : undefined;
  var str = '';
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
  var charsLength = chars.length;
  for (var i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * charsLength)];
  }
  return namespace ? "".concat(str, "-").concat(namespace) : str;
}

/**
 * Escape a string so it can be used as a regexp pattern
 * @function
 * @see https://stackoverflow.com/a/9310752/4317384
 *
 * @param {String} str - string to escape.
 * @returns {String} - escaped string
 */
function RegExpEscape(str) {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
function transitionend($elem) {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  };
  var elem = document.createElement('div'),
    end;
  for (var transition in transitions) {
    if (typeof elem.style[transition] !== 'undefined') {
      end = transitions[transition];
    }
  }
  if (end) {
    return end;
  } else {
    setTimeout(function () {
      $elem.triggerHandler('transitionend', [$elem]);
    }, 1);
    return 'transitionend';
  }
}

/**
 * Return an event type to listen for window load.
 *
 * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
 * If `handler` is passed, attach it to the event on `$elem`.
 * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
 * @function
 *
 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
 * @param {Function} [] handler - function to attach to the event.
 * @returns {String} - event type that should or will be triggered.
 */
function onLoad($elem, handler) {
  var didLoad = document.readyState === 'complete';
  var eventType = (didLoad ? '_didLoad' : 'load') + '.zf.util.onLoad';
  var cb = function cb() {
    return $elem.triggerHandler(eventType);
  };
  if ($elem) {
    if (handler) $elem.one(eventType, handler);
    if (didLoad) setTimeout(cb);else jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', cb);
  }
  return eventType;
}

/**
 * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
 *
 * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
 * the event is ignored.
 * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
 *   (like by switching to an other window with [Alt]+[Tab]).
 * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
 *   outside of the element it left.
 *
 * @function
 *
 * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
 * @param {Object} [] options - object of options:
 * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
 * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
 * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
 */
function ignoreMousedisappear(handler) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$ignoreLeaveWindo = _ref.ignoreLeaveWindow,
    ignoreLeaveWindow = _ref$ignoreLeaveWindo === void 0 ? false : _ref$ignoreLeaveWindo,
    _ref$ignoreReappear = _ref.ignoreReappear,
    ignoreReappear = _ref$ignoreReappear === void 0 ? false : _ref$ignoreReappear;
  return function leaveEventHandler(eLeave) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    var callback = handler.bind.apply(handler, [this, eLeave].concat(rest));

    // The mouse left: call the given callback if the mouse entered elsewhere
    if (eLeave.relatedTarget !== null) {
      return callback();
    }

    // Otherwise, check if the mouse actually left the window.
    // In firefox if the user switched between windows, the window sill have the focus by the time
    // the event is triggered. We have to debounce the event to test this case.
    setTimeout(function leaveEventDebouncer() {
      if (!ignoreLeaveWindow && document.hasFocus && !document.hasFocus()) {
        return callback();
      }

      // Otherwise, wait for the mouse to reeapear outside of the element,
      if (!ignoreReappear) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter', function reenterEventHandler(eReenter) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(eLeave.currentTarget).has(eReenter.target).length) {
            // Fill where the mouse finally entered.
            eLeave.relatedTarget = eReenter.target;
            callback();
          }
        });
      }
    }, 0);
  };
}
var foundation_core_utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  rtl: rtl,
  GetYoDigits: GetYoDigits,
  RegExpEscape: RegExpEscape,
  transitionend: transitionend,
  onLoad: onLoad,
  ignoreMousedisappear: ignoreMousedisappear
});

// Default set of media queries
// const defaultQueries = {
//   'default' : 'only screen',
//   landscape : 'only screen and (orientation: landscape)',
//   portrait : 'only screen and (orientation: portrait)',
//   retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
//     'only screen and (min--moz-device-pixel-ratio: 2),' +
//     'only screen and (-o-min-device-pixel-ratio: 2/1),' +
//     'only screen and (min-device-pixel-ratio: 2),' +
//     'only screen and (min-resolution: 192dpi),' +
//     'only screen and (min-resolution: 2dppx)'
//   };

// matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright © 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license
/* eslint-disable */
window.matchMedia || (window.matchMedia = function () {
  // For browsers that support matchMedium api such as IE 9 and webkit
  var styleMedia = window.styleMedia || window.media;

  // For those that don't support matchMedium
  if (!styleMedia) {
    var style = document.createElement('style'),
      script = document.getElementsByTagName('script')[0],
      info = null;
    style.type = 'text/css';
    style.id = 'matchmediajs-test';
    if (!script) {
      document.head.appendChild(style);
    } else {
      script.parentNode.insertBefore(style, script);
    }

    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;
    styleMedia = {
      matchMedium: function matchMedium(media) {
        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        }

        // Test if media query is true or false
        return info.width === '1px';
      }
    };
  }
  return function (media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  };
}());
/* eslint-enable */

var MediaQuery = {
  queries: [],
  current: '',
  /**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
  _init: function _init() {
    // make sure the initialization is only done once when calling _init() several times
    if (this.isInitialized === true) {
      return this;
    } else {
      this.isInitialized = true;
    }
    var self = this;
    var $meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.foundation-mq');
    if (!$meta.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class="foundation-mq" name="foundation-mq" content>').appendTo(document.head);
    }
    var extractedStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.foundation-mq').css('font-family');
    var namedQueries;
    namedQueries = parseStyleToObject(extractedStyles);
    self.queries = []; // reset

    for (var key in namedQueries) {
      if (namedQueries.hasOwnProperty(key)) {
        self.queries.push({
          name: key,
          value: "only screen and (min-width: ".concat(namedQueries[key], ")")
        });
      }
    }
    this.current = this._getCurrentSize();
    this._watcher();
  },
  /**
   * Reinitializes the media query helper.
   * Useful if your CSS breakpoint configuration has just been loaded or has changed since the initialization.
   * @function
   * @private
   */
  _reInit: function _reInit() {
    this.isInitialized = false;
    this._init();
  },
  /**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
  atLeast: function atLeast(size) {
    var query = this.get(size);
    if (query) {
      return window.matchMedia(query).matches;
    }
    return false;
  },
  /**
   * Checks if the screen is within the given breakpoint.
   * If smaller than the breakpoint of larger than its upper limit it returns false.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` otherwise.
   */
  only: function only(size) {
    return size === this._getCurrentSize();
  },
  /**
   * Checks if the screen is within a breakpoint or smaller.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's larger.
   */
  upTo: function upTo(size) {
    var nextSize = this.next(size);

    // If the next breakpoint does not match, the screen is smaller than
    // the upper limit of this breakpoint.
    if (nextSize) {
      return !this.atLeast(nextSize);
    }

    // If there is no next breakpoint, the "size" breakpoint does not have
    // an upper limit and the screen will always be within it or smaller.
    return true;
  },
  /**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */
  is: function is(size) {
    var parts = size.trim().split(' ').filter(function (p) {
      return !!p.length;
    });
    var _parts = _slicedToArray(parts, 2),
      bpSize = _parts[0],
      _parts$ = _parts[1],
      bpModifier = _parts$ === void 0 ? '' : _parts$;

    // Only the breakpont
    if (bpModifier === 'only') {
      return this.only(bpSize);
    }
    // At least the breakpoint (included)
    if (!bpModifier || bpModifier === 'up') {
      return this.atLeast(bpSize);
    }
    // Up to the breakpoint (included)
    if (bpModifier === 'down') {
      return this.upTo(bpSize);
    }
    throw new Error("\n      Invalid breakpoint passed to MediaQuery.is().\n      Expected a breakpoint name formatted like \"<size> <modifier>\", got \"".concat(size, "\".\n    "));
  },
  /**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
  get: function get(size) {
    for (var i in this.queries) {
      if (this.queries.hasOwnProperty(i)) {
        var query = this.queries[i];
        if (size === query.name) return query.value;
      }
    }
    return null;
  },
  /**
   * Get the breakpoint following the given breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint.
   * @returns {String|null} - The name of the following breakpoint, or `null` if the passed breakpoint was the last one.
   */
  next: function next(size) {
    var _this = this;
    var queryIndex = this.queries.findIndex(function (q) {
      return _this._getQueryName(q) === size;
    });
    if (queryIndex === -1) {
      throw new Error("\n        Unknown breakpoint \"".concat(size, "\" passed to MediaQuery.next().\n        Ensure it is present in your Sass \"$breakpoints\" setting.\n      "));
    }
    var nextQuery = this.queries[queryIndex + 1];
    return nextQuery ? nextQuery.name : null;
  },
  /**
   * Returns the name of the breakpoint related to the given value.
   * @function
   * @private
   * @param {String|Object} value - Breakpoint name or query object.
   * @returns {String} Name of the breakpoint.
   */
  _getQueryName: function _getQueryName(value) {
    if (typeof value === 'string') return value;
    if (_typeof(value) === 'object') return value.name;
    throw new TypeError("\n      Invalid value passed to MediaQuery._getQueryName().\n      Expected a breakpoint name (String) or a breakpoint query (Object), got \"".concat(value, "\" (").concat(_typeof(value), ")\n    "));
  },
  /**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
  _getCurrentSize: function _getCurrentSize() {
    var matched;
    for (var i = 0; i < this.queries.length; i++) {
      var query = this.queries[i];
      if (window.matchMedia(query.value).matches) {
        matched = query;
      }
    }
    return matched && this._getQueryName(matched);
  },
  /**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
  _watcher: function _watcher() {
    var _this2 = this;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize.zf.trigger', function () {
      var newSize = _this2._getCurrentSize(),
        currentSize = _this2.current;
      if (newSize !== currentSize) {
        // Change the current media query
        _this2.current = newSize;

        // Broadcast the media query change on the window
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
      }
    });
  }
};

// Thank you: https://github.com/sindresorhus/query-string
function parseStyleToObject(str) {
  var styleObject = {};
  if (typeof str !== 'string') {
    return styleObject;
  }
  str = str.trim().slice(1, -1); // browsers re-quote string style values

  if (!str) {
    return styleObject;
  }
  styleObject = str.split('&').reduce(function (ret, param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = parts[0];
    var val = parts[1];
    key = decodeURIComponent(key);

    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = typeof val === 'undefined' ? null : decodeURIComponent(val);
    if (!ret.hasOwnProperty(key)) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
    return ret;
  }, {});
  return styleObject;
}
var FOUNDATION_VERSION = '6.9.0';

// Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify
var Foundation = {
  version: FOUNDATION_VERSION,
  /**
   * Stores initialized plugins.
   */
  _plugins: {},
  /**
   * Stores generated unique ids for plugin instances
   */
  _uuids: [],
  /**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
  plugin: function plugin(_plugin, name) {
    // Object key to use when adding to global Foundation object
    // Examples: Foundation.Reveal, Foundation.OffCanvas
    var className = name || functionName(_plugin);
    // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
    // Examples: data-reveal, data-off-canvas
    var attrName = hyphenate$1(className);

    // Add to the Foundation object and the plugins list (for reflowing)
    this._plugins[attrName] = this[className] = _plugin;
  },
  /**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
  registerPlugin: function registerPlugin(plugin, name) {
    var pluginName = name ? hyphenate$1(name) : functionName(plugin.constructor).toLowerCase();
    plugin.uuid = GetYoDigits(6, pluginName);
    if (!plugin.$element.attr("data-".concat(pluginName))) {
      plugin.$element.attr("data-".concat(pluginName), plugin.uuid);
    }
    if (!plugin.$element.data('zfPlugin')) {
      plugin.$element.data('zfPlugin', plugin);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */
    plugin.$element.trigger("init.zf.".concat(pluginName));
    this._uuids.push(plugin.uuid);
    return;
  },
  /**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
  unregisterPlugin: function unregisterPlugin(plugin) {
    var pluginName = hyphenate$1(functionName(plugin.$element.data('zfPlugin').constructor));
    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
    plugin.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
    /**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */.trigger("destroyed.zf.".concat(pluginName));
    for (var prop in plugin) {
      if (typeof plugin[prop] === 'function') {
        plugin[prop] = null; //clean up script to prep for garbage collection.
      }
    }
    return;
  },
  /**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
  reInit: function reInit(plugins) {
    var isJQ = plugins instanceof (jquery__WEBPACK_IMPORTED_MODULE_0___default());
    try {
      if (isJQ) {
        plugins.each(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('zfPlugin')._init();
        });
      } else {
        var type = _typeof(plugins),
          _this = this,
          fns = {
            'object': function object(plgs) {
              plgs.forEach(function (p) {
                p = hyphenate$1(p);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + p + ']').foundation('_init');
              });
            },
            'string': function string() {
              plugins = hyphenate$1(plugins);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + plugins + ']').foundation('_init');
            },
            'undefined': function undefined$1() {
              this.object(Object.keys(_this._plugins));
            }
          };
        fns[type](plugins);
      }
    } catch (err) {
      console.error(err);
    } finally {
      return plugins;
    }
  },
  /**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
  reflow: function reflow(elem, plugins) {
    // If plugins is undefined, just grab everything
    if (typeof plugins === 'undefined') {
      plugins = Object.keys(this._plugins);
    }
    // If plugins is a string, convert it to an array with one item
    else if (typeof plugins === 'string') {
      plugins = [plugins];
    }
    var _this = this;

    // Iterate through each plugin
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(plugins, function (i, name) {
      // Get the current plugin
      var plugin = _this._plugins[name];

      // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
      var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']').filter(function () {
        return typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("zfPlugin") === 'undefined';
      });

      // For each plugin found, initialize it
      $elem.each(function () {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          opts = {
            reflow: true
          };
        if ($el.attr('data-options')) {
          $el.attr('data-options').split(';').forEach(function (option) {
            var opt = option.split(':').map(function (el) {
              return el.trim();
            });
            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
          });
        }
        try {
          $el.data('zfPlugin', new plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), opts));
        } catch (er) {
          console.error(er);
        } finally {
          return;
        }
      });
    });
  },
  getFnName: functionName,
  addToJquery: function addToJquery() {
    // TODO: consider not making this a jQuery function
    // TODO: need way to reflow vs. re-initialize
    /**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
    var foundation = function foundation(method) {
      var type = _typeof(method),
        $noJS = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.no-js');
      if ($noJS.length) {
        $noJS.removeClass('no-js');
      }
      if (type === 'undefined') {
        //needs to initialize the Foundation object, or an individual plugin.
        MediaQuery._init();
        Foundation.reflow(this);
      } else if (type === 'string') {
        //an individual method to invoke on a plugin or group of plugins
        var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary
        var plugClass = this.data('zfPlugin'); //determine the class of plugin

        if (typeof plugClass !== 'undefined' && typeof plugClass[method] !== 'undefined') {
          //make sure both the class and method exist
          if (this.length === 1) {
            //if there's only one, call it directly.
            plugClass[method].apply(plugClass, args);
          } else {
            this.each(function (i, el) {
              //otherwise loop through the jQuery collection and invoke the method on each
              plugClass[method].apply(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).data('zfPlugin'), args);
            });
          }
        } else {
          //error for no class or no method
          throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
        }
      } else {
        //error for invalid argument type
        throw new TypeError("We're sorry, ".concat(type, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
      }
      return this;
    };
    (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn).foundation = foundation;
    return (jquery__WEBPACK_IMPORTED_MODULE_0___default());
  }
};
Foundation.util = {
  /**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
  throttle: function throttle(func, delay) {
    var timer = null;
    return function () {
      var context = this,
        args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
};
window.Foundation = Foundation;

// Polyfill for requestAnimationFrame
(function () {
  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
    return new Date().getTime();
  };
  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
  /**
   * Polyfill for performance.now, required by rAF
   */
  if (!window.performance || !window.performance.now) {
    window.performance = {
      start: Date.now(),
      now: function now() {
        return Date.now() - this.start;
      }
    };
  }
})();
if (!Function.prototype.bind) {
  /* eslint-disable no-extend-native */
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function fNOP() {},
      fBound = function fBound() {
        return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
      };
    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();
    return fBound;
  };
}
// Polyfill to get the name of a function in IE9
function functionName(fn) {
  if (typeof Function.prototype.name === 'undefined') {
    var funcNameRegex = /function\s([^(]{1,})\(/;
    var results = funcNameRegex.exec(fn.toString());
    return results && results.length > 1 ? results[1].trim() : "";
  } else if (typeof fn.prototype === 'undefined') {
    return fn.constructor.name;
  } else {
    return fn.prototype.constructor.name;
  }
}
function parseValue(str) {
  if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
  return str;
}
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate$1(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
var Box = {
  ImNotTouchingYou: ImNotTouchingYou,
  OverlapArea: OverlapArea,
  GetDimensions: GetDimensions,
  GetExplicitOffsets: GetExplicitOffsets
};

/**
 * Compares the dimensions of an element to a container and determines collision events with container.
 * @function
 * @param {jQuery} element - jQuery object to test for collisions.
 * @param {jQuery} parent - jQuery object to use as bounding container.
 * @param {Boolean} lrOnly - set to true to check left and right values only.
 * @param {Boolean} tbOnly - set to true to check top and bottom values only.
 * @default if no parent object passed, detects collisions with `window`.
 * @returns {Boolean} - true if collision free, false if a collision in any direction.
 */
function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
  return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
}
function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
  var eleDims = GetDimensions(element),
    topOver,
    bottomOver,
    leftOver,
    rightOver;
  if (parent) {
    var parDims = GetDimensions(parent);
    bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
    topOver = eleDims.offset.top - parDims.offset.top;
    leftOver = eleDims.offset.left - parDims.offset.left;
    rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
  } else {
    bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
    topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
    leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
    rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
  }
  bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
  topOver = Math.min(topOver, 0);
  leftOver = Math.min(leftOver, 0);
  rightOver = Math.min(rightOver, 0);
  if (lrOnly) {
    return leftOver + rightOver;
  }
  if (tbOnly) {
    return topOver + bottomOver;
  }

  // use sum of squares b/c we care about overlap area.
  return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
}

/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */
function GetDimensions(elem) {
  elem = elem.length ? elem[0] : elem;
  if (elem === window || elem === document) {
    throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
  }
  var rect = elem.getBoundingClientRect(),
    parRect = elem.parentNode.getBoundingClientRect(),
    winRect = document.body.getBoundingClientRect(),
    winY = window.pageYOffset,
    winX = window.pageXOffset;
  return {
    width: rect.width,
    height: rect.height,
    offset: {
      top: rect.top + winY,
      left: rect.left + winX
    },
    parentDims: {
      width: parRect.width,
      height: parRect.height,
      offset: {
        top: parRect.top + winY,
        left: parRect.left + winX
      }
    },
    windowDims: {
      width: winRect.width,
      height: winRect.height,
      offset: {
        top: winY,
        left: winX
      }
    }
  };
}

/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
 * you don't know alignment, but generally from
 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with `em` values as well/instead of pixels
 */
function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
  var $eleDims = GetDimensions(element),
    $anchorDims = anchor ? GetDimensions(anchor) : null;
  var topVal, leftVal;
  if ($anchorDims !== null) {
    // set position related attribute
    switch (position) {
      case 'top':
        topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
        break;
      case 'bottom':
        topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
        break;
      case 'left':
        leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
        break;
      case 'right':
        leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
        break;
    }

    // set alignment related attribute
    switch (position) {
      case 'top':
      case 'bottom':
        switch (alignment) {
          case 'left':
            leftVal = $anchorDims.offset.left + hOffset;
            break;
          case 'right':
            leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
            break;
          case 'center':
            leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
            break;
        }
        break;
      case 'right':
      case 'left':
        switch (alignment) {
          case 'bottom':
            topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
            break;
          case 'top':
            topVal = $anchorDims.offset.top + vOffset;
            break;
          case 'center':
            topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
            break;
        }
        break;
    }
  }
  return {
    top: topVal,
    left: leftVal
  };
}

/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */
function onImagesLoaded(images, callback) {
  var unloaded = images.length;
  if (unloaded === 0) {
    callback();
  }
  images.each(function () {
    // Check if image is loaded
    if (this.complete && typeof this.naturalWidth !== 'undefined') {
      singleImageLoaded();
    } else {
      // If the above check failed, simulate loading on detached element.
      var image = new Image();
      // Still count image as loaded if it finalizes with an error.
      var events = "load.zf.images error.zf.images";
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(image).one(events, function me() {
        // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off(events, me);
        singleImageLoaded();
      });
      image.src = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('src');
    }
  });
  function singleImageLoaded() {
    unloaded--;
    if (unloaded === 0) {
      callback();
    }
  }
}

/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/
var keyCodes = {
  9: 'TAB',
  13: 'ENTER',
  27: 'ESCAPE',
  32: 'SPACE',
  35: 'END',
  36: 'HOME',
  37: 'ARROW_LEFT',
  38: 'ARROW_UP',
  39: 'ARROW_RIGHT',
  40: 'ARROW_DOWN'
};
var commands = {};

// Functions pulled out to be referenceable from internals
function findFocusable($element) {
  if (!$element) {
    return false;
  }
  return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':visible') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('tabindex') < 0) {
      return false;
    } //only have visible elements and those that have a tabindex greater or equal 0
    return true;
  }).sort(function (a, b) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(a).attr('tabindex') === jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).attr('tabindex')) {
      return 0;
    }
    var aTabIndex = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(a).attr('tabindex'), 10),
      bTabIndex = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).attr('tabindex'), 10);
    // Undefined is treated the same as 0
    if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(a).attr('tabindex') === 'undefined' && bTabIndex > 0) {
      return 1;
    }
    if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).attr('tabindex') === 'undefined' && aTabIndex > 0) {
      return -1;
    }
    if (aTabIndex === 0 && bTabIndex > 0) {
      return 1;
    }
    if (bTabIndex === 0 && aTabIndex > 0) {
      return -1;
    }
    if (aTabIndex < bTabIndex) {
      return -1;
    }
    if (aTabIndex > bTabIndex) {
      return 1;
    }
  });
}
function parseKey(event) {
  var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();

  // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
  key = key.replace(/\W+/, '');
  if (event.shiftKey) key = "SHIFT_".concat(key);
  if (event.ctrlKey) key = "CTRL_".concat(key);
  if (event.altKey) key = "ALT_".concat(key);

  // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
  key = key.replace(/_$/, '');
  return key;
}
var Keyboard = {
  keys: getKeyCodes(keyCodes),
  /**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
  parseKey: parseKey,
  /**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
  handleKey: function handleKey(event, component, functions) {
    var commandList = commands[component],
      keyCode = this.parseKey(event),
      cmds,
      command,
      fn;
    if (!commandList) return console.warn('Component not defined!');

    // Ignore the event if it was already handled
    if (event.zfIsKeyHandled === true) return;

    // This component does not differentiate between ltr and rtl
    if (typeof commandList.ltr === 'undefined') {
      cmds = commandList; // use plain list
    } else {
      // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
      if (rtl()) cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, commandList.ltr, commandList.rtl);else cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, commandList.rtl, commandList.ltr);
    }
    command = cmds[keyCode];
    fn = functions[command];
    // Execute the handler if found
    if (fn && typeof fn === 'function') {
      var returnValue = fn.apply();

      // Mark the event as "handled" to prevent future handlings
      event.zfIsKeyHandled = true;

      // Execute function when event was handled
      if (functions.handled || typeof functions.handled === 'function') {
        functions.handled(returnValue);
      }
    } else {
      // Execute function when event was not handled
      if (functions.unhandled || typeof functions.unhandled === 'function') {
        functions.unhandled();
      }
    }
  },
  /**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */

  findFocusable: findFocusable,
  /**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */
  register: function register(componentName, cmds) {
    commands[componentName] = cmds;
  },
  // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
  //
  /**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
  trapFocus: function trapFocus($element) {
    var $focusable = findFocusable($element),
      $firstFocusable = $focusable.eq(0),
      $lastFocusable = $focusable.eq(-1);
    $element.on('keydown.zf.trapfocus', function (event) {
      if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
        event.preventDefault();
        $firstFocusable.focus();
      } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
        event.preventDefault();
        $lastFocusable.focus();
      }
    });
  },
  /**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
  releaseFocus: function releaseFocus($element) {
    $element.off('keydown.zf.trapfocus');
  }
};

/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */
function getKeyCodes(kcs) {
  var k = {};
  for (var kc in kcs) {
    if (kcs.hasOwnProperty(kc)) k[kcs[kc]] = kcs[kc];
  }
  return k;
}

/**
 * Motion module.
 * @module foundation.motion
 */

var initClasses = ['mui-enter', 'mui-leave'];
var activeClasses = ['mui-enter-active', 'mui-leave-active'];
var Motion = {
  animateIn: function animateIn(element, animation, cb) {
    animate(true, element, animation, cb);
  },
  animateOut: function animateOut(element, animation, cb) {
    animate(false, element, animation, cb);
  }
};
function Move(duration, elem, fn) {
  var anim,
    prog,
    start = null;
  if (duration === 0) {
    fn.apply(elem);
    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    return;
  }
  function move(ts) {
    if (!start) start = ts;
    prog = ts - start;
    fn.apply(elem);
    if (prog < duration) {
      anim = window.requestAnimationFrame(move, elem);
    } else {
      window.cancelAnimationFrame(anim);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    }
  }
  anim = window.requestAnimationFrame(move);
}

/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */
function animate(isIn, element, animation, cb) {
  element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).eq(0);
  if (!element.length) return;
  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1];

  // Set up the animation
  reset();
  element.addClass(animation).css('transition', 'none');
  requestAnimationFrame(function () {
    element.addClass(initClass);
    if (isIn) element.show();
  });

  // Start the animation
  requestAnimationFrame(function () {
    // will trigger the browser to synchronously calculate the style and layout
    // also called reflow or layout thrashing
    // see https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    element[0].offsetWidth;
    element.css('transition', '').addClass(activeClass);
  });

  // Clean up the animation when it finishes
  element.one(transitionend(element), finish);

  // Hides the element (for out animations), resets the element, and runs a callback
  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  }

  // Resets transitions and removes motion-specific classes
  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass("".concat(initClass, " ").concat(activeClass, " ").concat(animation));
  }
}
var Nest = {
  Feather: function Feather(menu) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';
    menu.attr('role', 'menubar');
    menu.find('a').attr({
      'role': 'menuitem'
    });
    var items = menu.find('li').attr({
        'role': 'none'
      }),
      subMenuClass = "is-".concat(type, "-submenu"),
      subItemClass = "".concat(subMenuClass, "-item"),
      hasSubClass = "is-".concat(type, "-submenu-parent"),
      applyAria = type !== 'accordion'; // Accordions handle their own ARIA attriutes.

    items.each(function () {
      var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        $sub = $item.children('ul');
      if ($sub.length) {
        $item.addClass(hasSubClass);
        if (applyAria) {
          var firstItem = $item.children('a:first');
          firstItem.attr({
            'aria-haspopup': true,
            'aria-label': firstItem.attr('aria-label') || firstItem.text()
          });
          // Note:  Drilldowns behave differently in how they hide, and so need
          // additional attributes.  We should look if this possibly over-generalized
          // utility (Nest) is appropriate when we rework menus in 6.4
          if (type === 'drilldown') {
            $item.attr({
              'aria-expanded': false
            });
          }
        }
        $sub.addClass("submenu ".concat(subMenuClass)).attr({
          'data-submenu': '',
          'role': 'menubar'
        });
        if (type === 'drilldown') {
          $sub.attr({
            'aria-hidden': true
          });
        }
      }
      if ($item.parent('[data-submenu]').length) {
        $item.addClass("is-submenu-item ".concat(subItemClass));
      }
    });
    return;
  },
  Burn: function Burn(menu, type) {
    var
      //items = menu.find('li'),
      subMenuClass = "is-".concat(type, "-submenu"),
      subItemClass = "".concat(subMenuClass, "-item"),
      hasSubClass = "is-".concat(type, "-submenu-parent");
    menu.find('>li, > li > ul, .menu, .menu > li, [data-submenu] > li').removeClass("".concat(subMenuClass, " ").concat(subItemClass, " ").concat(hasSubClass, " is-submenu-item submenu is-active")).removeAttr('data-submenu').css('display', '');
  }
};
function Timer(elem, options, cb) {
  var _this = this,
    duration = options.duration,
    //options is an object for easily adding features later.
    nameSpace = Object.keys(elem.data())[0] || 'timer',
    remain = -1,
    start,
    timer;
  this.isPaused = false;
  this.restart = function () {
    remain = -1;
    clearTimeout(timer);
    this.start();
  };
  this.start = function () {
    this.isPaused = false;
    // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
    clearTimeout(timer);
    remain = remain <= 0 ? duration : remain;
    elem.data('paused', false);
    start = Date.now();
    timer = setTimeout(function () {
      if (options.infinite) {
        _this.restart(); //rerun the timer.
      }
      if (cb && typeof cb === 'function') {
        cb();
      }
    }, remain);
    elem.trigger("timerstart.zf.".concat(nameSpace));
  };
  this.pause = function () {
    this.isPaused = true;
    //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
    clearTimeout(timer);
    elem.data('paused', true);
    var end = Date.now();
    remain = remain - (end - start);
    elem.trigger("timerpaused.zf.".concat(nameSpace));
  };
}
var Touch = {};
var startPosX,
  startTime,
  elapsedTime,
  startEvent,
  isMoving = false,
  didMoved = false;
function onTouchEnd(e) {
  this.removeEventListener('touchmove', onTouchMove);
  this.removeEventListener('touchend', onTouchEnd);

  // If the touch did not move, consider it as a "tap"
  if (!didMoved) {
    var tapEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default().Event('tap', startEvent || e);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(tapEvent);
  }
  startEvent = null;
  isMoving = false;
  didMoved = false;
}
function onTouchMove(e) {
  if (true === (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe).preventDefault) {
    e.preventDefault();
  }
  if (isMoving) {
    var x = e.touches[0].pageX;
    // var y = e.touches[0].pageY;
    var dx = startPosX - x;
    // var dy = startPosY - y;
    var dir;
    didMoved = true;
    elapsedTime = new Date().getTime() - startTime;
    if (Math.abs(dx) >= (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe).moveThreshold && elapsedTime <= (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe).timeThreshold) {
      dir = dx > 0 ? 'left' : 'right';
    }
    // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
    //   dir = dy > 0 ? 'down' : 'up';
    // }
    if (dir) {
      e.preventDefault();
      onTouchEnd.apply(this, arguments);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event('swipe', Object.assign({}, e)), dir).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event("swipe".concat(dir), Object.assign({}, e)));
    }
  }
}
function onTouchStart(e) {
  if (e.touches.length === 1) {
    startPosX = e.touches[0].pageX;
    startEvent = e;
    isMoving = true;
    didMoved = false;
    startTime = new Date().getTime();
    this.addEventListener('touchmove', onTouchMove, {
      passive: true === (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe).preventDefault
    });
    this.addEventListener('touchend', onTouchEnd, false);
  }
}
function init() {
  this.addEventListener && this.addEventListener('touchstart', onTouchStart, {
    passive: true
  });
}

// function teardown() {
//   this.removeEventListener('touchstart', onTouchStart);
// }
var SpotSwipe = /*#__PURE__*/function () {
  function SpotSwipe() {
    _classCallCheck(this, SpotSwipe);
    this.version = '1.0.0';
    this.enabled = 'ontouchstart' in document.documentElement;
    this.preventDefault = false;
    this.moveThreshold = 75;
    this.timeThreshold = 200;
    this._init();
  }
  return _createClass(SpotSwipe, [{
    key: "_init",
    value: function _init() {
      (jquery__WEBPACK_IMPORTED_MODULE_0___default().event).special.swipe = {
        setup: init
      };
      (jquery__WEBPACK_IMPORTED_MODULE_0___default().event).special.tap = {
        setup: init
      };
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(['left', 'up', 'down', 'right'], function () {
        (jquery__WEBPACK_IMPORTED_MODULE_0___default().event).special["swipe".concat(this)] = {
          setup: function setup() {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).on('swipe', (jquery__WEBPACK_IMPORTED_MODULE_0___default().noop));
          }
        };
      });
    }
  }]);
}();
/****************************************************
 * As far as I can tell, both setupSpotSwipe and    *
 * setupTouchHandler should be idempotent,          *
 * because they directly replace functions &        *
 * values, and do not add event handlers directly.  *
 ****************************************************/
Touch.setupSpotSwipe = function () {
  (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe) = new SpotSwipe((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
};

/****************************************************
 * Method for adding pseudo drag events to elements *
 ***************************************************/
Touch.setupTouchHandler = function () {
  (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn).addTouch = function () {
    this.each(function (i, el) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).bind('touchstart touchmove touchend touchcancel', function (event) {
        //we pass the original event object because the jQuery event
        //object is normalized to w3c specs and does not provide the TouchList
        handleTouch(event);
      });
    });
    var handleTouch = function handleTouch(event) {
      var touches = event.changedTouches,
        first = touches[0],
        eventTypes = {
          touchstart: 'mousedown',
          touchmove: 'mousemove',
          touchend: 'mouseup'
        },
        type = eventTypes[event.type],
        simulatedEvent;
      if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
        simulatedEvent = new window.MouseEvent(type, {
          'bubbles': true,
          'cancelable': true,
          'screenX': first.screenX,
          'screenY': first.screenY,
          'clientX': first.clientX,
          'clientY': first.clientY
        });
      } else {
        simulatedEvent = document.createEvent('MouseEvent');
        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0 /*left*/, null);
      }
      first.target.dispatchEvent(simulatedEvent);
    };
  };
};
Touch.init = function () {
  if (typeof (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe) === 'undefined') {
    Touch.setupSpotSwipe((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
    Touch.setupTouchHandler((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
  }
};
var MutationObserver = function () {
  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
  for (var i = 0; i < prefixes.length; i++) {
    if ("".concat(prefixes[i], "MutationObserver") in window) {
      return window["".concat(prefixes[i], "MutationObserver")];
    }
  }
  return false;
}();
var triggers = function triggers(el, type) {
  el.data(type).split(' ').forEach(function (id) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id))[type === 'close' ? 'trigger' : 'triggerHandler']("".concat(type, ".zf.trigger"), [el]);
  });
};
var Triggers = {
  Listeners: {
    Basic: {},
    Global: {}
  },
  Initializers: {}
};
Triggers.Listeners.Basic = {
  openListener: function openListener() {
    triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'open');
  },
  closeListener: function closeListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');
    if (id) {
      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'close');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');
    }
  },
  toggleListener: function toggleListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');
    if (id) {
      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');
    }
  },
  closeableListener: function closeableListener(e) {
    var animation = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable');

    // Only close the first closable element. See https://git.io/zf-7833
    e.stopPropagation();
    if (animation !== '') {
      Motion.animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), animation, function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');
    }
  },
  toggleFocusListener: function toggleFocusListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id)).triggerHandler('toggle.zf.trigger', [jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);
  }
};

// Elements with [data-open] will reveal a plugin that supports it when clicked.
Triggers.Initializers.addOpenListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
};

// Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
Triggers.Initializers.addCloseListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
};

// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
Triggers.Initializers.addToggleListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
};

// Elements with [data-closable] will respond to close.zf.trigger events.
Triggers.Initializers.addCloseableListener = function ($elem) {
  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
};

// Elements with [data-toggle-focus] will respond to coming in and out of focus
Triggers.Initializers.addToggleFocusListener = function ($elem) {
  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
};

// More Global/complex listeners and triggers
Triggers.Listeners.Global = {
  resizeListener: function resizeListener($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');
      });
    }
    //trigger all listening elements and signal a resize event
    $nodes.attr('data-events', "resize");
  },
  scrollListener: function scrollListener($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');
      });
    }
    //trigger all listening elements and signal a scroll event
    $nodes.attr('data-events', "scroll");
  },
  closeMeListener: function closeMeListener(e, pluginId) {
    var plugin = e.namespace.split('.')[0];
    var plugins = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-".concat(plugin, "]")).not("[data-yeti-box=\"".concat(pluginId, "\"]"));
    plugins.each(function () {
      var _this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      _this.triggerHandler('close.zf.trigger', [_this]);
    });
  }
};

// Global, parses whole document.
Triggers.Initializers.addClosemeListener = function (pluginName) {
  var yetiBoxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),
    plugNames = ['dropdown', 'tooltip', 'reveal'];
  if (pluginName) {
    if (typeof pluginName === 'string') {
      plugNames.push(pluginName);
    } else if (_typeof(pluginName) === 'object' && typeof pluginName[0] === 'string') {
      plugNames = plugNames.concat(pluginName);
    } else {
      console.error('Plugin names must be strings');
    }
  }
  if (yetiBoxes.length) {
    var listeners = plugNames.map(function (name) {
      return "closeme.zf.".concat(name);
    }).join(' ');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
  }
};
function debounceGlobalListener(debounce, trigger, listener) {
  var timer,
    args = Array.prototype.slice.call(arguments, 3);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(trigger, function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      listener.apply(null, args);
    }, debounce || 10); //default time to emit scroll event
  });
}
Triggers.Initializers.addResizeListener = function (debounce) {
  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');
  if ($nodes.length) {
    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
  }
};
Triggers.Initializers.addScrollListener = function (debounce) {
  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');
  if ($nodes.length) {
    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
  }
};
Triggers.Initializers.addMutationEventsListener = function ($elem) {
  if (!MutationObserver) {
    return false;
  }
  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]');

  //element callback
  var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {
    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target);

    //trigger the event handler for the element depending on type
    switch (mutationRecordsList[0].type) {
      case "attributes":
        if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
        }
        if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('resizeme.zf.trigger', [$target]);
        }
        if (mutationRecordsList[0].attributeName === "style") {
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        }
        break;
      case "childList":
        $target.closest("[data-mutate]").attr("data-events", "mutate");
        $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        break;
      default:
        return false;
      //nothing
    }
  };
  if ($nodes.length) {
    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
    for (var i = 0; i <= $nodes.length - 1; i++) {
      var elementObserver = new MutationObserver(listeningElementsMutation);
      elementObserver.observe($nodes[i], {
        attributes: true,
        childList: true,
        characterData: false,
        subtree: true,
        attributeFilter: ["data-events", "style"]
      });
    }
  }
};
Triggers.Initializers.addSimpleListeners = function () {
  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
  Triggers.Initializers.addOpenListener($document);
  Triggers.Initializers.addCloseListener($document);
  Triggers.Initializers.addToggleListener($document);
  Triggers.Initializers.addCloseableListener($document);
  Triggers.Initializers.addToggleFocusListener($document);
};
Triggers.Initializers.addGlobalListeners = function () {
  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
  Triggers.Initializers.addMutationEventsListener($document);
  Triggers.Initializers.addResizeListener(250);
  Triggers.Initializers.addScrollListener();
  Triggers.Initializers.addClosemeListener();
};
Triggers.init = function (__, Foundation) {
  onLoad(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
    if ((jquery__WEBPACK_IMPORTED_MODULE_0___default().triggersInitialized) !== true) {
      Triggers.Initializers.addSimpleListeners();
      Triggers.Initializers.addGlobalListeners();
      (jquery__WEBPACK_IMPORTED_MODULE_0___default().triggersInitialized) = true;
    }
  });
  if (Foundation) {
    Foundation.Triggers = Triggers;
    // Legacy included to be backwards compatible for now.
    Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
  }
};

// Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)
var Plugin = /*#__PURE__*/function () {
  function Plugin(element, options) {
    _classCallCheck(this, Plugin);
    this._setup(element, options);
    var pluginName = getPluginName(this);
    this.uuid = GetYoDigits(6, pluginName);
    if (!this.$element.attr("data-".concat(pluginName))) {
      this.$element.attr("data-".concat(pluginName), this.uuid);
    }
    if (!this.$element.data('zfPlugin')) {
      this.$element.data('zfPlugin', this);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */
    this.$element.trigger("init.zf.".concat(pluginName));
  }
  return _createClass(Plugin, [{
    key: "destroy",
    value: function destroy() {
      this._destroy();
      var pluginName = getPluginName(this);
      this.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
      /**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */.trigger("destroyed.zf.".concat(pluginName));
      for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
          this[prop] = null; //clean up script to prep for garbage collection.
        }
      }
    }
  }]);
}(); // Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function getPluginName(obj) {
  return hyphenate(obj.className);
}

/**
 * Abide module.
 * @module foundation.abide
 */
var Abide = /*#__PURE__*/function (_Plugin) {
  function Abide() {
    _classCallCheck(this, Abide);
    return _callSuper(this, Abide, arguments);
  }
  _inherits(Abide, _Plugin);
  return _createClass(Abide, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of Abide.
     * @class
     * @name Abide
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(true, {}, Abide.defaults, this.$element.data(), options);
      this.isEnabled = true;
      this.formnovalidate = null;
      this.className = 'Abide'; // ie9 back compat
      this._init();
    }

    /**
     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;
      this.$inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default().merge(
      // Consider as input to validate:
      this.$element.find('input').not('[type="submit"]'),
      // * all input fields expect submit
      this.$element.find('textarea, select') // * all textareas and select fields
      );
      this.$submits = this.$element.find('[type="submit"]');
      var $globalErrors = this.$element.find('[data-abide-error]');

      // Add a11y attributes to all fields
      if (this.options.a11yAttributes) {
        this.$inputs.each(function (i, input) {
          return _this2.addA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input));
        });
        $globalErrors.each(function (i, error) {
          return _this2.addGlobalErrorA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(error));
        });
      }
      this._events();
    }

    /**
     * Initializes events for Abide.
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      var _this3 = this;
      this.$element.off('.abide').on('reset.zf.abide', function () {
        _this3.resetForm();
      }).on('submit.zf.abide', function () {
        return _this3.validateForm();
      });
      this.$submits.off('click.zf.abide keydown.zf.abide').on('click.zf.abide keydown.zf.abide', function (e) {
        if (!e.key || e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          _this3.formnovalidate = e.target.getAttribute('formnovalidate') !== null;
          _this3.$element.submit();
        }
      });
      if (this.options.validateOn === 'fieldChange') {
        this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {
          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
        });
      }
      if (this.options.liveValidate) {
        this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {
          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
        });
      }
      if (this.options.validateOnBlur) {
        this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {
          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
        });
      }
    }

    /**
     * Calls necessary functions to update Abide upon DOM change
     * @private
     */
  }, {
    key: "_reflow",
    value: function _reflow() {
      this._init();
    }

    /**
     * Checks whether the submitted form should be validated or not, consodering formnovalidate and isEnabled
     * @returns {Boolean}
     * @private
     */
  }, {
    key: "_validationIsDisabled",
    value: function _validationIsDisabled() {
      if (this.isEnabled === false) {
        // whole validation disabled
        return true;
      } else if (typeof this.formnovalidate === 'boolean') {
        // triggered by $submit
        return this.formnovalidate;
      }
      // triggered by Enter in non-submit input
      return this.$submits.length ? this.$submits[0].getAttribute('formnovalidate') !== null : false;
    }

    /**
     * Enables the whole validation
     */
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this.isEnabled = true;
    }

    /**
     * Disables the whole validation
     */
  }, {
    key: "disableValidation",
    value: function disableValidation() {
      this.isEnabled = false;
    }

    /**
     * Checks whether or not a form element has the required attribute and if it's checked or not
     * @param {Object} element - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */
  }, {
    key: "requiredCheck",
    value: function requiredCheck($el) {
      if (!$el.attr('required')) return true;
      var isGood = true;
      switch ($el[0].type) {
        case 'checkbox':
          isGood = $el[0].checked;
          break;
        case 'select':
        case 'select-one':
        case 'select-multiple':
          var opt = $el.find('option:selected');
          if (!opt.length || !opt.val()) isGood = false;
          break;
        default:
          if (!$el.val() || !$el.val().length) isGood = false;
      }
      return isGood;
    }

    /**
     * Get:
     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
     *   1. The element's direct sibling('s).
     *   2. The element's parent's children.
     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
     *
     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
     *
     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
     * @param {String[]} [failedValidators] - List of failed validators.
     * @returns {Object} jQuery object with the selector.
     */
  }, {
    key: "findFormError",
    value: function findFormError($el, failedValidators) {
      var _this4 = this;
      var id = $el.length ? $el[0].id : '';
      var $error = $el.siblings(this.options.formErrorSelector);
      if (!$error.length) {
        $error = $el.parent().find(this.options.formErrorSelector);
      }
      if (id) {
        $error = $error.add(this.$element.find("[data-form-error-for=\"".concat(id, "\"]")));
      }
      if (!!failedValidators) {
        $error = $error.not('[data-form-error-on]');
        failedValidators.forEach(function (v) {
          $error = $error.add($el.siblings("[data-form-error-on=\"".concat(v, "\"]")));
          $error = $error.add(_this4.$element.find("[data-form-error-for=\"".concat(id, "\"][data-form-error-on=\"").concat(v, "\"]")));
        });
      }
      return $error;
    }

    /**
     * Get the first element in this order:
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */
  }, {
    key: "findLabel",
    value: function findLabel($el) {
      var id = $el[0].id;
      var $label = this.$element.find("label[for=\"".concat(id, "\"]"));
      if (!$label.length) {
        return $el.closest('label');
      }
      return $label;
    }

    /**
     * Get the set of labels associated with a set of radio els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */
  }, {
    key: "findRadioLabels",
    value: function findRadioLabels($els) {
      var _this5 = this;
      var labels = $els.map(function (i, el) {
        var id = el.id;
        var $label = _this5.$element.find("label[for=\"".concat(id, "\"]"));
        if (!$label.length) {
          $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');
        }
        return $label[0];
      });
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);
    }

    /**
     * Get the set of labels associated with a set of checkbox els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */
  }, {
    key: "findCheckboxLabels",
    value: function findCheckboxLabels($els) {
      var _this6 = this;
      var labels = $els.map(function (i, el) {
        var id = el.id;
        var $label = _this6.$element.find("label[for=\"".concat(id, "\"]"));
        if (!$label.length) {
          $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');
        }
        return $label[0];
      });
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);
    }

    /**
     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
     * @param {Object} $el - jQuery object to add the class to
     * @param {String[]} [failedValidators] - List of failed validators.
     */
  }, {
    key: "addErrorClasses",
    value: function addErrorClasses($el, failedValidators) {
      var $label = this.findLabel($el);
      var $formError = this.findFormError($el, failedValidators);
      if ($label.length) {
        $label.addClass(this.options.labelErrorClass);
      }
      if ($formError.length) {
        $formError.addClass(this.options.formErrorClass);
      }
      $el.addClass(this.options.inputErrorClass).attr({
        'data-invalid': '',
        'aria-invalid': true
      });
      if ($formError.filter(':visible').length) {
        this.addA11yErrorDescribe($el, $formError);
      }
    }

    /**
     * Adds [for] and [role=alert] attributes to all form error targetting $el,
     * and [aria-describedby] attribute to $el toward the first form error.
     * @param {Object} $el - jQuery object
     */
  }, {
    key: "addA11yAttributes",
    value: function addA11yAttributes($el) {
      var $errors = this.findFormError($el);
      var $labels = $errors.filter('label');
      if (!$errors.length) return;
      var $error = $errors.filter(':visible').first();
      if ($error.length) {
        this.addA11yErrorDescribe($el, $error);
      }
      if ($labels.filter('[for]').length < $labels.length) {
        // Get the input ID or create one
        var elemId = $el.attr('id');
        if (typeof elemId === 'undefined') {
          elemId = GetYoDigits(6, 'abide-input');
          $el.attr('id', elemId);
        }

        // For each label targeting $el, set [for] if it is not set.
        $labels.each(function (i, label) {
          var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
          if (typeof $label.attr('for') === 'undefined') $label.attr('for', elemId);
        });
      }

      // For each error targeting $el, set [role=alert] if it is not set.
      $errors.each(function (i, label) {
        var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
        if (typeof $label.attr('role') === 'undefined') $label.attr('role', 'alert');
      }).end();
    }
  }, {
    key: "addA11yErrorDescribe",
    value: function addA11yErrorDescribe($el, $error) {
      if ($el.attr('type') === 'hidden') return;
      if (typeof $el.attr('aria-describedby') !== 'undefined') return;

      // Set [aria-describedby] on the input toward the first form error if it is not set
      // Get the first error ID or create one
      var errorId = $error.attr('id');
      if (typeof errorId === 'undefined') {
        errorId = GetYoDigits(6, 'abide-error');
        $error.attr('id', errorId);
      }
      $el.attr('aria-describedby', errorId).data('abide-describedby', true);
    }

    /**
     * Adds [aria-live] attribute to the given global form error $el.
     * @param {Object} $el - jQuery object to add the attribute to
     */
  }, {
    key: "addGlobalErrorA11yAttributes",
    value: function addGlobalErrorA11yAttributes($el) {
      if (typeof $el.attr('aria-live') === 'undefined') $el.attr('aria-live', this.options.a11yErrorLevel);
    }

    /**
     * Remove CSS error classes etc from an entire radio button group
     * @param {String} groupName - A string that specifies the name of a radio button group
     *
     */
  }, {
    key: "removeRadioErrorClasses",
    value: function removeRadioErrorClasses(groupName) {
      var $els = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
      var $labels = this.findRadioLabels($els);
      var $formErrors = this.findFormError($els);
      if ($labels.length) {
        $labels.removeClass(this.options.labelErrorClass);
      }
      if ($formErrors.length) {
        $formErrors.removeClass(this.options.formErrorClass);
      }
      $els.removeClass(this.options.inputErrorClass).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
    }

    /**
     * Remove CSS error classes etc from an entire checkbox group
     * @param {String} groupName - A string that specifies the name of a checkbox group
     *
     */
  }, {
    key: "removeCheckboxErrorClasses",
    value: function removeCheckboxErrorClasses(groupName) {
      var $els = this.$element.find(":checkbox[name=\"".concat(groupName, "\"]"));
      var $labels = this.findCheckboxLabels($els);
      var $formErrors = this.findFormError($els);
      if ($labels.length) {
        $labels.removeClass(this.options.labelErrorClass);
      }
      if ($formErrors.length) {
        $formErrors.removeClass(this.options.formErrorClass);
      }
      $els.removeClass(this.options.inputErrorClass).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
    }

    /**
     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
     * @param {Object} $el - jQuery object to remove the class from
     */
  }, {
    key: "removeErrorClasses",
    value: function removeErrorClasses($el) {
      // radios need to clear all of the els
      if ($el[0].type === 'radio') {
        return this.removeRadioErrorClasses($el.attr('name'));
      }
      // checkboxes need to clear all of the els
      else if ($el[0].type === 'checkbox') {
        return this.removeCheckboxErrorClasses($el.attr('name'));
      }
      var $label = this.findLabel($el);
      var $formError = this.findFormError($el);
      if ($label.length) {
        $label.removeClass(this.options.labelErrorClass);
      }
      if ($formError.length) {
        $formError.removeClass(this.options.formErrorClass);
      }
      $el.removeClass(this.options.inputErrorClass).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
      if ($el.data('abide-describedby')) {
        $el.removeAttr('aria-describedby').removeData('abide-describedby');
      }
    }

    /**
     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
     * @fires Abide#invalid
     * @fires Abide#valid
     * @param {Object} element - jQuery object to validate, should be an HTML input
     * @returns {Boolean} goodToGo - If the input is valid or not.
     */
  }, {
    key: "validateInput",
    value: function validateInput($el) {
      var _this7 = this;
      var clearRequire = this.requiredCheck($el),
        validator = $el.attr('data-validator'),
        failedValidators = [],
        manageErrorClasses = true;

      // skip validation if disabled
      if (this._validationIsDisabled()) {
        return true;
      }

      // don't validate ignored inputs or hidden inputs or disabled inputs
      if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
        return true;
      }
      switch ($el[0].type) {
        case 'radio':
          this.validateRadio($el.attr('name')) || failedValidators.push('required');
          break;
        case 'checkbox':
          this.validateCheckbox($el.attr('name')) || failedValidators.push('required');
          // validateCheckbox() adds/removes error classes
          manageErrorClasses = false;
          break;
        case 'select':
        case 'select-one':
        case 'select-multiple':
          clearRequire || failedValidators.push('required');
          break;
        default:
          clearRequire || failedValidators.push('required');
          this.validateText($el) || failedValidators.push('pattern');
      }
      if (validator) {
        var required = $el.attr('required') ? true : false;
        validator.split(' ').forEach(function (v) {
          _this7.options.validators[v]($el, required, $el.parent()) || failedValidators.push(v);
        });
      }
      if ($el.attr('data-equalto')) {
        this.options.validators.equalTo($el) || failedValidators.push('equalTo');
      }
      var goodToGo = failedValidators.length === 0;
      var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';
      if (goodToGo) {
        // Re-validate inputs that depend on this one with equalto
        var dependentElements = this.$element.find("[data-equalto=\"".concat($el.attr('id'), "\"]"));
        if (dependentElements.length) {
          var _this = this;
          dependentElements.each(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) {
              _this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
            }
          });
        }
      }
      if (manageErrorClasses) {
        this.removeErrorClasses($el);
        if (!goodToGo) {
          this.addErrorClasses($el, failedValidators);
        }
      }

      /**
       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
       * Trigger includes the DOM element of the input.
       * @event Abide#valid
       * @event Abide#invalid
       */
      $el.trigger(message, [$el]);
      return goodToGo;
    }

    /**
     * Goes through a form and if there are any invalid inputs, it will display the form error element
     * @returns {Boolean} noError - true if no errors were detected...
     * @fires Abide#formvalid
     * @fires Abide#forminvalid
     */
  }, {
    key: "validateForm",
    value: function validateForm() {
      var _this8 = this;
      var acc = [];
      var _this = this;
      var checkboxGroupName;

      // Remember first form submission to prevent specific checkbox validation (more than one required) until form got initially submitted
      if (!this.initialized) {
        this.initialized = true;
      }

      // skip validation if disabled
      if (this._validationIsDisabled()) {
        this.formnovalidate = null;
        return true;
      }
      this.$inputs.each(function () {
        // Only use one checkbox per group since validateCheckbox() iterates over all associated checkboxes
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].type === 'checkbox') {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name') === checkboxGroupName) return true;
          checkboxGroupName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name');
        }
        acc.push(_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)));
      });
      var noError = acc.indexOf(false) === -1;
      this.$element.find('[data-abide-error]').each(function (i, elem) {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem);
        // Ensure a11y attributes are set
        if (_this8.options.a11yAttributes) _this8.addGlobalErrorA11yAttributes($elem);
        // Show or hide the error
        $elem.css('display', noError ? 'none' : 'block');
      });

      /**
       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
       * Trigger includes the element of the form.
       * @event Abide#formvalid
       * @event Abide#forminvalid
       */
      this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);
      return noError;
    }

    /**
     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
     */
  }, {
    key: "validateText",
    value: function validateText($el, pattern) {
      // A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
      pattern = pattern || $el.attr('data-pattern') || $el.attr('pattern') || $el.attr('type');
      var inputText = $el.val();
      var valid = true;
      if (inputText.length) {
        // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
        if (this.options.patterns.hasOwnProperty(pattern)) {
          valid = this.options.patterns[pattern].test(inputText);
        }
        // If the pattern name isn't also the type attribute of the field, then test it as a regexp
        else if (pattern !== $el.attr('type')) {
          valid = new RegExp(pattern).test(inputText);
        }
      }
      return valid;
    }

    /**
     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
     * @param {String} groupName - A string that specifies the name of a radio button group
     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
     */
  }, {
    key: "validateRadio",
    value: function validateRadio(groupName) {
      // If at least one radio in the group has the `required` attribute, the group is considered required
      // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
      var $group = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
      var valid = false,
        required = false;

      // For the group to be required, at least one radio needs to be required
      $group.each(function (i, e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
          required = true;
        }
      });
      if (!required) valid = true;
      if (!valid) {
        // For the group to be valid, at least one radio needs to be checked
        $group.each(function (i, e) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
            valid = true;
          }
        });
      }
      return valid;
    }

    /**
     * Determines whether or a not a checkbox input is valid based on whether or not it is required and checked. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all checkboxes in its group.
     * @param {String} groupName - A string that specifies the name of a checkbox group
     * @returns {Boolean} Boolean value depends on whether or not at least one checkbox input has been checked (if it's required)
     */
  }, {
    key: "validateCheckbox",
    value: function validateCheckbox(groupName) {
      var _this9 = this;
      // If at least one checkbox in the group has the `required` attribute, the group is considered required
      // Per W3C spec, all checkboxes in a group should have `required`, but we're being nice
      var $group = this.$element.find(":checkbox[name=\"".concat(groupName, "\"]"));
      var valid = false,
        required = false,
        minRequired = 1,
        checked = 0;

      // For the group to be required, at least one checkbox needs to be required
      $group.each(function (i, e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
          required = true;
        }
      });
      if (!required) valid = true;
      if (!valid) {
        // Count checked checkboxes within the group
        // Use data-min-required if available (default: 1)
        $group.each(function (i, e) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
            checked++;
          }
          if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('data-min-required') !== 'undefined') {
            minRequired = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('data-min-required'), 10);
          }
        });

        // For the group to be valid, the minRequired amount of checkboxes have to be checked
        if (checked >= minRequired) {
          valid = true;
        }
      }

      // Skip validation if more than 1 checkbox have to be checked AND if the form hasn't got submitted yet (otherwise it will already show an error during the first fill in)
      if (this.initialized !== true && minRequired > 1) {
        return true;
      }

      // Refresh error class for all input
      $group.each(function (i, e) {
        if (!valid) {
          _this9.addErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e), ['required']);
        } else {
          _this9.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e));
        }
      });
      return valid;
    }

    /**
     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
     * @param {Object} $el - jQuery input element.
     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
     * @param {Boolean} required - self explanatory?
     * @returns {Boolean} - true if validations passed.
     */
  }, {
    key: "matchValidation",
    value: function matchValidation($el, validators, required) {
      var _this10 = this;
      required = required ? true : false;
      var clear = validators.split(' ').map(function (v) {
        return _this10.options.validators[v]($el, required, $el.parent());
      });
      return clear.indexOf(false) === -1;
    }

    /**
     * Resets form inputs and styles
     * @fires Abide#formreset
     */
  }, {
    key: "resetForm",
    value: function resetForm() {
      var $form = this.$element,
        opts = this.options;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.labelErrorClass), $form).not('small').removeClass(opts.labelErrorClass);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.inputErrorClass), $form).not('small').removeClass(opts.inputErrorClass);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("".concat(opts.formErrorSelector, ".").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);
      $form.find('[data-abide-error]').css('display', 'none');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').attr({
        'data-invalid': null,
        'aria-invalid': null
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
      /**
       * Fires when the form has been reset.
       * @event Abide#formreset
       */
      $form.trigger('formreset.zf.abide', [$form]);
    }

    /**
     * Destroys an instance of Abide.
     * Removes error styles and classes from elements, without resetting their values.
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      var _this = this;
      this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');
      this.$inputs.off('.abide').each(function () {
        _this.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      });
      this.$submits.off('.abide');
    }
  }]);
}(Plugin);
/**
 * Default settings for plugin
 */
Abide.defaults = {
  /**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @type {?string}
   * @default 'fieldChange'
   */
  validateOn: 'fieldChange',
  /**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-label'
   */
  labelErrorClass: 'is-invalid-label',
  /**
   * Class to be applied to inputs on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-input'
   */
  inputErrorClass: 'is-invalid-input',
  /**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @type {string}
   * @default '.form-error'
   */
  formErrorSelector: '.form-error',
  /**
   * Class added to Form Errors on failed validation.
   * @option
   * @type {string}
   * @default 'is-visible'
   */
  formErrorClass: 'is-visible',
  /**
   * If true, automatically insert when possible:
   * - `[aria-describedby]` on fields
   * - `[role=alert]` on form errors and `[for]` on form error labels
   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
   * @option
   * @type {boolean}
   * @default true
   */
  a11yAttributes: true,
  /**
   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
   * Options are: 'assertive', 'polite' and 'off'/null
   * @option
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   * @type {string}
   * @default 'assertive'
   */
  a11yErrorLevel: 'assertive',
  /**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */
  liveValidate: false,
  /**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */
  validateOnBlur: false,
  patterns: {
    alpha: /^[a-zA-Z]+$/,
    // eslint-disable-next-line camelcase
    alpha_numeric: /^[a-zA-Z0-9]+$/,
    integer: /^[-+]?\d+$/,
    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
    // amex, visa, diners
    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    cvv: /^([0-9]){3,4}$/,
    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
    // From CommonRegexJS (@talyssonoc)
    // https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
    // For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
    url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
    // abc.de
    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
    // YYYY-MM-DD
    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
    // HH:MM:SS
    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
    // MM/DD/YYYY
    // eslint-disable-next-line camelcase
    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
    // DD/MM/YYYY
    // eslint-disable-next-line camelcase
    day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
    // #FFF or #FFFFFF
    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    // Domain || URL
    website: {
      test: function test(text) {
        return Abide.defaults.patterns.domain.test(text) || Abide.defaults.patterns.url.test(text);
      }
    }
  },
  /**
   * Optional validation functions to be used. `equalTo` being the only default included function.
   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
   * el : The jQuery element to validate.
   * @option
   */
  validators: {
    equalTo: function equalTo(el) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(el.attr('data-equalto'))).val() === el.val();
    }
  }
};

/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */
var Accordion = /*#__PURE__*/function (_Plugin) {
  function Accordion() {
    _classCallCheck(this, Accordion);
    return _callSuper(this, Accordion, arguments);
  }
  _inherits(Accordion, _Plugin);
  return _createClass(Accordion, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Accordion.defaults, this.$element.data(), options);
      this.className = 'Accordion'; // ie9 back compat
      this._init();
      Keyboard.register('Accordion', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ARROW_DOWN': 'next',
        'ARROW_UP': 'previous',
        'HOME': 'first',
        'END': 'last'
      });
    }

    /**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;
      this._isInitializing = true;
      this.$tabs = this.$element.children('[data-accordion-item]');
      this.$tabs.each(function (idx, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el),
          $content = $el.children('[data-tab-content]'),
          id = $content[0].id || GetYoDigits(6, 'accordion'),
          linkId = el.id ? "".concat(el.id, "-label") : "".concat(id, "-label");
        $el.find('a:first').attr({
          'aria-controls': id,
          'id': linkId,
          'aria-expanded': false
        });
        $content.attr({
          'role': 'region',
          'aria-labelledby': linkId,
          'aria-hidden': true,
          'id': id
        });
      });
      var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
      if ($initActive.length) {
        // Save up the initial hash to return to it later when going back in history
        this._initialAnchor = $initActive.prev('a').attr('href');
        this._openSingleTab($initActive);
      }
      this._checkDeepLink = function () {
        var anchor = window.location.hash;
        if (!anchor.length) {
          // If we are still initializing and there is no anchor, then there is nothing to do
          if (_this2._isInitializing) return;
          // Otherwise, move to the initial anchor
          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
        }
        var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);
        var $link = anchor && _this2.$element.find("[href$=\"".concat(anchor, "\"]"));
        // Whether the anchor element that has been found is part of this element
        var isOwnAnchor = !!($anchor.length && $link.length);
        if (isOwnAnchor) {
          // If there is an anchor for the hash, open it (if not already active)
          if ($anchor && $link && $link.length) {
            if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
              _this2._openSingleTab($anchor);
            }
          }
          // Otherwise, close everything
          else {
            _this2._closeAllTabs();
          }

          // Roll up a little to show the titles
          if (_this2.options.deepLinkSmudge) {
            onLoad(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
              var offset = _this2.$element.offset();
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                scrollTop: offset.top - _this2.options.deepLinkSmudgeOffset
              }, _this2.options.deepLinkSmudgeDelay);
            });
          }

          /**
           * Fires when the plugin has deeplinked at pageload
           * @event Accordion#deeplink
           */
          _this2.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
        }
      };

      //use browser to open a tab, if it exists in this tabset
      if (this.options.deepLink) {
        this._checkDeepLink();
      }
      this._events();
      this._isInitializing = false;
    }

    /**
     * Adds event handlers for items within the accordion.
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;
      this.$tabs.each(function () {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var $tabContent = $elem.children('[data-tab-content]');
        if ($tabContent.length) {
          $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
            e.preventDefault();
            _this.toggle($tabContent);
          }).on('keydown.zf.accordion', function (e) {
            Keyboard.handleKey(e, 'Accordion', {
              toggle: function toggle() {
                _this.toggle($tabContent);
              },
              next: function next() {
                var $a = $elem.next().find('a').focus();
                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              previous: function previous() {
                var $a = $elem.prev().find('a').focus();
                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              first: function first() {
                var $a = _this.$tabs.first().find('.accordion-title').focus();
                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              last: function last() {
                var $a = _this.$tabs.last().find('.accordion-title').focus();
                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              handled: function handled() {
                e.preventDefault();
              }
            });
          });
        }
      });
      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
      }
    }

    /**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
     * @function
     */
  }, {
    key: "toggle",
    value: function toggle($target) {
      if ($target.closest('[data-accordion]').is('[disabled]')) {
        console.info('Cannot toggle an accordion that is disabled.');
        return;
      }
      if ($target.parent().hasClass('is-active')) {
        this.up($target);
      } else {
        this.down($target);
      }
      //either replace or update browser history
      if (this.options.deepLink) {
        var anchor = $target.prev('a').attr('href');
        if (this.options.updateHistory) {
          history.pushState({}, '', anchor);
        } else {
          history.replaceState({}, '', anchor);
        }
      }
    }

    /**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     */
  }, {
    key: "down",
    value: function down($target) {
      if ($target.closest('[data-accordion]').is('[disabled]')) {
        console.info('Cannot call down on an accordion that is disabled.');
        return;
      }
      if (this.options.multiExpand) this._openTab($target);else this._openSingleTab($target);
    }

    /**
     * Closes the tab defined by `$target`.
     * It may be ignored if the Accordion options don't allow it.
     *
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     */
  }, {
    key: "up",
    value: function up($target) {
      if (this.$element.is('[disabled]')) {
        console.info('Cannot call up on an accordion that is disabled.');
        return;
      }

      // Don't close the item if it is already closed
      var $targetItem = $target.parent();
      if (!$targetItem.hasClass('is-active')) return;

      // Don't close the item if there is no other active item (unless with `allowAllClosed`)
      var $othersItems = $targetItem.siblings();
      if (!this.options.allowAllClosed && !$othersItems.hasClass('is-active')) return;
      this._closeTab($target);
    }

    /**
     * Make the tab defined by `$target` the only opened tab, closing all others tabs.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @function
     * @private
     */
  }, {
    key: "_openSingleTab",
    value: function _openSingleTab($target) {
      // Close all the others active tabs.
      var $activeContents = this.$element.children('.is-active').children('[data-tab-content]');
      if ($activeContents.length) {
        this._closeTab($activeContents.not($target));
      }

      // Then open the target.
      this._openTab($target);
    }

    /**
     * Opens the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     * @private
     */
  }, {
    key: "_openTab",
    value: function _openTab($target) {
      var _this3 = this;
      var $targetItem = $target.parent();
      var targetContentId = $target.attr('aria-labelledby');
      $target.attr('aria-hidden', false);
      $targetItem.addClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
        'aria-expanded': true
      });
      $target.finish().slideDown(this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */
        _this3.$element.trigger('down.zf.accordion', [$target]);
      });
    }

    /**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     * @private
     */
  }, {
    key: "_closeTab",
    value: function _closeTab($target) {
      var _this4 = this;
      var $targetItem = $target.parent();
      var targetContentId = $target.attr('aria-labelledby');
      $target.attr('aria-hidden', true);
      $targetItem.removeClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
        'aria-expanded': false
      });
      $target.finish().slideUp(this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */
        _this4.$element.trigger('up.zf.accordion', [$target]);
      });
    }

    /**
     * Closes all active tabs
     * @fires Accordion#up
     * @function
     * @private
     */
  }, {
    key: "_closeAllTabs",
    value: function _closeAllTabs() {
      var $activeTabs = this.$element.children('.is-active').children('[data-tab-content]');
      if ($activeTabs.length) {
        this._closeTab($activeTabs);
      }
    }

    /**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
      this.$element.find('a').off('.zf.accordion');
      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
      }
    }
  }]);
}(Plugin);
Accordion.defaults = {
  /**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,
  /**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
  multiExpand: false,
  /**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
  allowAllClosed: false,
  /**
   * Link the location hash to the open pane.
   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,
  /**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,
  /**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,
  /**
   * If `deepLinkSmudge` is enabled, the offset for scrollToTtop to prevent overlap by a sticky element at the top of the page
   * @option
   * @type {number}
   * @default 0
   */
  deepLinkSmudgeOffset: 0,
  /**
   * If `deepLink` is enabled, update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false
};

/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 */
var AccordionMenu = /*#__PURE__*/function (_Plugin) {
  function AccordionMenu() {
    _classCallCheck(this, AccordionMenu);
    return _callSuper(this, AccordionMenu, arguments);
  }
  _inherits(AccordionMenu, _Plugin);
  return _createClass(AccordionMenu, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of an accordion menu.
     * @class
     * @name AccordionMenu
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, AccordionMenu.defaults, this.$element.data(), options);
      this.className = 'AccordionMenu'; // ie9 back compat

      this._init();
      Keyboard.register('AccordionMenu', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ARROW_RIGHT': 'open',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'close',
        'ESCAPE': 'closeAll'
      });
    }

    /**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      Nest.Feather(this.$element, 'accordion');
      var _this = this;
      this.$element.find('[data-submenu]').not('.is-active').slideUp(0); //.find('a').css('padding-left', '1rem');
      this.$element.attr({
        'aria-multiselectable': this.options.multiOpen
      });
      this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
      this.$menuLinks.each(function () {
        var linkId = this.id || GetYoDigits(6, 'acc-menu-link'),
          $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          $sub = $elem.children('[data-submenu]'),
          subId = $sub[0].id || GetYoDigits(6, 'acc-menu'),
          isActive = $sub.hasClass('is-active');
        if (_this.options.parentLink) {
          var $anchor = $elem.children('a');
          $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');
        }
        if (_this.options.submenuToggle) {
          $elem.addClass('has-submenu-toggle');
          $elem.children('a').after('<button id="' + linkId + '" class="submenu-toggle" aria-controls="' + subId + '" aria-expanded="' + isActive + '" title="' + _this.options.submenuToggleText + '"><span class="submenu-toggle-text">' + _this.options.submenuToggleText + '</span></button>');
        } else {
          $elem.attr({
            'aria-controls': subId,
            'aria-expanded': isActive,
            'id': linkId
          });
        }
        $sub.attr({
          'aria-labelledby': linkId,
          'aria-hidden': !isActive,
          'role': 'group',
          'id': subId
        });
      });
      var initPanes = this.$element.find('.is-active');
      if (initPanes.length) {
        initPanes.each(function () {
          _this.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
        });
      }
      this._events();
    }

    /**
     * Adds event handlers for items within the menu.
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;
      this.$element.find('li').each(function () {
        var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]');
        if ($submenu.length) {
          if (_this.options.submenuToggle) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function () {
              _this.toggle($submenu);
            });
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
              e.preventDefault();
              _this.toggle($submenu);
            });
          }
        }
      }).on('keydown.zf.accordionMenu', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          $elements = $element.parent('ul').children('li'),
          $prevElement,
          $nextElement,
          $target = $element.children('[data-submenu]');
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]:visible').length) {
              // has open sub menu
              $nextElement = $element.find('li:first-child').find('a').first();
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':first-child')) {
              // is first element of sub menu
              $prevElement = $element.parents('li').first().find('a').first();
            } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
              // if previous element has open sub menu
              $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':last-child')) {
              // is last element of sub menu
              $nextElement = $element.parents('li').first().next('li').find('a').first();
            }
            return;
          }
        });
        Keyboard.handleKey(e, 'AccordionMenu', {
          open: function open() {
            if ($target.is(':hidden')) {
              _this.down($target);
              $target.find('li').first().find('a').first().focus();
            }
          },
          close: function close() {
            if ($target.length && !$target.is(':hidden')) {
              // close active sub of this item
              _this.up($target);
            } else if ($element.parent('[data-submenu]').length) {
              // close currently open sub
              _this.up($element.parent('[data-submenu]'));
              $element.parents('li').first().find('a').first().focus();
            }
          },
          up: function up() {
            $prevElement.focus();
            return true;
          },
          down: function down() {
            $nextElement.focus();
            return true;
          },
          toggle: function toggle() {
            if (_this.options.submenuToggle) {
              return false;
            }
            if ($element.children('[data-submenu]').length) {
              _this.toggle($element.children('[data-submenu]'));
              return true;
            }
          },
          closeAll: function closeAll() {
            _this.hideAll();
          },
          handled: function handled(preventDefault) {
            if (preventDefault) {
              e.preventDefault();
            }
          }
        });
      }); //.attr('tabindex', 0);
    }

    /**
     * Closes all panes of the menu.
     * @function
     */
  }, {
    key: "hideAll",
    value: function hideAll() {
      this.up(this.$element.find('[data-submenu]'));
    }

    /**
     * Opens all panes of the menu.
     * @function
     */
  }, {
    key: "showAll",
    value: function showAll() {
      this.down(this.$element.find('[data-submenu]'));
    }

    /**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */
  }, {
    key: "toggle",
    value: function toggle($target) {
      if (!$target.is(':animated')) {
        if (!$target.is(':hidden')) {
          this.up($target);
        } else {
          this.down($target);
        }
      }
    }

    /**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */
  }, {
    key: "down",
    value: function down($target) {
      var _this2 = this;
      // If having multiple submenus active is disabled, close all the submenus
      // that are not parents or children of the targeted submenu.
      if (!this.options.multiOpen) {
        // The "branch" of the targetted submenu, from the component root to
        // the active submenus nested in it.
        var $targetBranch = $target.parentsUntil(this.$element).add($target).add($target.find('.is-active'));
        // All the active submenus that are not in the branch.
        var $othersActiveSubmenus = this.$element.find('.is-active').not($targetBranch);
        this.up($othersActiveSubmenus);
      }
      $target.addClass('is-active').attr({
        'aria-hidden': false
      });
      if (this.options.submenuToggle) {
        $target.prev('.submenu-toggle').attr({
          'aria-expanded': true
        });
      } else {
        $target.parent('.is-accordion-submenu-parent').attr({
          'aria-expanded': true
        });
      }
      $target.slideDown(this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done opening.
         * @event AccordionMenu#down
         */
        _this2.$element.trigger('down.zf.accordionMenu', [$target]);
      });
    }

    /**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */
  }, {
    key: "up",
    value: function up($target) {
      var _this3 = this;
      var $submenus = $target.find('[data-submenu]');
      var $allmenus = $target.add($submenus);
      $submenus.slideUp(0);
      $allmenus.removeClass('is-active').attr('aria-hidden', true);
      if (this.options.submenuToggle) {
        $allmenus.prev('.submenu-toggle').attr('aria-expanded', false);
      } else {
        $allmenus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
      }
      $target.slideUp(this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */
        _this3.$element.trigger('up.zf.accordionMenu', [$target]);
      });
    }

    /**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find('[data-submenu]').slideDown(0).css('display', '');
      this.$element.find('a').off('click.zf.accordionMenu');
      this.$element.find('[data-is-parent-link]').detach();
      if (this.options.submenuToggle) {
        this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');
        this.$element.find('.submenu-toggle').remove();
      }
      Nest.Burn(this.$element, 'accordion');
    }
  }]);
}(Plugin);
AccordionMenu.defaults = {
  /**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
  parentLink: false,
  /**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,
  /**
   * Adds a separate submenu toggle button. This allows the parent item to have a link.
   * @option
   * @example true
   */
  submenuToggle: false,
  /**
   * The text used for the submenu toggle if enabled. This is used for screen readers only.
   * @option
   * @example true
   */
  submenuToggleText: 'Toggle menu',
  /**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
  multiOpen: true
};

/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 * @requires foundation.util.box
 */
var Drilldown = /*#__PURE__*/function (_Plugin) {
  function Drilldown() {
    _classCallCheck(this, Drilldown);
    return _callSuper(this, Drilldown, arguments);
  }
  _inherits(Drilldown, _Plugin);
  return _createClass(Drilldown, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of a drilldown menu.
     * @class
     * @name Drilldown
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Drilldown.defaults, this.$element.data(), options);
      this.className = 'Drilldown'; // ie9 back compat

      this._init();
      Keyboard.register('Drilldown', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'previous',
        'ESCAPE': 'close'
      });
    }

    /**
     * Initializes the drilldown by creating jQuery collections of elements
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      Nest.Feather(this.$element, 'drilldown');
      if (this.options.autoApplyClass) {
        this.$element.addClass('drilldown');
      }
      this.$element.attr({
        'aria-multiselectable': false
      });
      this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');
      this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role', 'group');
      this.$menuItems = this.$element.find('li').not('.js-drilldown-back').find('a');

      // Set the main menu as current by default (unless a submenu is selected)
      // Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu
      this.$currentMenu = this.$element;
      this.$element.attr('data-mutate', this.$element.attr('data-drilldown') || GetYoDigits(6, 'drilldown'));
      this._prepareMenu();
      this._registerEvents();
      this._keyboardEvents();
    }

    /**
     * prepares drilldown menu by setting attributes to links and elements
     * sets a min height to prevent content jumping
     * wraps the element if not already wrapped
     * @private
     * @function
     */
  }, {
    key: "_prepareMenu",
    value: function _prepareMenu() {
      var _this = this;
      // if(!this.options.holdOpen){
      //   this._menuLinkEvents();
      // }
      this.$submenuAnchors.each(function () {
        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var $sub = $link.parent();
        if (_this.options.parentLink) {
          $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="none"></li>');
        }
        $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);
        $link.children('[data-submenu]').attr({
          'aria-hidden': true,
          'tabindex': 0,
          'role': 'group'
        });
        _this._events($link);
      });
      this.$submenus.each(function () {
        var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          $back = $menu.find('.js-drilldown-back');
        if (!$back.length) {
          switch (_this.options.backButtonPosition) {
            case "bottom":
              $menu.append(_this.options.backButton);
              break;
            case "top":
              $menu.prepend(_this.options.backButton);
              break;
            default:
              console.error("Unsupported backButtonPosition value '" + _this.options.backButtonPosition + "'");
          }
        }
        _this._back($menu);
      });
      this.$submenus.addClass('invisible');
      if (!this.options.autoHeight) {
        this.$submenus.addClass('drilldown-submenu-cover-previous');
      }

      // create a wrapper on element if it doesn't exist.
      if (!this.$element.parent().hasClass('is-drilldown')) {
        this.$wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.wrapper).addClass('is-drilldown');
        if (this.options.animateHeight) this.$wrapper.addClass('animate-height');
        this.$element.wrap(this.$wrapper);
      }
      // set wrapper
      this.$wrapper = this.$element.parent();
      this.$wrapper.css(this._getMaxDims());
    }
  }, {
    key: "_resize",
    value: function _resize() {
      this.$wrapper.css({
        'max-width': 'none',
        'min-height': 'none'
      });
      // _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths
      this.$wrapper.css(this._getMaxDims());
    }

    /**
     * Adds event handlers to elements in the menu.
     * @function
     * @private
     * @param {jQuery} $elem - the current menu item to add handlers to.
     */
  }, {
    key: "_events",
    value: function _events($elem) {
      var _this = this;
      $elem.off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')) {
          e.preventDefault();
        }

        // if(e.target !== e.currentTarget.firstElementChild){
        //   return false;
        // }
        _this._show($elem.parent('li'));
        if (_this.options.closeOnClick) {
          var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
          $body.off('.zf.drilldown').on('click.zf.drilldown', function (ev) {
            if (ev.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(_this.$element[0], ev.target)) {
              return;
            }
            ev.preventDefault();
            _this._hideAll();
            $body.off('.zf.drilldown');
          });
        }
      });
    }

    /**
     * Adds event handlers to the menu element.
     * @function
     * @private
     */
  }, {
    key: "_registerEvents",
    value: function _registerEvents() {
      if (this.options.scrollTop) {
        this._bindHandler = this._scrollTop.bind(this);
        this.$element.on('open.zf.drilldown hide.zf.drilldown close.zf.drilldown closed.zf.drilldown', this._bindHandler);
      }
      this.$element.on('mutateme.zf.trigger', this._resize.bind(this));
    }

    /**
     * Scroll to Top of Element or data-scroll-top-element
     * @function
     * @fires Drilldown#scrollme
     */
  }, {
    key: "_scrollTop",
    value: function _scrollTop() {
      var _this = this;
      var $scrollTopElement = _this.options.scrollTopElement !== '' ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.scrollTopElement) : _this.$element,
        scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
        scrollTop: scrollPos
      }, _this.options.animationDuration, _this.options.animationEasing, function () {
        /**
          * Fires after the menu has scrolled
          * @event Drilldown#scrollme
          */
        if (this === jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')[0]) _this.$element.trigger('scrollme.zf.drilldown');
      });
    }

    /**
     * Adds keydown event listener to `li`'s in the menu.
     * @private
     */
  }, {
    key: "_keyboardEvents",
    value: function _keyboardEvents() {
      var _this = this;
      this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          $elements = $element.parent('li').parent('ul').children('li').children('a'),
          $prevElement,
          $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(Math.max(0, i - 1));
            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
            return;
          }
        });
        Keyboard.handleKey(e, 'Drilldown', {
          next: function next() {
            if ($element.is(_this.$submenuAnchors)) {
              _this._show($element.parent('li'));
              $element.parent('li').one(transitionend($element), function () {
                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
              });
              return true;
            }
          },
          previous: function previous() {
            _this._hide($element.parent('li').parent('ul'));
            $element.parent('li').parent('ul').one(transitionend($element), function () {
              setTimeout(function () {
                $element.parent('li').parent('ul').parent('li').children('a').first().focus();
              }, 1);
            });
            return true;
          },
          up: function up() {
            $prevElement.focus();
            // Don't tap focus on first element in root ul
            return !$element.is(_this.$element.find('> li:first-child > a'));
          },
          down: function down() {
            $nextElement.focus();
            // Don't tap focus on last element in root ul
            return !$element.is(_this.$element.find('> li:last-child > a'));
          },
          close: function close() {
            // Don't close on element in root ul
            if (!$element.is(_this.$element.find('> li > a'))) {
              _this._hide($element.parent().parent());
              $element.parent().parent().siblings('a').focus();
            }
          },
          open: function open() {
            if (_this.options.parentLink && $element.attr('href')) {
              // Link with href
              return false;
            } else if (!$element.is(_this.$menuItems)) {
              // not menu item means back button
              _this._hide($element.parent('li').parent('ul'));
              $element.parent('li').parent('ul').one(transitionend($element), function () {
                setTimeout(function () {
                  $element.parent('li').parent('ul').parent('li').children('a').first().focus();
                }, 1);
              });
              return true;
            } else if ($element.is(_this.$submenuAnchors)) {
              // Sub menu item
              _this._show($element.parent('li'));
              $element.parent('li').one(transitionend($element), function () {
                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
              });
              return true;
            }
          },
          handled: function handled(preventDefault) {
            if (preventDefault) {
              e.preventDefault();
            }
          }
        });
      }); // end keyboardAccess
    }

    /**
     * Closes all open elements, and returns to root menu.
     * @function
     * @fires Drilldown#close
     * @fires Drilldown#closed
     */
  }, {
    key: "_hideAll",
    value: function _hideAll() {
      var _this2 = this;
      var $elem = this.$element.find('.is-drilldown-submenu.is-active');
      $elem.addClass('is-closing');
      $elem.parent().closest('ul').removeClass('invisible');
      if (this.options.autoHeight) {
        var calcHeight = $elem.parent().closest('ul').data('calcHeight');
        this.$wrapper.css({
          height: calcHeight
        });
      }

      /**
       * Fires when the menu is closing.
       * @event Drilldown#close
       */
      this.$element.trigger('close.zf.drilldown');
      $elem.one(transitionend($elem), function () {
        $elem.removeClass('is-active is-closing');

        /**
         * Fires when the menu is fully closed.
         * @event Drilldown#closed
         */
        _this2.$element.trigger('closed.zf.drilldown');
      });
    }

    /**
     * Adds event listener for each `back` button, and closes open menus.
     * @function
     * @fires Drilldown#back
     * @param {jQuery} $elem - the current sub-menu to add `back` event.
     */
  }, {
    key: "_back",
    value: function _back($elem) {
      var _this = this;
      $elem.off('click.zf.drilldown');
      $elem.children('.js-drilldown-back').on('click.zf.drilldown', function () {
        _this._hide($elem);

        // If there is a parent submenu, call show
        var parentSubMenu = $elem.parent('li').parent('ul').parent('li');
        if (parentSubMenu.length) {
          _this._show(parentSubMenu);
        } else {
          _this.$currentMenu = _this.$element;
        }
      });
    }

    /**
     * Adds event listener to menu items w/o submenus to close open menus on click.
     * @function
     * @private
     */
  }, {
    key: "_menuLinkEvents",
    value: function _menuLinkEvents() {
      var _this = this;
      this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown', function () {
        setTimeout(function () {
          _this._hideAll();
        }, 0);
      });
    }

    /**
     * Sets the CSS classes for submenu to show it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */
  }, {
    key: "_setShowSubMenuClasses",
    value: function _setShowSubMenuClasses($elem, trigger) {
      $elem.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);
      $elem.parent('li').attr('aria-expanded', true);
      if (trigger === true) {
        this.$element.trigger('open.zf.drilldown', [$elem]);
      }
    }

    /**
     * Sets the CSS classes for submenu to hide it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */
  }, {
    key: "_setHideSubMenuClasses",
    value: function _setHideSubMenuClasses($elem, trigger) {
      $elem.removeClass('is-active').addClass('invisible').attr('aria-hidden', true);
      $elem.parent('li').attr('aria-expanded', false);
      if (trigger === true) {
        $elem.trigger('hide.zf.drilldown', [$elem]);
      }
    }

    /**
     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
     */
  }, {
    key: "_showMenu",
    value: function _showMenu($elem, autoFocus) {
      var _this = this;

      // Reset drilldown
      var $expandedSubmenus = this.$element.find('li[aria-expanded="true"] > ul[data-submenu]');
      $expandedSubmenus.each(function () {
        _this._setHideSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      });

      // Save the menu as the currently displayed one.
      this.$currentMenu = $elem;

      // If target menu is root, focus first link & exit
      if ($elem.is('[data-drilldown]')) {
        if (autoFocus === true) $elem.find('li > a').first().focus();
        if (this.options.autoHeight) this.$wrapper.css('height', $elem.data('calcHeight'));
        return;
      }

      // Find all submenus on way to root incl. the element itself
      var $submenus = $elem.children().first().parentsUntil('[data-drilldown]', '[data-submenu]');

      // Open target menu and all submenus on its way to root
      $submenus.each(function (index) {
        // Update height of first child (target menu) if autoHeight option true
        if (index === 0 && _this.options.autoHeight) {
          _this.$wrapper.css('height', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight'));
        }
        var isLastChild = index === $submenus.length - 1;

        // Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
        // Last child makes sure the event gets always triggered even if going through several menus
        if (isLastChild === true) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one(transitionend(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)), function () {
            if (autoFocus === true) {
              $elem.find('li > a').first().focus();
            }
          });
        }
        _this._setShowSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), isLastChild);
      });
    }

    /**
     * Opens a submenu.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
     */
  }, {
    key: "_show",
    value: function _show($elem) {
      var $submenu = $elem.children('[data-submenu]');
      $elem.attr('aria-expanded', true);
      this.$currentMenu = $submenu;

      //hide drilldown parent menu when submenu is open
      // this removes it from the dom so that the tab key will take the user to the next visible element
      $elem.parent().closest('ul').addClass('invisible');

      // add visible class to submenu to override invisible class above
      $submenu.addClass('is-active visible').removeClass('invisible').attr('aria-hidden', false);
      if (this.options.autoHeight) {
        this.$wrapper.css({
          height: $submenu.data('calcHeight')
        });
      }

      /**
       * Fires when the submenu has opened.
       * @event Drilldown#open
       */
      this.$element.trigger('open.zf.drilldown', [$elem]);
    }

    /**
     * Hides a submenu
     * @function
     * @fires Drilldown#hide
     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
     */
  }, {
    key: "_hide",
    value: function _hide($elem) {
      if (this.options.autoHeight) this.$wrapper.css({
        height: $elem.parent().closest('ul').data('calcHeight')
      });
      $elem.parent().closest('ul').removeClass('invisible');
      $elem.parent('li').attr('aria-expanded', false);
      $elem.attr('aria-hidden', true);
      $elem.addClass('is-closing').one(transitionend($elem), function () {
        $elem.removeClass('is-active is-closing visible');
        $elem.blur().addClass('invisible');
      });
      /**
       * Fires when the submenu has closed.
       * @event Drilldown#hide
       */
      $elem.trigger('hide.zf.drilldown', [$elem]);
    }

    /**
     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
     * Prevents content jumping.
     * @function
     * @private
     */
  }, {
    key: "_getMaxDims",
    value: function _getMaxDims() {
      var maxHeight = 0,
        result = {},
        _this = this;

      // Recalculate menu heights and total max height
      this.$submenus.add(this.$element).each(function () {
        var height = Box.GetDimensions(this).height;
        maxHeight = height > maxHeight ? height : maxHeight;
        if (_this.options.autoHeight) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight', height);
        }
      });
      if (this.options.autoHeight) result.height = this.$currentMenu.data('calcHeight');else result['min-height'] = "".concat(maxHeight, "px");
      result['max-width'] = "".concat(this.$element[0].getBoundingClientRect().width, "px");
      return result;
    }

    /**
     * Destroys the Drilldown Menu
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('.zf.drilldown');
      if (this.options.scrollTop) this.$element.off('.zf.drilldown', this._bindHandler);
      this._hideAll();
      this.$element.off('mutateme.zf.trigger');
      Nest.Burn(this.$element, 'drilldown');
      this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').off('transitionend otransitionend webkitTransitionEnd').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');
      this.$submenuAnchors.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off('.zf.drilldown');
      });
      this.$element.find('[data-is-parent-link]').detach();
      this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');
      this.$element.find('a').each(function () {
        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        $link.removeAttr('tabindex');
        if ($link.data('savedHref')) {
          $link.attr('href', $link.data('savedHref')).removeData('savedHref');
        } else {
          return;
        }
      });
    }
  }]);
}(Plugin);
Drilldown.defaults = {
  /**
   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
   * @option
   * @type {boolean}
   * @default true
   */
  autoApplyClass: true,
  /**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
   */
  backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
  /**
   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
   * @option
   * @type {string}
   * @default top
   */
  backButtonPosition: 'top',
  /**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */
  wrapper: '<div></div>',
  /**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
  parentLink: false,
  /**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */
  closeOnClick: false,
  /**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
  autoHeight: false,
  /**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
  animateHeight: false,
  /**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */
  scrollTop: false,
  /**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */
  scrollTopElement: '',
  /**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */
  scrollTopOffset: 0,
  /**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,
  /**
   * Scroll animation easing. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */
  animationEasing: 'swing'
  // holdOpen: false
};
var POSITIONS = ['left', 'right', 'top', 'bottom'];
var VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];
var HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];
var ALIGNMENTS = {
  'left': VERTICAL_ALIGNMENTS,
  'right': VERTICAL_ALIGNMENTS,
  'top': HORIZONTAL_ALIGNMENTS,
  'bottom': HORIZONTAL_ALIGNMENTS
};
function nextItem(item, array) {
  var currentIdx = array.indexOf(item);
  if (currentIdx === array.length - 1) {
    return array[0];
  } else {
    return array[currentIdx + 1];
  }
}
var Positionable = /*#__PURE__*/function (_Plugin) {
  function Positionable() {
    _classCallCheck(this, Positionable);
    return _callSuper(this, Positionable, arguments);
  }
  _inherits(Positionable, _Plugin);
  return _createClass(Positionable, [{
    key: "_init",
    value:
    /**
     * Abstract class encapsulating the tether-like explicit positioning logic
     * including repositioning based on overlap.
     * Expects classes to define defaults for vOffset, hOffset, position,
     * alignment, allowOverlap, and allowBottomOverlap. They can do this by
     * extending the defaults, or (for now recommended due to the way docs are
     * generated) by explicitly declaring them.
     *
     **/

    function _init() {
      this.triedPositions = {};
      this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;
      this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;
      this.originalPosition = this.position;
      this.originalAlignment = this.alignment;
    }
  }, {
    key: "_getDefaultPosition",
    value: function _getDefaultPosition() {
      return 'bottom';
    }
  }, {
    key: "_getDefaultAlignment",
    value: function _getDefaultAlignment() {
      switch (this.position) {
        case 'bottom':
        case 'top':
          return rtl() ? 'right' : 'left';
        case 'left':
        case 'right':
          return 'bottom';
      }
    }

    /**
     * Adjusts the positionable possible positions by iterating through alignments
     * and positions.
     * @function
     * @private
     */
  }, {
    key: "_reposition",
    value: function _reposition() {
      if (this._alignmentsExhausted(this.position)) {
        this.position = nextItem(this.position, POSITIONS);
        this.alignment = ALIGNMENTS[this.position][0];
      } else {
        this._realign();
      }
    }

    /**
     * Adjusts the dropdown pane possible positions by iterating through alignments
     * on the current position.
     * @function
     * @private
     */
  }, {
    key: "_realign",
    value: function _realign() {
      this._addTriedPosition(this.position, this.alignment);
      this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
    }
  }, {
    key: "_addTriedPosition",
    value: function _addTriedPosition(position, alignment) {
      this.triedPositions[position] = this.triedPositions[position] || [];
      this.triedPositions[position].push(alignment);
    }
  }, {
    key: "_positionsExhausted",
    value: function _positionsExhausted() {
      var isExhausted = true;
      for (var i = 0; i < POSITIONS.length; i++) {
        isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
      }
      return isExhausted;
    }
  }, {
    key: "_alignmentsExhausted",
    value: function _alignmentsExhausted(position) {
      return this.triedPositions[position] && this.triedPositions[position].length === ALIGNMENTS[position].length;
    }

    // When we're trying to center, we don't want to apply offset that's going to
    // take us just off center, so wrap around to return 0 for the appropriate
    // offset in those alignments.  TODO: Figure out if we want to make this
    // configurable behavior... it feels more intuitive, especially for tooltips, but
    // it's possible someone might actually want to start from center and then nudge
    // slightly off.
  }, {
    key: "_getVOffset",
    value: function _getVOffset() {
      return this.options.vOffset;
    }
  }, {
    key: "_getHOffset",
    value: function _getHOffset() {
      return this.options.hOffset;
    }
  }, {
    key: "_setPosition",
    value: function _setPosition($anchor, $element, $parent) {
      if ($anchor.attr('aria-expanded') === 'false') {
        return false;
      }
      if (!this.options.allowOverlap) {
        // restore original position & alignment before checking overlap
        this.position = this.originalPosition;
        this.alignment = this.originalAlignment;
      }
      $element.offset(Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
      if (!this.options.allowOverlap) {
        var minOverlap = 100000000;
        // default coordinates to how we start, in case we can't figure out better
        var minCoordinates = {
          position: this.position,
          alignment: this.alignment
        };
        while (!this._positionsExhausted()) {
          var overlap = Box.OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);
          if (overlap === 0) {
            return;
          }
          if (overlap < minOverlap) {
            minOverlap = overlap;
            minCoordinates = {
              position: this.position,
              alignment: this.alignment
            };
          }
          this._reposition();
          $element.offset(Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
        }
        // If we get through the entire loop, there was no non-overlapping
        // position available. Pick the version with least overlap.
        this.position = minCoordinates.position;
        this.alignment = minCoordinates.alignment;
        $element.offset(Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
      }
    }
  }]);
}(Plugin);
Positionable.defaults = {
  /**
   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',
  /**
   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',
  /**
   * Allow overlap of container/window. If false, dropdown positionable first
   * try to position as defined by data-position and data-alignment, but
   * reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,
  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
  allowBottomOverlap: true,
  /**
   * Number of pixels the positionable should be separated vertically from anchor
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,
  /**
   * Number of pixels the positionable should be separated horizontally from anchor
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0
};

/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.touch
 * @requires foundation.util.triggers
 */
var Dropdown = /*#__PURE__*/function (_Positionable) {
  function Dropdown() {
    _classCallCheck(this, Dropdown);
    return _callSuper(this, Dropdown, arguments);
  }
  _inherits(Dropdown, _Positionable);
  return _createClass(Dropdown, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of a dropdown.
     * @class
     * @name Dropdown
     * @param {jQuery} element - jQuery object to make into a dropdown.
     *        Object should be of the dropdown panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Dropdown.defaults, this.$element.data(), options);
      this.className = 'Dropdown'; // ie9 back compat

      // Touch and Triggers init are idempotent, just need to make sure they are initialized
      Touch.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      this._init();
      Keyboard.register('Dropdown', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ESCAPE': 'close'
      });
    }

    /**
     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
     * @function
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      var $id = this.$element.attr('id');
      this.$anchors = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id, "\"]")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id, "\"]")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat($id, "\"]"));
      this.$anchors.attr({
        'aria-controls': $id,
        'data-is-focus': false,
        'data-yeti-box': $id,
        'aria-haspopup': true,
        'aria-expanded': false
      });
      this._setCurrentAnchor(this.$anchors.first());
      if (this.options.parentClass) {
        this.$parent = this.$element.parents('.' + this.options.parentClass);
      } else {
        this.$parent = null;
      }

      // Set [aria-labelledby] on the Dropdown if it is not set
      if (typeof this.$element.attr('aria-labelledby') === 'undefined') {
        // Get the anchor ID or create one
        if (typeof this.$currentAnchor.attr('id') === 'undefined') {
          this.$currentAnchor.attr('id', GetYoDigits(6, 'dd-anchor'));
        }
        this.$element.attr('aria-labelledby', this.$currentAnchor.attr('id'));
      }
      this.$element.attr({
        'aria-hidden': 'true',
        'data-yeti-box': $id,
        'data-resize': $id
      });
      _superPropGet(Dropdown, "_init", this, 3)([]);
      this._events();
    }
  }, {
    key: "_getDefaultPosition",
    value: function _getDefaultPosition() {
      // handle legacy classnames
      var position = this.$element[0].className.match(/(top|left|right|bottom)/g);
      if (position) {
        return position[0];
      } else {
        return 'bottom';
      }
    }
  }, {
    key: "_getDefaultAlignment",
    value: function _getDefaultAlignment() {
      // handle legacy float approach
      var horizontalPosition = /float-(\S+)/.exec(this.$currentAnchor.attr('class'));
      if (horizontalPosition) {
        return horizontalPosition[1];
      }
      return _superPropGet(Dropdown, "_getDefaultAlignment", this, 3)([]);
    }

    /**
     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
     * Recursively calls itself if a collision is detected, with a new position class.
     * @function
     * @private
     */
  }, {
    key: "_setPosition",
    value: function _setPosition() {
      this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));
      _superPropGet(Dropdown, "_setPosition", this, 3)([this.$currentAnchor, this.$element, this.$parent]);
      this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));
    }

    /**
     * Make it a current anchor.
     * Current anchor as the reference for the position of Dropdown panes.
     * @param {HTML} el - DOM element of the anchor.
     * @function
     * @private
     */
  }, {
    key: "_setCurrentAnchor",
    value: function _setCurrentAnchor(el) {
      this.$currentAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
    }

    /**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      var _this = this,
        hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined';
      this.$element.on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': this.close.bind(this),
        'toggle.zf.trigger': this.toggle.bind(this),
        'resizeme.zf.trigger': this._setPosition.bind(this)
      });
      this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function (e) {
        _this._setCurrentAnchor(this);
        if (
        // if forceFollow false, always prevent default action
        _this.options.forceFollow === false ||
        // if forceFollow true and hover option true, only prevent default action on 1st click
        // on 2nd click (dropown opened) the default action (e.g. follow a href) gets executed
        hasTouch && _this.options.hover && _this.$element.hasClass('is-open') === false) {
          e.preventDefault();
        }
      });
      if (this.options.hover) {
        this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
          _this._setCurrentAnchor(this);
          var bodyData = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').data();
          if (typeof bodyData.whatinput === 'undefined' || bodyData.whatinput === 'mouse') {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
              _this.open();
              _this.$anchors.data('hover', true);
            }, _this.options.hoverDelay);
          }
        }).on('mouseleave.zf.dropdown', ignoreMousedisappear(function () {
          clearTimeout(_this.timeout);
          _this.timeout = setTimeout(function () {
            _this.close();
            _this.$anchors.data('hover', false);
          }, _this.options.hoverDelay);
        }));
        if (this.options.hoverPane) {
          this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
            clearTimeout(_this.timeout);
          }).on('mouseleave.zf.dropdown', ignoreMousedisappear(function () {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
              _this.close();
              _this.$anchors.data('hover', false);
            }, _this.options.hoverDelay);
          }));
        }
      }
      this.$anchors.add(this.$element).on('keydown.zf.dropdown', function (e) {
        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        Keyboard.handleKey(e, 'Dropdown', {
          open: function open() {
            if ($target.is(_this.$anchors) && !$target.is('input, textarea')) {
              _this.open();
              _this.$element.attr('tabindex', -1).focus();
              e.preventDefault();
            }
          },
          close: function close() {
            _this.close();
            _this.$anchors.focus();
          }
        });
      });
    }

    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */
  }, {
    key: "_addBodyHandler",
    value: function _addBodyHandler() {
      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).not(this.$element),
        _this = this;
      $body.off('click.zf.dropdown tap.zf.dropdown').on('click.zf.dropdown tap.zf.dropdown', function (e) {
        if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
          return;
        }
        if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {
          return;
        }
        _this.close();
        $body.off('click.zf.dropdown tap.zf.dropdown');
      });
    }

    /**
     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
     * @function
     * @fires Dropdown#closeme
     * @fires Dropdown#show
     */
  }, {
    key: "open",
    value: function open() {
      // var _this = this;
      /**
       * Fires to close other open dropdowns, typically when dropdown is opening
       * @event Dropdown#closeme
       */
      this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
      this.$anchors.addClass('hover').attr({
        'aria-expanded': true
      });
      // this.$element/*.show()*/;

      this.$element.addClass('is-opening');
      this._setPosition();
      this.$element.removeClass('is-opening').addClass('is-open').attr({
        'aria-hidden': false
      });
      if (this.options.autoFocus) {
        var $focusable = Keyboard.findFocusable(this.$element);
        if ($focusable.length) {
          $focusable.eq(0).focus();
        }
      }
      if (this.options.closeOnClick) {
        this._addBodyHandler();
      }
      if (this.options.trapFocus) {
        Keyboard.trapFocus(this.$element);
      }

      /**
       * Fires once the dropdown is visible.
       * @event Dropdown#show
       */
      this.$element.trigger('show.zf.dropdown', [this.$element]);
    }

    /**
     * Closes the open dropdown pane.
     * @function
     * @fires Dropdown#hide
     */
  }, {
    key: "close",
    value: function close() {
      if (!this.$element.hasClass('is-open')) {
        return false;
      }
      this.$element.removeClass('is-open').attr({
        'aria-hidden': true
      });
      this.$anchors.removeClass('hover').attr('aria-expanded', false);

      /**
       * Fires once the dropdown is no longer visible.
       * @event Dropdown#hide
       */
      this.$element.trigger('hide.zf.dropdown', [this.$element]);
      if (this.options.trapFocus) {
        Keyboard.releaseFocus(this.$element);
      }
    }

    /**
     * Toggles the dropdown pane's visibility.
     * @function
     */
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.$element.hasClass('is-open')) {
        if (this.$anchors.data('hover')) return;
        this.close();
      } else {
        this.open();
      }
    }

    /**
     * Destroys the dropdown.
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.trigger').hide();
      this.$anchors.off('.zf.dropdown');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdown tap.zf.dropdown');
    }
  }]);
}(Positionable);
Dropdown.defaults = {
  /**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */
  parentClass: null,
  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */
  hoverDelay: 250,
  /**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */
  hover: false,
  /**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */
  hoverPane: false,
  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,
  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0,
  /**
   * Position of dropdown. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',
  /**
   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',
  /**
   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,
  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
  allowBottomOverlap: true,
  /**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */
  trapFocus: false,
  /**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @type {boolean}
   * @default false
   */
  autoFocus: false,
  /**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * @default false
   */
  closeOnClick: false,
  /**
   * If true the default action of the toggle (e.g. follow a link with href) gets executed on click. If hover option is also true the default action gets prevented on first click for mobile / touch devices and executed on second click.
   * @option
   * @type {boolean}
   * @default true
   */
  forceFollow: true
};

/**
 * DropdownMenu module.
 * @module foundation.dropdownMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 * @requires foundation.util.touch
 */
var DropdownMenu = /*#__PURE__*/function (_Plugin) {
  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);
    return _callSuper(this, DropdownMenu, arguments);
  }
  _inherits(DropdownMenu, _Plugin);
  return _createClass(DropdownMenu, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of DropdownMenu.
     * @class
     * @name DropdownMenu
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, DropdownMenu.defaults, this.$element.data(), options);
      this.className = 'DropdownMenu'; // ie9 back compat

      Touch.init((jquery__WEBPACK_IMPORTED_MODULE_0___default())); // Touch init is idempotent, we just need to make sure it's initialied.

      this._init();
      Keyboard.register('DropdownMenu', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'previous',
        'ESCAPE': 'close'
      });
    }

    /**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */
  }, {
    key: "_init",
    value: function _init() {
      Nest.Feather(this.$element, 'dropdown');
      var subs = this.$element.find('li.is-dropdown-submenu-parent');
      this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');
      this.$menuItems = this.$element.find('li[role="none"]');
      this.$tabs = this.$element.children('li[role="none"]');
      this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);
      if (this.options.alignment === 'auto') {
        if (this.$element.hasClass(this.options.rightClass) || rtl() || this.$element.parents('.top-bar-right').is('*')) {
          this.options.alignment = 'right';
          subs.addClass('opens-left');
        } else {
          this.options.alignment = 'left';
          subs.addClass('opens-right');
        }
      } else {
        if (this.options.alignment === 'right') {
          subs.addClass('opens-left');
        } else {
          subs.addClass('opens-right');
        }
      }
      this.changed = false;
      this._events();
    }
  }, {
    key: "_isVertical",
    value: function _isVertical() {
      return this.$tabs.css('display') === 'block' || this.$element.css('flex-direction') === 'column';
    }
  }, {
    key: "_isRtl",
    value: function _isRtl() {
      return this.$element.hasClass('align-right') || rtl() && !this.$element.hasClass('align-left');
    }

    /**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */
  }, {
    key: "_events",
    value: function _events() {
      var _this = this,
        hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',
        parClass = 'is-dropdown-submenu-parent';

      // used for onClick and in the keyboard handlers
      var handleClickFn = function handleClickFn(e) {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', ".".concat(parClass)),
          hasSub = $elem.hasClass(parClass),
          hasClicked = $elem.attr('data-is-click') === 'true',
          $sub = $elem.children('.is-dropdown-submenu');
        if (hasSub) {
          if (hasClicked) {
            if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
              return;
            }
            e.stopImmediatePropagation();
            e.preventDefault();
            _this._hide($elem);
          } else {
            e.stopImmediatePropagation();
            e.preventDefault();
            _this._show($sub);
            $elem.add($elem.parentsUntil(_this.$element, ".".concat(parClass))).attr('data-is-click', true);
          }
        }
      };
      if (this.options.clickOpen || hasTouch) {
        this.$menuItems.on('click.zf.dropdownMenu touchstart.zf.dropdownMenu', handleClickFn);
      }

      // Handle Leaf element Clicks
      if (_this.options.closeOnClickInside) {
        this.$menuItems.on('click.zf.dropdownMenu', function () {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            hasSub = $elem.hasClass(parClass);
          if (!hasSub) {
            _this._hide();
          }
        });
      }
      if (hasTouch && this.options.disableHoverOnTouch) this.options.disableHover = true;
      if (!this.options.disableHover) {
        this.$menuItems.on('mouseenter.zf.dropdownMenu', function () {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            hasSub = $elem.hasClass(parClass);
          if (hasSub) {
            clearTimeout($elem.data('_delay'));
            $elem.data('_delay', setTimeout(function () {
              _this._show($elem.children('.is-dropdown-submenu'));
            }, _this.options.hoverDelay));
          }
        }).on('mouseleave.zf.dropdownMenu', ignoreMousedisappear(function () {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            hasSub = $elem.hasClass(parClass);
          if (hasSub && _this.options.autoclose) {
            if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
              return false;
            }
            clearTimeout($elem.data('_delay'));
            $elem.data('_delay', setTimeout(function () {
              _this._hide($elem);
            }, _this.options.closingTime));
          }
        }));
      }
      this.$menuItems.on('keydown.zf.dropdownMenu', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', '[role="none"]'),
          isTab = _this.$tabs.index($element) > -1,
          $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
          $prevElement,
          $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(i - 1);
            $nextElement = $elements.eq(i + 1);
            return;
          }
        });
        var nextSibling = function nextSibling() {
            $nextElement.children('a:first').focus();
            e.preventDefault();
          },
          prevSibling = function prevSibling() {
            $prevElement.children('a:first').focus();
            e.preventDefault();
          },
          openSub = function openSub() {
            var $sub = $element.children('ul.is-dropdown-submenu');
            if ($sub.length) {
              _this._show($sub);
              $element.find('li > a:first').focus();
              e.preventDefault();
            } else {
              return;
            }
          },
          closeSub = function closeSub() {
            //if ($element.is(':first-child')) {
            var close = $element.parent('ul').parent('li');
            close.children('a:first').focus();
            _this._hide(close);
            e.preventDefault();
            //}
          };
        var functions = {
          open: openSub,
          close: function close() {
            _this._hide(_this.$element);
            _this.$menuItems.eq(0).children('a').focus(); // focus to first element
            e.preventDefault();
          }
        };
        if (isTab) {
          if (_this._isVertical()) {
            // vertical menu
            if (_this._isRtl()) {
              // right aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
                down: nextSibling,
                up: prevSibling,
                next: closeSub,
                previous: openSub
              });
            } else {
              // left aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
                down: nextSibling,
                up: prevSibling,
                next: openSub,
                previous: closeSub
              });
            }
          } else {
            // horizontal menu
            if (_this._isRtl()) {
              // right aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
                next: prevSibling,
                previous: nextSibling,
                down: openSub,
                up: closeSub
              });
            } else {
              // left aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
                next: nextSibling,
                previous: prevSibling,
                down: openSub,
                up: closeSub
              });
            }
          }
        } else {
          // not tabs -> one sub
          if (_this._isRtl()) {
            // right aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
              next: closeSub,
              previous: openSub,
              down: nextSibling,
              up: prevSibling
            });
          } else {
            // left aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
              next: openSub,
              previous: closeSub,
              down: nextSibling,
              up: prevSibling
            });
          }
        }
        Keyboard.handleKey(e, 'DropdownMenu', functions);
      });
    }

    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */
  }, {
    key: "_addBodyHandler",
    value: function _addBodyHandler() {
      var _this2 = this;
      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body);
      this._removeBodyHandler();
      $body.on('click.zf.dropdownMenu tap.zf.dropdownMenu', function (e) {
        var isItself = !!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest(_this2.$element).length;
        if (isItself) return;
        _this2._hide();
        _this2._removeBodyHandler();
      });
    }

    /**
     * Remove the body event handler. See `_addBodyHandler`.
     * @function
     * @private
     */
  }, {
    key: "_removeBodyHandler",
    value: function _removeBodyHandler() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdownMenu tap.zf.dropdownMenu');
    }

    /**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires DropdownMenu#show
     */
  }, {
    key: "_show",
    value: function _show($sub) {
      var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {
        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find($sub).length > 0;
      }));
      var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');
      this._hide($sibs, idx);
      $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');
      var clear = Box.ImNotTouchingYou($sub, null, true);
      if (!clear) {
        var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
          $parentLi = $sub.parent('.is-dropdown-submenu-parent');
        $parentLi.removeClass("opens".concat(oldClass)).addClass("opens-".concat(this.options.alignment));
        clear = Box.ImNotTouchingYou($sub, null, true);
        if (!clear) {
          $parentLi.removeClass("opens-".concat(this.options.alignment)).addClass('opens-inner');
        }
        this.changed = true;
      }
      $sub.css('visibility', '');
      if (this.options.closeOnClick) {
        this._addBodyHandler();
      }
      /**
       * Fires when the new dropdown pane is visible.
       * @event DropdownMenu#show
       */
      this.$element.trigger('show.zf.dropdownMenu', [$sub]);
    }

    /**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @fires DropdownMenu#hide
     * @private
     */
  }, {
    key: "_hide",
    value: function _hide($elem, idx) {
      var $toClose;
      if ($elem && $elem.length) {
        $toClose = $elem;
      } else if (typeof idx !== 'undefined') {
        $toClose = this.$tabs.not(function (i) {
          return i === idx;
        });
      } else {
        $toClose = this.$element;
      }
      var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;
      if (somethingToClose) {
        var $activeItem = $toClose.find('li.is-active');
        $activeItem.add($toClose).attr({
          'data-is-click': false
        }).removeClass('is-active');
        $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');
        if (this.changed || $toClose.find('opens-inner').length) {
          var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
          $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(oldClass));
          this.changed = false;
        }
        clearTimeout($activeItem.data('_delay'));
        this._removeBodyHandler();

        /**
         * Fires when the open menus are closed.
         * @event DropdownMenu#hide
         */
        this.$element.trigger('hide.zf.dropdownMenu', [$toClose]);
      }
    }

    /**
     * Destroys the plugin.
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$menuItems.off('.zf.dropdownMenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('.zf.dropdownMenu');
      Nest.Burn(this.$element, 'dropdown');
    }
  }]);
}(Plugin);
/**
 * Default settings for plugin
 */
DropdownMenu.defaults = {
  /**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
  disableHover: false,
  /**
   * Disallows hover on touch devices
   * @option
   * @type {boolean}
   * @default true
   */
  disableHoverOnTouch: true,
  /**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
  autoclose: true,
  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
  hoverDelay: 50,
  /**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
  clickOpen: false,
  /**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */

  closingTime: 500,
  /**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',
  /**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,
  /**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClickInside: true,
  /**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
  verticalClass: 'vertical',
  /**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
  rightClass: 'align-right',
  /**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
  forceFollow: true
};

/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.imageLoader if equalizer contains images
 */
var Equalizer = /*#__PURE__*/function (_Plugin) {
  function Equalizer() {
    _classCallCheck(this, Equalizer);
    return _callSuper(this, Equalizer, arguments);
  }
  _inherits(Equalizer, _Plugin);
  return _createClass(Equalizer, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of Equalizer.
     * @class
     * @name Equalizer
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Equalizer.defaults, this.$element.data(), options);
      this.className = 'Equalizer'; // ie9 back compat

      this._init();
    }

    /**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      var eqId = this.$element.attr('data-equalizer') || '';
      var $watched = this.$element.find("[data-equalizer-watch=\"".concat(eqId, "\"]"));
      MediaQuery._init();
      this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
      this.$element.attr('data-resize', eqId || GetYoDigits(6, 'eq'));
      this.$element.attr('data-mutate', eqId || GetYoDigits(6, 'eq'));
      this.hasNested = this.$element.find('[data-equalizer]').length > 0;
      this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
      this.isOn = false;
      this._bindHandler = {
        onResizeMeBound: this._onResizeMe.bind(this),
        onPostEqualizedBound: this._onPostEqualized.bind(this)
      };
      var imgs = this.$element.find('img');
      var tooSmall;
      if (this.options.equalizeOn) {
        tooSmall = this._checkMQ();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
      } else {
        this._events();
      }
      if (typeof tooSmall !== 'undefined' && tooSmall === false || typeof tooSmall === 'undefined') {
        if (imgs.length) {
          onImagesLoaded(imgs, this._reflow.bind(this));
        } else {
          this._reflow();
        }
      }
    }

    /**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */
  }, {
    key: "_pauseEvents",
    value: function _pauseEvents() {
      this.isOn = false;
      this.$element.off({
        '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
        'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,
        'mutateme.zf.trigger': this._bindHandler.onResizeMeBound
      });
    }

    /**
     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
     * @private
     */
  }, {
    key: "_onResizeMe",
    value: function _onResizeMe() {
      this._reflow();
    }

    /**
     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
     * @private
     */
  }, {
    key: "_onPostEqualized",
    value: function _onPostEqualized(e) {
      if (e.target !== this.$element[0]) {
        this._reflow();
      }
    }

    /**
     * Initializes events for Equalizer.
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      this._pauseEvents();
      if (this.hasNested) {
        this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
      } else {
        this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
        this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);
      }
      this.isOn = true;
    }

    /**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */
  }, {
    key: "_checkMQ",
    value: function _checkMQ() {
      var tooSmall = !MediaQuery.is(this.options.equalizeOn);
      if (tooSmall) {
        if (this.isOn) {
          this._pauseEvents();
          this.$watched.css('height', 'auto');
        }
      } else {
        if (!this.isOn) {
          this._events();
        }
      }
      return tooSmall;
    }

    /**
     * A noop version for the plugin
     * @private
     */
  }, {
    key: "_killswitch",
    value: function _killswitch() {
      return;
    }

    /**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */
  }, {
    key: "_reflow",
    value: function _reflow() {
      if (!this.options.equalizeOnStack) {
        if (this._isStacked()) {
          this.$watched.css('height', 'auto');
          return false;
        }
      }
      if (this.options.equalizeByRow) {
        this.getHeightsByRow(this.applyHeightByRow.bind(this));
      } else {
        this.getHeights(this.applyHeight.bind(this));
      }
    }

    /**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */
  }, {
    key: "_isStacked",
    value: function _isStacked() {
      if (!this.$watched[0] || !this.$watched[1]) {
        return true;
      }
      return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
    }

    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */
  }, {
    key: "getHeights",
    value: function getHeights(cb) {
      var heights = [];
      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto';
        heights.push(this.$watched[i].offsetHeight);
      }
      cb(heights);
    }

    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */
  }, {
    key: "getHeightsByRow",
    value: function getHeightsByRow(cb) {
      var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0,
        groups = [],
        group = 0;
      //group by Row
      groups[group] = [];
      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto';
        //maybe could use this.$watched[i].offsetTop
        var elOffsetTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$watched[i]).offset().top;
        if (elOffsetTop !== lastElTopOffset) {
          group++;
          groups[group] = [];
          lastElTopOffset = elOffsetTop;
        }
        groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
      }
      for (var j = 0, ln = groups.length; j < ln; j++) {
        var heights = jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[j]).map(function () {
          return this[1];
        }).get();
        var max = Math.max.apply(null, heights);
        groups[j].push(max);
      }
      cb(groups);
    }

    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */
  }, {
    key: "applyHeight",
    value: function applyHeight(heights) {
      var max = Math.max.apply(null, heights);
      /**
       * Fires before the heights are applied
       * @event Equalizer#preequalized
       */
      this.$element.trigger('preequalized.zf.equalizer');
      this.$watched.css('height', max);

      /**
       * Fires when the heights have been applied
       * @event Equalizer#postequalized
       */
      this.$element.trigger('postequalized.zf.equalizer');
    }

    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedrow
     * @fires Equalizer#postequalizedrow
     * @fires Equalizer#postequalized
     */
  }, {
    key: "applyHeightByRow",
    value: function applyHeightByRow(groups) {
      /**
       * Fires before the heights are applied
       */
      this.$element.trigger('preequalized.zf.equalizer');
      for (var i = 0, len = groups.length; i < len; i++) {
        var groupsILength = groups[i].length,
          max = groups[i][groupsILength - 1];
        if (groupsILength <= 2) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][0][0]).css({
            'height': 'auto'
          });
          continue;
        }
        /**
          * Fires before the heights per row are applied
          * @event Equalizer#preequalizedrow
          */
        this.$element.trigger('preequalizedrow.zf.equalizer');
        for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][j][0]).css({
            'height': max
          });
        }
        /**
          * Fires when the heights per row have been applied
          * @event Equalizer#postequalizedrow
          */
        this.$element.trigger('postequalizedrow.zf.equalizer');
      }
      /**
       * Fires when the heights have been applied
       */
      this.$element.trigger('postequalized.zf.equalizer');
    }

    /**
     * Destroys an instance of Equalizer.
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this._pauseEvents();
      this.$watched.css('height', 'auto');
    }
  }]);
}(Plugin);
/**
 * Default settings for plugin
 */
Equalizer.defaults = {
  /**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeOnStack: false,
  /**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeByRow: false,
  /**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
  equalizeOn: ''
};

/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 */
var Interchange = /*#__PURE__*/function (_Plugin) {
  function Interchange() {
    _classCallCheck(this, Interchange);
    return _callSuper(this, Interchange, arguments);
  }
  _inherits(Interchange, _Plugin);
  return _createClass(Interchange, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of Interchange.
     * @class
     * @name Interchange
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Interchange.defaults, this.$element.data(), options);
      this.rules = [];
      this.currentPath = '';
      this.className = 'Interchange'; // ie9 back compat

      // Triggers init is idempotent, just need to make sure it is initialized
      Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      this._init();
      this._events();
    }

    /**
     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
     * @function
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      MediaQuery._init();
      var id = this.$element[0].id || GetYoDigits(6, 'interchange');
      this.$element.attr({
        'data-resize': id,
        'id': id
      });
      this._parseOptions();
      this._addBreakpoints();
      this._generateRules();
      this._reflow();
    }

    /**
     * Initializes events for Interchange.
     * @function
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;
      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {
        return _this._reflow();
      });
    }

    /**
     * Calls necessary functions to update Interchange upon DOM change
     * @function
     * @private
     */
  }, {
    key: "_reflow",
    value: function _reflow() {
      var match;

      // Iterate through each rule, but only save the last match
      for (var i in this.rules) {
        if (this.rules.hasOwnProperty(i)) {
          var rule = this.rules[i];
          if (window.matchMedia(rule.query).matches) {
            match = rule;
          }
        }
      }
      if (match) {
        this.replace(match.path);
      }
    }

    /**
     * Check options valifity and set defaults for:
     * - `data-interchange-type`: if set, enforce the type of replacement (auto, src, background or html)
     * @function
     * @private
     */
  }, {
    key: "_parseOptions",
    value: function _parseOptions() {
      var types = ['auto', 'src', 'background', 'html'];
      if (typeof this.options.type === 'undefined') this.options.type = 'auto';else if (types.indexOf(this.options.type) === -1) {
        console.warn("Warning: invalid value \"".concat(this.options.type, "\" for Interchange option \"type\""));
        this.options.type = 'auto';
      }
    }

    /**
     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
     * @function
     * @private
     */
  }, {
    key: "_addBreakpoints",
    value: function _addBreakpoints() {
      for (var i in MediaQuery.queries) {
        if (MediaQuery.queries.hasOwnProperty(i)) {
          var query = MediaQuery.queries[i];
          Interchange.SPECIAL_QUERIES[query.name] = query.value;
        }
      }
    }

    /**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */
  }, {
    key: "_generateRules",
    value: function _generateRules() {
      var rulesList = [];
      var rules;
      if (this.options.rules) {
        rules = this.options.rules;
      } else {
        rules = this.$element.data('interchange');
      }
      rules = typeof rules === 'string' ? rules.match(/\[.*?, .*?\]/g) : rules;
      for (var i in rules) {
        if (rules.hasOwnProperty(i)) {
          var rule = rules[i].slice(1, -1).split(', ');
          var path = rule.slice(0, -1).join('');
          var query = rule[rule.length - 1];
          if (Interchange.SPECIAL_QUERIES[query]) {
            query = Interchange.SPECIAL_QUERIES[query];
          }
          rulesList.push({
            path: path,
            query: query
          });
        }
      }
      this.rules = rulesList;
    }

    /**
     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */
  }, {
    key: "replace",
    value: function replace(path) {
      var _this2 = this;
      if (this.currentPath === path) return;
      var trigger = 'replaced.zf.interchange';
      var type = this.options.type;
      if (type === 'auto') {
        if (this.$element[0].nodeName === 'IMG') type = 'src';else if (path.match(/\.(gif|jpe?g|png|svg|tiff)([?#].*)?/i)) type = 'background';else type = 'html';
      }

      // Replacing images
      if (type === 'src') {
        this.$element.attr('src', path).on('load', function () {
          _this2.currentPath = path;
        }).trigger(trigger);
      }
      // Replacing background images
      else if (type === 'background') {
        path = path.replace(/\(/g, '%28').replace(/\)/g, '%29');
        this.$element.css({
          'background-image': 'url(' + path + ')'
        }).trigger(trigger);
      }
      // Replacing HTML
      else if (type === 'html') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().get(path, function (response) {
          _this2.$element.html(response).trigger(trigger);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).foundation();
          _this2.currentPath = path;
        });
      }

      /**
       * Fires when content in an Interchange element is done being loaded.
       * @event Interchange#replaced
       */
      // this.$element.trigger('replaced.zf.interchange');
    }

    /**
     * Destroys an instance of interchange.
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('resizeme.zf.trigger');
    }
  }]);
}(Plugin);
/**
 * Default settings for plugin
 */
Interchange.defaults = {
  /**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */
  rules: null,
  /**
   * Type of the responsive ressource to replace. It can take the following options:
   * - `auto` (default): choose the type according to the element tag or the ressource extension,
   * - `src`: replace the `[src]` attribute, recommended for images `<img>`.
   * - `background`: replace the `background-image` CSS property.
   * - `html`: replace the element content.
   * @option
   * @type {string}
   * @default 'auto'
   */
  type: 'auto'
};
Interchange.SPECIAL_QUERIES = {
  'landscape': 'screen and (orientation: landscape)',
  'portrait': 'screen and (orientation: portrait)',
  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
};

/**
 * SmoothScroll module.
 * @module foundation.smoothScroll
 */
var SmoothScroll = /*#__PURE__*/function (_Plugin) {
  function SmoothScroll() {
    _classCallCheck(this, SmoothScroll);
    return _callSuper(this, SmoothScroll, arguments);
  }
  _inherits(SmoothScroll, _Plugin);
  return _createClass(SmoothScroll, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of SmoothScroll.
     * @class
     * @name SmoothScroll
     * @fires SmoothScroll#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, SmoothScroll.defaults, this.$element.data(), options);
      this.className = 'SmoothScroll'; // ie9 back compat

      this._init();
    }

    /**
     * Initialize the SmoothScroll plugin
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element[0].id || GetYoDigits(6, 'smooth-scroll');
      this.$element.attr({
        id: id
      });
      this._events();
    }

    /**
     * Initializes events for SmoothScroll.
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      this._linkClickListener = this._handleLinkClick.bind(this);
      this.$element.on('click.zf.smoothScroll', this._linkClickListener);
      this.$element.on('click.zf.smoothScroll', 'a[href^="#"]', this._linkClickListener);
    }

    /**
     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
     * @param {*} e - event
     * @function
     * @private
     */
  }, {
    key: "_handleLinkClick",
    value: function _handleLinkClick(e) {
      var _this = this;
      // Follow the link if it does not point to an anchor.
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).is('a[href^="#"]')) return;
      var arrival = e.currentTarget.getAttribute('href');
      this._inTransition = true;
      SmoothScroll.scrollToLoc(arrival, this.options, function () {
        _this._inTransition = false;
      });
      e.preventDefault();
    }
  }, {
    key: "_destroy",
    value:
    /**
     * Destroys the SmoothScroll instance.
     * @function
     */
    function _destroy() {
      this.$element.off('click.zf.smoothScroll', this._linkClickListener);
      this.$element.off('click.zf.smoothScroll', 'a[href^="#"]', this._linkClickListener);
    }
  }], [{
    key: "scrollToLoc",
    value:
    /**
     * Function to scroll to a given location on the page.
     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
     * @param {Object} options - The options to use.
     * @param {Function} callback - The callback function.
     * @static
     * @function
     */
    function scrollToLoc(loc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      var $loc = jquery__WEBPACK_IMPORTED_MODULE_0___default()(loc);

      // Do nothing if target does not exist to prevent errors
      if (!$loc.length) return false;
      var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
        scrollTop: scrollPos
      }, options.animationDuration, options.animationEasing, function () {
        if (typeof callback === 'function') {
          callback();
        }
      });
    }
  }]);
}(Plugin);
/**
 * Default settings for plugin.
 */
SmoothScroll.defaults = {
  /**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,
  /**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
  animationEasing: 'linear',
  /**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
  threshold: 50,
  /**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
  offset: 0
};

/**
 * Magellan module.
 * @module foundation.magellan
 * @requires foundation.smoothScroll
 * @requires foundation.util.triggers
 */
var Magellan = /*#__PURE__*/function (_Plugin) {
  function Magellan() {
    _classCallCheck(this, Magellan);
    return _callSuper(this, Magellan, arguments);
  }
  _inherits(Magellan, _Plugin);
  return _createClass(Magellan, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of Magellan.
     * @class
     * @name Magellan
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Magellan.defaults, this.$element.data(), options);
      this.className = 'Magellan'; // ie9 back compat

      // Triggers init is idempotent, just need to make sure it is initialized
      Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      this._init();
      this.calcPoints();
    }

    /**
     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element[0].id || GetYoDigits(6, 'magellan');
      this.$targets = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-magellan-target]');
      this.$links = this.$element.find('a');
      this.$element.attr({
        'data-resize': id,
        'data-scroll': id,
        'id': id
      });
      this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.scrollPos = parseInt(window.pageYOffset, 10);
      this._events();
    }

    /**
     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
     * Can be invoked if new elements are added or the size of a location changes.
     * @function
     */
  }, {
    key: "calcPoints",
    value: function calcPoints() {
      var _this = this,
        body = document.body,
        html = document.documentElement;
      this.points = [];
      this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
      this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
      this.$targets.each(function () {
        var $tar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          pt = Math.round($tar.offset().top - _this.options.threshold);
        $tar.targetPoint = pt;
        _this.points.push(pt);
      });
    }

    /**
     * Initializes events for Magellan.
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', function () {
        if (_this.options.deepLinking) {
          if (location.hash) {
            _this.scrollToLoc(location.hash);
          }
        }
        _this.calcPoints();
        _this._updateActive();
      });
      _this.onLoadListener = onLoad(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        _this.$element.on({
          'resizeme.zf.trigger': _this.reflow.bind(_this),
          'scrollme.zf.trigger': _this._updateActive.bind(_this)
        }).on('click.zf.magellan', 'a[href^="#"]', function (e) {
          e.preventDefault();
          var arrival = this.getAttribute('href');
          _this.scrollToLoc(arrival);
        });
      });
      this._deepLinkScroll = function () {
        if (_this.options.deepLinking) {
          _this.scrollToLoc(window.location.hash);
        }
      };
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._deepLinkScroll);
    }

    /**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
     * @function
     */
  }, {
    key: "scrollToLoc",
    value: function scrollToLoc(loc) {
      this._inTransition = true;
      var _this = this;
      var options = {
        animationEasing: this.options.animationEasing,
        animationDuration: this.options.animationDuration,
        threshold: this.options.threshold,
        offset: this.options.offset
      };
      SmoothScroll.scrollToLoc(loc, options, function () {
        _this._inTransition = false;
      });
    }

    /**
     * Calls necessary functions to update Magellan upon DOM change
     * @function
     */
  }, {
    key: "reflow",
    value: function reflow() {
      this.calcPoints();
      this._updateActive();
    }

    /**
     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
     * @private
     * @function
     * @fires Magellan#update
     */
  }, {
    key: "_updateActive",
    value: function _updateActive(/*evt, elem, scrollPos*/
    ) {
      var _this2 = this;
      if (this._inTransition) return;
      var newScrollPos = parseInt(window.pageYOffset, 10);
      var isScrollingUp = this.scrollPos > newScrollPos;
      this.scrollPos = newScrollPos;
      var activeIdx;
      // Before the first point: no link
      if (newScrollPos < this.points[0] - this.options.offset - (isScrollingUp ? this.options.threshold : 0)) ;
      // At the bottom of the page: last link
      else if (newScrollPos + this.winHeight === this.docHeight) {
        activeIdx = this.points.length - 1;
      }
      // Otherwhise, use the last visible link
      else {
        var visibleLinks = this.points.filter(function (p) {
          return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;
        });
        activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;
      }

      // Get the new active link
      var $oldActive = this.$active;
      var activeHash = '';
      if (typeof activeIdx !== 'undefined') {
        this.$active = this.$links.filter('[href="#' + this.$targets.eq(activeIdx).data('magellan-target') + '"]');
        if (this.$active.length) activeHash = this.$active[0].getAttribute('href');
      } else {
        this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      }
      var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);
      var isNewHash = activeHash !== window.location.hash;

      // Update the active link element
      if (isNewActive) {
        $oldActive.removeClass(this.options.activeClass);
        this.$active.addClass(this.options.activeClass);
      }

      // Update the hash (it may have changed with the same active link)
      if (this.options.deepLinking && isNewHash) {
        if (window.history.pushState) {
          // Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
          var url = activeHash ? activeHash : window.location.pathname + window.location.search;
          if (this.options.updateHistory) {
            window.history.pushState({}, '', url);
          } else {
            window.history.replaceState({}, '', url);
          }
        } else {
          window.location.hash = activeHash;
        }
      }
      if (isNewActive) {
        /**
         * Fires when magellan is finished updating to the new active element.
         * @event Magellan#update
         */
        this.$element.trigger('update.zf.magellan', [this.$active]);
      }
    }

    /**
     * Destroys an instance of Magellan and resets the url of the window.
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.trigger .zf.magellan').find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass);
      if (this.options.deepLinking) {
        var hash = this.$active[0].getAttribute('href');
        window.location.hash.replace(hash, '');
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._deepLinkScroll);
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
    }
  }]);
}(Plugin);
/**
 * Default settings for plugin
 */
Magellan.defaults = {
  /**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,
  /**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
  animationEasing: 'linear',
  /**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
  threshold: 50,
  /**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  activeClass: 'is-active',
  /**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinking: false,
  /**
   * Update the browser history with the active link, if deep linking is enabled.
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false,
  /**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
  offset: 0
};

/**
 * OffCanvas module.
 * @module foundation.offCanvas
 * @requires foundation.util.keyboard
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */
var OffCanvas = /*#__PURE__*/function (_Plugin) {
  function OffCanvas() {
    _classCallCheck(this, OffCanvas);
    return _callSuper(this, OffCanvas, arguments);
  }
  _inherits(OffCanvas, _Plugin);
  return _createClass(OffCanvas, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @name OffCanvas
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      var _this2 = this;
      this.className = 'OffCanvas'; // ie9 back compat
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, OffCanvas.defaults, this.$element.data(), options);
      this.contentClasses = {
        base: [],
        reveal: []
      };
      this.$lastTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.position = 'left';
      this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.nested = !!this.options.nested;
      this.$sticky = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.isInCanvas = false;

      // Defines the CSS transition/position classes of the off-canvas content container.
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['push', 'overlap']).each(function (index, val) {
        _this2.contentClasses.base.push('has-transition-' + val);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['left', 'right', 'top', 'bottom']).each(function (index, val) {
        _this2.contentClasses.base.push('has-position-' + val);
        _this2.contentClasses.reveal.push('has-reveal-' + val);
      });

      // Triggers init is idempotent, just need to make sure it is initialized
      Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      MediaQuery._init();
      this._init();
      this._events();
      Keyboard.register('OffCanvas', {
        'ESCAPE': 'close'
      });
    }

    /**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element.attr('id');
      this.$element.attr('aria-hidden', 'true');

      // Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)
      if (this.options.contentId) {
        this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + this.options.contentId);
      } else if (this.$element.siblings('[data-off-canvas-content]').length) {
        this.$content = this.$element.siblings('[data-off-canvas-content]').first();
      } else {
        this.$content = this.$element.closest('[data-off-canvas-content]').first();
      }
      if (!this.options.contentId) {
        // Assume that the off-canvas element is nested if it isn't a sibling of the content
        this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;
      } else if (this.options.contentId && this.options.nested === null) {
        // Warning if using content ID without setting the nested option
        // Once the element is nested it is required to work properly in this case
        console.warn('Remember to use the nested option if using the content ID option!');
      }
      if (this.nested === true) {
        // Force transition overlap if nested
        this.options.transition = 'overlap';
        // Remove appropriate classes if already assigned in markup
        this.$element.removeClass('is-transition-push');
      }
      this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed"));

      // Find triggers that affect this element and add aria-expanded to them
      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-expanded', 'false').attr('aria-controls', id);

      // Get position by checking for related CSS class
      this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\-(left|top|right|bottom)/)[1] : this.position;

      // Add an overlay over the content if necessary
      if (this.options.contentOverlay === true) {
        var overlay = document.createElement('div');
        var overlayPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$element).css("position") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
        overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
        this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay);
        if (overlayPosition === 'is-overlay-fixed') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$overlay).insertAfter(this.$element);
        } else {
          this.$content.append(this.$overlay);
        }
      }

      // Get the revealOn option from the class.
      var revealOnRegExp = new RegExp(RegExpEscape(this.options.revealClass) + '([^\\s]+)', 'g');
      var revealOnClass = revealOnRegExp.exec(this.$element[0].className);
      if (revealOnClass) {
        this.options.isRevealed = true;
        this.options.revealOn = this.options.revealOn || revealOnClass[1];
      }

      // Ensure the `reveal-on-*` class is set.
      if (this.options.isRevealed === true && this.options.revealOn) {
        this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn));
        this._setMQChecker();
      }
      if (this.options.transitionTime) {
        this.$element.css('transition-duration', this.options.transitionTime);
      }

      // Find fixed elements that should stay fixed while off-canvas is opened
      this.$sticky = this.$content.find('[data-off-canvas-sticky]');
      if (this.$sticky.length > 0 && this.options.transition === 'push') {
        // If there's at least one match force contentScroll:false because the absolute top value doesn't get recalculated on scroll
        // Limit to push transition since there's no transform scope for overlap
        this.options.contentScroll = false;
      }
      var inCanvasFor = this.$element.attr('class').match(/\bin-canvas-for-(\w+)/);
      if (inCanvasFor && inCanvasFor.length === 2) {
        // Set `inCanvasOn` option if found in-canvas-for-[BREAKPONT] CSS class
        this.options.inCanvasOn = inCanvasFor[1];
      } else if (this.options.inCanvasOn) {
        // Ensure the CSS class is set
        this.$element.addClass("in-canvas-for-".concat(this.options.inCanvasOn));
      }
      if (this.options.inCanvasOn) {
        this._checkInCanvas();
      }

      // Initally remove all transition/position CSS classes from off-canvas content container.
      this._removeContentClasses();
    }

    /**
     * Adds event handlers to the off-canvas wrapper and the exit overlay.
     * @function
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      var _this3 = this;
      this.$element.off('.zf.trigger .zf.offCanvas').on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': this.close.bind(this),
        'toggle.zf.trigger': this.toggle.bind(this),
        'keydown.zf.offCanvas': this._handleKeyboard.bind(this)
      });
      if (this.options.closeOnClick === true) {
        var $target = this.options.contentOverlay ? this.$overlay : this.$content;
        $target.on({
          'click.zf.offCanvas': this.close.bind(this)
        });
      }
      if (this.options.inCanvasOn) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
          _this3._checkInCanvas();
        });
      }
    }

    /**
     * Applies event listener for elements that will reveal at certain breakpoints.
     * @private
     */
  }, {
    key: "_setMQChecker",
    value: function _setMQChecker() {
      var _this = this;
      this.onLoadListener = onLoad(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        if (MediaQuery.atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
        if (MediaQuery.atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        } else {
          _this.reveal(false);
        }
      });
    }

    /**
     * Checks if InCanvas on current breakpoint and adjust off-canvas accordingly
     * @private
     */
  }, {
    key: "_checkInCanvas",
    value: function _checkInCanvas() {
      this.isInCanvas = MediaQuery.atLeast(this.options.inCanvasOn);
      if (this.isInCanvas === true) {
        this.close();
      }
    }

    /**
     * Removes the CSS transition/position classes of the off-canvas content container.
     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */
  }, {
    key: "_removeContentClasses",
    value: function _removeContentClasses(hasReveal) {
      if (typeof hasReveal !== 'boolean') {
        this.$content.removeClass(this.contentClasses.base.join(' '));
      } else if (hasReveal === false) {
        this.$content.removeClass("has-reveal-".concat(this.position));
      }
    }

    /**
     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
     * Beforehand any transition/position class gets removed.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */
  }, {
    key: "_addContentClasses",
    value: function _addContentClasses(hasReveal) {
      this._removeContentClasses(hasReveal);
      if (typeof hasReveal !== 'boolean') {
        this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position));
      } else if (hasReveal === true) {
        this.$content.addClass("has-reveal-".concat(this.position));
      }
    }

    /**
     * Preserves the fixed behavior of sticky elements on opening an off-canvas with push transition.
     * Since the off-canvas container has got a transform scope in such a case, it is done by calculating position absolute values.
     * @private
     */
  }, {
    key: "_fixStickyElements",
    value: function _fixStickyElements() {
      this.$sticky.each(function (_, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);

        // If sticky element is currently fixed, adjust its top value to match absolute position due to transform scope
        // Limit to push transition because postion:fixed works without problems for overlap (no transform scope)
        if ($el.css('position') === 'fixed') {
          // Save current inline styling to restore it if undoing the absolute fixing
          var topVal = parseInt($el.css('top'), 10);
          $el.data('offCanvasSticky', {
            top: topVal
          });
          var absoluteTopVal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop() + topVal;
          $el.css({
            top: "".concat(absoluteTopVal, "px"),
            width: '100%',
            transition: 'none'
          });
        }
      });
    }

    /**
     * Restores the original fixed styling of sticky elements after having closed an off-canvas that got pseudo fixed beforehand.
     * This reverts the changes of _fixStickyElements()
     * @private
     */
  }, {
    key: "_unfixStickyElements",
    value: function _unfixStickyElements() {
      this.$sticky.each(function (_, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
        var stickyData = $el.data('offCanvasSticky');

        // If sticky element has got data object with prior values (meaning it was originally fixed) restore these values once off-canvas is closed
        if (_typeof(stickyData) === 'object') {
          $el.css({
            top: "".concat(stickyData.top, "px"),
            width: '',
            transition: ''
          });
          $el.data('offCanvasSticky', '');
        }
      });
    }

    /**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */
  }, {
    key: "reveal",
    value: function reveal(isRevealed) {
      if (isRevealed) {
        this.close();
        this.isRevealed = true;
        this.$element.attr('aria-hidden', 'false');
        this.$element.off('open.zf.trigger toggle.zf.trigger');
        this.$element.removeClass('is-closed');
      } else {
        this.isRevealed = false;
        this.$element.attr('aria-hidden', 'true');
        this.$element.off('open.zf.trigger toggle.zf.trigger').on({
          'open.zf.trigger': this.open.bind(this),
          'toggle.zf.trigger': this.toggle.bind(this)
        });
        this.$element.addClass('is-closed');
      }
      this._addContentClasses(isRevealed);
    }

    /**
     * Stops scrolling of the body when OffCanvas is open on mobile Safari and other troublesome browsers.
     * @function
     * @private
     */
  }, {
    key: "_stopScrolling",
    value: function _stopScrolling() {
      return false;
    }

    /**
     * Save current finger y-position
     * @param event
     * @private
     */
  }, {
    key: "_recordScrollable",
    value: function _recordScrollable(event) {
      var elem = this;
      elem.lastY = event.touches[0].pageY;
    }

    /**
     * Prevent further scrolling when it hits the edges
     * @param event
     * @private
     */
  }, {
    key: "_preventDefaultAtEdges",
    value: function _preventDefaultAtEdges(event) {
      var elem = this;
      var _this = event.data;
      var delta = elem.lastY - event.touches[0].pageY;
      elem.lastY = event.touches[0].pageY;
      if (!_this._canScroll(delta, elem)) {
        event.preventDefault();
      }
    }

    /**
     * Handle continuous scrolling of scrollbox
     * Don't bubble up to _preventDefaultAtEdges
     * @param event
     * @private
     */
  }, {
    key: "_scrollboxTouchMoved",
    value: function _scrollboxTouchMoved(event) {
      var elem = this;
      var _this = event.data;
      var parent = elem.closest('[data-off-canvas], [data-off-canvas-scrollbox-outer]');
      var delta = elem.lastY - event.touches[0].pageY;
      parent.lastY = elem.lastY = event.touches[0].pageY;
      event.stopPropagation();
      if (!_this._canScroll(delta, elem)) {
        if (!_this._canScroll(delta, parent)) {
          event.preventDefault();
        } else {
          parent.scrollTop += delta;
        }
      }
    }

    /**
     * Detect possibility of scrolling
     * @param delta
     * @param elem
     * @returns boolean
     * @private
     */
  }, {
    key: "_canScroll",
    value: function _canScroll(delta, elem) {
      var up = delta < 0;
      var down = delta > 0;
      var allowUp = elem.scrollTop > 0;
      var allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
      return up && allowUp || down && allowDown;
    }

    /**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires OffCanvas#opened
     * @todo also trigger 'open' event?
     */
  }, {
    key: "open",
    value: function open(event, trigger) {
      var _this4 = this;
      if (this.$element.hasClass('is-open') || this.isRevealed || this.isInCanvas) {
        return;
      }
      var _this = this;
      if (trigger) {
        this.$lastTrigger = trigger;
      }
      if (this.options.forceTo === 'top') {
        window.scrollTo(0, 0);
      } else if (this.options.forceTo === 'bottom') {
        window.scrollTo(0, document.body.scrollHeight);
      }
      if (this.options.transitionTime && this.options.transition !== 'overlap') {
        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);
      } else {
        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');
      }
      this.$element.addClass('is-open').removeClass('is-closed');
      this.$triggers.attr('aria-expanded', 'true');
      this.$element.attr('aria-hidden', 'false');
      this.$content.addClass('is-open-' + this.position);

      // If `contentScroll` is set to false, add class and disable scrolling on touch devices.
      if (this.options.contentScroll === false) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
        this.$element.on('touchstart', this._recordScrollable);
        this.$element.on('touchmove', this, this._preventDefaultAtEdges);
        this.$element.on('touchstart', '[data-off-canvas-scrollbox]', this._recordScrollable);
        this.$element.on('touchmove', '[data-off-canvas-scrollbox]', this, this._scrollboxTouchMoved);
      }
      if (this.options.contentOverlay === true) {
        this.$overlay.addClass('is-visible');
      }
      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
        this.$overlay.addClass('is-closable');
      }
      if (this.options.autoFocus === true) {
        this.$element.one(transitionend(this.$element), function () {
          if (!_this.$element.hasClass('is-open')) {
            return; // exit if prematurely closed
          }
          var canvasFocus = _this.$element.find('[data-autofocus]');
          if (canvasFocus.length) {
            canvasFocus.eq(0).focus();
          } else {
            _this.$element.find('a, button').eq(0).focus();
          }
        });
      }
      if (this.options.trapFocus === true) {
        this.$content.attr('tabindex', '-1');
        Keyboard.trapFocus(this.$element);
      }
      if (this.options.transition === 'push') {
        this._fixStickyElements();
      }
      this._addContentClasses();

      /**
       * Fires when the off-canvas menu opens.
       * @event OffCanvas#opened
       */
      this.$element.trigger('opened.zf.offCanvas');

      /**
       * Fires when the off-canvas menu open transition is done.
       * @event OffCanvas#openedEnd
       */
      this.$element.one(transitionend(this.$element), function () {
        _this4.$element.trigger('openedEnd.zf.offCanvas');
      });
    }

    /**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires OffCanvas#close
     * @fires OffCanvas#closed
     */
  }, {
    key: "close",
    value: function close() {
      var _this5 = this;
      if (!this.$element.hasClass('is-open') || this.isRevealed) {
        return;
      }

      /**
       * Fires when the off-canvas menu closes.
       * @event OffCanvas#close
       */
      this.$element.trigger('close.zf.offCanvas');
      this.$element.removeClass('is-open');
      this.$element.attr('aria-hidden', 'true');
      this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom');
      if (this.options.contentOverlay === true) {
        this.$overlay.removeClass('is-visible');
      }
      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
        this.$overlay.removeClass('is-closable');
      }
      this.$triggers.attr('aria-expanded', 'false');

      // Listen to transitionEnd: add class, re-enable scrolling and release focus when done.
      this.$element.one(transitionend(this.$element), function () {
        _this5.$element.addClass('is-closed');
        _this5._removeContentClasses();
        if (_this5.options.transition === 'push') {
          _this5._unfixStickyElements();
        }

        // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.
        if (_this5.options.contentScroll === false) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove', _this5._stopScrolling);
          _this5.$element.off('touchstart', _this5._recordScrollable);
          _this5.$element.off('touchmove', _this5._preventDefaultAtEdges);
          _this5.$element.off('touchstart', '[data-off-canvas-scrollbox]', _this5._recordScrollable);
          _this5.$element.off('touchmove', '[data-off-canvas-scrollbox]', _this5._scrollboxTouchMoved);
        }
        if (_this5.options.trapFocus === true) {
          _this5.$content.removeAttr('tabindex');
          Keyboard.releaseFocus(_this5.$element);
        }

        /**
         * Fires when the off-canvas menu close transition is done.
         * @event OffCanvas#closed
         */
        _this5.$element.trigger('closed.zf.offCanvas');
      });
    }

    /**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */
  }, {
    key: "toggle",
    value: function toggle(event, trigger) {
      if (this.$element.hasClass('is-open')) {
        this.close(event, trigger);
      } else {
        this.open(event, trigger);
      }
    }

    /**
     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
     * @function
     * @private
     */
  }, {
    key: "_handleKeyboard",
    value: function _handleKeyboard(e) {
      var _this6 = this;
      Keyboard.handleKey(e, 'OffCanvas', {
        close: function close() {
          _this6.close();
          _this6.$lastTrigger.focus();
          return true;
        },
        handled: function handled() {
          e.preventDefault();
        }
      });
    }

    /**
     * Destroys the OffCanvas plugin.
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.close();
      this.$element.off('.zf.trigger .zf.offCanvas');
      this.$overlay.off('.zf.offCanvas');
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
    }
  }]);
}(Plugin);
OffCanvas.defaults = {
  /**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,
  /**
   * Adds an overlay on top of `[data-off-canvas-content]`.
   * @option
   * @type {boolean}
   * @default true
   */
  contentOverlay: true,
  /**
   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
   * @option
   * @type {?string}
   * @default null
   */
  contentId: null,
  /**
   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
   * @option
   * @type {boolean}
   * @default null
   */
  nested: null,
  /**
   * Enable/disable scrolling of the main content when an off canvas panel is open.
   * @option
   * @type {boolean}
   * @default true
   */
  contentScroll: true,
  /**
   * Amount of time the open and close transition requires, including the appropriate milliseconds (`ms`) or seconds (`s`) unit (e.g. `500ms`, `.75s`) If none selected, pulls from body style.
   * @option
   * @type {string}
   * @default null
   */
  transitionTime: null,
  /**
   * Type of transition for the OffCanvas menu. Options are 'push', 'detached' or 'slide'.
   * @option
   * @type {string}
   * @default push
   */
  transition: 'push',
  /**
   * Force the page to scroll to top or bottom on open.
   * @option
   * @type {?string}
   * @default null
   */
  forceTo: null,
  /**
   * Allow the OffCanvas to remain open for certain breakpoints.
   * @option
   * @type {boolean}
   * @default false
   */
  isRevealed: false,
  /**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
   * @option
   * @type {?string}
   * @default null
   */
  revealOn: null,
  /**
   * Breakpoint at which the off-canvas gets moved into canvas content and acts as regular page element.
   * @option
   * @type {?string}
   * @default null
   */
  inCanvasOn: null,
  /**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @type {boolean}
   * @default true
   */
  autoFocus: true,
  /**
   * Class used to force an OffCanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * @type {string}
   * @default reveal-for-
   * @todo improve the regex testing for this.
   */
  revealClass: 'reveal-for-',
  /**
   * Triggers optional focus trapping when opening an OffCanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @type {boolean}
   * @default false
   */
  trapFocus: false
};

/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timer
 * @requires foundation.util.imageLoader
 * @requires foundation.util.touch
 */
var Orbit = /*#__PURE__*/function (_Plugin) {
  function Orbit() {
    _classCallCheck(this, Orbit);
    return _callSuper(this, Orbit, arguments);
  }
  _inherits(Orbit, _Plugin);
  return _createClass(Orbit, [{
    key: "_setup",
    value:
    /**
    * Creates a new instance of an orbit carousel.
    * @class
    * @name Orbit
    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
    * @param {Object} options - Overrides to the default plugin settings.
    */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Orbit.defaults, this.$element.data(), options);
      this.className = 'Orbit'; // ie9 back compat

      Touch.init((jquery__WEBPACK_IMPORTED_MODULE_0___default())); // Touch init is idempotent, we just need to make sure it's initialied.

      this._init();
      Keyboard.register('Orbit', {
        'ltr': {
          'ARROW_RIGHT': 'next',
          'ARROW_LEFT': 'previous'
        },
        'rtl': {
          'ARROW_LEFT': 'next',
          'ARROW_RIGHT': 'previous'
        }
      });
    }

    /**
    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
    * @function
    * @private
    */
  }, {
    key: "_init",
    value: function _init() {
      // @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
      this._reset();
      this.$wrapper = this.$element.find(".".concat(this.options.containerClass));
      this.$slides = this.$element.find(".".concat(this.options.slideClass));
      var $images = this.$element.find('img'),
        initActive = this.$slides.filter('.is-active'),
        id = this.$element[0].id || GetYoDigits(6, 'orbit');
      this.$element.attr({
        'data-resize': id,
        'id': id
      });
      if (!initActive.length) {
        this.$slides.eq(0).addClass('is-active');
      }
      if (!this.options.useMUI) {
        this.$slides.addClass('no-motionui');
      }
      if ($images.length) {
        onImagesLoaded($images, this._prepareForOrbit.bind(this));
      } else {
        this._prepareForOrbit(); //hehe
      }
      if (this.options.bullets) {
        this._loadBullets();
      }
      this._events();
      if (this.options.autoPlay && this.$slides.length > 1) {
        this.geoSync();
      }
      if (this.options.accessible) {
        // allow wrapper to be focusable to enable arrow navigation
        this.$wrapper.attr('tabindex', 0);
      }
    }

    /**
    * Creates a jQuery collection of bullets, if they are being used.
    * @function
    * @private
    */
  }, {
    key: "_loadBullets",
    value: function _loadBullets() {
      this.$bullets = this.$element.find(".".concat(this.options.boxOfBullets)).find('button');
    }

    /**
    * Sets a `timer` object on the orbit, and starts the counter for the next slide.
    * @function
    */
  }, {
    key: "geoSync",
    value: function geoSync() {
      var _this = this;
      this.timer = new Timer(this.$element, {
        duration: this.options.timerDelay,
        infinite: false
      }, function () {
        _this.changeSlide(true);
      });
      this.timer.start();
    }

    /**
    * Sets wrapper and slide heights for the orbit.
    * @function
    * @private
    */
  }, {
    key: "_prepareForOrbit",
    value: function _prepareForOrbit() {
      this._setWrapperHeight();
    }

    /**
    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
    * @function
    * @private
    * @param {Function} cb - a callback function to fire when complete.
    */
  }, {
    key: "_setWrapperHeight",
    value: function _setWrapperHeight(cb) {
      //rewrite this to `for` loop
      var max = 0,
        temp,
        counter = 0,
        _this = this;
      this.$slides.each(function () {
        temp = this.getBoundingClientRect().height;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-slide', counter);

        // hide all slides but the active one
        if (!/mui/g.test(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].className) && _this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css({
            'display': 'none'
          });
        }
        max = temp > max ? temp : max;
        counter++;
      });
      if (counter === this.$slides.length) {
        this.$wrapper.css({
          'height': max
        }); //only change the wrapper height property once.
        if (cb) {
          cb(max);
        } //fire callback with max height dimension.
      }
    }

    /**
    * Sets the max-height of each slide.
    * @function
    * @private
    */
  }, {
    key: "_setSlideHeight",
    value: function _setSlideHeight(height) {
      this.$slides.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('max-height', height);
      });
    }

    /**
    * Adds event listeners to basically everything within the element.
    * @function
    * @private
    */
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      //***************************************
      //**Now using custom event - thanks to:**
      //**      Yohai Ararat of Toronto      **
      //***************************************
      //
      this.$element.off('.resizeme.zf.trigger').on({
        'resizeme.zf.trigger': this._prepareForOrbit.bind(this)
      });
      if (this.$slides.length > 1) {
        if (this.options.swipe) {
          this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit', function (e) {
            e.preventDefault();
            _this.changeSlide(true);
          }).on('swiperight.zf.orbit', function (e) {
            e.preventDefault();
            _this.changeSlide(false);
          });
        }
        //***************************************

        if (this.options.autoPlay) {
          this.$slides.on('click.zf.orbit', function () {
            _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);
            _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
          });
          if (this.options.pauseOnHover) {
            this.$element.on('mouseenter.zf.orbit', function () {
              _this.timer.pause();
            }).on('mouseleave.zf.orbit', function () {
              if (!_this.$element.data('clickedOn')) {
                _this.timer.start();
              }
            });
          }
        }
        if (this.options.navButtons) {
          var $controls = this.$element.find(".".concat(this.options.nextClass, ", .").concat(this.options.prevClass));
          $controls.attr('tabindex', 0)
          //also need to handle enter/return and spacebar key presses
          .on('click.zf.orbit touchend.zf.orbit', function (e) {
            e.preventDefault();
            _this.changeSlide(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass(_this.options.nextClass));
          });
        }
        if (this.options.bullets) {
          this.$bullets.on('click.zf.orbit touchend.zf.orbit', function () {
            if (/is-active/g.test(this.className)) {
              return false;
            } //if this is active, kick out of function.
            var idx = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('slide'),
              ltr = idx > _this.$slides.filter('.is-active').data('slide'),
              $slide = _this.$slides.eq(idx);
            _this.changeSlide(ltr, $slide, idx);
          });
        }
        if (this.options.accessible) {
          this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function (e) {
            // handle keyboard event with keyboard util
            Keyboard.handleKey(e, 'Orbit', {
              next: function next() {
                _this.changeSlide(true);
              },
              previous: function previous() {
                _this.changeSlide(false);
              },
              handled: function handled() {
                // if bullet is focused, make sure focus moves
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is(_this.$bullets)) {
                  _this.$bullets.filter('.is-active').focus();
                }
              }
            });
          });
        }
      }
    }

    /**
     * Resets Orbit so it can be reinitialized
     */
  }, {
    key: "_reset",
    value: function _reset() {
      // Don't do anything if there are no slides (first run)
      if (typeof this.$slides === 'undefined') {
        return;
      }
      if (this.$slides.length > 1) {
        // Remove old events
        this.$element.off('.zf.orbit').find('*').off('.zf.orbit');

        // Restart timer if autoPlay is enabled
        if (this.options.autoPlay) {
          this.timer.restart();
        }

        // Reset all sliddes
        this.$slides.each(function (el) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();
        });

        // Show the first slide
        this.$slides.first().addClass('is-active').show();

        // Triggers when the slide has finished animating
        this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]);

        // Select first bullet if bullets are present
        if (this.options.bullets) {
          this._updateBullets(0);
        }
      }
    }

    /**
    * Changes the current slide to a new one.
    * @function
    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
    * @fires Orbit#slidechange
    */
  }, {
    key: "changeSlide",
    value: function changeSlide(isLTR, chosenSlide, idx) {
      if (!this.$slides) {
        return;
      } // Don't freak out if we're in the middle of cleanup
      var $curSlide = this.$slides.filter('.is-active').eq(0);
      if (/mui/g.test($curSlide[0].className)) {
        return false;
      } //if the slide is currently animating, kick out of the function

      var $firstSlide = this.$slides.first(),
        $lastSlide = this.$slides.last(),
        dirIn = isLTR ? 'Right' : 'Left',
        dirOut = isLTR ? 'Left' : 'Right',
        _this = this,
        $newSlide;
      if (!chosenSlide) {
        //most of the time, this will be auto played or clicked from the navButtons.
        $newSlide = isLTR ?
        //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
        this.options.infiniteWrap ? $curSlide.next(".".concat(this.options.slideClass)).length ? $curSlide.next(".".concat(this.options.slideClass)) : $firstSlide : $curSlide.next(".".concat(this.options.slideClass)) //pick next slide if moving left to right
        : this.options.infiniteWrap ? $curSlide.prev(".".concat(this.options.slideClass)).length ? $curSlide.prev(".".concat(this.options.slideClass)) : $lastSlide : $curSlide.prev(".".concat(this.options.slideClass)); //pick prev slide if moving right to left
      } else {
        $newSlide = chosenSlide;
      }
      if ($newSlide.length) {
        /**
        * Triggers before the next slide starts animating in and only if a next slide has been found.
        * @event Orbit#beforeslidechange
        */
        this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);
        if (this.options.bullets) {
          idx = idx || this.$slides.index($newSlide); //grab index to update bullets
          this._updateBullets(idx);
        }
        if (this.options.useMUI && !this.$element.is(':hidden')) {
          Motion.animateIn($newSlide.addClass('is-active'), this.options["animInFrom".concat(dirIn)], function () {
            $newSlide.css({
              'display': 'block'
            }).attr('aria-live', 'polite');
          });
          Motion.animateOut($curSlide.removeClass('is-active'), this.options["animOutTo".concat(dirOut)], function () {
            $curSlide.removeAttr('aria-live');
            if (_this.options.autoPlay && !_this.timer.isPaused) {
              _this.timer.restart();
            }
            //do stuff?
          });
        } else {
          $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
          $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();
          if (this.options.autoPlay && !this.timer.isPaused) {
            this.timer.restart();
          }
        }
        /**
        * Triggers when the slide has finished animating in.
        * @event Orbit#slidechange
        */
        this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
      }
    }

    /**
    * Updates the active state of the bullets, if displayed.
    * Move the descriptor of the current slide `[data-slide-active-label]` to the newly active bullet.
    * If no `[data-slide-active-label]` is set, will move the exceeding `span` element.
    *
    * @function
    * @private
    * @param {Number} idx - the index of the current slide.
    */
  }, {
    key: "_updateBullets",
    value: function _updateBullets(idx) {
      var $oldBullet = this.$bullets.filter('.is-active');
      var $othersBullets = this.$bullets.not('.is-active');
      var $newBullet = this.$bullets.eq(idx);
      $oldBullet.removeClass('is-active').blur();
      $newBullet.addClass('is-active');

      // Find the descriptor for the current slide to move it to the new slide button
      var activeStateDescriptor = $oldBullet.children('[data-slide-active-label]').last();

      // If not explicitely given, search for the last "exceeding" span element (compared to others bullets).
      if (!activeStateDescriptor.length) {
        var spans = $oldBullet.children('span');
        var spanCountInOthersBullets = $othersBullets.toArray().map(function (b) {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).children('span').length;
        });

        // If there is an exceeding span element, use it as current slide descriptor
        if (spanCountInOthersBullets.every(function (count) {
          return count < spans.length;
        })) {
          activeStateDescriptor = spans.last();
          activeStateDescriptor.attr('data-slide-active-label', '');
        }
      }

      // Move the current slide descriptor to the new slide button
      if (activeStateDescriptor.length) {
        activeStateDescriptor.detach();
        $newBullet.append(activeStateDescriptor);
      }
    }

    /**
    * Destroys the carousel and hides the element.
    * @function
    */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
    }
  }]);
}(Plugin);
Orbit.defaults = {
  /**
  * Tells the JS to look for and loadBullets.
  * @option
   * @type {boolean}
  * @default true
  */
  bullets: true,
  /**
  * Tells the JS to apply event listeners to nav buttons
  * @option
   * @type {boolean}
  * @default true
  */
  navButtons: true,
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-right'
  */
  animInFromRight: 'slide-in-right',
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-right'
  */
  animOutToRight: 'slide-out-right',
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-left'
  *
  */
  animInFromLeft: 'slide-in-left',
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-left'
  */
  animOutToLeft: 'slide-out-left',
  /**
  * Allows Orbit to automatically animate on page load.
  * @option
   * @type {boolean}
  * @default true
  */
  autoPlay: true,
  /**
  * Amount of time, in ms, between slide transitions
  * @option
   * @type {number}
  * @default 5000
  */
  timerDelay: 5000,
  /**
  * Allows Orbit to infinitely loop through the slides
  * @option
   * @type {boolean}
  * @default true
  */
  infiniteWrap: true,
  /**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
   * @type {boolean}
  * @default true
  */
  swipe: true,
  /**
  * Allows the timing function to pause animation on hover.
  * @option
   * @type {boolean}
  * @default true
  */
  pauseOnHover: true,
  /**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
   * @type {boolean}
  * @default true
  */
  accessible: true,
  /**
  * Class applied to the container of Orbit
  * @option
   * @type {string}
  * @default 'orbit-container'
  */
  containerClass: 'orbit-container',
  /**
  * Class applied to individual slides.
  * @option
   * @type {string}
  * @default 'orbit-slide'
  */
  slideClass: 'orbit-slide',
  /**
  * Class applied to the bullet container. You're welcome.
  * @option
   * @type {string}
  * @default 'orbit-bullets'
  */
  boxOfBullets: 'orbit-bullets',
  /**
  * Class applied to the `next` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-next'
  */
  nextClass: 'orbit-next',
  /**
  * Class applied to the `previous` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-previous'
  */
  prevClass: 'orbit-previous',
  /**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
  * @option
   * @type {boolean}
  * @default true
  */
  useMUI: true
};
var MenuPlugins$1 = {
  dropdown: {
    cssClass: 'dropdown',
    plugin: DropdownMenu
  },
  drilldown: {
    cssClass: 'drilldown',
    plugin: Drilldown
  },
  accordion: {
    cssClass: 'accordion-menu',
    plugin: AccordionMenu
  }
};

// import "foundation.util.triggers.js";

/**
 * ResponsiveMenu module.
 * @module foundation.responsiveMenu
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */
var ResponsiveMenu = /*#__PURE__*/function (_Plugin) {
  function ResponsiveMenu() {
    _classCallCheck(this, ResponsiveMenu);
    return _callSuper(this, ResponsiveMenu, arguments);
  }
  _inherits(ResponsiveMenu, _Plugin);
  return _createClass(ResponsiveMenu, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of a responsive menu.
     * @class
     * @name ResponsiveMenu
     * @fires ResponsiveMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.rules = this.$element.data('responsive-menu');
      this.currentMq = null;
      this.currentPlugin = null;
      this.className = 'ResponsiveMenu'; // ie9 back compat

      this._init();
      this._events();
    }

    /**
     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
     * @function
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      MediaQuery._init();
      // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
      if (typeof this.rules === 'string') {
        var rulesTree = {};

        // Parse rules from "classes" pulled from data attribute
        var rules = this.rules.split(' ');

        // Iterate through every rule found
        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i].split('-');
          var ruleSize = rule.length > 1 ? rule[0] : 'small';
          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
          if (MenuPlugins$1[rulePlugin] !== null) {
            rulesTree[ruleSize] = MenuPlugins$1[rulePlugin];
          }
        }
        this.rules = rulesTree;
      }
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().isEmptyObject(this.rules)) {
        this._checkMediaQueries();
      }
      // Add data-mutate since children may need it.
      this.$element.attr('data-mutate', this.$element.attr('data-mutate') || GetYoDigits(6, 'responsive-menu'));
    }

    /**
     * Initializes events for the Menu.
     * @function
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
        _this._checkMediaQueries();
      });
      // $(window).on('resize.zf.ResponsiveMenu', function() {
      //   _this._checkMediaQueries();
      // });
    }

    /**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */
  }, {
    key: "_checkMediaQueries",
    value: function _checkMediaQueries() {
      var matchedMq,
        _this = this;
      // Iterate through each rule and find the last matching rule
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(this.rules, function (key) {
        if (MediaQuery.atLeast(key)) {
          matchedMq = key;
        }
      });

      // No match? No dice
      if (!matchedMq) return;

      // Plugin already initialized? We good
      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;

      // Remove existing plugin-specific CSS classes
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(MenuPlugins$1, function (key, value) {
        _this.$element.removeClass(value.cssClass);
      });

      // Add the CSS class for the new plugin
      this.$element.addClass(this.rules[matchedMq].cssClass);

      // Create an instance of the new plugin
      if (this.currentPlugin) this.currentPlugin.destroy();
      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
    }

    /**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.currentPlugin.destroy();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('.zf.ResponsiveMenu');
    }
  }]);
}(Plugin);
ResponsiveMenu.defaults = {};

/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion
 */
var ResponsiveToggle = /*#__PURE__*/function (_Plugin) {
  function ResponsiveToggle() {
    _classCallCheck(this, ResponsiveToggle);
    return _callSuper(this, ResponsiveToggle, arguments);
  }
  _inherits(ResponsiveToggle, _Plugin);
  return _createClass(ResponsiveToggle, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of Tab Bar.
     * @class
     * @name ResponsiveToggle
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, ResponsiveToggle.defaults, this.$element.data(), options);
      this.className = 'ResponsiveToggle'; // ie9 back compat

      this._init();
      this._events();
    }

    /**
     * Initializes the tab bar by finding the target element, toggling element, and running update().
     * @function
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      MediaQuery._init();
      var targetID = this.$element.data('responsive-toggle');
      if (!targetID) {
        console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
      }
      this.$targetMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetID));
      this.$toggler = this.$element.find('[data-toggle]').filter(function () {
        var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');
        return target === targetID || target === "";
      });
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, this.options, this.$targetMenu.data());

      // If they were set, parse the animation classes
      if (this.options.animate) {
        var input = this.options.animate.split(' ');
        this.animationIn = input[0];
        this.animationOut = input[1] || null;
      }
      this._update();
    }

    /**
     * Adds necessary event handlers for the tab bar to work.
     * @function
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      this._updateMqHandler = this._update.bind(this);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._updateMqHandler);
      this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
    }

    /**
     * Checks the current media query to determine if the tab bar should be visible or hidden.
     * @function
     * @private
     */
  }, {
    key: "_update",
    value: function _update() {
      // Mobile
      if (!MediaQuery.atLeast(this.options.hideFor)) {
        this.$element.show();
        this.$targetMenu.hide();
      }

      // Desktop
      else {
        this.$element.hide();
        this.$targetMenu.show();
      }
    }

    /**
     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
     * @function
     * @fires ResponsiveToggle#toggled
     */
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var _this = this;
      if (!MediaQuery.atLeast(this.options.hideFor)) {
        /**
         * Fires when the element attached to the tab bar toggles.
         * @event ResponsiveToggle#toggled
         */
        if (this.options.animate) {
          if (this.$targetMenu.is(':hidden')) {
            Motion.animateIn(this.$targetMenu, this.animationIn, function () {
              _this.$element.trigger('toggled.zf.responsiveToggle');
              _this.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');
            });
          } else {
            Motion.animateOut(this.$targetMenu, this.animationOut, function () {
              _this.$element.trigger('toggled.zf.responsiveToggle');
            });
          }
        } else {
          this.$targetMenu.toggle(0);
          this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');
          this.$element.trigger('toggled.zf.responsiveToggle');
        }
      }
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.responsiveToggle');
      this.$toggler.off('.zf.responsiveToggle');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._updateMqHandler);
    }
  }]);
}(Plugin);
ResponsiveToggle.defaults = {
  /**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */
  hideFor: 'medium',
  /**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};

/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */
var Reveal = /*#__PURE__*/function (_Plugin) {
  function Reveal() {
    _classCallCheck(this, Reveal);
    return _callSuper(this, Reveal, arguments);
  }
  _inherits(Reveal, _Plugin);
  return _createClass(Reveal, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of Reveal.
     * @class
     * @name Reveal
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Reveal.defaults, this.$element.data(), options);
      this.className = 'Reveal'; // ie9 back compat
      this._init();

      // Touch and Triggers init are idempotent, just need to make sure they are initialized
      Touch.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      Keyboard.register('Reveal', {
        'ESCAPE': 'close'
      });
    }

    /**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;
      MediaQuery._init();
      this.id = this.$element.attr('id');
      this.isActive = false;
      this.cached = {
        mq: MediaQuery.current
      };
      this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(this.id, "\"]")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(this.id, "\"]")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat(this.id, "\"]"));
      this.$anchor.attr({
        'aria-controls': this.id,
        'aria-haspopup': 'dialog',
        'tabindex': 0
      });
      if (this.options.fullScreen || this.$element.hasClass('full')) {
        this.options.fullScreen = true;
        this.options.overlay = false;
      }
      if (this.options.overlay && !this.$overlay) {
        this.$overlay = this._makeOverlay(this.id);
      }
      this.$element.attr({
        'role': 'dialog',
        'aria-hidden': true,
        'data-yeti-box': this.id,
        'data-resize': this.id
      });
      if (this.$overlay) {
        this.$element.detach().appendTo(this.$overlay);
      } else {
        this.$element.detach().appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo));
        this.$element.addClass('without-overlay');
      }
      this._events();
      if (this.options.deepLink && window.location.hash === "#".concat(this.id)) {
        this.onLoadListener = onLoad(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
          return _this2.open();
        });
      }
    }

    /**
     * Creates an overlay div to display behind the modal.
     * @private
     */
  }, {
    key: "_makeOverlay",
    value: function _makeOverlay() {
      var additionalOverlayClasses = '';
      if (this.options.additionalOverlayClasses) {
        additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;
      }
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);
    }

    /**
     * Updates position of modal
     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
     * @private
     */
  }, {
    key: "_updatePosition",
    value: function _updatePosition() {
      var width = this.$element.outerWidth();
      var outerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
      var height = this.$element.outerHeight();
      var outerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
      var left,
        top = null;
      if (this.options.hOffset === 'auto') {
        left = parseInt((outerWidth - width) / 2, 10);
      } else {
        left = parseInt(this.options.hOffset, 10);
      }
      if (this.options.vOffset === 'auto') {
        if (height > outerHeight) {
          top = parseInt(Math.min(100, outerHeight / 10), 10);
        } else {
          top = parseInt((outerHeight - height) / 4, 10);
        }
      } else if (this.options.vOffset !== null) {
        top = parseInt(this.options.vOffset, 10);
      }
      if (top !== null) {
        this.$element.css({
          top: top + 'px'
        });
      }

      // only worry about left if we don't have an overlay or we have a horizontal offset,
      // otherwise we're perfectly in the middle
      if (!this.$overlay || this.options.hOffset !== 'auto') {
        this.$element.css({
          left: left + 'px'
        });
        this.$element.css({
          margin: '0px'
        });
      }
    }

    /**
     * Adds event handlers for the modal.
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      var _this3 = this;
      var _this = this;
      this.$element.on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': function closeZfTrigger(event, $element) {
          if (event.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parents('[data-closable]')[0] === $element) {
            // only close reveal when it's explicitly called
            return _this3.close.apply(_this3);
          }
        },
        'toggle.zf.trigger': this.toggle.bind(this),
        'resizeme.zf.trigger': function resizemeZfTrigger() {
          _this._updatePosition();
        }
      });
      if (this.options.closeOnClick && this.options.overlay) {
        this.$overlay.off('.zf.reveal').on('click.zf.dropdown tap.zf.dropdown', function (e) {
          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(document, e.target)) {
            return;
          }
          _this.close();
        });
      }
      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this));
      }
    }

    /**
     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
     * @private
     */
  }, {
    key: "_handleState",
    value: function _handleState() {
      if (window.location.hash === '#' + this.id && !this.isActive) {
        this.open();
      } else {
        this.close();
      }
    }

    /**
    * Disables the scroll when Reveal is shown to prevent the background from shifting
    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
    */
  }, {
    key: "_disableScroll",
    value: function _disableScroll(scrollTop) {
      scrollTop = scrollTop || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top", -scrollTop);
      }
    }

    /**
    * Reenables the scroll when Reveal closes
    * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
    */
  }, {
    key: "_enableScroll",
    value: function _enableScroll(scrollTop) {
      scrollTop = scrollTop || parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"), 10);
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top", "");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(-scrollTop);
      }
    }

    /**
     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */
  }, {
    key: "open",
    value: function open() {
      var _this4 = this;
      // either update or replace browser history
      var hash = "#".concat(this.id);
      if (this.options.deepLink && window.location.hash !== hash) {
        if (window.history.pushState) {
          if (this.options.updateHistory) {
            window.history.pushState({}, '', hash);
          } else {
            window.history.replaceState({}, '', hash);
          }
        } else {
          window.location.hash = hash;
        }
      }

      // Remember anchor that opened it to set focus back later, have general anchors as fallback
      this.$activeAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement).is(this.$anchor) ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement) : this.$anchor;
      this.isActive = true;

      // Make elements invisible, but remove display: none so we can get size and positioning
      this.$element.css({
        'visibility': 'hidden'
      }).show().scrollTop(0);
      if (this.options.overlay) {
        this.$overlay.css({
          'visibility': 'hidden'
        }).show();
      }
      this._updatePosition();
      this.$element.hide().css({
        'visibility': ''
      });
      if (this.$overlay) {
        this.$overlay.css({
          'visibility': ''
        }).hide();
        if (this.$element.hasClass('fast')) {
          this.$overlay.addClass('fast');
        } else if (this.$element.hasClass('slow')) {
          this.$overlay.addClass('slow');
        }
      }
      if (!this.options.multipleOpened) {
        /**
         * Fires immediately before the modal opens.
         * Closes any other modals that are currently open
         * @event Reveal#closeme
         */
        this.$element.trigger('closeme.zf.reveal', this.id);
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
        this._disableScroll();
      }
      var _this = this;

      // Motion UI method of reveal
      if (this.options.animationIn) {
        var afterAnimation = function afterAnimation() {
          _this.$element.attr({
            'aria-hidden': false,
            'tabindex': -1
          }).focus();
          _this._addGlobalClasses();
          Keyboard.trapFocus(_this.$element);
        };
        if (this.options.overlay) {
          Motion.animateIn(this.$overlay, 'fade-in');
        }
        Motion.animateIn(this.$element, this.options.animationIn, function () {
          if (_this4.$element) {
            // protect against object having been removed
            _this4.focusableElements = Keyboard.findFocusable(_this4.$element);
            afterAnimation();
          }
        });
      }
      // jQuery method of reveal
      else {
        if (this.options.overlay) {
          this.$overlay.show(0);
        }
        this.$element.show(this.options.showDelay);
      }

      // handle accessibility
      this.$element.attr({
        'aria-hidden': false,
        'tabindex': -1
      }).focus();
      Keyboard.trapFocus(this.$element);
      this._addGlobalClasses();
      this._addGlobalListeners();

      /**
       * Fires when the modal has successfully opened.
       * @event Reveal#open
       */
      this.$element.trigger('open.zf.reveal');
    }

    /**
     * Adds classes and listeners on document required by open modals.
     *
     * The following classes are added and updated:
     * - `.is-reveal-open` - Prevents the scroll on document
     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the
     *                       scroll was not disabled. This prevent a "shift" of the page content due
     *                       the scrollbar disappearing when the modal opens.
     *
     * @private
     */
  }, {
    key: "_addGlobalClasses",
    value: function _addGlobalClasses() {
      var updateScrollbarClass = function updateScrollbarClass() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('zf-has-scroll', !!(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()));
      };
      this.$element.on('resizeme.zf.trigger.revealScrollbarListener', function () {
        return updateScrollbarClass();
      });
      updateScrollbarClass();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('is-reveal-open');
    }

    /**
     * Removes classes and listeners on document that were required by open modals.
     * @private
     */
  }, {
    key: "_removeGlobalClasses",
    value: function _removeGlobalClasses() {
      this.$element.off('resizeme.zf.trigger.revealScrollbarListener');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('is-reveal-open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('zf-has-scroll');
    }

    /**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */
  }, {
    key: "_addGlobalListeners",
    value: function _addGlobalListeners() {
      var _this = this;
      if (!this.$element) {
        return;
      } // If we're in the middle of cleanup, don't freak out
      this.focusableElements = Keyboard.findFocusable(this.$element);
      if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click.zf.dropdown tap.zf.dropdown', function (e) {
          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(document, e.target)) {
            return;
          }
          _this.close();
        });
      }
      if (this.options.closeOnEsc) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('keydown.zf.reveal', function (e) {
          Keyboard.handleKey(e, 'Reveal', {
            close: function close() {
              if (_this.options.closeOnEsc) {
                _this.close();
              }
            }
          });
        });
      }
    }

    /**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */
  }, {
    key: "close",
    value: function close() {
      if (!this.isActive || !this.$element.is(':visible')) {
        return false;
      }
      var _this = this;

      // Motion UI method of hiding
      if (this.options.animationOut) {
        if (this.options.overlay) {
          Motion.animateOut(this.$overlay, 'fade-out');
        }
        Motion.animateOut(this.$element, this.options.animationOut, finishUp);
      }
      // jQuery method of hiding
      else {
        this.$element.hide(this.options.hideDelay);
        if (this.options.overlay) {
          this.$overlay.hide(0, finishUp);
        } else {
          finishUp();
        }
      }

      // Conditionals to remove extra event listeners added on open
      if (this.options.closeOnEsc) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('keydown.zf.reveal');
      }
      if (!this.options.overlay && this.options.closeOnClick) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('click.zf.dropdown tap.zf.dropdown');
      }
      this.$element.off('keydown.zf.reveal');
      function finishUp() {
        // Get the current top before the modal is closed and restore the scroll after.
        // TODO: use component properties instead of HTML properties
        // See https://github.com/foundation/foundation-sites/pull/10786
        var scrollTop = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"), 10);
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
          _this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal
        }
        Keyboard.releaseFocus(_this.$element);
        _this.$element.attr('aria-hidden', true);
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
          _this._enableScroll(scrollTop);
        }

        /**
        * Fires when the modal is done closing.
        * @event Reveal#closed
        */
        _this.$element.trigger('closed.zf.reveal');
      }

      /**
      * Resets the modal content
      * This prevents a running video to keep going in the background
      */
      if (this.options.resetOnClose) {
        this.$element.html(this.$element.html());
      }
      this.isActive = false;
      // If deepLink and we did not switched to an other modal...
      if (_this.options.deepLink && window.location.hash === "#".concat(this.id)) {
        // Remove the history hash
        if (window.history.replaceState) {
          var urlWithoutHash = window.location.pathname + window.location.search;
          if (this.options.updateHistory) {
            window.history.pushState({}, '', urlWithoutHash); // remove the hash
          } else {
            window.history.replaceState('', document.title, urlWithoutHash);
          }
        } else {
          window.location.hash = '';
        }
      }
      this.$activeAnchor.focus();
    }

    /**
     * Toggles the open/closed state of a modal.
     * @function
     */
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActive) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "_destroy",
    value:
    /**
     * Destroys an instance of a modal.
     * @function
     */
    function _destroy() {
      if (this.options.overlay) {
        this.$element.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()
        this.$overlay.hide().off().remove();
      }
      this.$element.hide().off();
      this.$anchor.off('.zf');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(".zf.reveal:".concat(this.id));
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
        this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal
      }
    }
  }]);
}(Plugin);
Reveal.defaults = {
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationIn: '',
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationOut: '',
  /**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  showDelay: 0,
  /**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  hideDelay: 0,
  /**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,
  /**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnEsc: true,
  /**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
  multipleOpened: false,
  /**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  vOffset: 'auto',
  /**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  hOffset: 'auto',
  /**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
  fullScreen: false,
  /**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
  overlay: true,
  /**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
  resetOnClose: false,
  /**
   * Link the location hash to the modal.
   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,
  /**
   * If `deepLink` is enabled, update the browser history with the open modal
   * @option
   * @default false
   */
  updateHistory: false,
  /**
  * Allows the modal to append to custom div.
  * @option
  * @type {string}
  * @default "body"
  */
  appendTo: "body",
  /**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */
  additionalOverlayClasses: ''
};

/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */
var Slider = /*#__PURE__*/function (_Plugin) {
  function Slider() {
    _classCallCheck(this, Slider);
    return _callSuper(this, Slider, arguments);
  }
  _inherits(Slider, _Plugin);
  return _createClass(Slider, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of a slider control.
     * @class
     * @name Slider
     * @param {jQuery} element - jQuery object to make into a slider control.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Slider.defaults, this.$element.data(), options);
      this.className = 'Slider'; // ie9 back compat
      this.initialized = false;

      // Touch and Triggers inits are idempotent, we just need to make sure it's initialied.
      Touch.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      this._init();
      Keyboard.register('Slider', {
        'ltr': {
          'ARROW_RIGHT': 'increase',
          'ARROW_UP': 'increase',
          'ARROW_DOWN': 'decrease',
          'ARROW_LEFT': 'decrease',
          'SHIFT_ARROW_RIGHT': 'increaseFast',
          'SHIFT_ARROW_UP': 'increaseFast',
          'SHIFT_ARROW_DOWN': 'decreaseFast',
          'SHIFT_ARROW_LEFT': 'decreaseFast',
          'HOME': 'min',
          'END': 'max'
        },
        'rtl': {
          'ARROW_LEFT': 'increase',
          'ARROW_RIGHT': 'decrease',
          'SHIFT_ARROW_LEFT': 'increaseFast',
          'SHIFT_ARROW_RIGHT': 'decreaseFast'
        }
      });
    }

    /**
     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
     * @function
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      this.inputs = this.$element.find('input');
      this.handles = this.$element.find('[data-slider-handle]');
      this.$handle = this.handles.eq(0);
      this.$input = this.inputs.length ? this.inputs.eq(0) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle.attr('aria-controls')));
      this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);
      if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
        this.options.disabled = true;
        this.$element.addClass(this.options.disabledClass);
      }
      if (!this.inputs.length) {
        this.inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default()().add(this.$input);
        this.options.binding = true;
      }
      this._setInitAttr(0);
      if (this.handles[1]) {
        this.options.doubleSided = true;
        this.$handle2 = this.handles.eq(1);
        this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle2.attr('aria-controls')));
        if (!this.inputs[1]) {
          this.inputs = this.inputs.add(this.$input2);
        }

        // this.$handle.triggerHandler('click.zf.slider');
        this._setInitAttr(1);
      }

      // Set handle positions
      this.setHandles();
      this._events();
      this.initialized = true;
    }
  }, {
    key: "setHandles",
    value: function setHandles() {
      var _this2 = this;
      if (this.handles[1]) {
        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), function () {
          _this2._setHandlePos(_this2.$handle2, _this2.inputs.eq(1).val());
        });
      } else {
        this._setHandlePos(this.$handle, this.inputs.eq(0).val());
      }
    }
  }, {
    key: "_reflow",
    value: function _reflow() {
      this.setHandles();
    }
    /**
    * @function
    * @private
    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
    */
  }, {
    key: "_pctOfBar",
    value: function _pctOfBar(value) {
      var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);
      switch (this.options.positionValueFunction) {
        case "pow":
          pctOfBar = this._logTransform(pctOfBar);
          break;
        case "log":
          pctOfBar = this._powTransform(pctOfBar);
          break;
      }
      return pctOfBar.toFixed(2);
    }

    /**
    * @function
    * @private
    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
    */
  }, {
    key: "_value",
    value: function _value(pctOfBar) {
      switch (this.options.positionValueFunction) {
        case "pow":
          pctOfBar = this._powTransform(pctOfBar);
          break;
        case "log":
          pctOfBar = this._logTransform(pctOfBar);
          break;
      }
      var value;
      if (this.options.vertical) {
        // linear interpolation which is working with negative values for start
        // https://math.stackexchange.com/a/1019084
        value = parseFloat(this.options.end) + pctOfBar * (this.options.start - this.options.end);
      } else {
        value = (this.options.end - this.options.start) * pctOfBar + parseFloat(this.options.start);
      }
      return value;
    }

    /**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
    */
  }, {
    key: "_logTransform",
    value: function _logTransform(value) {
      return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
    }

    /**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
    */
  }, {
    key: "_powTransform",
    value: function _powTransform(value) {
      return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
    }

    /**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     * @fires Slider#changed
     */
  }, {
    key: "_setHandlePos",
    value: function _setHandlePos($hndl, location, cb) {
      // don't move if the slider has been disabled since its initialization
      if (this.$element.hasClass(this.options.disabledClass)) {
        return;
      }
      //might need to alter that slightly for bars that will have odd number selections.
      location = parseFloat(location); //on input change events, convert string to number...grumble.

      // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max
      if (location < this.options.start) {
        location = this.options.start;
      } else if (location > this.options.end) {
        location = this.options.end;
      }
      var isDbl = this.options.doubleSided;
      if (isDbl) {
        //this block is to prevent 2 handles from crossing eachother. Could/should be improved.
        if (this.handles.index($hndl) === 0) {
          var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
          location = location >= h2Val ? h2Val - this.options.step : location;
        } else {
          var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
          location = location <= h1Val ? h1Val + this.options.step : location;
        }
      }
      var _this = this,
        vert = this.options.vertical,
        hOrW = vert ? 'height' : 'width',
        lOrT = vert ? 'top' : 'left',
        handleDim = $hndl[0].getBoundingClientRect()[hOrW],
        elemDim = this.$element[0].getBoundingClientRect()[hOrW],
        //percentage of bar min/max value based on click or drag point
        pctOfBar = this._pctOfBar(location),
        //number of actual pixels to shift the handle, based on the percentage obtained above
        pxToMove = (elemDim - handleDim) * pctOfBar,
        //percentage of bar to shift the handle
        movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal);
      //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value
      location = parseFloat(location.toFixed(this.options.decimal));
      // declare empty object for css adjustments, only used with 2 handled-sliders
      var css = {};
      this._setValues($hndl, location);

      // TODO update to calculate based on values set to respective inputs??
      if (isDbl) {
        var isLeftHndl = this.handles.index($hndl) === 0,
          //empty variable, will be used for min-height/width for fill bar
          dim,
          //percentage w/h of the handle compared to the slider bar
          handlePct = Math.floor(percent(handleDim, elemDim) * 100);
        //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar
        if (isLeftHndl) {
          //left or top percentage value to apply to the fill bar.
          css[lOrT] = "".concat(movement, "%");
          //calculate the new min-height/width for the fill bar.
          dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct;
          //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
          //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.
          if (cb && typeof cb === 'function') {
            cb();
          } //this is only needed for the initialization of 2 handled sliders
        } else {
          //just caching the value of the left/bottom handle's left/top property
          var handlePos = parseFloat(this.$handle[0].style[lOrT]);
          //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
          //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself
          dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
        }
        // assign the min-height/width to our css object
        css["min-".concat(hOrW)] = "".concat(dim, "%");
      }

      //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.
      var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;
      Move(moveTime, $hndl, function () {
        // adjusting the left/top property of the handle, based on the percentage calculated above
        // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
        // fall back to next best guess.
        if (isNaN(movement)) {
          $hndl.css(lOrT, "".concat(pctOfBar * 100, "%"));
        } else {
          $hndl.css(lOrT, "".concat(movement, "%"));
        }
        if (!_this.options.doubleSided) {
          //if single-handled, a simple method to expand the fill bar
          _this.$fill.css(hOrW, "".concat(pctOfBar * 100, "%"));
        } else {
          //otherwise, use the css object we created above
          _this.$fill.css(css);
        }
      });
      if (this.initialized) {
        this.$element.one('finished.zf.animate', function () {
          /**
           * Fires when the handle is done moving.
           * @event Slider#moved
           */
          _this.$element.trigger('moved.zf.slider', [$hndl]);
        });
        /**
         * Fires when the value has not been change for a given time.
         * @event Slider#changed
         */
        clearTimeout(_this.timeout);
        _this.timeout = setTimeout(function () {
          _this.$element.trigger('changed.zf.slider', [$hndl]);
        }, _this.options.changedDelay);
      }
    }

    /**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */
  }, {
    key: "_setInitAttr",
    value: function _setInitAttr(idx) {
      var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
      var id = this.inputs.eq(idx).attr('id') || GetYoDigits(6, 'slider');
      this.inputs.eq(idx).attr({
        'id': id,
        'max': this.options.end,
        'min': this.options.start,
        'step': this.options.step
      });
      this.inputs.eq(idx).val(initVal);
      this.handles.eq(idx).attr({
        'role': 'slider',
        'aria-controls': id,
        'aria-valuemax': this.options.end,
        'aria-valuemin': this.options.start,
        'aria-valuenow': initVal,
        'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
        'tabindex': 0
      });
    }

    /**
     * Sets the input and `aria-valuenow` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */
  }, {
    key: "_setValues",
    value: function _setValues($handle, val) {
      var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
      this.inputs.eq(idx).val(val);
      $handle.attr('aria-valuenow', val);
    }

    /**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the `event` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */
  }, {
    key: "_handleEvent",
    value: function _handleEvent(e, $handle, val) {
      var value;
      if (!val) {
        //click or drag events
        e.preventDefault();
        var _this = this,
          vertical = this.options.vertical,
          param = vertical ? 'height' : 'width',
          direction = vertical ? 'top' : 'left',
          eventOffset = vertical ? e.pageY : e.pageX,
          barDim = this.$element[0].getBoundingClientRect()[param],
          windowScroll = vertical ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() : jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollLeft();
        var elemOffset = this.$element.offset()[direction];

        // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
        // best way to guess this is simulated is if clientY == pageY
        if (e.clientY === e.pageY) {
          eventOffset = eventOffset + windowScroll;
        }
        var eventFromBar = eventOffset - elemOffset;
        var barXY;
        if (eventFromBar < 0) {
          barXY = 0;
        } else if (eventFromBar > barDim) {
          barXY = barDim;
        } else {
          barXY = eventFromBar;
        }
        var offsetPct = percent(barXY, barDim);
        value = this._value(offsetPct);

        // turn everything around for RTL, yay math!
        if (rtl() && !this.options.vertical) {
          value = this.options.end - value;
        }
        value = _this._adjustValue(null, value);
        if (!$handle) {
          //figure out which handle it is, pass it to the next function.
          var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
            secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
          $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
        }
      } else {
        //change event on input
        value = this._adjustValue(null, val);
      }
      this._setHandlePos($handle, value);
    }

    /**
     * Adjustes value for handle in regard to step value. returns adjusted value
     * @function
     * @private
     * @param {jQuery} $handle - the selected handle.
     * @param {Number} value - value to adjust. used if $handle is falsy
     */
  }, {
    key: "_adjustValue",
    value: function _adjustValue($handle, value) {
      var val,
        step = this.options.step,
        div = parseFloat(step / 2),
        left,
        previousVal,
        nextVal;
      if (!!$handle) {
        val = parseFloat($handle.attr('aria-valuenow'));
      } else {
        val = value;
      }
      if (val >= 0) {
        left = val % step;
      } else {
        left = step + val % step;
      }
      previousVal = val - left;
      nextVal = previousVal + step;
      if (left === 0) {
        return val;
      }
      val = val >= previousVal + div ? nextVal : previousVal;
      return val;
    }

    /**
     * Adds event listeners to the slider elements.
     * @function
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      this._eventsForHandle(this.$handle);
      if (this.handles[1]) {
        this._eventsForHandle(this.$handle2);
      }
    }

    /**
     * Adds event listeners a particular handle
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */
  }, {
    key: "_eventsForHandle",
    value: function _eventsForHandle($handle) {
      var _this = this,
        curHandle;
      var handleChangeEvent = function handleChangeEvent(e) {
        var idx = _this.inputs.index(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
        _this._handleEvent(e, _this.handles.eq(idx), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
      };

      // IE only triggers the change event when the input loses focus which strictly follows the HTML specification
      // listen for the enter key and trigger a change
      // @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events
      this.inputs.off('keyup.zf.slider').on('keyup.zf.slider', function (e) {
        if (e.keyCode === 13) handleChangeEvent.call(this, e);
      });
      this.inputs.off('change.zf.slider').on('change.zf.slider', handleChangeEvent);
      if (this.options.clickSelect) {
        this.$element.off('click.zf.slider').on('click.zf.slider', function (e) {
          if (_this.$element.data('dragging')) {
            return false;
          }
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('[data-slider-handle]')) {
            if (_this.options.doubleSided) {
              _this._handleEvent(e);
            } else {
              _this._handleEvent(e, _this.$handle);
            }
          }
        });
      }
      if (this.options.draggable) {
        this.handles.addTouch();
        var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
        $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function (e) {
          $handle.addClass('is-dragging');
          _this.$fill.addClass('is-dragging'); //
          _this.$element.data('dragging', true);
          curHandle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
          $body.on('mousemove.zf.slider', function (ev) {
            ev.preventDefault();
            _this._handleEvent(ev, curHandle);
          }).on('mouseup.zf.slider', function (ev) {
            _this._handleEvent(ev, curHandle);
            $handle.removeClass('is-dragging');
            _this.$fill.removeClass('is-dragging');
            _this.$element.data('dragging', false);
            $body.off('mousemove.zf.slider mouseup.zf.slider');
          });
        })
        // prevent events triggered by touch
        .on('selectstart.zf.slider touchmove.zf.slider', function (e) {
          e.preventDefault();
        });
      }
      $handle.off('keydown.zf.slider').on('keydown.zf.slider', function (e) {
        var _$handle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        _this.options.doubleSided ? _this.handles.index(_$handle) : 0;
        var oldValue = parseFloat($handle.attr('aria-valuenow')),
          newValue;

        // handle keyboard event with keyboard util
        Keyboard.handleKey(e, 'Slider', {
          decrease: function decrease() {
            newValue = oldValue - _this.options.step;
          },
          increase: function increase() {
            newValue = oldValue + _this.options.step;
          },
          decreaseFast: function decreaseFast() {
            newValue = oldValue - _this.options.step * 10;
          },
          increaseFast: function increaseFast() {
            newValue = oldValue + _this.options.step * 10;
          },
          min: function min() {
            newValue = _this.options.start;
          },
          max: function max() {
            newValue = _this.options.end;
          },
          handled: function handled() {
            // only set handle pos when event was handled specially
            e.preventDefault();
            _this._setHandlePos(_$handle, newValue);
          }
        });
        /*if (newValue) { // if pressed key has special function, update value
          e.preventDefault();
          _this._setHandlePos(_$handle, newValue);
        }*/
      });
    }

    /**
     * Destroys the slider plugin.
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.handles.off('.zf.slider');
      this.inputs.off('.zf.slider');
      this.$element.off('.zf.slider');
      clearTimeout(this.timeout);
    }
  }]);
}(Plugin);
Slider.defaults = {
  /**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */
  start: 0,
  /**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */
  end: 100,
  /**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */
  step: 1,
  /**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */
  initialStart: 0,
  /**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */
  initialEnd: 100,
  /**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */
  binding: false,
  /**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  clickSelect: true,
  /**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */
  vertical: false,
  /**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  draggable: true,
  /**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @type {boolean}
   * @default false
   */
  disabled: false,
  /**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */
  doubleSided: false,
  /**
   * Potential future feature.
   */
  // steps: 100,
  /**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */
  decimal: 2,
  /**
   * Time delay for dragged elements.
   */
  // dragDelay: 0,
  /**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */
  moveTime: 200,
  //update this if changing the transition time in the sass
  /**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */
  disabledClass: 'disabled',
  /**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */
  invertVertical: false,
  /**
   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */
  changedDelay: 500,
  /**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */
  nonLinearBase: 5,
  /**
  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */
  positionValueFunction: 'linear'
};
function percent(frac, num) {
  return frac / num;
}
function absPosition($handle, dir, clickPos, param) {
  return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
}
function baseLog(base, value) {
  return Math.log(value) / Math.log(base);
}

/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */
var Sticky = /*#__PURE__*/function (_Plugin) {
  function Sticky() {
    _classCallCheck(this, Sticky);
    return _callSuper(this, Sticky, arguments);
  }
  _inherits(Sticky, _Plugin);
  return _createClass(Sticky, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of a sticky thing.
     * @class
     * @name Sticky
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Sticky.defaults, this.$element.data(), options);
      this.className = 'Sticky'; // ie9 back compat

      // Triggers init is idempotent, just need to make sure it is initialized
      Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      this._init();
    }

    /**
     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
     * @function
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      MediaQuery._init();
      var $parent = this.$element.parent('[data-sticky-container]'),
        id = this.$element[0].id || GetYoDigits(6, 'sticky'),
        _this = this;
      if ($parent.length) {
        this.$container = $parent;
      } else {
        this.wasWrapped = true;
        this.$element.wrap(this.options.container);
        this.$container = this.$element.parent();
      }
      this.$container.addClass(this.options.containerClass);
      this.$element.addClass(this.options.stickyClass).attr({
        'data-resize': id,
        'data-mutate': id
      });
      if (this.options.anchor !== '') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor).attr({
          'data-mutate': id
        });
      }
      this.scrollCount = this.options.checkEvery;
      this.isStuck = false;
      this.onLoadListener = onLoad(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        //We calculate the container height to have correct values for anchor points offset calculation.
        _this.containerHeight = _this.$element.css("display") === "none" ? 0 : _this.$element[0].getBoundingClientRect().height;
        _this.$container.css('height', _this.containerHeight);
        _this.elemHeight = _this.containerHeight;
        if (_this.options.anchor !== '') {
          _this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor);
        } else {
          _this._parsePoints();
        }
        _this._setSizes(function () {
          var scroll = window.pageYOffset;
          _this._calc(false, scroll);
          //Unstick the element will ensure that proper classes are set.
          if (!_this.isStuck) {
            _this._removeSticky(scroll >= _this.topPoint ? false : true);
          }
        });
        _this._events(id.split('-').reverse().join('-'));
      });
    }

    /**
     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
     * @function
     * @private
     */
  }, {
    key: "_parsePoints",
    value: function _parsePoints() {
      var top = this.options.topAnchor === "" ? 1 : this.options.topAnchor,
        btm = this.options.btmAnchor === "" ? document.documentElement.scrollHeight : this.options.btmAnchor,
        pts = [top, btm],
        breaks = {};
      for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
        var pt;
        if (typeof pts[i] === 'number') {
          pt = pts[i];
        } else {
          var place = pts[i].split(':'),
            anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(place[0]));
          pt = anchor.offset().top;
          if (place[1] && place[1].toLowerCase() === 'bottom') {
            pt += anchor[0].getBoundingClientRect().height;
          }
        }
        breaks[i] = pt;
      }
      this.points = breaks;
      return;
    }

    /**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */
  }, {
    key: "_events",
    value: function _events(id) {
      var _this = this,
        scrollListener = this.scrollListener = "scroll.zf.".concat(id);
      if (this.isOn) {
        return;
      }
      if (this.canStick) {
        this.isOn = true;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener).on(scrollListener, function () {
          if (_this.scrollCount === 0) {
            _this.scrollCount = _this.options.checkEvery;
            _this._setSizes(function () {
              _this._calc(false, window.pageYOffset);
            });
          } else {
            _this.scrollCount--;
            _this._calc(false, window.pageYOffset);
          }
        });
      }
      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {
        _this._eventsHandler(id);
      });
      this.$element.on('mutateme.zf.trigger', function () {
        _this._eventsHandler(id);
      });
      if (this.$anchor) {
        this.$anchor.on('mutateme.zf.trigger', function () {
          _this._eventsHandler(id);
        });
      }
    }

    /**
     * Handler for events.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */
  }, {
    key: "_eventsHandler",
    value: function _eventsHandler(id) {
      var _this = this,
        scrollListener = this.scrollListener = "scroll.zf.".concat(id);
      _this._setSizes(function () {
        _this._calc(false);
        if (_this.canStick) {
          if (!_this.isOn) {
            _this._events(id);
          }
        } else if (_this.isOn) {
          _this._pauseListeners(scrollListener);
        }
      });
    }

    /**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
     */
  }, {
    key: "_pauseListeners",
    value: function _pauseListeners(scrollListener) {
      this.isOn = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener);

      /**
       * Fires when the plugin is paused due to resize event shrinking the view.
       * @event Sticky#pause
       * @private
       */
      this.$element.trigger('pause.zf.sticky');
    }

    /**
     * Called on every `scroll` event and on `_init`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
     */
  }, {
    key: "_calc",
    value: function _calc(checkSizes, scroll) {
      if (checkSizes) {
        this._setSizes();
      }
      if (!this.canStick) {
        if (this.isStuck) {
          this._removeSticky(true);
        }
        return false;
      }
      if (!scroll) {
        scroll = window.pageYOffset;
      }
      if (scroll >= this.topPoint) {
        if (scroll <= this.bottomPoint) {
          if (!this.isStuck) {
            this._setSticky();
          }
        } else {
          if (this.isStuck) {
            this._removeSticky(false);
          }
        }
      } else {
        if (this.isStuck) {
          this._removeSticky(true);
        }
      }
    }

    /**
     * Causes the $element to become stuck.
     * Adds `position: fixed;`, and helper classes.
     * @fires Sticky#stuckto
     * @function
     * @private
     */
  }, {
    key: "_setSticky",
    value: function _setSticky() {
      var _this = this,
        stickTo = this.options.stickTo,
        mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
        notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
        css = {};
      css[mrgn] = "".concat(this.options[mrgn], "em");
      css[stickTo] = 0;
      css[notStuckTo] = 'auto';
      this.isStuck = true;
      this.$element.removeClass("is-anchored is-at-".concat(notStuckTo)).addClass("is-stuck is-at-".concat(stickTo)).css(css)
      /**
       * Fires when the $element has become `position: fixed;`
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
       * @event Sticky#stuckto
       */.trigger("sticky.zf.stuckto:".concat(stickTo));
      this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
        _this._setSizes();
      });
    }

    /**
     * Causes the $element to become unstuck.
     * Removes `position: fixed;`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */
  }, {
    key: "_removeSticky",
    value: function _removeSticky(isTop) {
      var stickTo = this.options.stickTo,
        stickToTop = stickTo === 'top',
        css = {},
        anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
        mrgn = stickToTop ? 'marginTop' : 'marginBottom',
        topOrBottom = isTop ? 'top' : 'bottom';
      css[mrgn] = 0;
      css.bottom = 'auto';
      if (isTop) {
        css.top = 0;
      } else {
        css.top = anchorPt;
      }
      this.isStuck = false;
      this.$element.removeClass("is-stuck is-at-".concat(stickTo)).addClass("is-anchored is-at-".concat(topOrBottom)).css(css)
      /**
       * Fires when the $element has become anchored.
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
       * @event Sticky#unstuckfrom
       */.trigger("sticky.zf.unstuckfrom:".concat(topOrBottom));
    }

    /**
     * Sets the $element and $container sizes for plugin.
     * Calls `_setBreakPoints`.
     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
     * @private
     */
  }, {
    key: "_setSizes",
    value: function _setSizes(cb) {
      this.canStick = MediaQuery.is(this.options.stickyOn);
      if (!this.canStick) {
        if (cb && typeof cb === 'function') {
          cb();
        }
      }
      var newElemWidth = this.$container[0].getBoundingClientRect().width,
        comp = window.getComputedStyle(this.$container[0]),
        pdngl = parseInt(comp['padding-left'], 10),
        pdngr = parseInt(comp['padding-right'], 10);
      if (this.$anchor && this.$anchor.length) {
        this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
      } else {
        this._parsePoints();
      }
      this.$element.css({
        'max-width': "".concat(newElemWidth - pdngl - pdngr, "px")
      });

      // Recalculate the height only if it is "dynamic"
      if (this.options.dynamicHeight || !this.containerHeight) {
        // Get the sticked element height and apply it to the container to "hold the place"
        var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
        newContainerHeight = this.$element.css("display") === "none" ? 0 : newContainerHeight;
        this.$container.css('height', newContainerHeight);
        this.containerHeight = newContainerHeight;
      }
      this.elemHeight = this.containerHeight;
      if (!this.isStuck) {
        if (this.$element.hasClass('is-at-bottom')) {
          var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
          this.$element.css('top', anchorPt);
        }
      }
      this._setBreakPoints(this.containerHeight, function () {
        if (cb && typeof cb === 'function') {
          cb();
        }
      });
    }

    /**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */
  }, {
    key: "_setBreakPoints",
    value: function _setBreakPoints(elemHeight, cb) {
      if (!this.canStick) {
        if (cb && typeof cb === 'function') {
          cb();
        } else {
          return false;
        }
      }
      var mTop = emCalc(this.options.marginTop),
        mBtm = emCalc(this.options.marginBottom),
        topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
        bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
        // topPoint = this.$anchor.offset().top || this.points[0],
        // bottomPoint = topPoint + this.anchorHeight || this.points[1],
        winHeight = window.innerHeight;
      if (this.options.stickTo === 'top') {
        topPoint -= mTop;
        bottomPoint -= elemHeight + mTop;
      } else if (this.options.stickTo === 'bottom') {
        topPoint -= winHeight - (elemHeight + mBtm);
        bottomPoint -= winHeight - mBtm;
      } else ;
      this.topPoint = topPoint;
      this.bottomPoint = bottomPoint;
      if (cb && typeof cb === 'function') {
        cb();
      }
    }

    /**
     * Destroys the current sticky element.
     * Resets the element to the top position first.
     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this._removeSticky(true);
      this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
        height: '',
        top: '',
        bottom: '',
        'max-width': ''
      }).off('resizeme.zf.trigger').off('mutateme.zf.trigger');
      if (this.$anchor && this.$anchor.length) {
        this.$anchor.off('change.zf.sticky');
      }
      if (this.scrollListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.scrollListener);
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
      if (this.wasWrapped) {
        this.$element.unwrap();
      } else {
        this.$container.removeClass(this.options.containerClass).css({
          height: ''
        });
      }
    }
  }]);
}(Plugin);
Sticky.defaults = {
  /**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */
  container: '<div data-sticky-container></div>',
  /**
   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
   * @option
   * @type {string}
   * @default 'top'
   */
  stickTo: 'top',
  /**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */
  anchor: '',
  /**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */
  topAnchor: '',
  /**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */
  btmAnchor: '',
  /**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginTop: 1,
  /**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginBottom: 1,
  /**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */
  stickyOn: 'medium',
  /**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @type {string}
   * @default 'sticky'
   */
  stickyClass: 'sticky',
  /**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */
  containerClass: 'sticky-container',
  /**
   * If true (by default), keep the sticky container the same height as the element. Otherwise, the container height is set once and does not change.
   * @option
   * @type {boolean}
   * @default true
   */
  dynamicHeight: true,
  /**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */
  checkEvery: -1
};

/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */
function emCalc(em) {
  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
}

/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.imageLoader if tabs contain images
 */
var Tabs = /*#__PURE__*/function (_Plugin) {
  function Tabs() {
    _classCallCheck(this, Tabs);
    return _callSuper(this, Tabs, arguments);
  }
  _inherits(Tabs, _Plugin);
  return _createClass(Tabs, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of tabs.
     * @class
     * @name Tabs
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Tabs.defaults, this.$element.data(), options);
      this.className = 'Tabs'; // ie9 back compat

      this._init();
      Keyboard.register('Tabs', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'previous',
        'ARROW_DOWN': 'next',
        'ARROW_LEFT': 'previous'
        // 'TAB': 'next',
        // 'SHIFT_TAB': 'previous'
      });
    }

    /**
     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;
      var _this = this;
      this._isInitializing = true;
      this.$element.attr({
        'role': 'tablist'
      });
      this.$tabTitles = this.$element.find(".".concat(this.options.linkClass));
      this.$tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-tabs-content=\"".concat(this.$element[0].id, "\"]"));
      this.$tabTitles.each(function () {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          $link = $elem.find('a'),
          isActive = $elem.hasClass("".concat(_this.options.linkActiveClass)),
          hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),
          linkId = $link[0].id ? $link[0].id : "".concat(hash, "-label"),
          $tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(hash));
        $elem.attr({
          'role': 'presentation'
        });
        $link.attr({
          'role': 'tab',
          'aria-controls': hash,
          'aria-selected': isActive,
          'id': linkId,
          'tabindex': isActive ? '0' : '-1'
        });
        $tabContent.attr({
          'role': 'tabpanel',
          'aria-labelledby': linkId
        });

        // Save up the initial hash to return to it later when going back in history
        if (isActive) {
          _this._initialAnchor = "#".concat(hash);
        }
        if (!isActive) {
          $tabContent.attr('aria-hidden', 'true');
        }
        if (isActive && _this.options.autoFocus) {
          _this.onLoadListener = onLoad(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
              scrollTop: $elem.offset().top
            }, _this.options.deepLinkSmudgeDelay, function () {
              $link.focus();
            });
          });
        }
      });
      if (this.options.matchHeight) {
        var $images = this.$tabContent.find('img');
        if ($images.length) {
          onImagesLoaded($images, this._setHeight.bind(this));
        } else {
          this._setHeight();
        }
      }

      // Current context-bound function to open tabs on page load or history hashchange
      this._checkDeepLink = function () {
        var anchor = window.location.hash;
        if (!anchor.length) {
          // If we are still initializing and there is no anchor, then there is nothing to do
          if (_this2._isInitializing) return;
          // Otherwise, move to the initial anchor
          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
        }
        var anchorNoHash = anchor.indexOf('#') >= 0 ? anchor.slice(1) : anchor;
        var $anchor = anchorNoHash && jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(anchorNoHash));
        var $link = anchor && _this2.$element.find("[href$=\"".concat(anchor, "\"],[data-tabs-target=\"").concat(anchorNoHash, "\"]")).first();
        // Whether the anchor element that has been found is part of this element
        var isOwnAnchor = !!($anchor.length && $link.length);
        if (isOwnAnchor) {
          // If there is an anchor for the hash, select it
          if ($anchor && $anchor.length && $link && $link.length) {
            _this2.selectTab($anchor, true);
          }
          // Otherwise, collapse everything
          else {
            _this2._collapse();
          }

          // Roll up a little to show the titles
          if (_this2.options.deepLinkSmudge) {
            var offset = _this2.$element.offset();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
              scrollTop: offset.top - _this2.options.deepLinkSmudgeOffset
            }, _this2.options.deepLinkSmudgeDelay);
          }

          /**
           * Fires when the plugin has deeplinked at pageload
           * @event Tabs#deeplink
           */
          _this2.$element.trigger('deeplink.zf.tabs', [$link, $anchor]);
        }
      };

      //use browser to open a tab, if it exists in this tabset
      if (this.options.deepLink) {
        this._checkDeepLink();
      }
      this._events();
      this._isInitializing = false;
    }

    /**
     * Adds event handlers for items within the tabs.
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      this._addKeyHandler();
      this._addClickHandler();
      this._setHeightMqHandler = null;
      if (this.options.matchHeight) {
        this._setHeightMqHandler = this._setHeight.bind(this);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
      }
      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
      }
    }

    /**
     * Adds click handlers for items within the tabs.
     * @private
     */
  }, {
    key: "_addClickHandler",
    value: function _addClickHandler() {
      var _this = this;
      this.$element.off('click.zf.tabs').on('click.zf.tabs', ".".concat(this.options.linkClass), function (e) {
        e.preventDefault();
        _this._handleTabChange(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      });
    }

    /**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */
  }, {
    key: "_addKeyHandler",
    value: function _addKeyHandler() {
      var _this = this;
      this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {
        if (e.which === 9) return;
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          $elements = $element.parent('ul').children('li'),
          $prevElement,
          $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            if (_this.options.wrapOnKeys) {
              $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
              $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
            } else {
              $prevElement = $elements.eq(Math.max(0, i - 1));
              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
            }
            return;
          }
        });

        // handle keyboard event with keyboard util
        Keyboard.handleKey(e, 'Tabs', {
          open: function open() {
            $element.find('[role="tab"]').focus();
            _this._handleTabChange($element);
          },
          previous: function previous() {
            $prevElement.find('[role="tab"]').focus();
            _this._handleTabChange($prevElement);
          },
          next: function next() {
            $nextElement.find('[role="tab"]').focus();
            _this._handleTabChange($nextElement);
          },
          handled: function handled() {
            e.preventDefault();
          }
        });
      });
    }

    /**
     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
     * @param {jQuery} $target - Tab to open.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @fires Tabs#change
     * @function
     */
  }, {
    key: "_handleTabChange",
    value: function _handleTabChange($target, historyHandled) {
      // With `activeCollapse`, if the target is the active Tab, collapse it.
      if ($target.hasClass("".concat(this.options.linkActiveClass))) {
        if (this.options.activeCollapse) {
          this._collapse();
        }
        return;
      }
      var $oldTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)),
        $tabLink = $target.find('[role="tab"]'),
        target = $tabLink.attr('data-tabs-target'),
        anchor = target && target.length ? "#".concat(target) : $tabLink[0].hash,
        $targetContent = this.$tabContent.find(anchor);

      //close old tab
      this._collapseTab($oldTab);

      //open new tab
      this._openTab($target);

      //either replace or update browser history
      if (this.options.deepLink && !historyHandled) {
        if (this.options.updateHistory) {
          history.pushState({}, '', location.pathname + location.search + anchor);
        } else {
          history.replaceState({}, '', location.pathname + location.search + anchor);
        }
      }

      /**
       * Fires when the plugin has successfully changed tabs.
       * @event Tabs#change
       */
      this.$element.trigger('change.zf.tabs', [$target, $targetContent]);

      //fire to children a mutation event
      $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
    }

    /**
     * Opens the tab `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to open.
     * @function
     */
  }, {
    key: "_openTab",
    value: function _openTab($target) {
      var $tabLink = $target.find('[role="tab"]'),
        hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
        $targetContent = this.$tabContent.find("#".concat(hash));
      $target.addClass("".concat(this.options.linkActiveClass));
      $tabLink.attr({
        'aria-selected': 'true',
        'tabindex': '0'
      });
      $targetContent.addClass("".concat(this.options.panelActiveClass)).removeAttr('aria-hidden');
    }

    /**
     * Collapses `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to collapse.
     * @function
     */
  }, {
    key: "_collapseTab",
    value: function _collapseTab($target) {
      var $targetAnchor = $target.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
        'aria-selected': 'false',
        'tabindex': -1
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat($targetAnchor.attr('aria-controls'))).removeClass("".concat(this.options.panelActiveClass)).attr({
        'aria-hidden': 'true'
      });
    }

    /**
     * Collapses the active Tab.
     * @fires Tabs#collapse
     * @function
     */
  }, {
    key: "_collapse",
    value: function _collapse() {
      var $activeTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));
      if ($activeTab.length) {
        this._collapseTab($activeTab);

        /**
        * Fires when the plugin has successfully collapsed tabs.
        * @event Tabs#collapse
        */
        this.$element.trigger('collapse.zf.tabs', [$activeTab]);
      }
    }

    /**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @function
     */
  }, {
    key: "selectTab",
    value: function selectTab(elem, historyHandled) {
      var idStr, hashIdStr;
      if (_typeof(elem) === 'object') {
        idStr = elem[0].id;
      } else {
        idStr = elem;
      }
      if (idStr.indexOf('#') < 0) {
        hashIdStr = "#".concat(idStr);
      } else {
        hashIdStr = idStr;
        idStr = idStr.slice(1);
      }
      var $target = this.$tabTitles.has("[href$=\"".concat(hashIdStr, "\"],[data-tabs-target=\"").concat(idStr, "\"]")).first();
      this._handleTabChange($target, historyHandled);
    }
  }, {
    key: "_setHeight",
    value:
    /**
     * Sets the height of each panel to the height of the tallest panel.
     * If enabled in options, gets called on media query change.
     * If loading content via external source, can be called directly or with _reflow.
     * If enabled with `data-match-height="true"`, tabs sets to equal height
     * @function
     * @private
     */
    function _setHeight() {
      var max = 0,
        _this = this; // Lock down the `this` value for the root tabs object

      if (!this.$tabContent) {
        return;
      }
      this.$tabContent.find(".".concat(this.options.panelClass)).css('min-height', '').each(function () {
        var panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          isActive = panel.hasClass("".concat(_this.options.panelActiveClass)); // get the options from the parent instead of trying to get them from the child

        if (!isActive) {
          panel.css({
            'visibility': 'hidden',
            'display': 'block'
          });
        }
        var temp = this.getBoundingClientRect().height;
        if (!isActive) {
          panel.css({
            'visibility': '',
            'display': ''
          });
        }
        max = temp > max ? temp : max;
      }).css('min-height', "".concat(max, "px"));
    }

    /**
     * Destroys an instance of tabs.
     * @fires Tabs#destroyed
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find(".".concat(this.options.linkClass)).off('.zf.tabs').hide().end().find(".".concat(this.options.panelClass)).hide();
      if (this.options.matchHeight) {
        if (this._setHeightMqHandler != null) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
        }
      }
      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
      }
      if (this.onLoadListener) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
      }
    }
  }]);
}(Plugin);
Tabs.defaults = {
  /**
   * Link the location hash to the active pane.
   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,
  /**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,
  /**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,
  /**
   * If `deepLinkSmudge` is enabled, animation offset from the top for the deep link adjustment
   * @option
   * @type {number}
   * @default 0
   */
  deepLinkSmudgeOffset: 0,
  /**
   * If `deepLink` is enabled, update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false,
  /**
   * Allows the window to scroll to content of active pane on load.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */
  autoFocus: false,
  /**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */
  wrapOnKeys: true,
  /**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */
  matchHeight: false,
  /**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */
  activeCollapse: false,
  /**
   * Class applied to `li`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */
  linkClass: 'tabs-title',
  /**
   * Class applied to the active `li` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  linkActiveClass: 'is-active',
  /**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */
  panelClass: 'tabs-panel',
  /**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  panelActiveClass: 'is-active'
};

/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */
var Toggler = /*#__PURE__*/function (_Plugin) {
  function Toggler() {
    _classCallCheck(this, Toggler);
    return _callSuper(this, Toggler, arguments);
  }
  _inherits(Toggler, _Plugin);
  return _createClass(Toggler, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of Toggler.
     * @class
     * @name Toggler
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Toggler.defaults, element.data(), options);
      this.className = '';
      this.className = 'Toggler'; // ie9 back compat

      // Triggers init is idempotent, just need to make sure it is initialized
      Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      this._init();
      this._events();
    }

    /**
     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
     * @function
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      // Collect triggers to set ARIA attributes to
      var id = this.$element[0].id,
        $triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open~=\"".concat(id, "\"], [data-close~=\"").concat(id, "\"], [data-toggle~=\"").concat(id, "\"]"));
      var input;
      // Parse animation classes if they were set
      if (this.options.animate) {
        input = this.options.animate.split(' ');
        this.animationIn = input[0];
        this.animationOut = input[1] || null;

        // - aria-expanded: according to the element visibility.
        $triggers.attr('aria-expanded', !this.$element.is(':hidden'));
      }
      // Otherwise, parse toggle class
      else {
        input = this.options.toggler;
        if (typeof input !== 'string' || !input.length) {
          throw new Error("The 'toggler' option containing the target class is required, got \"".concat(input, "\""));
        }
        // Allow for a . at the beginning of the string
        this.className = input[0] === '.' ? input.slice(1) : input;

        // - aria-expanded: according to the elements class set.
        $triggers.attr('aria-expanded', this.$element.hasClass(this.className));
      }

      // - aria-controls: adding the element id to it if not already in it.
      $triggers.each(function (index, trigger) {
        var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger);
        var controls = $trigger.attr('aria-controls') || '';
        var containsId = new RegExp("\\b".concat(RegExpEscape(id), "\\b")).test(controls);
        if (!containsId) $trigger.attr('aria-controls', controls ? "".concat(controls, " ").concat(id) : id);
      });
    }

    /**
     * Initializes events for the toggle trigger.
     * @function
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
    }

    /**
     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
     * @function
     * @fires Toggler#on
     * @fires Toggler#off
     */
  }, {
    key: "toggle",
    value: function toggle() {
      this[this.options.animate ? '_toggleAnimate' : '_toggleClass']();
    }
  }, {
    key: "_toggleClass",
    value: function _toggleClass() {
      this.$element.toggleClass(this.className);
      var isOn = this.$element.hasClass(this.className);
      if (isOn) {
        /**
         * Fires if the target element has the class after a toggle.
         * @event Toggler#on
         */
        this.$element.trigger('on.zf.toggler');
      } else {
        /**
         * Fires if the target element does not have the class after a toggle.
         * @event Toggler#off
         */
        this.$element.trigger('off.zf.toggler');
      }
      this._updateARIA(isOn);
      this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');
    }
  }, {
    key: "_toggleAnimate",
    value: function _toggleAnimate() {
      var _this = this;
      if (this.$element.is(':hidden')) {
        Motion.animateIn(this.$element, this.animationIn, function () {
          _this._updateARIA(true);
          this.trigger('on.zf.toggler');
          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
        });
      } else {
        Motion.animateOut(this.$element, this.animationOut, function () {
          _this._updateARIA(false);
          this.trigger('off.zf.toggler');
          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
        });
      }
    }
  }, {
    key: "_updateARIA",
    value: function _updateARIA(isOn) {
      var id = this.$element[0].id;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(id, "\"], [data-close=\"").concat(id, "\"], [data-toggle=\"").concat(id, "\"]")).attr({
        'aria-expanded': isOn ? true : false
      });
    }

    /**
     * Destroys the instance of Toggler on the element.
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.toggler');
    }
  }]);
}(Plugin);
Toggler.defaults = {
  /**
   * Class of the element to toggle. It can be provided with or without "."
   * @option
   * @type {string}
   */
  toggler: undefined,
  /**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};

/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */
var Tooltip = /*#__PURE__*/function (_Positionable) {
  function Tooltip() {
    _classCallCheck(this, Tooltip);
    return _callSuper(this, Tooltip, arguments);
  }
  _inherits(Tooltip, _Positionable);
  return _createClass(Tooltip, [{
    key: "_setup",
    value:
    /**
     * Creates a new instance of a Tooltip.
     * @class
     * @name Tooltip
     * @fires Tooltip#init
     * @param {jQuery} element - jQuery object to attach a tooltip to.
     * @param {Object} options - object to extend the default configuration.
     */
    function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Tooltip.defaults, this.$element.data(), options);
      this.className = 'Tooltip'; // ie9 back compat

      this.isActive = false;
      this.isClick = false;

      // Triggers init is idempotent, just need to make sure it is initialized
      Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
      this._init();
    }

    /**
     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      MediaQuery._init();
      var elemId = this.$element.attr('aria-describedby') || GetYoDigits(6, 'tooltip');
      this.options.tipText = this.options.tipText || this.$element.attr('title');
      this.template = this.options.template ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.template) : this._buildTemplate(elemId);
      if (this.options.allowHtml) {
        this.template.appendTo(document.body).html(this.options.tipText).hide();
      } else {
        this.template.appendTo(document.body).text(this.options.tipText).hide();
      }
      this.$element.attr({
        'title': '',
        'aria-describedby': elemId,
        'data-yeti-box': elemId,
        'data-toggle': elemId,
        'data-resize': elemId
      }).addClass(this.options.triggerClass);
      _superPropGet(Tooltip, "_init", this, 3)([]);
      this._events();
    }
  }, {
    key: "_getDefaultPosition",
    value: function _getDefaultPosition() {
      // handle legacy classnames
      var elementClassName = this.$element[0].className;
      if (this.$element[0] instanceof SVGElement) {
        elementClassName = elementClassName.baseVal;
      }
      var position = elementClassName.match(/\b(top|left|right|bottom)\b/g);
      return position ? position[0] : 'top';
    }
  }, {
    key: "_getDefaultAlignment",
    value: function _getDefaultAlignment() {
      return 'center';
    }
  }, {
    key: "_getHOffset",
    value: function _getHOffset() {
      if (this.position === 'left' || this.position === 'right') {
        return this.options.hOffset + this.options.tooltipWidth;
      } else {
        return this.options.hOffset;
      }
    }
  }, {
    key: "_getVOffset",
    value: function _getVOffset() {
      if (this.position === 'top' || this.position === 'bottom') {
        return this.options.vOffset + this.options.tooltipHeight;
      } else {
        return this.options.vOffset;
      }
    }

    /**
     * builds the tooltip element, adds attributes, and returns the template.
     * @private
     */
  }, {
    key: "_buildTemplate",
    value: function _buildTemplate(id) {
      var templateClasses = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
      var $template = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass(templateClasses).attr({
        'role': 'tooltip',
        'aria-hidden': true,
        'data-is-active': false,
        'data-is-focus': false,
        'id': id
      });
      return $template;
    }

    /**
     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
     * if the tooltip is larger than the screen width, default to full width - any user selected margin
     * @private
     */
  }, {
    key: "_setPosition",
    value: function _setPosition() {
      _superPropGet(Tooltip, "_setPosition", this, 3)([this.$element, this.template]);
    }

    /**
     * reveals the tooltip, and fires an event to close any other open tooltips on the page
     * @fires Tooltip#closeme
     * @fires Tooltip#show
     * @function
     */
  }, {
    key: "show",
    value: function show() {
      if (this.options.showOn !== 'all' && !MediaQuery.is(this.options.showOn)) {
        // console.error('The screen is too small to display this tooltip');
        return false;
      }
      var _this = this;
      this.template.css('visibility', 'hidden').show();
      this._setPosition();
      this.template.removeClass('top bottom left right').addClass(this.position);
      this.template.removeClass('align-top align-bottom align-left align-right align-center').addClass('align-' + this.alignment);

      /**
       * Fires to close all other open tooltips on the page
       * @event Closeme#tooltip
       */
      this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));
      this.template.attr({
        'data-is-active': true,
        'aria-hidden': false
      });
      _this.isActive = true;
      this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function () {
        //maybe do stuff?
      });
      /**
       * Fires when the tooltip is shown
       * @event Tooltip#show
       */
      this.$element.trigger('show.zf.tooltip');
    }

    /**
     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
     * @fires Tooltip#hide
     * @function
     */
  }, {
    key: "hide",
    value: function hide() {
      var _this = this;
      this.template.stop().attr({
        'aria-hidden': true,
        'data-is-active': false
      }).fadeOut(this.options.fadeOutDuration, function () {
        _this.isActive = false;
        _this.isClick = false;
      });
      /**
       * fires when the tooltip is hidden
       * @event Tooltip#hide
       */
      this.$element.trigger('hide.zf.tooltip');
    }

    /**
     * adds event listeners for the tooltip and its anchor
     * TODO combine some of the listeners like focus and mouseenter, etc.
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;
      var hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined';
      var isFocus = false;

      // `disableForTouch: Fully disable the tooltip on touch devices
      if (hasTouch && this.options.disableForTouch) return;
      if (!this.options.disableHover) {
        this.$element.on('mouseenter.zf.tooltip', function () {
          if (!_this.isActive) {
            _this.timeout = setTimeout(function () {
              _this.show();
            }, _this.options.hoverDelay);
          }
        }).on('mouseleave.zf.tooltip', ignoreMousedisappear(function () {
          clearTimeout(_this.timeout);
          if (!isFocus || _this.isClick && !_this.options.clickOpen) {
            _this.hide();
          }
        }));
      }
      if (hasTouch) {
        this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function () {
          _this.isActive ? _this.hide() : _this.show();
        });
      }
      if (this.options.clickOpen) {
        this.$element.on('mousedown.zf.tooltip', function () {
          if (_this.isClick) ;else {
            _this.isClick = true;
            if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
              _this.show();
            }
          }
        });
      } else {
        this.$element.on('mousedown.zf.tooltip', function () {
          _this.isClick = true;
        });
      }
      this.$element.on({
        // 'toggle.zf.trigger': this.toggle.bind(this),
        // 'close.zf.trigger': this.hide.bind(this)
        'close.zf.trigger': this.hide.bind(this)
      });
      this.$element.on('focus.zf.tooltip', function () {
        isFocus = true;
        if (_this.isClick) {
          // If we're not showing open on clicks, we need to pretend a click-launched focus isn't
          // a real focus, otherwise on hover and come back we get bad behavior
          if (!_this.options.clickOpen) {
            isFocus = false;
          }
          return false;
        } else {
          _this.show();
        }
      }).on('focusout.zf.tooltip', function () {
        isFocus = false;
        _this.isClick = false;
        _this.hide();
      }).on('resizeme.zf.trigger', function () {
        if (_this.isActive) {
          _this._setPosition();
        }
      });
    }

    /**
     * adds a toggle method, in addition to the static show() & hide() functions
     * @function
     */
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActive) {
        this.hide();
      } else {
        this.show();
      }
    }

    /**
     * Destroys an instance of tooltip, removes template element from the view.
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.attr('title', this.template.text()).off('.zf.trigger .zf.tooltip').removeClass(this.options.triggerClass).removeClass('top right left bottom').removeAttr('aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');
      this.template.remove();
    }
  }]);
}(Positionable);
Tooltip.defaults = {
  /**
   * Time, in ms, before a tooltip should open on hover.
   * @option
   * @type {number}
   * @default 200
   */
  hoverDelay: 200,
  /**
   * Time, in ms, a tooltip should take to fade into view.
   * @option
   * @type {number}
   * @default 150
   */
  fadeInDuration: 150,
  /**
   * Time, in ms, a tooltip should take to fade out of view.
   * @option
   * @type {number}
   * @default 150
   */
  fadeOutDuration: 150,
  /**
   * Disables hover events from opening the tooltip if set to true
   * @option
   * @type {boolean}
   * @default false
   */
  disableHover: false,
  /**
   * Disable the tooltip for touch devices.
   * This can be useful to make elements with a tooltip on it trigger their
   * action on the first tap instead of displaying the tooltip.
   * @option
   * @type {booelan}
   * @default false
   */
  disableForTouch: false,
  /**
   * Optional addtional classes to apply to the tooltip template on init.
   * @option
   * @type {string}
   * @default ''
   */
  templateClasses: '',
  /**
   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
   * @option
   * @type {string}
   * @default 'tooltip'
   */
  tooltipClass: 'tooltip',
  /**
   * Class applied to the tooltip anchor element.
   * @option
   * @type {string}
   * @default 'has-tip'
   */
  triggerClass: 'has-tip',
  /**
   * Minimum breakpoint size at which to open the tooltip.
   * @option
   * @type {string}
   * @default 'small'
   */
  showOn: 'small',
  /**
   * Custom template to be used to generate markup for tooltip.
   * @option
   * @type {string}
   * @default ''
   */
  template: '',
  /**
   * Text displayed in the tooltip template on open.
   * @option
   * @type {string}
   * @default ''
   */
  tipText: '',
  touchCloseText: 'Tap to close.',
  /**
   * Allows the tooltip to remain open if triggered with a click or touch event.
   * @option
   * @type {boolean}
   * @default true
   */
  clickOpen: true,
  /**
   * Position of tooltip. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',
  /**
   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',
  /**
   * Allow overlap of container/window. If false, tooltip will first try to
   * position as defined by data-position and data-alignment, but reposition if
   * it would cause an overflow.  @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,
  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * Less common for tooltips.
   * @option
   * @type {boolean}
   * @default false
   */
  allowBottomOverlap: false,
  /**
   * Distance, in pixels, the template should push away from the anchor on the Y axis.
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,
  /**
   * Distance, in pixels, the template should push away from the anchor on the X axis
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0,
  /**
   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
   * @option
   * @type {number}
   * @default 14
   */
  tooltipHeight: 14,
  /**
   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
   * @option
   * @type {number}
   * @default 12
   */
  tooltipWidth: 12,
  /**
  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
  * allowing HTML may open yourself up to XSS attacks.
  * @option
  * @type {boolean}
  * @default false
  */
  allowHtml: false
};

// The plugin matches the plugin classes with these plugin instances.
var MenuPlugins = {
  tabs: {
    cssClass: 'tabs',
    plugin: Tabs,
    open: function open(plugin, target) {
      return plugin.selectTab(target);
    },
    close: null /* not supported */,
    toggle: null /* not supported */
  },
  accordion: {
    cssClass: 'accordion',
    plugin: Accordion,
    open: function open(plugin, target) {
      return plugin.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));
    },
    close: function close(plugin, target) {
      return plugin.up(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));
    },
    toggle: function toggle(plugin, target) {
      return plugin.toggle(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));
    }
  }
};

/**
 * ResponsiveAccordionTabs module.
 * @module foundation.responsiveAccordionTabs
 * @requires foundation.util.motion
 * @requires foundation.accordion
 * @requires foundation.tabs
 */
var ResponsiveAccordionTabs = /*#__PURE__*/function (_Plugin) {
  function ResponsiveAccordionTabs(element, options) {
    var _this2;
    _classCallCheck(this, ResponsiveAccordionTabs);
    _this2 = _callSuper(this, ResponsiveAccordionTabs, [element, options]);
    return _possibleConstructorReturn(_this2, _this2.options.reflow && _this2.storezfData || _this2);
  }

  /**
   * Creates a new instance of a responsive accordion tabs.
   * @class
   * @name ResponsiveAccordionTabs
   * @fires ResponsiveAccordionTabs#init
   * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  _inherits(ResponsiveAccordionTabs, _Plugin);
  return _createClass(ResponsiveAccordionTabs, [{
    key: "_setup",
    value: function _setup(element, options) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.$element.data('zfPluginBase', this);
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, ResponsiveAccordionTabs.defaults, this.$element.data(), options);
      this.rules = this.$element.data('responsive-accordion-tabs');
      this.currentMq = null;
      this.currentRule = null;
      this.currentPlugin = null;
      this.className = 'ResponsiveAccordionTabs'; // ie9 back compat
      if (!this.$element.attr('id')) {
        this.$element.attr('id', GetYoDigits(6, 'responsiveaccordiontabs'));
      }
      this._init();
      this._events();
    }

    /**
     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
     * @function
     * @private
     */
  }, {
    key: "_init",
    value: function _init() {
      MediaQuery._init();

      // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
      if (typeof this.rules === 'string') {
        var rulesTree = {};

        // Parse rules from "classes" pulled from data attribute
        var rules = this.rules.split(' ');

        // Iterate through every rule found
        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i].split('-');
          var ruleSize = rule.length > 1 ? rule[0] : 'small';
          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
          if (MenuPlugins[rulePlugin] !== null) {
            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
          }
        }
        this.rules = rulesTree;
      }
      this._getAllOptions();
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().isEmptyObject(this.rules)) {
        this._checkMediaQueries();
      }
    }
  }, {
    key: "_getAllOptions",
    value: function _getAllOptions() {
      //get all defaults and options
      var _this = this;
      _this.allOptions = {};
      for (var key in MenuPlugins) {
        if (MenuPlugins.hasOwnProperty(key)) {
          var obj = MenuPlugins[key];
          try {
            var dummyPlugin = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul></ul>');
            var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);
            for (var keyKey in tmpPlugin.options) {
              if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {
                var objObj = tmpPlugin.options[keyKey];
                _this.allOptions[keyKey] = objObj;
              }
            }
            tmpPlugin.destroy();
          } catch (e) {
            console.warn("Warning: Problems getting Accordion/Tab options: ".concat(e));
          }
        }
      }
    }

    /**
     * Initializes events for the Menu.
     * @function
     * @private
     */
  }, {
    key: "_events",
    value: function _events() {
      this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
    }

    /**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */
  }, {
    key: "_checkMediaQueries",
    value: function _checkMediaQueries() {
      var matchedMq,
        _this = this;
      // Iterate through each rule and find the last matching rule
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(this.rules, function (key) {
        if (MediaQuery.atLeast(key)) {
          matchedMq = key;
        }
      });

      // No match? No dice
      if (!matchedMq) return;

      // Plugin already initialized? We good
      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;

      // Remove existing plugin-specific CSS classes
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(MenuPlugins, function (key, value) {
        _this.$element.removeClass(value.cssClass);
      });

      // Add the CSS class for the new plugin
      this.$element.addClass(this.rules[matchedMq].cssClass);

      // Create an instance of the new plugin
      if (this.currentPlugin) {
        //don't know why but on nested elements data zfPlugin get's lost
        if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin', this.storezfData);
        this.currentPlugin.destroy();
      }
      this._handleMarkup(this.rules[matchedMq].cssClass);
      this.currentRule = this.rules[matchedMq];
      this.currentPlugin = new this.currentRule.plugin(this.$element, this.options);
      this.storezfData = this.currentPlugin.$element.data('zfPlugin');
    }
  }, {
    key: "_handleMarkup",
    value: function _handleMarkup(toSet) {
      var _this = this,
        fromString = 'accordion';
      var $panels = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + this.$element.attr('id') + ']');
      if ($panels.length) fromString = 'tabs';
      if (fromString === toSet) {
        return;
      }
      var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : 'tabs-title';
      var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : 'tabs-panel';
      this.$element.removeAttr('role');
      var $liHeads = this.$element.children('.' + tabsTitle + ',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');
      var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');
      if (fromString === 'tabs') {
        $panels = $panels.children('.' + tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');
        $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');
      } else {
        $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');
      }
      $panels.css({
        display: '',
        visibility: ''
      });
      $liHeads.css({
        display: '',
        visibility: ''
      });
      if (toSet === 'accordion') {
        $panels.each(function (key, value) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content', '').removeClass('is-active').css({
            height: ''
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']').after('<div id="tabs-placeholder-' + _this.$element.attr('id') + '"></div>').detach();
          $liHeads.addClass('accordion-item').attr('data-accordion-item', '');
          $liHeadsA.addClass('accordion-title');
        });
      } else if (toSet === 'tabs') {
        var $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']');
        var $placeholder = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs-placeholder-' + _this.$element.attr('id'));
        if ($placeholder.length) {
          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter($placeholder).attr('data-tabs-content', _this.$element.attr('id'));
          $placeholder.remove();
        } else {
          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter(_this.$element).attr('data-tabs-content', _this.$element.attr('id'));
        }
        $panels.each(function (key, value) {
          var tempValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($tabsContent).addClass(tabsPanel);
          var hash = $liHeadsA.get(key).hash.slice(1);
          var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id') || GetYoDigits(6, 'accordion');
          if (hash !== id) {
            if (hash !== '') {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
            } else {
              hash = id;
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href', jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href').replace('#', '') + '#' + hash);
            }
          }
          var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeads.get(key)).hasClass('is-active');
          if (isActive) {
            tempValue.addClass('is-active');
          }
        });
        $liHeads.addClass(tabsTitle);
      }
    }

    /**
     * Opens the plugin pane defined by `target`.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to open.
     * @see Accordion.down
     * @see Tabs.selectTab
     * @function
     */
  }, {
    key: "open",
    value: function open() {
      if (this.currentRule && typeof this.currentRule.open === 'function') {
        var _this$currentRule;
        return (_this$currentRule = this.currentRule).open.apply(_this$currentRule, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
      }
    }

    /**
     * Closes the plugin pane defined by `target`. Not availaible for Tabs.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to close.
     * @see Accordion.up
     * @function
     */
  }, {
    key: "close",
    value: function close() {
      if (this.currentRule && typeof this.currentRule.close === 'function') {
        var _this$currentRule2;
        return (_this$currentRule2 = this.currentRule).close.apply(_this$currentRule2, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
      }
    }

    /**
     * Toggles the plugin pane defined by `target`. Not availaible for Tabs.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to toggle.
     * @see Accordion.toggle
     * @function
     */
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.currentRule && typeof this.currentRule.toggle === 'function') {
        var _this$currentRule3;
        return (_this$currentRule3 = this.currentRule).toggle.apply(_this$currentRule3, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
      }
    }

    /**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */
  }, {
    key: "_destroy",
    value: function _destroy() {
      if (this.currentPlugin) this.currentPlugin.destroy();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
    }
  }]);
}(Plugin);
ResponsiveAccordionTabs.defaults = {};
Foundation.addToJquery((jquery__WEBPACK_IMPORTED_MODULE_0___default()));

// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.
Foundation.rtl = rtl;
Foundation.GetYoDigits = GetYoDigits;
Foundation.transitionend = transitionend;
Foundation.RegExpEscape = RegExpEscape;
Foundation.onLoad = onLoad;
Foundation.Box = Box;
Foundation.onImagesLoaded = onImagesLoaded;
Foundation.Keyboard = Keyboard;
Foundation.MediaQuery = MediaQuery;
Foundation.Motion = Motion;
Foundation.Move = Move;
Foundation.Nest = Nest;
Foundation.Timer = Timer;

// Touch and Triggers previously were almost purely sede effect driven,
// so no need to add it to Foundation, just init them.
Touch.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()), Foundation);
MediaQuery._init();
Foundation.plugin(Abide, 'Abide');
Foundation.plugin(Accordion, 'Accordion');
Foundation.plugin(AccordionMenu, 'AccordionMenu');
Foundation.plugin(Drilldown, 'Drilldown');
Foundation.plugin(Dropdown, 'Dropdown');
Foundation.plugin(DropdownMenu, 'DropdownMenu');
Foundation.plugin(Equalizer, 'Equalizer');
Foundation.plugin(Interchange, 'Interchange');
Foundation.plugin(Magellan, 'Magellan');
Foundation.plugin(OffCanvas, 'OffCanvas');
Foundation.plugin(Orbit, 'Orbit');
Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');
Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');
Foundation.plugin(Reveal, 'Reveal');
Foundation.plugin(Slider, 'Slider');
Foundation.plugin(SmoothScroll, 'SmoothScroll');
Foundation.plugin(Sticky, 'Sticky');
Foundation.plugin(Tabs, 'Tabs');
Foundation.plugin(Toggler, 'Toggler');
Foundation.plugin(Tooltip, 'Tooltip');
Foundation.plugin(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? 0 : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket trac-14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }

  // Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var flat = arr.flat ? function (array) {
    return arr.flat.call(array);
  } : function (array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};
  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
    // Plus for old WebKit, typeof returns "function" for HTML collections
    // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
    return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
  };
  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };
  var document = window.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };
  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
      val,
      script = doc.createElement("script");
    script.text = code;
    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);
        if (val) {
          script.setAttribute(i, val);
        }
      }
    }
    doc.head.appendChild(script).parentNode.removeChild(script);
  }
  function toType(obj) {
    if (obj == null) {
      return obj + "";
    }

    // Support: Android <=2.3 only (functionish RegExp)
    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module

  var version = "3.7.1",
    rhtmlSuffix = /HTML$/i,
    // Define a local copy of jQuery
    _jQuery2 = function jQuery(selector, context) {
      // The jQuery object is actually just the init constructor 'enhanced'
      // Need init if jQuery is called (just allow error to be thrown if not included)
      return new _jQuery2.fn.init(selector, context);
    };
  _jQuery2.fn = _jQuery2.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: _jQuery2,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      }

      // Return just the one element from the set
      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = _jQuery2.merge(this.constructor(), elems);

      // Add the old object onto the stack (as a reference)
      ret.prevObject = this;

      // Return the newly-formed element set
      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return _jQuery2.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(_jQuery2.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(_jQuery2.grep(this, function (_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(_jQuery2.grep(this, function (_elem, i) {
        return i % 2;
      }));
    },
    eq: function eq(i) {
      var len = this.length,
        j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };
  _jQuery2.extend = _jQuery2.fn.extend = function () {
    var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

    // Handle a deep copy situation
    if (typeof target === "boolean") {
      deep = target;

      // Skip the boolean and the target
      target = arguments[i] || {};
      i++;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    }

    // Extend jQuery itself if only one argument is passed
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name];

          // Prevent Object.prototype pollution
          // Prevent never-ending loop
          if (name === "__proto__" || target === copy) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (_jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name];

            // Ensure proper type for the source value
            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !_jQuery2.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }
            copyIsArray = false;

            // Never move original objects, clone them
            target[name] = _jQuery2.extend(deep, clone, copy);

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }

    // Return the modified object
    return target;
  };
  _jQuery2.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor;

      // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects
      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }
      proto = getProto(obj);

      // Objects with no prototype (e.g., `Object.create( null )`) are plain
      if (!proto) {
        return true;
      }

      // Objects with prototype are plain iff they were constructed by a global Object function
      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function globalEval(code, options, doc) {
      DOMEval(code, {
        nonce: options && options.nonce
      }, doc);
    },
    each: function each(obj, callback) {
      var length,
        i = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    // Retrieve the text value of an array of DOM nodes
    text: function text(elem) {
      var node,
        ret = "",
        i = 0,
        nodeType = elem.nodeType;
      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += _jQuery2.text(node);
        }
      }
      if (nodeType === 1 || nodeType === 11) {
        return elem.textContent;
      }
      if (nodeType === 9) {
        return elem.documentElement.textContent;
      }
      if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }

      // Do not include comment or processing instruction nodes

      return ret;
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          _jQuery2.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    isXMLDoc: function isXMLDoc(elem) {
      var namespace = elem && elem.namespaceURI,
        docElem = elem && (elem.ownerDocument || elem).documentElement;

      // Assume HTML when documentElement doesn't yet exist, such as inside
      // document fragments.
      return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
        j = 0,
        i = first.length;
      for (; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
        matches = [],
        i = 0,
        length = elems.length,
        callbackExpect = !invert;

      // Go through the array, only saving the items
      // that pass the validator function
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
        value,
        i = 0,
        ret = [];

      // Go through the array, translating each of the items to their new values
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }

        // Go through every key on the object,
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }

      // Flatten any nested arrays
      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });
  if (typeof Symbol === "function") {
    _jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
  }

  // Populate the class2type map
  _jQuery2.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
      type = toType(obj);
    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }
  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }
  var pop = arr.pop;
  var sort = arr.sort;
  var splice = arr.splice;
  var whitespace = "[\\x20\\t\\r\\n\\f]";
  var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");

  // Note: an element does not contain itself
  _jQuery2.contains = function (a, b) {
    var bup = b && b.parentNode;
    return a === bup || !!(bup && bup.nodeType === 1 && (
    // Support: IE 9 - 11+
    // IE doesn't have `contains` on SVG.
    a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
  };

  // CSS string/identifier serialization
  // https://drafts.csswg.org/cssom/#common-serializing-idioms
  var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function fcssescape(ch, asCodePoint) {
    if (asCodePoint) {
      // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
      if (ch === "\0") {
        return "\uFFFD";
      }

      // Control characters and (dependent upon position) numbers get escaped as code points
      return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
    }

    // Other potentially-special ASCII characters get backslash-escaped
    return "\\" + ch;
  }
  _jQuery2.escapeSelector = function (sel) {
    return (sel + "").replace(rcssescape, fcssescape);
  };
  var preferredDoc = document,
    pushNative = push;
  (function () {
    var i,
      Expr,
      outermostContext,
      sortInput,
      hasDuplicate,
      push = pushNative,
      // Local document vars
      document,
      documentElement,
      documentIsHTML,
      rbuggyQSA,
      matches,
      // Instance-specific data
      expando = _jQuery2.expando,
      dirruns = 0,
      done = 0,
      classCache = createCache(),
      tokenCache = createCache(),
      compilerCache = createCache(),
      nonnativeSelectorCache = createCache(),
      sortOrder = function sortOrder(a, b) {
        if (a === b) {
          hasDuplicate = true;
        }
        return 0;
      },
      booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" + "loop|multiple|open|readonly|required|scoped",
      // Regular expressions

      // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
      identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      // Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
      attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
      // Operator (capture 2)
      "*([*^$|!~]?=)" + whitespace +
      // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
      "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
      pseudos = ":(" + identifier + ")(?:\\((" +
      // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
      // 1. quoted (capture 3; capture 4 or capture 5)
      "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
      // 2. simple (capture 6)
      "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
      // 3. anything else (capture 2)
      ".*" + ")\\)|)",
      // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
      rwhitespace = new RegExp(whitespace + "+", "g"),
      rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
      rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
      rdescend = new RegExp(whitespace + "|>"),
      rpseudo = new RegExp(pseudos),
      ridentifier = new RegExp("^" + identifier + "$"),
      matchExpr = {
        ID: new RegExp("^#(" + identifier + ")"),
        CLASS: new RegExp("^\\.(" + identifier + ")"),
        TAG: new RegExp("^(" + identifier + "|[*])"),
        ATTR: new RegExp("^" + attributes),
        PSEUDO: new RegExp("^" + pseudos),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + booleans + ")$", "i"),
        // For use in libraries implementing .is()
        // We use this for POS matching in `select`
        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
      },
      rinputs = /^(?:input|select|textarea|button)$/i,
      rheader = /^h\d$/i,
      // Easily-parseable/retrievable ID or TAG or CLASS selectors
      rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      rsibling = /[+~]/,
      // CSS escapes
      // https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
      runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
      funescape = function funescape(escape, nonHex) {
        var high = "0x" + escape.slice(1) - 0x10000;
        if (nonHex) {
          // Strip the backslash prefix from a non-hex escape sequence
          return nonHex;
        }

        // Replace a hexadecimal escape sequence with the encoded Unicode code point
        // Support: IE <=11+
        // For values outside the Basic Multilingual Plane (BMP), manually construct a
        // surrogate pair
        return high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
      },
      // Used for iframes; see `setDocument`.
      // Support: IE 9 - 11+, Edge 12 - 18+
      // Removing the function wrapper causes a "Permission Denied"
      // error in IE/Edge.
      unloadHandler = function unloadHandler() {
        setDocument();
      },
      inDisabledFieldset = addCombinator(function (elem) {
        return elem.disabled === true && nodeName(elem, "fieldset");
      }, {
        dir: "parentNode",
        next: "legend"
      });

    // Support: IE <=9 only
    // Accessing document.activeElement can throw unexpectedly
    // https://bugs.jquery.com/ticket/13393
    function safeActiveElement() {
      try {
        return document.activeElement;
      } catch (err) {}
    }

    // Optimize for push.apply( _, NodeList )
    try {
      push.apply(arr = _slice.call(preferredDoc.childNodes), preferredDoc.childNodes);

      // Support: Android <=4.0
      // Detect silently failing push.apply
      // eslint-disable-next-line no-unused-expressions
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: function apply(target, els) {
          pushNative.apply(target, _slice.call(els));
        },
        call: function call(target) {
          pushNative.apply(target, _slice.call(arguments, 1));
        }
      };
    }
    function find(selector, context, results, seed) {
      var m,
        i,
        elem,
        nid,
        match,
        groups,
        newSelector,
        newContext = context && context.ownerDocument,
        // nodeType defaults to 9, since context defaults to document
        nodeType = context ? context.nodeType : 9;
      results = results || [];

      // Return early from calls with invalid selector or context
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }

      // Try to shortcut find operations (as opposed to filters) in HTML documents
      if (!seed) {
        setDocument(context);
        context = context || document;
        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE 9 only
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    push.call(results, elem);
                    return results;
                  }
                } else {
                  return results;
                }

                // Element context
              } else {
                // Support: IE 9 only
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                  push.call(results, elem);
                  return results;
                }
              }

              // Type selector
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;

              // Class selector
            } else if ((m = match[3]) && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }

          // Take advantage of querySelectorAll
          if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            newSelector = selector;
            newContext = context;

            // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // The technique has to be used as well when a leading combinator is used
            // as such selectors are not recognized by querySelectorAll.
            // Thanks to Andrew Dupont for this technique.
            if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
              // Expand context for sibling selectors
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;

              // We can use :scope instead of the ID hack if the browser
              // supports it & if we're not changing the context.
              // Support: IE 11+, Edge 17 - 18+
              // IE/Edge sometimes throw a "Permission denied" error when
              // strict-comparing two documents; shallow comparisons work.
              // eslint-disable-next-line eqeqeq
              if (newContext != context || !support.scope) {
                // Capture the context ID, setting it first if necessary
                if (nid = context.getAttribute("id")) {
                  nid = _jQuery2.escapeSelector(nid);
                } else {
                  context.setAttribute("id", nid = expando);
                }
              }

              // Prefix every selector in the list
              groups = tokenize(selector);
              i = groups.length;
              while (i--) {
                groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");
            }
            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }

      // All others
      return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
    }

    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */
    function createCache() {
      var keys = [];
      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties
        // (see https://github.com/jquery/sizzle/issues/157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }
        return cache[key + " "] = value;
      }
      return cache;
    }

    /**
     * Mark a function for special use by jQuery selector module
     * @param {Function} fn The function to mark
     */
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }

    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */
    function assert(fn) {
      var el = document.createElement("fieldset");
      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }

        // release memory in IE
        el = null;
      }
    }

    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */
    function createInputPseudo(type) {
      return function (elem) {
        return nodeName(elem, "input") && elem.type === type;
      };
    }

    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */
    function createButtonPseudo(type) {
      return function (elem) {
        return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
      };
    }

    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */
    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            }

            // Support: IE 6 - 11+
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors
            return elem.isDisabled === disabled ||
            // Where there is no isDisabled, check manually
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }
          return elem.disabled === disabled;

          // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        }

        // Remaining elements are neither :enabled nor :disabled
        return false;
      };
    }

    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */
    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
            matchIndexes = fn([], seed.length, argument),
            i = matchIndexes.length;

          // Match elements found at the specified indexes
          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }

    /**
     * Checks a node for validity as a jQuery selector context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }

    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [node] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */
    function setDocument(node) {
      var subWindow,
        doc = node ? node.ownerDocument || node : preferredDoc;

      // Return early if doc is invalid or already selected
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }

      // Update global variables
      document = doc;
      documentElement = document.documentElement;
      documentIsHTML = !_jQuery2.isXMLDoc(document);

      // Support: iOS 7 only, IE 9 - 11+
      // Older browsers didn't support unprefixed `matches`.
      matches = documentElement.matches || documentElement.webkitMatchesSelector || documentElement.msMatchesSelector;

      // Support: IE 9 - 11+, Edge 12 - 18+
      // Accessing iframe documents after unload throws "permission denied" errors
      // (see trac-13936).
      // Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
      // all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
      if (documentElement.msMatchesSelector &&
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 9 - 11+, Edge 12 - 18+
        subWindow.addEventListener("unload", unloadHandler);
      }

      // Support: IE <10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test
      support.getById = assert(function (el) {
        documentElement.appendChild(el).id = _jQuery2.expando;
        return !document.getElementsByName || !document.getElementsByName(_jQuery2.expando).length;
      });

      // Support: IE 9 only
      // Check to see if it's possible to do matchesSelector
      // on a disconnected node.
      support.disconnectedMatch = assert(function (el) {
        return matches.call(el, "*");
      });

      // Support: IE 9 - 11+, Edge 12 - 18+
      // IE/Edge don't support the :scope pseudo-class.
      support.scope = assert(function () {
        return document.querySelectorAll(":scope");
      });

      // Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
      // Make sure the `:has()` argument is parsed unforgivingly.
      // We include `*` in the test to detect buggy implementations that are
      // _selectively_ forgiving (specifically when the list includes at least
      // one valid selector).
      // Note that we treat complete lack of support for `:has()` as if it were
      // spec-compliant support, which is fine because use of `:has()` in such
      // environments will fail in the qSA path and fall back to jQuery traversal
      // anyway.
      support.cssHas = assert(function () {
        try {
          document.querySelector(":has(*,:jqfake)");
          return false;
        } catch (e) {
          return true;
        }
      });

      // ID filter and find
      if (support.getById) {
        Expr.filter.ID = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };
        Expr.find.ID = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter.ID = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        };

        // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut
        Expr.find.ID = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
              i,
              elems,
              elem = context.getElementById(id);
            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");
              if (node && node.value === id) {
                return [elem];
              }

              // Fall back on getElementsByName
              elems = context.getElementsByName(id);
              i = 0;
              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");
                if (node && node.value === id) {
                  return [elem];
                }
              }
            }
            return [];
          }
        };
      }

      // Tag
      Expr.find.TAG = function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);

          // DocumentFragment nodes don't have gEBTN
        } else {
          return context.querySelectorAll(tag);
        }
      };

      // Class
      Expr.find.CLASS = function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };

      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */

      // QSA and matchesSelector support

      rbuggyQSA = [];

      // Build QSA regex
      // Regex strategy adopted from Diego Perini
      assert(function (el) {
        var input;
        documentElement.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a>" + "<select id='" + expando + "-\r\\' disabled='disabled'>" + "<option selected=''></option></select>";

        // Support: iOS <=7 - 8 only
        // Boolean attributes and "value" are not treated correctly in some XML documents
        if (!el.querySelectorAll("[selected]").length) {
          rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
        }

        // Support: iOS <=7 - 8 only
        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
          rbuggyQSA.push("~=");
        }

        // Support: iOS 8 only
        // https://bugs.webkit.org/show_bug.cgi?id=136851
        // In-page `selector#id sibling-combinator selector` fails
        if (!el.querySelectorAll("a#" + expando + "+*").length) {
          rbuggyQSA.push(".#.+[+~]");
        }

        // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
        // In some of the document kinds, these selectors wouldn't work natively.
        // This is probably OK but for backwards compatibility we want to maintain
        // handling them through jQuery traversal in jQuery 3.x.
        if (!el.querySelectorAll(":checked").length) {
          rbuggyQSA.push(":checked");
        }

        // Support: Windows 8 Native Apps
        // The type and name attributes are restricted during .innerHTML assignment
        input = document.createElement("input");
        input.setAttribute("type", "hidden");
        el.appendChild(input).setAttribute("name", "D");

        // Support: IE 9 - 11+
        // IE's :disabled selector does not pick up the children of disabled fieldsets
        // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
        // In some of the document kinds, these selectors wouldn't work natively.
        // This is probably OK but for backwards compatibility we want to maintain
        // handling them through jQuery traversal in jQuery 3.x.
        documentElement.appendChild(el).disabled = true;
        if (el.querySelectorAll(":disabled").length !== 2) {
          rbuggyQSA.push(":enabled", ":disabled");
        }

        // Support: IE 11+, Edge 15 - 18+
        // IE 11/Edge don't find elements on a `[name='']` query in some cases.
        // Adding a temporary attribute to the document before the selection works
        // around the issue.
        // Interestingly, IE 10 & older don't seem to have the issue.
        input = document.createElement("input");
        input.setAttribute("name", "");
        el.appendChild(input);
        if (!el.querySelectorAll("[name='']").length) {
          rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
        }
      });
      if (!support.cssHas) {
        // Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
        // Our regular `try-catch` mechanism fails to detect natively-unsupported
        // pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
        // in browsers that parse the `:has()` argument as a forgiving selector list.
        // https://drafts.csswg.org/selectors/#relational now requires the argument
        // to be parsed unforgivingly, but browsers have not yet fully adjusted.
        rbuggyQSA.push(":has");
      }
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));

      /* Sorting
      ---------------------------------------------------------------------- */

      // Document order sorting
      sortOrder = function sortOrder(a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        // Sort on method existence if only one input has compareDocumentPosition
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }

        // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) :
        // Otherwise we know they are disconnected
        1;

        // Disconnected nodes
        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a === document || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
            return -1;
          }

          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (b === document || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
            return 1;
          }

          // Maintain original order
          return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
        }
        return compare & 4 ? -1 : 1;
      };
      return document;
    }
    find.matches = function (expr, elements) {
      return find(expr, null, null, elements);
    };
    find.matchesSelector = function (elem, expr) {
      setDocument(elem);
      if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr);

          // IE 9's matchesSelector returns false on disconnected nodes
          if (ret || support.disconnectedMatch ||
          // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }
      return find(expr, document, null, [elem]).length > 0;
    };
    find.contains = function (context, elem) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((context.ownerDocument || context) != document) {
        setDocument(context);
      }
      return _jQuery2.contains(context, elem);
    };
    find.attr = function (elem, name) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((elem.ownerDocument || elem) != document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()],
        // Don't get fooled by Object.prototype properties (see trac-13807)
        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      if (val !== undefined) {
        return val;
      }
      return elem.getAttribute(name);
    };
    find.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };

    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */
    _jQuery2.uniqueSort = function (results) {
      var elem,
        duplicates = [],
        j = 0,
        i = 0;

      // Unless we *know* we can detect duplicates, assume their presence
      //
      // Support: Android <=4.0+
      // Testing for detecting duplicates is unpredictable so instead assume we can't
      // depend on duplicate detection in all browsers without a stable sort.
      hasDuplicate = !support.sortStable;
      sortInput = !support.sortStable && _slice.call(results, 0);
      sort.call(results, sortOrder);
      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          splice.call(results, duplicates[j], 1);
        }
      }

      // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225
      sortInput = null;
      return results;
    };
    _jQuery2.fn.uniqueSort = function () {
      return this.pushStack(_jQuery2.uniqueSort(_slice.apply(this)));
    };
    Expr = _jQuery2.expr = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape);

          // Move the given value to match[3] whether quoted or unquoted
          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }
          return match.slice(0, 4);
        },
        CHILD: function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              find.error(match[0]);
            }

            // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd");

            // other types prohibit arguments
          } else if (match[3]) {
            find.error(match[0]);
          }
          return match;
        },
        PSEUDO: function PSEUDO(match) {
          var excess,
            unquoted = !match[6] && match[2];
          if (matchExpr.CHILD.test(match[0])) {
            return null;
          }

          // Accept quoted arguments as-is
          if (match[3]) {
            match[2] = match[4] || match[5] || "";

            // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && (
          // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && (
          // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }

          // Return only captures needed by the pseudo filter method (type and argument)
          return match.slice(0, 3);
        }
      },
      filter: {
        TAG: function TAG(nodeNameSelector) {
          var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return nodeName(elem, expectedNodeName);
          };
        },
        CLASS: function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(name, operator, check) {
          return function (elem) {
            var result = find.attr(elem, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            if (operator === "=") {
              return result === check;
            }
            if (operator === "!=") {
              return result !== check;
            }
            if (operator === "^=") {
              return check && result.indexOf(check) === 0;
            }
            if (operator === "*=") {
              return check && result.indexOf(check) > -1;
            }
            if (operator === "$=") {
              return check && result.slice(-check.length) === check;
            }
            if (operator === "~=") {
              return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
            }
            if (operator === "|=") {
              return result === check || result.slice(0, check.length + 1) === check + "-";
            }
            return false;
          };
        },
        CHILD: function CHILD(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
            forward = type.slice(-4) !== "last",
            ofType = what === "of-type";
          return first === 1 && last === 0 ?
          // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, _context, xml) {
            var cache,
              outerCache,
              node,
              nodeIndex,
              start,
              dir = simple !== forward ? "nextSibling" : "previousSibling",
              parent = elem.parentNode,
              name = ofType && elem.nodeName.toLowerCase(),
              useCache = !xml && !ofType,
              diff = false;
            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;
                  while (node = node[dir]) {
                    if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                      return false;
                    }
                  }

                  // Reverse direction for :only-* (if we haven't yet done so)
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];

              // non-xml :nth-child(...) stores cache data on `parent`
              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                outerCache = parent[expando] || (parent[expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while (node = ++nodeIndex && node && node[dir] || (
                // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    outerCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  outerCache = elem[expando] || (elem[expando] = {});
                  cache = outerCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }

                // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {});
                        outerCache[type] = [dirruns, diff];
                      }
                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              }

              // Incorporate the offset, then check against cycle size
              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // https://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);

          // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as jQuery does
          if (fn[expando]) {
            return fn(argument);
          }

          // But maintain support for old signatures
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                matched = fn(seed, argument),
                i = matched.length;
              while (i--) {
                idx = indexOf.call(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        not: markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
            results = [],
            matcher = compile(selector.replace(rtrimCSS, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
            var elem,
              unmatched = matcher(seed, null, xml, []),
              i = seed.length;

            // Match elements unmatched by `matcher`
            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);

            // Don't keep the element
            // (see https://github.com/jquery/sizzle/issues/299)
            input[0] = null;
            return !results.pop();
          };
        }),
        has: markFunction(function (selector) {
          return function (elem) {
            return find(selector, elem).length > 0;
          };
        }),
        contains: markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || _jQuery2.text(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // https://www.w3.org/TR/selectors/#lang-pseudo
        lang: markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            find.error("unsupported lang: " + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        // Miscellaneous
        target: function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        root: function root(elem) {
          return elem === documentElement;
        },
        focus: function focus(elem) {
          return elem === safeActiveElement() && document.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        enabled: createDisabledPseudo(false),
        disabled: createDisabledPseudo(true),
        checked: function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
        },
        selected: function selected(elem) {
          // Support: IE <=11+
          // Accessing the selectedIndex property
          // forces the browser to treat the default option as
          // selected when in an optgroup.
          if (elem.parentNode) {
            // eslint-disable-next-line no-unused-expressions
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        // Contents
        empty: function empty(elem) {
          // https://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent: function parent(elem) {
          return !Expr.pseudos.empty(elem);
        },
        // Element/input types
        header: function header(elem) {
          return rheader.test(elem.nodeName);
        },
        input: function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        button: function button(elem) {
          return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
        },
        text: function text(elem) {
          var attr;
          return nodeName(elem, "input") && elem.type === "text" && (
          // Support: IE <10 only
          // New HTML5 attribute values (e.g., "search") appear
          // with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        first: createPositionalPseudo(function () {
          return [0];
        }),
        last: createPositionalPseudo(function (_matchIndexes, length) {
          return [length - 1];
        }),
        eq: createPositionalPseudo(function (_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        even: createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        odd: createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        lt: createPositionalPseudo(function (matchIndexes, length, argument) {
          var i;
          if (argument < 0) {
            i = argument + length;
          } else if (argument > length) {
            i = length;
          } else {
            i = argument;
          }
          for (; --i >= 0;) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        gt: createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length;) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        })
      }
    };
    Expr.pseudos.nth = Expr.pseudos.eq;

    // Add button/input type pseudos
    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }

    // Easy API for creating new setFilters
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    function tokenize(selector, parseOnly) {
      var matched,
        match,
        tokens,
        type,
        soFar,
        groups,
        preFilters,
        cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push(tokens = []);
        }
        matched = false;

        // Combinators
        if (match = rleadingCombinator.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrimCSS, " ")
          });
          soFar = soFar.slice(matched.length);
        }

        // Filters
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }

      // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens
      if (parseOnly) {
        return soFar.length;
      }
      return soFar ? find.error(selector) :
      // Cache the tokens
      tokenCache(selector, groups).slice(0);
    }
    function toSelector(tokens) {
      var i = 0,
        len = tokens.length,
        selector = "";
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
        skip = combinator.next,
        key = skip || dir,
        checkNonElements = base && key === "parentNode",
        doneName = done++;
      return combinator.first ?
      // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
        return false;
      } :
      // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
          outerCache,
          newCache = [dirruns, doneName];

        // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});
              if (skip && nodeName(elem, skip)) {
                elem = elem[dir] || elem;
              } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                outerCache[key] = newCache;

                // A match means we're done; a fail means we have to keep checking
                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      };
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i = 0,
        len = contexts.length;
      for (; i < len; i++) {
        find(selector, contexts[i], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem,
        newUnmatched = [],
        i = 0,
        len = unmatched.length,
        mapped = map != null;
      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function (seed, results, context, xml) {
        var temp,
          i,
          elem,
          matcherOut,
          preMap = [],
          postMap = [],
          preexisting = results.length,
          // Get initial elements from seed or context
          elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
          // Prefilter to get matcher input, preserving a map for seed-results synchronization
          matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
        if (matcher) {
          // If we have a postFinder, or filtered seed, or non-seed postFilter
          // or preexisting results,
          matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ?
          // ...intermediate processing is necessary
          [] :
          // ...otherwise use results directly
          results;

          // Find primary matches
          matcher(matcherIn, matcherOut, context, xml);
        } else {
          matcherOut = matcherIn;
        }

        // Apply postFilter
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);

          // Un-match failing elements by moving them back to matcherIn
          i = temp.length;
          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }
              postFinder(null, matcherOut = [], temp, xml);
            }

            // Move matched elements from seed to results to keep them synchronized
            i = matcherOut.length;
            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }

          // Add elements to results, through postFinder if defined
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext,
        matcher,
        j,
        len = tokens.length,
        leadingRelative = Expr.relative[tokens[0].type],
        implicitRelative = leadingRelative || Expr.relative[" "],
        i = leadingRelative ? 1 : 0,
        // The foundational matcher ensures that elements are reachable from top-level context(s)
        matchContext = addCombinator(function (elem) {
          return elem === checkContext;
        }, implicitRelative, true),
        matchAnyContext = addCombinator(function (elem) {
          return indexOf.call(checkContext, elem) > -1;
        }, implicitRelative, true),
        matchers = [function (elem, context, xml) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));

          // Avoid hanging onto element
          // (see https://github.com/jquery/sizzle/issues/299)
          checkContext = null;
          return ret;
        }];
      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

          // Return special upon seeing a positional matcher
          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrimCSS, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
        byElement = elementMatchers.length > 0,
        superMatcher = function superMatcher(seed, context, xml, results, outermost) {
          var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
            elems = seed || byElement && Expr.find.TAG("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
            dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;
          if (outermost) {
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            outermostContext = context == document || context || outermost;
          }

          // Add elements passing elementMatchers directly to results
          // Support: iOS <=7 - 9 only
          // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
          // elements by id. (see trac-14142)
          for (; i !== len && (elem = elems[i]) != null; i++) {
            if (byElement && elem) {
              j = 0;

              // Support: IE 11+, Edge 17 - 18+
              // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
              // two documents; shallow comparisons work.
              // eslint-disable-next-line eqeqeq
              if (!context && elem.ownerDocument != document) {
                setDocument(elem);
                xml = !documentIsHTML;
              }
              while (matcher = elementMatchers[j++]) {
                if (matcher(elem, context || document, xml)) {
                  push.call(results, elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
              }
            }

            // Track unmatched elements for set filters
            if (bySet) {
              // They will have gone through all possible matchers
              if (elem = !matcher && elem) {
                matchedCount--;
              }

              // Lengthen the array for every element, matched or not
              if (seed) {
                unmatched.push(elem);
              }
            }
          }

          // `i` is now the count of elements visited above, and adding it to `matchedCount`
          // makes the latter nonnegative.
          matchedCount += i;

          // Apply set filters to unmatched elements
          // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
          // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
          // no element matchers and no seed.
          // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
          // case, which will result in a "00" `matchedCount` that differs from `i` but is also
          // numerically zero.
          if (bySet && i !== matchedCount) {
            j = 0;
            while (matcher = setMatchers[j++]) {
              matcher(unmatched, setMatched, context, xml);
            }
            if (seed) {
              // Reintegrate element matches to eliminate the need for sorting
              if (matchedCount > 0) {
                while (i--) {
                  if (!(unmatched[i] || setMatched[i])) {
                    setMatched[i] = pop.call(results);
                  }
                }
              }

              // Discard index placeholder values to get only actual matches
              setMatched = condense(setMatched);
            }

            // Add matches to results
            push.apply(results, setMatched);

            // Seedless set matches succeeding multiple successful matchers stipulate sorting
            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
              _jQuery2.uniqueSort(results);
            }
          }

          // Override manipulation of globals by nested matchers
          if (outermost) {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          }
          return unmatched;
        };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    function compile(selector, match /* Internal Use Only */) {
      var i,
        setMatchers = [],
        elementMatchers = [],
        cached = compilerCache[selector + " "];
      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
          cached = matcherFromTokens(match[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }

        // Cache the compiled function
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

        // Save selector and tokenization
        cached.selector = selector;
      }
      return cached;
    }

    /**
     * A low-level selection function that works with jQuery's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with jQuery selector compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */
    function select(selector, context, results, seed) {
      var i,
        tokens,
        token,
        type,
        find,
        compiled = typeof selector === "function" && selector,
        match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || [];

      // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)
      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
          if (!context) {
            return results;

            // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }

        // Fetch a seed set for right-to-left matching
        i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
        while (i--) {
          token = tokens[i];

          // Abort if we hit a combinator
          if (Expr.relative[type = token.type]) {
            break;
          }
          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }

      // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above
      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }

    // One-time assignments

    // Support: Android <=4.0 - 4.1+
    // Sort stability
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

    // Initialize against the default document
    setDocument();

    // Support: Android <=4.0 - 4.1+
    // Detached nodes confoundingly follow *each other*
    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    });
    _jQuery2.find = find;

    // Deprecated
    _jQuery2.expr[":"] = _jQuery2.expr.pseudos;
    _jQuery2.unique = _jQuery2.uniqueSort;

    // These have always been private, but they used to be documented as part of
    // Sizzle so let's maintain them for now for backwards compatibility purposes.
    find.compile = compile;
    find.select = select;
    find.setDocument = setDocument;
    find.tokenize = tokenize;
    find.escape = _jQuery2.escapeSelector;
    find.getText = _jQuery2.text;
    find.isXML = _jQuery2.isXMLDoc;
    find.selectors = _jQuery2.expr;
    find.support = _jQuery2.support;
    find.uniqueSort = _jQuery2.uniqueSort;

    /* eslint-enable */
  })();
  var dir = function dir(elem, _dir, until) {
    var matched = [],
      truncate = until !== undefined;
    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && _jQuery2(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };
  var _siblings = function siblings(n, elem) {
    var matched = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  };
  var rneedsContext = _jQuery2.expr.match.needsContext;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  // Implement the identical functionality for filter and not
  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return _jQuery2.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }

    // Single element
    if (qualifier.nodeType) {
      return _jQuery2.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    }

    // Arraylike of elements (jQuery, arguments, Array)
    if (typeof qualifier !== "string") {
      return _jQuery2.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    }

    // Filtered directly for both simple and complex selectors
    return _jQuery2.filter(qualifier, elements, not);
  }
  _jQuery2.filter = function (expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    if (elems.length === 1 && elem.nodeType === 1) {
      return _jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
    }
    return _jQuery2.find.matches(expr, _jQuery2.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };
  _jQuery2.fn.extend({
    find: function find(selector) {
      var i,
        ret,
        len = this.length,
        self = this;
      if (typeof selector !== "string") {
        return this.pushStack(_jQuery2(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (_jQuery2.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      ret = this.pushStack([]);
      for (i = 0; i < len; i++) {
        _jQuery2.find(selector, self[i], ret);
      }
      return len > 1 ? _jQuery2.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this,
      // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? _jQuery2(selector) : selector || [], false).length;
    }
  });

  // Initialize a jQuery object

  // A central reference to the root jQuery(document)
  var rootjQuery,
    // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
    // Strict HTML recognition (trac-11290: must start with <)
    // Shortcut simple #id case for speed
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    init = _jQuery2.fn.init = function (selector, context, root) {
      var match, elem;

      // HANDLE: $(""), $(null), $(undefined), $(false)
      if (!selector) {
        return this;
      }

      // Method init() accepts an alternate rootjQuery
      // so migrate can support jQuery.sub (gh-2101)
      root = root || rootjQuery;

      // Handle HTML strings
      if (typeof selector === "string") {
        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
          // Assume that strings that start and end with <> are HTML and skip the regex check
          match = [null, selector, null];
        } else {
          match = rquickExpr.exec(selector);
        }

        // Match html or make sure no context is specified for #id
        if (match && (match[1] || !context)) {
          // HANDLE: $(html) -> $(array)
          if (match[1]) {
            context = context instanceof _jQuery2 ? context[0] : context;

            // Option to run scripts is true for back-compat
            // Intentionally let the error be thrown if parseHTML is not present
            _jQuery2.merge(this, _jQuery2.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

            // HANDLE: $(html, props)
            if (rsingleTag.test(match[1]) && _jQuery2.isPlainObject(context)) {
              for (match in context) {
                // Properties of context are called as methods if possible
                if (isFunction(this[match])) {
                  this[match](context[match]);

                  // ...and otherwise set as attributes
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;

            // HANDLE: $(#id)
          } else {
            elem = document.getElementById(match[2]);
            if (elem) {
              // Inject the element directly into the jQuery object
              this[0] = elem;
              this.length = 1;
            }
            return this;
          }

          // HANDLE: $(expr, $(...))
        } else if (!context || context.jquery) {
          return (context || root).find(selector);

          // HANDLE: $(expr, context)
          // (which is just equivalent to: $(context).find(expr)
        } else {
          return this.constructor(context).find(selector);
        }

        // HANDLE: $(DOMElement)
      } else if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
        return this;

        // HANDLE: $(function)
        // Shortcut for document ready
      } else if (isFunction(selector)) {
        return root.ready !== undefined ? root.ready(selector) :
        // Execute immediately if ready is not present
        selector(_jQuery2);
      }
      return _jQuery2.makeArray(selector, this);
    };

  // Give the init function the jQuery prototype for later instantiation
  init.prototype = _jQuery2.fn;

  // Initialize central reference
  rootjQuery = _jQuery2(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
    // Methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
  _jQuery2.fn.extend({
    has: function has(target) {
      var targets = _jQuery2(target, this),
        l = targets.length;
      return this.filter(function () {
        var i = 0;
        for (; i < l; i++) {
          if (_jQuery2.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
        i = 0,
        l = this.length,
        matched = [],
        targets = typeof selectors !== "string" && _jQuery2(selectors);

      // Positional selectors never match, since there's no _selection_ context
      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :
            // Don't pass non-elements to jQuery#find
            cur.nodeType === 1 && _jQuery2.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }
      return this.pushStack(matched.length > 1 ? _jQuery2.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }

      // Index in selector
      if (typeof elem === "string") {
        return indexOf.call(_jQuery2(elem), this[0]);
      }

      // Locate the position of the desired element
      return indexOf.call(this,
      // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(_jQuery2.uniqueSort(_jQuery2.merge(this.get(), _jQuery2(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur;
  }
  _jQuery2.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (elem.contentDocument != null &&
      // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument)) {
        return elem.contentDocument;
      }

      // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.
      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }
      return _jQuery2.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    _jQuery2.fn[name] = function (until, selector) {
      var matched = _jQuery2.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = _jQuery2.filter(selector, matched);
      }
      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          _jQuery2.uniqueSort(matched);
        }

        // Reverse order for parents* and prev-derivatives
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

  // Convert String-formatted options into Object-formatted ones
  function createOptions(options) {
    var object = {};
    _jQuery2.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }

  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */
  _jQuery2.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : _jQuery2.extend({}, options);
    var
      // Flag to know if list is currently firing
      firing,
      // Last fire value for non-forgettable lists
      memory,
      // Flag to know if list was already fired
      _fired,
      // Flag to prevent firing
      _locked,
      // Actual callback list
      list = [],
      // Queue of execution data for repeatable lists
      queue = [],
      // Index of currently firing callback (modified by add/remove as needed)
      firingIndex = -1,
      // Fire callbacks
      fire = function fire() {
        // Enforce single-firing
        _locked = _locked || options.once;

        // Execute callbacks for all pending executions,
        // respecting firingIndex overrides and runtime changes
        _fired = firing = true;
        for (; queue.length; firingIndex = -1) {
          memory = queue.shift();
          while (++firingIndex < list.length) {
            // Run callback and check for early termination
            if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
              // Jump to end and forget the data so .add doesn't re-fire
              firingIndex = list.length;
              memory = false;
            }
          }
        }

        // Forget the data if we're done with it
        if (!options.memory) {
          memory = false;
        }
        firing = false;

        // Clean up if we're done firing for good
        if (_locked) {
          // Keep an empty list if we have data for future add calls
          if (memory) {
            list = [];

            // Otherwise, this object is spent
          } else {
            list = "";
          }
        }
      },
      // Actual Callbacks object
      self = {
        // Add a callback or a collection of callbacks to the list
        add: function add() {
          if (list) {
            // If we have memory from a past run, we should fire after adding
            if (memory && !firing) {
              firingIndex = list.length - 1;
              queue.push(memory);
            }
            (function add(args) {
              _jQuery2.each(args, function (_, arg) {
                if (isFunction(arg)) {
                  if (!options.unique || !self.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && toType(arg) !== "string") {
                  // Inspect recursively
                  add(arg);
                }
              });
            })(arguments);
            if (memory && !firing) {
              fire();
            }
          }
          return this;
        },
        // Remove a callback from the list
        remove: function remove() {
          _jQuery2.each(arguments, function (_, arg) {
            var index;
            while ((index = _jQuery2.inArray(arg, list, index)) > -1) {
              list.splice(index, 1);

              // Handle firing indexes
              if (index <= firingIndex) {
                firingIndex--;
              }
            }
          });
          return this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function has(fn) {
          return fn ? _jQuery2.inArray(fn, list) > -1 : list.length > 0;
        },
        // Remove all callbacks from the list
        empty: function empty() {
          if (list) {
            list = [];
          }
          return this;
        },
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function disable() {
          _locked = queue = [];
          list = memory = "";
          return this;
        },
        disabled: function disabled() {
          return !list;
        },
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect)
        // Abort any pending executions
        lock: function lock() {
          _locked = queue = [];
          if (!memory && !firing) {
            list = memory = "";
          }
          return this;
        },
        locked: function locked() {
          return !!_locked;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function fireWith(context, args) {
          if (!_locked) {
            args = args || [];
            args = [context, args.slice ? args.slice() : args];
            queue.push(args);
            if (!firing) {
              fire();
            }
          }
          return this;
        },
        // Call all the callbacks with the given arguments
        fire: function fire() {
          self.fireWith(this, arguments);
          return this;
        },
        // To know if the callbacks have already been called at least once
        fired: function fired() {
          return !!_fired;
        }
      };
    return self;
  };
  function Identity(v) {
    return v;
  }
  function Thrower(ex) {
    throw ex;
  }
  function adoptValue(value, resolve, reject, noValue) {
    var method;
    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject);

        // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject);

        // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      }

      // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.
    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }
  _jQuery2.extend({
    Deferred: function Deferred(func) {
      var tuples = [
        // action, add listener, callbacks,
        // ... .then handlers, argument index, [final state]
        ["notify", "progress", _jQuery2.Callbacks("memory"), _jQuery2.Callbacks("memory"), 2], ["resolve", "done", _jQuery2.Callbacks("once memory"), _jQuery2.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _jQuery2.Callbacks("once memory"), _jQuery2.Callbacks("once memory"), 1, "rejected"]],
        _state = "pending",
        _promise = {
          state: function state() {
            return _state;
          },
          always: function always() {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          "catch": function _catch(fn) {
            return _promise.then(null, fn);
          },
          // Keep pipe for back-compat
          pipe: function pipe(/* fnDone, fnFail, fnProgress */
          ) {
            var fns = arguments;
            return _jQuery2.Deferred(function (newDefer) {
              _jQuery2.each(tuples, function (_i, tuple) {
                // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];

                // deferred.progress(function() { bind to newDefer or newDefer.notify })
                // deferred.done(function() { bind to newDefer or newDefer.resolve })
                // deferred.fail(function() { bind to newDefer or newDefer.reject })
                deferred[tuple[1]](function () {
                  var returned = fn && fn.apply(this, arguments);
                  if (returned && isFunction(returned.promise)) {
                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                  }
                });
              });
              fns = null;
            }).promise();
          },
          then: function then(onFulfilled, onRejected, onProgress) {
            var maxDepth = 0;
            function resolve(depth, deferred, handler, special) {
              return function () {
                var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                    var returned, then;

                    // Support: Promises/A+ section 2.3.3.3.3
                    // https://promisesaplus.com/#point-59
                    // Ignore double-resolution attempts
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);

                    // Support: Promises/A+ section 2.3.1
                    // https://promisesaplus.com/#point-48
                    if (returned === deferred.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }

                    // Support: Promises/A+ sections 2.3.3.1, 3.5
                    // https://promisesaplus.com/#point-54
                    // https://promisesaplus.com/#point-75
                    // Retrieve `then` only once
                    then = returned && (
                    // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    _typeof(returned) === "object" || typeof returned === "function") && returned.then;

                    // Handle a returned thenable
                    if (isFunction(then)) {
                      // Special processors (notify) just wait for resolution
                      if (special) {
                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

                        // Normal processors (resolve) also hook into progress
                      } else {
                        // ...and disregard older resolution values
                        maxDepth++;
                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                      }

                      // Handle all other returned values
                    } else {
                      // Only substitute handlers pass on context
                      // and multiple values (non-spec behavior)
                      if (handler !== Identity) {
                        that = undefined;
                        args = [returned];
                      }

                      // Process the value(s)
                      // Default process is resolve
                      (special || deferred.resolveWith)(that, args);
                    }
                  },
                  // Only normal processors (resolve) catch and reject exceptions
                  process = special ? mightThrow : function () {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (_jQuery2.Deferred.exceptionHook) {
                        _jQuery2.Deferred.exceptionHook(e, process.error);
                      }

                      // Support: Promises/A+ section 2.3.3.3.4.1
                      // https://promisesaplus.com/#point-61
                      // Ignore post-resolution exceptions
                      if (depth + 1 >= maxDepth) {
                        // Only substitute handlers pass on context
                        // and multiple values (non-spec behavior)
                        if (handler !== Thrower) {
                          that = undefined;
                          args = [e];
                        }
                        deferred.rejectWith(that, args);
                      }
                    }
                  };

                // Support: Promises/A+ section 2.3.3.3.1
                // https://promisesaplus.com/#point-57
                // Re-resolve promises immediately to dodge false rejection from
                // subsequent errors
                if (depth) {
                  process();
                } else {
                  // Call an optional hook to record the error, in case of exception
                  // since it's otherwise lost when execution goes async
                  if (_jQuery2.Deferred.getErrorHook) {
                    process.error = _jQuery2.Deferred.getErrorHook();

                    // The deprecated alias of the above. While the name suggests
                    // returning the stack, not an error instance, jQuery just passes
                    // it directly to `console.warn` so both will work; an instance
                    // just better cooperates with source maps.
                  } else if (_jQuery2.Deferred.getStackHook) {
                    process.error = _jQuery2.Deferred.getStackHook();
                  }
                  window.setTimeout(process);
                }
              };
            }
            return _jQuery2.Deferred(function (newDefer) {
              // progress_handlers.add( ... )
              tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

              // fulfilled_handlers.add( ... )
              tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));

              // rejected_handlers.add( ... )
              tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
            }).promise();
          },
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function promise(obj) {
            return obj != null ? _jQuery2.extend(obj, _promise) : _promise;
          }
        },
        deferred = {};

      // Add list-specific methods
      _jQuery2.each(tuples, function (i, tuple) {
        var list = tuple[2],
          stateString = tuple[5];

        // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add
        _promise[tuple[1]] = list.add;

        // Handle state
        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          },
          // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable,
          // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable,
          // progress_callbacks.lock
          tuples[0][2].lock,
          // progress_handlers.lock
          tuples[0][3].lock);
        }

        // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire
        list.add(tuple[3].fire);

        // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }
        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        };

        // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith
        deferred[tuple[0] + "With"] = list.fireWith;
      });

      // Make the deferred a promise
      _promise.promise(deferred);

      // Call given func if any
      if (func) {
        func.call(deferred, deferred);
      }

      // All done!
      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var
        // count of uncompleted subordinates
        remaining = arguments.length,
        // count of unprocessed arguments
        i = remaining,
        // subordinate fulfillment data
        resolveContexts = Array(i),
        resolveValues = _slice.call(arguments),
        // the primary Deferred
        primary = _jQuery2.Deferred(),
        // subordinate callback factory
        updateFunc = function updateFunc(i) {
          return function (value) {
            resolveContexts[i] = this;
            resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
            if (! --remaining) {
              primary.resolveWith(resolveContexts, resolveValues);
            }
          };
        };

      // Single- and empty arguments are adopted like Promise.resolve
      if (remaining <= 1) {
        adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);

        // Use .then() to unwrap secondary thenables (cf. gh-3000)
        if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return primary.then();
        }
      }

      // Multiple arguments are aggregated like Promise.all array elements
      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), primary.reject);
      }
      return primary.promise();
    }
  });

  // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  // If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
  // captured before the async barrier to get the original error cause
  // which may otherwise be hidden.
  _jQuery2.Deferred.exceptionHook = function (error, asyncError) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, asyncError);
    }
  };
  _jQuery2.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  };

  // The deferred used on DOM ready
  var readyList = _jQuery2.Deferred();
  _jQuery2.fn.ready = function (fn) {
    readyList.then(fn)

    // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    .catch(function (error) {
      _jQuery2.readyException(error);
    });
    return this;
  };
  _jQuery2.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See trac-6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --_jQuery2.readyWait : _jQuery2.isReady) {
        return;
      }

      // Remember that the DOM is ready
      _jQuery2.isReady = true;

      // If a normal DOM Ready event fired, decrement, and wait if need be
      if (wait !== true && --_jQuery2.readyWait > 0) {
        return;
      }

      // If there are functions bound, to execute
      readyList.resolveWith(document, [_jQuery2]);
    }
  });
  _jQuery2.ready.then = readyList.then;

  // The ready event handler and self cleanup method
  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    _jQuery2.ready();
  }

  // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon
  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(_jQuery2.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed);

    // A fallback to window.onload, that will always work
    window.addEventListener("load", completed);
  }

  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  var _access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
      len = elems.length,
      bulk = key == null;

    // Sets many values
    if (toType(key) === "object") {
      chainable = true;
      for (i in key) {
        _access(elems, fn, i, key[i], true, emptyGet, raw);
      }

      // Sets one value
    } else if (value !== undefined) {
      chainable = true;
      if (!isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null;

          // ...except when executing function values
        } else {
          bulk = fn;
          fn = function fn(elem, _key, value) {
            return bulk.call(_jQuery2(elem), value);
          };
        }
      }
      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }
    if (chainable) {
      return elems;
    }

    // Gets
    if (bulk) {
      return fn.call(elems);
    }
    return len ? fn(elems[0], key) : emptyGet;
  };

  // Matches dashed string for camelizing
  var rmsPrefix = /^-ms-/,
    rdashAlpha = /-([a-z])/g;

  // Used by camelCase as callback to replace()
  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  }

  // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (trac-9572)
  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }
  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };
  function Data() {
    this.expando = _jQuery2.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando];

      // If not, create one
      if (!value) {
        value = {};

        // We can accept data for non-element nodes in modern browsers,
        // but we should not, see trac-8335.
        // Always return an empty object.
        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value;

            // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }
      return value;
    },
    set: function set(owner, data, value) {
      var prop,
        cache = this.cache(owner);

      // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)
      if (typeof data === "string") {
        cache[camelCase(data)] = value;

        // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }
      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) :
      // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      }

      // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //
      this.set(owner, key, value);

      // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]
      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
        cache = owner[this.expando];
      if (cache === undefined) {
        return;
      }
      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key);

          // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace
          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }
        i = key.length;
        while (i--) {
          delete cache[key[i]];
        }
      }

      // Remove the expando if there's no more data
      if (key === undefined || _jQuery2.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !_jQuery2.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data();

  //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    rmultiDash = /[A-Z]/g;
  function getData(data) {
    if (data === "true") {
      return true;
    }
    if (data === "false") {
      return false;
    }
    if (data === "null") {
      return null;
    }

    // Only convert to a number if it doesn't change the string
    if (data === +data + "") {
      return +data;
    }
    if (rbrace.test(data)) {
      return JSON.parse(data);
    }
    return data;
  }
  function dataAttr(elem, key, data) {
    var name;

    // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute
    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {}

        // Make sure we set the data so it isn't changed later
        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  _jQuery2.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  _jQuery2.fn.extend({
    data: function data(key, value) {
      var i,
        name,
        data,
        elem = this[0],
        attrs = elem && elem.attributes;

      // Gets all values
      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);
          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;
            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (trac-14894)
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }
        return data;
      }

      // Sets multiple values
      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }
      return _access(this, function (value) {
        var data;

        // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.
        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);
          if (data !== undefined) {
            return data;
          }

          // Attempt to "discover" the data in
          // HTML5 custom data-* attrs
          data = dataAttr(elem, key);
          if (data !== undefined) {
            return data;
          }

          // We tried really hard, but the data doesn't exist.
          return;
        }

        // Set the data...
        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  _jQuery2.extend({
    queue: function queue(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type);

        // Speed up dequeue by getting out quickly if this is just a lookup
        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, _jQuery2.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";
      var queue = _jQuery2.queue(elem, type),
        startLength = queue.length,
        fn = queue.shift(),
        hooks = _jQuery2._queueHooks(elem, type),
        next = function next() {
          _jQuery2.dequeue(elem, type);
        };

      // If the fx queue is dequeued, always remove the progress sentinel
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        }

        // Clear up the last queue stop function
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: _jQuery2.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  _jQuery2.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return _jQuery2.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function () {
        var queue = _jQuery2.queue(this, type, data);

        // Ensure a hooks for this queue
        _jQuery2._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          _jQuery2.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        _jQuery2.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
        count = 1,
        defer = _jQuery2.Deferred(),
        elements = this,
        i = this.length,
        resolve = function resolve() {
          if (! --count) {
            defer.resolveWith(elements, [elements]);
          }
        };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;
  var isAttached = function isAttached(elem) {
      return _jQuery2.contains(elem.ownerDocument, elem);
    },
    composed = {
      composed: true
    };

  // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.
  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return _jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }
  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem;

    // Inline style trumps all
    return elem.style.display === "none" || elem.style.display === "" &&
    // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && _jQuery2.css(elem, "display") === "none";
  };
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
      scale,
      maxIterations = 20,
      currentValue = tween ? function () {
        return tween.cur();
      } : function () {
        return _jQuery2.css(elem, prop, "");
      },
      initial = currentValue(),
      unit = valueParts && valueParts[3] || (_jQuery2.cssNumber[prop] ? "" : "px"),
      // Starting value computation is required for potential unit mismatches
      initialInUnit = elem.nodeType && (_jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(_jQuery2.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2;

      // Trust units reported by jQuery.css
      unit = unit || initialInUnit[3];

      // Iteratively approximate from a nonzero starting point
      initialInUnit = +initial || 1;
      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        _jQuery2.style(elem, prop, initialInUnit + unit);
        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }
        initialInUnit = initialInUnit / scale;
      }
      initialInUnit = initialInUnit * 2;
      _jQuery2.style(elem, prop, initialInUnit + unit);

      // Make sure we update the tween properties later on
      valueParts = valueParts || [];
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;

      // Apply relative offset (+=/-=) if specified
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var defaultDisplayMap = {};
  function getDefaultDisplay(elem) {
    var temp,
      doc = elem.ownerDocument,
      nodeName = elem.nodeName,
      display = defaultDisplayMap[nodeName];
    if (display) {
      return display;
    }
    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = _jQuery2.css(temp, "display");
    temp.parentNode.removeChild(temp);
    if (display === "none") {
      display = "block";
    }
    defaultDisplayMap[nodeName] = display;
    return display;
  }
  function showHide(elements, show) {
    var display,
      elem,
      values = [],
      index = 0,
      length = elements.length;

    // Determine new display value for elements that need to change
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      display = elem.style.display;
      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;
          if (!values[index]) {
            elem.style.display = "";
          }
        }
        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none";

          // Remember what we're overwriting
          dataPriv.set(elem, "display", display);
        }
      }
    }

    // Set the display of the elements in a second loop to avoid constant reflow
    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }
    return elements;
  }
  _jQuery2.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          _jQuery2(this).show();
        } else {
          _jQuery2(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
  (function () {
    var fragment = document.createDocumentFragment(),
      div = fragment.appendChild(document.createElement("div")),
      input = document.createElement("input");

    // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (trac-11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (trac-14901)
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input);

    // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

    // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;

    // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.
    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })();

  // We have to close these tags to support XHTML (trac-13200)
  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;

  // Support: IE <=9 only
  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }
  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
    var ret;
    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }
    if (tag === undefined || tag && nodeName(context, tag)) {
      return _jQuery2.merge([context], ret);
    }
    return ret;
  }

  // Mark scripts as having already been evaluated
  function setGlobalEval(elems, refElements) {
    var i = 0,
      l = elems.length;
    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
      tmp,
      tag,
      wrap,
      attached,
      j,
      fragment = context.createDocumentFragment(),
      nodes = [],
      i = 0,
      l = elems.length;
    for (; i < l; i++) {
      elem = elems[i];
      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          _jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);

          // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));

          // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));

          // Deserialize a standard representation
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + _jQuery2.htmlPrefilter(elem) + wrap[2];

          // Descend through wrappers to the right content
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }

          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          _jQuery2.merge(nodes, tmp.childNodes);

          // Remember the top-level container
          tmp = fragment.firstChild;

          // Ensure the created nodes are orphaned (trac-12392)
          tmp.textContent = "";
        }
      }
    }

    // Remove wrapper from fragment
    fragment.textContent = "";
    i = 0;
    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && _jQuery2.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
        continue;
      }
      attached = isAttached(elem);

      // Append to fragment
      tmp = getAll(fragment.appendChild(elem), "script");

      // Preserve script evaluation history
      if (attached) {
        setGlobalEval(tmp);
      }

      // Capture executables
      if (scripts) {
        j = 0;
        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }
    return fragment;
  }
  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function _on(elem, types, selector, data, fn, one) {
    var origFn, type;

    // Types can be a map of types/handlers
    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }
      return elem;
    }
    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }
    if (one === 1) {
      origFn = fn;
      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        _jQuery2().off(event);
        return origFn.apply(this, arguments);
      };

      // Use same guid so caller can remove using origFn
      fn.guid = origFn.guid || (origFn.guid = _jQuery2.guid++);
    }
    return elem.each(function () {
      _jQuery2.event.add(this, types, fn, data, selector);
    });
  }

  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */
  _jQuery2.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
        eventHandle,
        tmp,
        events,
        t,
        handleObj,
        special,
        handlers,
        type,
        namespaces,
        origType,
        elemData = dataPriv.get(elem);

      // Only attach events to objects that accept data
      if (!acceptData(elem)) {
        return;
      }

      // Caller can pass in an object of custom data in lieu of the handler
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }

      // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)
      if (selector) {
        _jQuery2.find.matchesSelector(documentElement, selector);
      }

      // Make sure that the handler has a unique ID, used to find/remove it later
      if (!handler.guid) {
        handler.guid = _jQuery2.guid++;
      }

      // Init the element's event structure and main handler, if this is the first
      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof _jQuery2 !== "undefined" && _jQuery2.event.triggered !== e.type ? _jQuery2.event.dispatch.apply(elem, arguments) : undefined;
        };
      }

      // Handle multiple events separated by a space
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();

        // There *must* be a type, no attaching namespace-only handlers
        if (!type) {
          continue;
        }

        // If event changes its type, use the special event handlers for the changed type
        special = _jQuery2.event.special[type] || {};

        // If selector defined, determine special event api type, otherwise given type
        type = (selector ? special.delegateType : special.bindType) || type;

        // Update special based on newly reset type
        special = _jQuery2.event.special[type] || {};

        // handleObj is passed to all event handlers
        handleObj = _jQuery2.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && _jQuery2.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);

        // Init the event handler queue if we're the first
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;

          // Only use addEventListener if the special events handler returns false
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }

        // Add to the element's handler list, delegates in front
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }

        // Keep track of which events have ever been used, for event optimization
        _jQuery2.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
        origCount,
        tmp,
        events,
        t,
        handleObj,
        special,
        handlers,
        type,
        namespaces,
        origType,
        elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }

      // Once for each type.namespace in types; type may be omitted
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();

        // Unbind all events (on this namespace, if provided) for the element
        if (!type) {
          for (type in events) {
            _jQuery2.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = _jQuery2.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

        // Remove matching events
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }

        // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            _jQuery2.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }

      // Remove data and the expando if it's no longer used
      if (_jQuery2.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      var i,
        j,
        ret,
        matched,
        handleObj,
        handlerQueue,
        args = new Array(arguments.length),
        // Make a writable jQuery.Event from the native event object
        event = _jQuery2.event.fix(nativeEvent),
        handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
        special = _jQuery2.event.special[event.type] || {};

      // Use the fix-ed jQuery.Event rather than the (read-only) native event
      args[0] = event;
      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      event.delegateTarget = this;

      // Call the preDispatch hook for the mapped type, and let it bail if desired
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }

      // Determine handlers
      handlerQueue = _jQuery2.event.handlers.call(this, event, handlers);

      // Run delegates first; they may want to stop propagation beneath us
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((_jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }

      // Call the postDispatch hook for the mapped type
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
        handleObj,
        sel,
        matchedHandlers,
        matchedSelectors,
        handlerQueue = [],
        delegateCount = _handlers.delegateCount,
        cur = event.target;

      // Find delegate handlers
      if (delegateCount &&
      // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType &&
      // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (trac-13208)
          // Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};
            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i];

              // Don't conflict with Object.prototype properties (trac-13203)
              sel = handleObj.selector + " ";
              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? _jQuery2(sel, this).index(cur) > -1 : _jQuery2.find(sel, this, null, [cur]).length;
              }
              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }
            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      }

      // Add the remaining (directly-bound) handlers
      cur = this;
      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(_jQuery2.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[_jQuery2.expando] ? originalEvent : new _jQuery2.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data;

          // Claim the first handler
          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", true);
          }

          // Return false to allow normal processing in the caller
          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data;

          // Force setup before triggering a click
          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          }

          // Return non-false to allow normal event-path propagation
          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  };

  // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.
  function leverageNative(el, type, isSetup) {
    // Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
    if (!isSetup) {
      if (dataPriv.get(el, type) === undefined) {
        _jQuery2.event.add(el, type, returnTrue);
      }
      return;
    }

    // Register the controller as a special universal handler for all event namespaces
    dataPriv.set(el, type, false);
    _jQuery2.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var result,
          saved = dataPriv.get(this, type);
        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          if (!saved) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved);

            // Trigger the native event and capture its result
            this[type]();
            result = dataPriv.get(this, type);
            dataPriv.set(this, type, false);
            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result;
            }

            // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering
            // the native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.
          } else if ((_jQuery2.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          }

          // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments
        } else if (saved) {
          // ...and capture the result
          dataPriv.set(this, type, _jQuery2.event.trigger(saved[0], saved.slice(1), this));

          // Abort handling of the native event by all jQuery handlers while allowing
          // native handlers on the same element to run. On target, this is achieved
          // by stopping immediate propagation just on the jQuery event. However,
          // the native event is re-wrapped by a jQuery one on each level of the
          // propagation so the only way to stop it for jQuery is to stop it for
          // everyone via native `stopPropagation()`. This is not a problem for
          // focus/blur which don't bubble, but it does also stop click on checkboxes
          // and radios. We accept this limitation.
          event.stopPropagation();
          event.isImmediatePropagationStopped = returnTrue;
        }
      }
    });
  }
  _jQuery2.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };
  _jQuery2.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof _jQuery2.Event)) {
      return new _jQuery2.Event(src, props);
    }

    // Event object
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;

      // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&
      // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse;

      // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (trac-504, trac-13143)
      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;

      // Event type
    } else {
      this.type = src;
    }

    // Put explicitly provided properties onto the event object
    if (props) {
      _jQuery2.extend(this, props);
    }

    // Create a timestamp if incoming event doesn't have one
    this.timeStamp = src && src.timeStamp || Date.now();

    // Mark it as fixed
    this[_jQuery2.expando] = true;
  };

  // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
  _jQuery2.Event.prototype = {
    constructor: _jQuery2.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };

  // Includes all common event props including KeyEvent and MouseEvent specific props
  _jQuery2.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: true
  }, _jQuery2.event.addProp);
  _jQuery2.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    function focusMappedHandler(nativeEvent) {
      if (document.documentMode) {
        // Support: IE 11+
        // Attach a single focusin/focusout handler on the document while someone wants
        // focus/blur. This is because the former are synchronous in IE while the latter
        // are async. In other browsers, all those handlers are invoked synchronously.

        // `handle` from private data would already wrap the event, but we need
        // to change the `type` here.
        var handle = dataPriv.get(this, "handle"),
          event = _jQuery2.event.fix(nativeEvent);
        event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
        event.isSimulated = true;

        // First, handle focusin/focusout
        handle(nativeEvent);

        // ...then, handle focus/blur
        //
        // focus/blur don't bubble while focusin/focusout do; simulate the former by only
        // invoking the handler at the lower level.
        if (event.target === event.currentTarget) {
          // The setup part calls `leverageNative`, which, in turn, calls
          // `jQuery.event.add`, so event handle will already have been set
          // by this point.
          handle(event);
        }
      } else {
        // For non-IE browsers, attach a single capturing handler on the document
        // while someone wants focusin/focusout.
        _jQuery2.event.simulate(delegateType, nativeEvent.target, _jQuery2.event.fix(nativeEvent));
      }
    }
    _jQuery2.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        var attaches;

        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, true);
        if (document.documentMode) {
          // Support: IE 9 - 11+
          // We use the same native handler for focusin & focus (and focusout & blur)
          // so we need to coordinate setup & teardown parts between those events.
          // Use `delegateType` as the key as `type` is already used by `leverageNative`.
          attaches = dataPriv.get(this, delegateType);
          if (!attaches) {
            this.addEventListener(delegateType, focusMappedHandler);
          }
          dataPriv.set(this, delegateType, (attaches || 0) + 1);
        } else {
          // Return false to allow normal processing in the caller
          return false;
        }
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type);

        // Return non-false to allow normal event-path propagation
        return true;
      },
      teardown: function teardown() {
        var attaches;
        if (document.documentMode) {
          attaches = dataPriv.get(this, delegateType) - 1;
          if (!attaches) {
            this.removeEventListener(delegateType, focusMappedHandler);
            dataPriv.remove(this, delegateType);
          } else {
            dataPriv.set(this, delegateType, attaches);
          }
        } else {
          // Return false to indicate standard teardown should be applied
          return false;
        }
      },
      // Suppress native focus or blur if we're currently inside
      // a leveraged native-event stack
      _default: function _default(event) {
        return dataPriv.get(event.target, type);
      },
      delegateType: delegateType
    };

    // Support: Firefox <=44
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
    //
    // Support: IE 9 - 11+
    // To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
    // attach a single handler for both events in IE.
    _jQuery2.event.special[delegateType] = {
      setup: function setup() {
        // Handle: regular nodes (via `this.ownerDocument`), window
        // (via `this.document`) & document (via `this`).
        var doc = this.ownerDocument || this.document || this,
          dataHolder = document.documentMode ? this : doc,
          attaches = dataPriv.get(dataHolder, delegateType);

        // Support: IE 9 - 11+
        // We use the same native handler for focusin & focus (and focusout & blur)
        // so we need to coordinate setup & teardown parts between those events.
        // Use `delegateType` as the key as `type` is already used by `leverageNative`.
        if (!attaches) {
          if (document.documentMode) {
            this.addEventListener(delegateType, focusMappedHandler);
          } else {
            doc.addEventListener(type, focusMappedHandler, true);
          }
        }
        dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
      },
      teardown: function teardown() {
        var doc = this.ownerDocument || this.document || this,
          dataHolder = document.documentMode ? this : doc,
          attaches = dataPriv.get(dataHolder, delegateType) - 1;
        if (!attaches) {
          if (document.documentMode) {
            this.removeEventListener(delegateType, focusMappedHandler);
          } else {
            doc.removeEventListener(type, focusMappedHandler, true);
          }
          dataPriv.remove(dataHolder, delegateType);
        } else {
          dataPriv.set(dataHolder, delegateType, attaches);
        }
      }
    };
  });

  // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).
  _jQuery2.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    _jQuery2.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
          target = this,
          related = event.relatedTarget,
          handleObj = event.handleObj;

        // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window
        if (!related || related !== target && !_jQuery2.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  _jQuery2.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        _jQuery2(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function () {
        _jQuery2.event.remove(this, types, fn, selector);
      });
    }
  });
  var
    // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i,
    // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

  // Prefer a tbody over its parent table for containing new rows
  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return _jQuery2(elem).children("tbody")[0] || elem;
    }
    return elem;
  }

  // Replace/restore the type attribute of script elements for safe DOM manipulation
  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;
    if (dest.nodeType !== 1) {
      return;
    }

    // 1. Copy private data: events, handlers, etc.
    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;
      if (events) {
        dataPriv.remove(dest, "handle events");
        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            _jQuery2.event.add(dest, type, events[type][i]);
          }
        }
      }
    }

    // 2. Copy user data
    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = _jQuery2.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  }

  // Fix IE bugs, see support tests
  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();

    // Fails to persist the checked state of a cloned checkbox or radio button.
    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked;

      // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args);
    var fragment,
      first,
      scripts,
      hasScripts,
      node,
      doc,
      i = 0,
      l = collection.length,
      iNoClone = l - 1,
      value = args[0],
      valueIsFunction = isFunction(value);

    // We can't cloneNode fragments that contain checked, in WebKit
    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);
        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }

      // Require either new content or an interest in ignored elements to invoke the callback
      if (first || ignored) {
        scripts = _jQuery2.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;

        // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (trac-8070).
        for (; i < l; i++) {
          node = fragment;
          if (i !== iNoClone) {
            node = _jQuery2.clone(node, true, true);

            // Keep references to cloned scripts for later restoration
            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              _jQuery2.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i], node, i);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;

          // Re-enable scripts
          _jQuery2.map(scripts, restoreScript);

          // Evaluate executable scripts on first document insertion
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];
            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && _jQuery2.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (_jQuery2._evalUrl && !node.noModule) {
                  _jQuery2._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                // Unwrap a CDATA section containing script contents. This shouldn't be
                // needed as in XML documents they're already not visible when
                // inspecting element contents and in HTML documents they have no
                // meaning but we're preserving that logic for backwards compatibility.
                // This will be removed completely in 4.0. See gh-4904.
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }
    return collection;
  }
  function _remove(elem, selector, keepData) {
    var node,
      nodes = selector ? _jQuery2.filter(selector, elem) : elem,
      i = 0;
    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        _jQuery2.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem;
  }
  _jQuery2.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html;
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
        l,
        srcElements,
        destElements,
        clone = elem.cloneNode(true),
        inPage = isAttached(elem);

      // Fix IE cloning issues
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !_jQuery2.isXMLDoc(elem)) {
        // We eschew jQuery#find here for performance reasons:
        // https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }

      // Copy the events from the original to the clone
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }

      // Preserve script evaluation history
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }

      // Return the cloned set
      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
        elem,
        type,
        special = _jQuery2.event.special,
        i = 0;
      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  _jQuery2.event.remove(elem, type);

                  // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  _jQuery2.removeEvent(elem, type, data.handle);
                }
              }
            }

            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataPriv.expando] = undefined;
          }
          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  _jQuery2.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return _access(this, function (value) {
        return value === undefined ? _jQuery2.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
        i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          _jQuery2.cleanData(getAll(elem, false));

          // Remove any remaining nodes
          elem.textContent = "";
        }
      }
      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return _jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return _access(this, function (value) {
        var elem = this[0] || {},
          i = 0,
          l = this.length;
        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        }

        // See if we can take a shortcut and just use innerHTML
        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = _jQuery2.htmlPrefilter(value);
          try {
            for (; i < l; i++) {
              elem = this[i] || {};

              // Remove element nodes and prevent memory leaks
              if (elem.nodeType === 1) {
                _jQuery2.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }
            elem = 0;

            // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = [];

      // Make the changes, replacing each non-ignored context element with the new content
      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;
        if (_jQuery2.inArray(this, ignored) < 0) {
          _jQuery2.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem, this);
          }
        }

        // Force callback invocation
      }, ignored);
    }
  });
  _jQuery2.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    _jQuery2.fn[name] = function (selector) {
      var elems,
        ret = [],
        insert = _jQuery2(selector),
        last = insert.length - 1,
        i = 0;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        _jQuery2(insert[i])[original](elems);

        // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var rcustomProp = /^--/;
  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window;
    }
    return view.getComputedStyle(elem);
  };
  var swap = function swap(elem, options, callback) {
    var ret,
      name,
      old = {};

    // Remember the old values, and insert the new ones
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.call(elem);

    // Revert the old values
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  var rboxStyle = new RegExp(cssExpand.join("|"), "i");
  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }
      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%";

      // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

      // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't
      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

      // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements
      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

      // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)
      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container);

      // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed
      div = null;
    }
    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }
    var pixelPositionVal,
      boxSizingReliableVal,
      scrollboxSizeVal,
      pixelBoxStylesVal,
      reliableTrDimensionsVal,
      reliableMarginLeftVal,
      container = document.createElement("div"),
      div = document.createElement("div");

    // Finish early in limited (non-browser) environments
    if (!div.style) {
      return;
    }

    // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (trac-8908)
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    _jQuery2.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      //
      // Support: Firefox 70+
      // Only Firefox includes border widths
      // in computed dimensions. (gh-4529)
      reliableTrDimensions: function reliableTrDimensions() {
        var table, tr, trChild, trStyle;
        if (reliableTrDimensionsVal == null) {
          table = document.createElement("table");
          tr = document.createElement("tr");
          trChild = document.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
          tr.style.cssText = "box-sizing:content-box;border:1px solid";

          // Support: Chrome 86+
          // Height set through cssText does not get applied.
          // Computed height then comes back as 0.
          tr.style.height = "1px";
          trChild.style.height = "9px";

          // Support: Android 8 Chrome 86+
          // In our bodyBackground.html iframe,
          // display for all div elements is set to "inline",
          // which causes a problem only in Android 8 Chrome 86.
          // Ensuring the div is `display: block`
          // gets around this issue.
          trChild.style.display = "block";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
          documentElement.removeChild(table);
        }
        return reliableTrDimensionsVal;
      }
    });
  })();
  function curCSS(elem, name, computed) {
    var width,
      minWidth,
      maxWidth,
      ret,
      isCustomProp = rcustomProp.test(name),
      // Support: Firefox 51+
      // Retrieving style before computed somehow
      // fixes an issue with getting wrong values
      // on detached elements
      style = elem.style;
    computed = computed || getStyles(elem);

    // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, trac-12537)
    //   .css('--customProperty) (gh-3144)
    if (computed) {
      // Support: IE <=9 - 11+
      // IE only supports `"float"` in `getPropertyValue`; in computed styles
      // it's only available as `"cssFloat"`. We no longer modify properties
      // sent to `.css()` apart from camelCasing, so we need to check both.
      // Normally, this would create difference in behavior: if
      // `getPropertyValue` returns an empty string, the value returned
      // by `.css()` would be `undefined`. This is usually the case for
      // disconnected elements. However, in IE even disconnected elements
      // with no styles return `"none"` for `getPropertyValue( "float" )`
      ret = computed.getPropertyValue(name) || computed[name];
      if (isCustomProp && ret) {
        // Support: Firefox 105+, Chrome <=105+
        // Spec requires trimming whitespace for custom properties (gh-4926).
        // Firefox only trims leading whitespace. Chrome just collapses
        // both leading & trailing whitespace to a single space.
        //
        // Fall back to `undefined` if empty string returned.
        // This collapses a missing definition with property defined
        // and set to an empty string but there's no standard API
        // allowing us to differentiate them without a performance penalty
        // and returning `undefined` aligns with older jQuery.
        //
        // rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
        // as whitespace while CSS does not, but this is not a problem
        // because CSS preprocessing replaces them with U+000A LINE FEED
        // (which *is* CSS whitespace)
        // https://www.w3.org/TR/css-syntax-3/#input-preprocessing
        ret = ret.replace(rtrimCSS, "$1") || undefined;
      }
      if (ret === "" && !isAttached(elem)) {
        ret = _jQuery2.style(elem, name);
      }

      // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values
      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;

        // Put in the new values to get a computed value out
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;

        // Revert the changed values
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }
    return ret !== undefined ?
    // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }
  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        }

        // Hook needed; redefine it so that the support test is not executed again.
        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }
  var cssPrefixes = ["Webkit", "Moz", "ms"],
    emptyStyle = document.createElement("div").style,
    vendorProps = {};

  // Return a vendor-prefixed property or undefined
  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
      i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }

  // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
  function finalPropName(name) {
    var final = _jQuery2.cssProps[name] || vendorProps[name];
    if (final) {
      return final;
    }
    if (name in emptyStyle) {
      return name;
    }
    return vendorProps[name] = vendorPropName(name) || name;
  }
  var
    // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/,
    cssShow = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function setPositiveNumber(_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ?
    // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }
  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
      extra = 0,
      delta = 0,
      marginDelta = 0;

    // Adjustment may not be necessary
    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }
    for (; i < 4; i += 2) {
      // Both box models exclude margin
      // Count margin delta separately to only add it after scroll gutter adjustment.
      // This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
      if (box === "margin") {
        marginDelta += _jQuery2.css(elem, box + cssExpand[i], true, styles);
      }

      // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
      if (!isBorderBox) {
        // Add padding
        delta += _jQuery2.css(elem, "padding" + cssExpand[i], true, styles);

        // For "border" or "margin", add border
        if (box !== "padding") {
          delta += _jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);

          // But still keep track of it otherwise
        } else {
          extra += _jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }

        // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"
      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= _jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
        }

        // For "content" or "padding", subtract border
        if (box !== "margin") {
          delta -= _jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }

    // Account for positive content-box scroll gutter when requested by providing computedVal
    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5

      // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }
    return delta + marginDelta;
  }
  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
      // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
      // Fake content-box until we know it's needed to know the true value.
      boxSizingNeeded = !support.boxSizingReliable() || extra,
      isBorderBox = boxSizingNeeded && _jQuery2.css(elem, "boxSizing", false, styles) === "border-box",
      valueIsBorderBox = isBorderBox,
      val = curCSS(elem, dimension, styles),
      offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);

    // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.
    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }
      val = "auto";
    }

    // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.
    if ((!support.boxSizingReliable() && isBorderBox ||
    // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem, "tr") ||
    // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" ||
    // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && _jQuery2.css(elem, "display", false, styles) === "inline") &&
    // Make sure the element is visible & connected
    elem.getClientRects().length) {
      isBorderBox = _jQuery2.css(elem, "boxSizing", false, styles) === "border-box";

      // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.
      valueIsBorderBox = offsetProp in elem;
      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    }

    // Normalize "" and auto
    val = parseFloat(val) || 0;

    // Adjust for the element's box model
    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles,
    // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }
  _jQuery2.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageSlice: true,
      columnCount: true,
      flexGrow: true,
      flexShrink: true,
      fontWeight: true,
      gridArea: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnStart: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowStart: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      scale: true,
      widows: true,
      zIndex: true,
      zoom: true,
      // SVG-related
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeMiterlimit: true,
      strokeOpacity: true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }

      // Make sure that we're working with the right name
      var ret,
        type,
        hooks,
        origName = camelCase(name),
        isCustomProp = rcustomProp.test(name),
        style = elem.style;

      // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.
      if (!isCustomProp) {
        name = finalPropName(origName);
      }

      // Gets hook for the prefixed version, then unprefixed version
      hooks = _jQuery2.cssHooks[name] || _jQuery2.cssHooks[origName];

      // Check if we're setting a value
      if (value !== undefined) {
        type = _typeof(value);

        // Convert "+=" or "-=" to relative numbers (trac-7345)
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);

          // Fixes bug trac-9237
          type = "number";
        }

        // Make sure that null and NaN values aren't set (trac-7116)
        if (value == null || value !== value) {
          return;
        }

        // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.
        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (_jQuery2.cssNumber[origName] ? "" : "px");
        }

        // background-* props affect original clone's values
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }

        // If a hook was provided, use that value, otherwise just set the specified value
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }

        // Otherwise just get the value from the style object
        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
        num,
        hooks,
        origName = camelCase(name),
        isCustomProp = rcustomProp.test(name);

      // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.
      if (!isCustomProp) {
        name = finalPropName(origName);
      }

      // Try prefixed name followed by the unprefixed name
      hooks = _jQuery2.cssHooks[name] || _jQuery2.cssHooks[origName];

      // If a hook was provided get the computed value from there
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }

      // Otherwise, if a way to get the computed value exists, use that
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }

      // Convert "normal" to computed value
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }

      // Make numeric if forced or a qualifier was provided and val looks numeric
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });
  _jQuery2.each(["height", "width"], function (_i, dimension) {
    _jQuery2.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(_jQuery2.css(elem, "display")) && (
          // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
          styles = getStyles(elem),
          // Only read styles.position if the test has a chance to fail
          // to avoid forcing a reflow.
          scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
          // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
          boxSizingNeeded = scrollboxSizeBuggy || extra,
          isBorderBox = boxSizingNeeded && _jQuery2.css(elem, "boxSizing", false, styles) === "border-box",
          subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;

        // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)
        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        }

        // Convert to pixels if value adjustment is needed
        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = _jQuery2.css(elem, dimension);
        }
        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  _jQuery2.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  });

  // These hooks are used by animate to expand properties
  _jQuery2.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    _jQuery2.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
          expanded = {},
          // Assumes a single number if not a string
          parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }
    };
    if (prefix !== "margin") {
      _jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  _jQuery2.fn.extend({
    css: function css(name, value) {
      return _access(this, function (elem, name, value) {
        var styles,
          len,
          map = {},
          i = 0;
        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;
          for (; i < len; i++) {
            map[name[i]] = _jQuery2.css(elem, name[i], false, styles);
          }
          return map;
        }
        return value !== undefined ? _jQuery2.style(elem, name, value) : _jQuery2.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  _jQuery2.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || _jQuery2.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (_jQuery2.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
        hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = _jQuery2.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result;

        // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        }

        // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.
        result = _jQuery2.css(tween.elem, tween.prop, "");

        // Empty strings, null, undefined and "auto" are converted to 0.
        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (_jQuery2.fx.step[tween.prop]) {
          _jQuery2.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (_jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          _jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  };

  // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  _jQuery2.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  _jQuery2.fx = Tween.prototype.init;

  // Back compat <1.8 extension point
  _jQuery2.fx.step = {};
  var fxNow,
    inProgress,
    rfxtypes = /^(?:toggle|show|hide)$/,
    rrun = /queueHooks$/;
  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, _jQuery2.fx.interval);
      }
      _jQuery2.fx.tick();
    }
  }

  // Animations created synchronously will run synchronously
  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  }

  // Generate parameters to create a standard animation
  function genFx(type, includeWidth) {
    var which,
      i = 0,
      attrs = {
        height: type
      };

    // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween,
      collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
      index = 0,
      length = collection.length;
    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop,
      value,
      toggle,
      hooks,
      oldfire,
      propTween,
      restoreDisplay,
      display,
      isBox = "width" in props || "height" in props,
      anim = this,
      orig = {},
      style = elem.style,
      hidden = elem.nodeType && isHiddenWithinTree(elem),
      dataShow = dataPriv.get(elem, "fxshow");

    // Queue-skipping animations hijack the fx hooks
    if (!opts.queue) {
      hooks = _jQuery2._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;
          if (!_jQuery2.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }

    // Detect show/hide animations
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;

            // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || _jQuery2.style(elem, prop);
      }
    }

    // Bail out if this is a no-op like .hide().hide()
    propTween = !_jQuery2.isEmptyObject(props);
    if (!propTween && _jQuery2.isEmptyObject(orig)) {
      return;
    }

    // Restrict "overflow" and "display" styles during box animations
    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];

      // Identify a display type, preferring old show/hide data over the CSS cascade
      restoreDisplay = dataShow && dataShow.display;
      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }
      display = _jQuery2.css(elem, "display");
      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = _jQuery2.css(elem, "display");
          showHide([elem]);
        }
      }

      // Animate inline elements as inline-block
      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (_jQuery2.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });
            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }
          style.display = "inline-block";
        }
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }

    // Implement show/hide animations
    propTween = false;
    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        }

        // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
        if (toggle) {
          dataShow.hidden = !hidden;
        }

        // Show elements before animating them
        if (hidden) {
          showHide([elem], true);
        }

        /* eslint-disable no-loop-func */

        anim.done(function () {
          /* eslint-enable no-loop-func */

          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }
          dataPriv.remove(elem, "fxshow");
          for (prop in orig) {
            _jQuery2.style(elem, prop, orig[prop]);
          }
        });
      }

      // Per-property setup
      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;
        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }
  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks;

    // camelCase, specialEasing and expand cssHook pass
    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = _jQuery2.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];

        // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result,
      stopped,
      index = 0,
      length = Animation.prefilters.length,
      deferred = _jQuery2.Deferred().always(function () {
        // Don't match elem in the :animated selector
        delete tick.elem;
      }),
      tick = function tick() {
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
          // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
          temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;
        for (; index < length; index++) {
          animation.tweens[index].run(percent);
        }
        deferred.notifyWith(elem, [animation, percent, remaining]);

        // If there's more to do, yield
        if (percent < 1 && length) {
          return remaining;
        }

        // If this was an empty animation, synthesize a final progress notification
        if (!length) {
          deferred.notifyWith(elem, [animation, 1, 0]);
        }

        // Resolve the animation and report its conclusion
        deferred.resolveWith(elem, [animation]);
        return false;
      },
      animation = deferred.promise({
        elem: elem,
        props: _jQuery2.extend({}, properties),
        opts: _jQuery2.extend(true, {
          specialEasing: {},
          easing: _jQuery2.easing._default
        }, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function createTween(prop, end) {
          var tween = _jQuery2.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
          animation.tweens.push(tween);
          return tween;
        },
        stop: function stop(gotoEnd) {
          var index = 0,
            // If we are going to the end, we want to run all the tweens
            // otherwise we skip this part
            length = gotoEnd ? animation.tweens.length : 0;
          if (stopped) {
            return this;
          }
          stopped = true;
          for (; index < length; index++) {
            animation.tweens[index].run(1);
          }

          // Resolve when we played the last frame; otherwise, reject
          if (gotoEnd) {
            deferred.notifyWith(elem, [animation, 1, 0]);
            deferred.resolveWith(elem, [animation, gotoEnd]);
          } else {
            deferred.rejectWith(elem, [animation, gotoEnd]);
          }
          return this;
        }
      }),
      props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        if (isFunction(result.stop)) {
          _jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }
        return result;
      }
    }
    _jQuery2.map(props, createTween, animation);
    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }

    // Attach callbacks from options
    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    _jQuery2.fx.timer(_jQuery2.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }
  _jQuery2.Animation = _jQuery2.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }
      var prop,
        index = 0,
        length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  _jQuery2.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? _jQuery2.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    };

    // Go to the end state if fx are off
    if (_jQuery2.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in _jQuery2.fx.speeds) {
          opt.duration = _jQuery2.fx.speeds[opt.duration];
        } else {
          opt.duration = _jQuery2.fx.speeds._default;
        }
      }
    }

    // Normalize opt.queue - true/undefined/null -> "fx"
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }

    // Queueing
    opt.old = opt.complete;
    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        _jQuery2.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  _jQuery2.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show()

      // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = _jQuery2.isEmptyObject(prop),
        optall = _jQuery2.speed(speed, easing, callback),
        doAnimation = function doAnimation() {
          // Operate on a copy of prop so per-property easing won't be lost
          var anim = Animation(this, _jQuery2.extend({}, prop), optall);

          // Empty animations, or finishing resolves immediately
          if (empty || dataPriv.get(this, "finish")) {
            anim.stop(true);
          }
        };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue) {
        this.queue(type || "fx", []);
      }
      return this.each(function () {
        var dequeue = true,
          index = type != null && type + "queueHooks",
          timers = _jQuery2.timers,
          data = dataPriv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }

        // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.
        if (dequeue || !gotoEnd) {
          _jQuery2.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function () {
        var index,
          data = dataPriv.get(this),
          queue = data[type + "queue"],
          hooks = data[type + "queueHooks"],
          timers = _jQuery2.timers,
          length = queue ? queue.length : 0;

        // Enable finishing flag on private data
        data.finish = true;

        // Empty the queue first
        _jQuery2.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }

        // Look for any active animations, and finish them
        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }

        // Look for any animations in the old queue and finish them
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }

        // Turn off finishing flag
        delete data.finish;
      });
    }
  });
  _jQuery2.each(["toggle", "show", "hide"], function (_i, name) {
    var cssFn = _jQuery2.fn[name];
    _jQuery2.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });

  // Generate shortcuts for custom animations
  _jQuery2.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    _jQuery2.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  _jQuery2.timers = [];
  _jQuery2.fx.tick = function () {
    var timer,
      i = 0,
      timers = _jQuery2.timers;
    fxNow = Date.now();
    for (; i < timers.length; i++) {
      timer = timers[i];

      // Run the timer and safely remove it when done (allowing for external removal)
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      _jQuery2.fx.stop();
    }
    fxNow = undefined;
  };
  _jQuery2.fx.timer = function (timer) {
    _jQuery2.timers.push(timer);
    _jQuery2.fx.start();
  };
  _jQuery2.fx.interval = 13;
  _jQuery2.fx.start = function () {
    if (inProgress) {
      return;
    }
    inProgress = true;
    schedule();
  };
  _jQuery2.fx.stop = function () {
    inProgress = null;
  };
  _jQuery2.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  };

  // Based off of the plugin by Clint Helfers, with permission.
  _jQuery2.fn.delay = function (time, type) {
    time = _jQuery2.fx ? _jQuery2.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);
      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };
  (function () {
    var input = document.createElement("input"),
      select = document.createElement("select"),
      opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox";

    // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"
    support.checkOn = input.value !== "";

    // Support: IE <=11 only
    // Must access selectedIndex to make default options select
    support.optSelected = opt.selected;

    // Support: IE <=11 only
    // An input loses its value after becoming a radio
    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();
  var boolHook,
    attrHandle = _jQuery2.expr.attrHandle;
  _jQuery2.fn.extend({
    attr: function attr(name, value) {
      return _access(this, _jQuery2.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        _jQuery2.removeAttr(this, name);
      });
    }
  });
  _jQuery2.extend({
    attr: function attr(elem, name, value) {
      var ret,
        hooks,
        nType = elem.nodeType;

      // Don't get/set attributes on text, comment and attribute nodes
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      // Fallback to prop when attributes are not supported
      if (typeof elem.getAttribute === "undefined") {
        return _jQuery2.prop(elem, name, value);
      }

      // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined
      if (nType !== 1 || !_jQuery2.isXMLDoc(elem)) {
        hooks = _jQuery2.attrHooks[name.toLowerCase()] || (_jQuery2.expr.match.bool.test(name) ? boolHook : undefined);
      }
      if (value !== undefined) {
        if (value === null) {
          _jQuery2.removeAttr(elem, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        elem.setAttribute(name, value + "");
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = _jQuery2.find.attr(elem, name);

      // Non-existent attributes return null, we normalize to undefined
      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
        i = 0,
        // Attribute names can contain non-HTML whitespace characters
        // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
        attrNames = value && value.match(rnothtmlwhite);
      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  });

  // Hooks for boolean attributes
  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        _jQuery2.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }
      return name;
    }
  };
  _jQuery2.each(_jQuery2.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    var getter = attrHandle[name] || _jQuery2.find.attr;
    attrHandle[name] = function (elem, name, isXML) {
      var ret,
        handle,
        lowercaseName = name.toLowerCase();
      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }
      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
    rclickable = /^(?:a|area)$/i;
  _jQuery2.fn.extend({
    prop: function prop(name, value) {
      return _access(this, _jQuery2.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[_jQuery2.propFix[name] || name];
      });
    }
  });
  _jQuery2.extend({
    prop: function prop(elem, name, value) {
      var ret,
        hooks,
        nType = elem.nodeType;

      // Don't get/set properties on text, comment and attribute nodes
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !_jQuery2.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = _jQuery2.propFix[name] || name;
        hooks = _jQuery2.propHooks[name];
      }
      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        return elem[name] = value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // Use proper attribute retrieval (trac-12072)
          var tabindex = _jQuery2.find.attr(elem, "tabindex");
          if (tabindex) {
            return parseInt(tabindex, 10);
          }
          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }
          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });

  // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop
  if (!support.optSelected) {
    _jQuery2.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */

        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */

        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  _jQuery2.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    _jQuery2.propFix[this.toLowerCase()] = this;
  });

  // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }
  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }
    return [];
  }
  _jQuery2.fn.extend({
    addClass: function addClass(value) {
      var classNames, cur, curValue, className, i, finalValue;
      if (isFunction(value)) {
        return this.each(function (j) {
          _jQuery2(this).addClass(value.call(this, j, getClass(this)));
        });
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function () {
          curValue = getClass(this);
          cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
          if (cur) {
            for (i = 0; i < classNames.length; i++) {
              className = classNames[i];
              if (cur.indexOf(" " + className + " ") < 0) {
                cur += className + " ";
              }
            }

            // Only assign if different to avoid unneeded rendering.
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              this.setAttribute("class", finalValue);
            }
          }
        });
      }
      return this;
    },
    removeClass: function removeClass(value) {
      var classNames, cur, curValue, className, i, finalValue;
      if (isFunction(value)) {
        return this.each(function (j) {
          _jQuery2(this).removeClass(value.call(this, j, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function () {
          curValue = getClass(this);

          // This expression is here for better compressibility (see addClass)
          cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
          if (cur) {
            for (i = 0; i < classNames.length; i++) {
              className = classNames[i];

              // Remove *all* instances
              while (cur.indexOf(" " + className + " ") > -1) {
                cur = cur.replace(" " + className + " ", " ");
              }
            }

            // Only assign if different to avoid unneeded rendering.
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              this.setAttribute("class", finalValue);
            }
          }
        });
      }
      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var classNames,
        className,
        i,
        self,
        type = _typeof(value),
        isValidValue = type === "string" || Array.isArray(value);
      if (isFunction(value)) {
        return this.each(function (i) {
          _jQuery2(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }
      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      classNames = classesToArray(value);
      return this.each(function () {
        if (isValidValue) {
          // Toggle individual class names
          self = _jQuery2(this);
          for (i = 0; i < classNames.length; i++) {
            className = classNames[i];

            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }

          // Toggle whole class name
        } else if (value === undefined || type === "boolean") {
          className = getClass(this);
          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          }

          // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.
          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
        elem,
        i = 0;
      className = " " + selector + " ";
      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  var rreturn = /\r/g;
  _jQuery2.fn.extend({
    val: function val(value) {
      var hooks,
        ret,
        valueIsFunction,
        elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = _jQuery2.valHooks[elem.type] || _jQuery2.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;

          // Handle most common string cases
          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          }

          // Handle cases where value is null/undef or number
          return ret == null ? "" : ret;
        }
        return;
      }
      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (valueIsFunction) {
          val = value.call(this, i, _jQuery2(this).val());
        } else {
          val = value;
        }

        // Treat null/undefined as ""; convert numbers to string
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = _jQuery2.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }
        hooks = _jQuery2.valHooks[this.type] || _jQuery2.valHooks[this.nodeName.toLowerCase()];

        // If set returns undefined, fall back to normal setting
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  _jQuery2.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = _jQuery2.find.attr(elem, "value");
          return val != null ? val :
          // Support: IE <=10 - 11 only
          // option.text throws exceptions (trac-14686, trac-14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(_jQuery2.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
            option,
            i,
            options = elem.options,
            index = elem.selectedIndex,
            one = elem.type === "select-one",
            values = one ? null : [],
            max = one ? index + 1 : options.length;
          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          }

          // Loop through all the selected options
          for (; i < max; i++) {
            option = options[i];

            // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (trac-2551)
            if ((option.selected || i === index) &&
            // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = _jQuery2(option).val();

              // We don't need an array for one selects
              if (one) {
                return value;
              }

              // Multi-Selects return an array
              values.push(value);
            }
          }
          return values;
        },
        set: function set(elem, value) {
          var optionSet,
            option,
            options = elem.options,
            values = _jQuery2.makeArray(value),
            i = options.length;
          while (i--) {
            option = options[i];

            /* eslint-disable no-cond-assign */

            if (option.selected = _jQuery2.inArray(_jQuery2.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }

            /* eslint-enable no-cond-assign */
          }

          // Force browsers to behave consistently when non-matching value is set
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    }
  });

  // Radios and checkboxes getter/setter
  _jQuery2.each(["radio", "checkbox"], function () {
    _jQuery2.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = _jQuery2.inArray(_jQuery2(elem).val(), value) > -1;
        }
      }
    };
    if (!support.checkOn) {
      _jQuery2.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });

  // Return jQuery for attributes-only inclusion
  var location = window.location;
  var nonce = {
    guid: Date.now()
  };
  var rquery = /\?/;

  // Cross-browser xml parsing
  _jQuery2.parseXML = function (data) {
    var xml, parserErrorElem;
    if (!data || typeof data !== "string") {
      return null;
    }

    // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.
    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {}
    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
    if (!xml || parserErrorElem) {
      _jQuery2.error("Invalid XML: " + (parserErrorElem ? _jQuery2.map(parserErrorElem.childNodes, function (el) {
        return el.textContent;
      }).join("\n") : data));
    }
    return xml;
  };
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
    stopPropagationCallback = function stopPropagationCallback(e) {
      e.stopPropagation();
    };
  _jQuery2.extend(_jQuery2.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
        cur,
        tmp,
        bubbleType,
        ontype,
        handle,
        special,
        lastElement,
        eventPath = [elem || document],
        type = hasOwn.call(event, "type") ? event.type : event,
        namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document;

      // Don't do events on text and comment nodes
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }

      // focus/blur morphs to focusin/out; ensure we're not firing them right now
      if (rfocusMorph.test(type + _jQuery2.event.triggered)) {
        return;
      }
      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;

      // Caller can pass in a jQuery.Event object, Object, or just an event type string
      event = event[_jQuery2.expando] ? event : new _jQuery2.Event(type, _typeof(event) === "object" && event);

      // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

      // Clean up the event in case it is being reused
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }

      // Clone any incoming data and prepend the event, creating the handler arg list
      data = data == null ? [event] : _jQuery2.makeArray(data, [event]);

      // Allow special events to draw outside the lines
      special = _jQuery2.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }

      // Determine event propagation path in advance, per W3C events spec (trac-9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }

        // Only add window if we got to document (e.g., not plain obj or detached DOM)
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }

      // Fire handlers on the event path
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type;

        // jQuery handler
        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }

        // Native handler
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;

      // If nobody prevented the default action, do it now
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (trac-6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }

            // Prevent re-triggering of the same event, since we already bubbled it above
            _jQuery2.event.triggered = type;
            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }
            elem[type]();
            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }
            _jQuery2.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = _jQuery2.extend(new _jQuery2.Event(), event, {
        type: type,
        isSimulated: true
      });
      _jQuery2.event.trigger(e, null, elem);
    }
  });
  _jQuery2.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        _jQuery2.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];
      if (elem) {
        return _jQuery2.event.trigger(type, data, elem, true);
      }
    }
  });
  var rbracket = /\[\]$/,
    rCRLF = /\r?\n/g,
    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
    rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (Array.isArray(obj)) {
      // Serialize array item.
      _jQuery2.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  }

  // Serialize an array of form elements or a set of
  // key/values into a query string
  _jQuery2.param = function (a, traditional) {
    var prefix,
      s = [],
      add = function add(key, valueOrFunction) {
        // If value is a function, invoke it and use its return value
        var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
      };
    if (a == null) {
      return "";
    }

    // If an array was passed in, assume that it is an array of form elements.
    if (Array.isArray(a) || a.jquery && !_jQuery2.isPlainObject(a)) {
      // Serialize the form elements
      _jQuery2.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }

    // Return the resulting serialization
    return s.join("&");
  };
  _jQuery2.fn.extend({
    serialize: function serialize() {
      return _jQuery2.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = _jQuery2.prop(this, "elements");
        return elements ? _jQuery2.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type;

        // Use .is( ":disabled" ) so that fieldset[disabled] works
        return this.name && !_jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (_i, elem) {
        var val = _jQuery2(this).val();
        if (val == null) {
          return null;
        }
        if (Array.isArray(val)) {
          return _jQuery2.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }
        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
    rhash = /#.*$/,
    rantiCache = /([?&])_=[^&]*/,
    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
    // trac-7653, trac-8125, trac-8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    rnoContent = /^(?:GET|HEAD)$/,
    rprotocol = /^\/\//,
    /* Prefilters
     * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
     * 2) These are called:
     *    - BEFORE asking for a transport
     *    - AFTER param serialization (s.data is a string if s.processData is true)
     * 3) key is the dataType
     * 4) the catchall symbol "*" can be used
     * 5) execution will start with transport dataType and THEN continue down to "*" if needed
     */
    prefilters = {},
    /* Transports bindings
     * 1) key is the dataType
     * 2) the catchall symbol "*" can be used
     * 3) selection will start with transport dataType and THEN go to "*" if needed
     */
    transports = {},
    // Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
    allTypes = "*/".concat("*"),
    // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a");
  originAnchor.href = location.href;

  // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType,
        i = 0,
        dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);

            // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }

  // Base inspection function for prefilters and transports
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
      seekingTransport = structure === transports;
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      _jQuery2.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }

  // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes trac-9887
  function ajaxExtend(target, src) {
    var key,
      deep,
      flatOptions = _jQuery2.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }
    if (deep) {
      _jQuery2.extend(true, target, deep);
    }
    return target;
  }

  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
      type,
      finalDataType,
      firstDataType,
      contents = s.contents,
      dataTypes = s.dataTypes;

    // Remove auto dataType and get content-type in the process
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }

    // Check if we're dealing with a known content-type
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }

    // Check to see if we have a response for the expected dataType
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }

      // Or just use first one
      finalDataType = finalDataType || firstDataType;
    }

    // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }

  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
      current,
      conv,
      tmp,
      prev,
      converters = {},
      // Work with a copy of dataTypes in case we need to modify it for conversion
      dataTypes = s.dataTypes.slice();

    // Create converters map with lowercased keys
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();

    // Convert to each sequential dataType
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }

      // Apply the dataFilter if provided
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev;

          // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current];

          // If none found, seek a pair
          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2];

                    // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }

          // Apply converter (if not an equivalence)
          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: response
    };
  }
  _jQuery2.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */

      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": _jQuery2.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ?
      // Building a settings object
      ajaxExtend(ajaxExtend(target, _jQuery2.ajaxSettings), settings) :
      // Extending ajaxSettings
      ajaxExtend(_jQuery2.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      }

      // Force options to be an object
      options = options || {};
      var transport,
        // URL without anti-cache param
        cacheURL,
        // Response headers
        responseHeadersString,
        responseHeaders,
        // timeout handle
        timeoutTimer,
        // Url cleanup var
        urlAnchor,
        // Request state (becomes false upon send and true upon completion)
        completed,
        // To know if global events are to be dispatched
        fireGlobals,
        // Loop variable
        i,
        // uncached part of the url
        uncached,
        // Create the final options object
        s = _jQuery2.ajaxSetup({}, options),
        // Callbacks context
        callbackContext = s.context || s,
        // Context for global events is callbackContext if it is a DOM node or jQuery collection
        globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? _jQuery2(callbackContext) : _jQuery2.event,
        // Deferreds
        deferred = _jQuery2.Deferred(),
        completeDeferred = _jQuery2.Callbacks("once memory"),
        // Status-dependent callbacks
        _statusCode = s.statusCode || {},
        // Headers (they are sent all at once)
        requestHeaders = {},
        requestHeadersNames = {},
        // Default abort message
        strAbort = "canceled",
        // Fake xhr
        jqXHR = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function getResponseHeader(key) {
            var match;
            if (completed) {
              if (!responseHeaders) {
                responseHeaders = {};
                while (match = rheaders.exec(responseHeadersString)) {
                  responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                }
              }
              match = responseHeaders[key.toLowerCase() + " "];
            }
            return match == null ? null : match.join(", ");
          },
          // Raw string
          getAllResponseHeaders: function getAllResponseHeaders() {
            return completed ? responseHeadersString : null;
          },
          // Caches the header
          setRequestHeader: function setRequestHeader(name, value) {
            if (completed == null) {
              name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
              requestHeaders[name] = value;
            }
            return this;
          },
          // Overrides response content-type header
          overrideMimeType: function overrideMimeType(type) {
            if (completed == null) {
              s.mimeType = type;
            }
            return this;
          },
          // Status-dependent callbacks
          statusCode: function statusCode(map) {
            var code;
            if (map) {
              if (completed) {
                // Execute the appropriate callbacks
                jqXHR.always(map[jqXHR.status]);
              } else {
                // Lazy-add the new callbacks in a way that preserves old ones
                for (code in map) {
                  _statusCode[code] = [_statusCode[code], map[code]];
                }
              }
            }
            return this;
          },
          // Cancel the request
          abort: function abort(statusText) {
            var finalText = statusText || strAbort;
            if (transport) {
              transport.abort(finalText);
            }
            done(0, finalText);
            return this;
          }
        };

      // Attach deferreds
      deferred.promise(jqXHR);

      // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (trac-10093: consistency with old signature)
      // We also use the url parameter if available
      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

      // Alias method option to type as per ticket trac-12004
      s.type = options.method || options.type || s.method || s.type;

      // Extract dataTypes list
      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

      // A cross-domain request is in order when the origin doesn't match the current origin.
      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a");

        // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/
        try {
          urlAnchor.href = s.url;

          // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative
          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      }

      // Convert data if not already a string
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = _jQuery2.param(s.data, s.traditional);
      }

      // Apply prefilters
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

      // If request was aborted inside a prefilter, stop there
      if (completed) {
        return jqXHR;
      }

      // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
      fireGlobals = _jQuery2.event && s.global;

      // Watch for a new set of requests
      if (fireGlobals && _jQuery2.active++ === 0) {
        _jQuery2.event.trigger("ajaxStart");
      }

      // Uppercase the type
      s.type = s.type.toUpperCase();

      // Determine if request has content
      s.hasContent = !rnoContent.test(s.type);

      // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation
      cacheURL = s.url.replace(rhash, "");

      // More options handling for requests with no content
      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length);

        // If data is available and should be processed, append data to url
        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

          // trac-9682: remove data so that it's not used in an eventual retry
          delete s.data;
        }

        // Add or update anti-cache param if needed
        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        }

        // Put hash and anti-cache on the URL that will be requested (gh-1732)
        s.url = cacheURL + uncached;

        // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      }

      // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
      if (s.ifModified) {
        if (_jQuery2.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", _jQuery2.lastModified[cacheURL]);
        }
        if (_jQuery2.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", _jQuery2.etag[cacheURL]);
        }
      }

      // Set the correct header, if data is being sent
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }

      // Set the Accepts header for the server, depending on the dataType
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

      // Check for headers option
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }

      // Allow custom headers/mimetypes and early abort
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      }

      // Aborting is no longer a cancellation
      strAbort = "abort";

      // Install callbacks on deferreds
      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error);

      // Get transport
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

      // If no transport, we auto-abort
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;

        // Send global event
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }

        // If request was aborted inside ajaxSend, stop there
        if (completed) {
          return jqXHR;
        }

        // Timeout
        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          }

          // Propagate others as results
          done(-1, e);
        }
      }

      // Callback for when everything is done
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
          success,
          error,
          response,
          modified,
          statusText = nativeStatusText;

        // Ignore repeat invocations
        if (completed) {
          return;
        }
        completed = true;

        // Clear timeout if it exists
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        }

        // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)
        transport = undefined;

        // Cache response headers
        responseHeadersString = headers || "";

        // Set readyState
        jqXHR.readyState = status > 0 ? 4 : 0;

        // Determine if successful
        isSuccess = status >= 200 && status < 300 || status === 304;

        // Get response data
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }

        // Use a noop converter for missing script but not if jsonp
        if (!isSuccess && _jQuery2.inArray("script", s.dataTypes) > -1 && _jQuery2.inArray("json", s.dataTypes) < 0) {
          s.converters["text script"] = function () {};
        }

        // Convert no matter what (that way responseXXX fields are always set)
        response = ajaxConvert(s, response, jqXHR, isSuccess);

        // If successful, handle type chaining
        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              _jQuery2.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              _jQuery2.etag[cacheURL] = modified;
            }
          }

          // if no content
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";

            // if not modified
          } else if (status === 304) {
            statusText = "notmodified";

            // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }

        // Set data for the fake xhr object
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";

        // Success/Error
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }

        // Status-dependent callbacks
        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }

        // Complete
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

          // Handle the global AJAX counter
          if (! --_jQuery2.active) {
            _jQuery2.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return _jQuery2.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return _jQuery2.get(url, undefined, callback, "script");
    }
  });
  _jQuery2.each(["get", "post"], function (_i, method) {
    _jQuery2[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }

      // The url can be an options object (which then must have .url)
      return _jQuery2.ajax(_jQuery2.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, _jQuery2.isPlainObject(url) && url));
    };
  });
  _jQuery2.ajaxPrefilter(function (s) {
    var i;
    for (i in s.headers) {
      if (i.toLowerCase() === "content-type") {
        s.contentType = s.headers[i] || "";
      }
    }
  });
  _jQuery2._evalUrl = function (url, options, doc) {
    return _jQuery2.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (trac-11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function text_script() {}
      },
      dataFilter: function dataFilter(response) {
        _jQuery2.globalEval(response, options, doc);
      }
    });
  };
  _jQuery2.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;
      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        }

        // The elements to wrap the target around
        wrap = _jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function () {
          var elem = this;
          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          _jQuery2(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function () {
        var self = _jQuery2(this),
          contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        _jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        _jQuery2(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  _jQuery2.expr.pseudos.hidden = function (elem) {
    return !_jQuery2.expr.pseudos.visible(elem);
  };
  _jQuery2.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };
  _jQuery2.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };
  var xhrSuccessStatus = {
      // File protocol always yields status code 0, assume 200
      0: 200,
      // Support: IE <=9 only
      // trac-1450: sometimes IE returns 1223 when it should be 204
      1223: 204
    },
    xhrSupported = _jQuery2.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  _jQuery2.ajaxTransport(function (options) {
    var _callback, errorCallback;

    // Cross domain only allowed if supported through XMLHttpRequest
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
            xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password);

          // Apply custom fields if provided
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          }

          // Override mime type if needed
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }

          // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.
          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }

          // Set headers
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }

          // Callback
          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete(
                    // File: protocol always yields status 0; see trac-8605, trac-14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,
                  // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          };

          // Listen to events
          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error");

          // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts
          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          }

          // Create the abort callback
          _callback = _callback("abort");
          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // trac-14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  });

  // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
  _jQuery2.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  });

  // Install script dataType
  _jQuery2.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function text_script(text) {
        _jQuery2.globalEval(text);
        return text;
      }
    }
  });

  // Handle cache's special case and crossDomain
  _jQuery2.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
    }
  });

  // Bind script tag hack transport
  _jQuery2.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback2;
      return {
        send: function send(_, complete) {
          script = _jQuery2("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;
            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          });

          // Use native DOM manipulation to avoid our domManip AJAX trickery
          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
    rjsonp = /(=)\?(?=&|$)|\?\?/;

  // Default jsonp settings
  _jQuery2.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || _jQuery2.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  });

  // Detect, normalize options and install callbacks for jsonp requests
  _jQuery2.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
      overwritten,
      responseContainer,
      jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

    // Handle iff the expected data type is "jsonp" or we have a parameter to set
    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

      // Insert callback into url or form data
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }

      // Use data converter to retrieve json after script execution
      s.converters["script json"] = function () {
        if (!responseContainer) {
          _jQuery2.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };

      // Force json dataType
      s.dataTypes[0] = "json";

      // Install callback
      overwritten = window[callbackName];
      window[callbackName] = function () {
        responseContainer = arguments;
      };

      // Clean-up function (fires after converters)
      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          _jQuery2(window).removeProp(callbackName);

          // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        }

        // Save back as free
        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback;

          // Save the callback name for future use
          oldCallbacks.push(callbackName);
        }

        // Call if it was a function and we have a response
        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });

      // Delegate to script
      return "script";
    }
  });

  // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337
  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }();

  // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string
  _jQuery2.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    var base, parsed, scripts;
    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument("");

        // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)
        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }
    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && [];

    // Single tag
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      _jQuery2(scripts).remove();
    }
    return _jQuery2.merge([], parsed.childNodes);
  };

  /**
   * Load a url into a page
   */
  _jQuery2.fn.load = function (url, params, callback) {
    var selector,
      type,
      response,
      self = this,
      off = url.indexOf(" ");
    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    }

    // If it's a function
    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined;

      // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    }

    // If we have elements to modify, make the request
    if (self.length > 0) {
      _jQuery2.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ?
        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        _jQuery2("<div>").append(_jQuery2.parseHTML(responseText)).find(selector) :
        // Otherwise use the full result
        responseText);

        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }
    return this;
  };
  _jQuery2.expr.pseudos.animated = function (elem) {
    return _jQuery2.grep(_jQuery2.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };
  _jQuery2.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
        curLeft,
        curCSSTop,
        curTop,
        curOffset,
        curCSSLeft,
        calculatePosition,
        position = _jQuery2.css(elem, "position"),
        curElem = _jQuery2(elem),
        props = {};

      // Set position first, in-case top/left are set even on static elem
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = _jQuery2.css(elem, "top");
      curCSSLeft = _jQuery2.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

      // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, _jQuery2.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }
      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  _jQuery2.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          _jQuery2.offset.setOffset(this, options, i);
        });
      }
      var rect,
        win,
        elem = this[0];
      if (!elem) {
        return;
      }

      // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error
      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      }

      // Get document-relative position by adding viewport scroll to viewport-relative gBCR
      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }
      var offsetParent,
        offset,
        doc,
        elem = this[0],
        parentOffset = {
          top: 0,
          left: 0
        };

      // position:fixed elements are offset from the viewport, which itself always has zero offset
      if (_jQuery2.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset();

        // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified
        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;
        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && _jQuery2.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }
        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = _jQuery2(offsetParent).offset();
          parentOffset.top += _jQuery2.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += _jQuery2.css(offsetParent, "borderLeftWidth", true);
        }
      }

      // Subtract parent offsets and element margins
      return {
        top: offset.top - parentOffset.top - _jQuery2.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - _jQuery2.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;
        while (offsetParent && _jQuery2.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement;
      });
    }
  });

  // Create scrollLeft and scrollTop methods
  _jQuery2.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;
    _jQuery2.fn[method] = function (val) {
      return _access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;
        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }
        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  });

  // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here
  _jQuery2.each(["top", "left"], function (_i, prop) {
    _jQuery2.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop);

        // If curCSS returns percentage, fallback to offset
        return rnumnonpx.test(computed) ? _jQuery2(elem).position()[prop] + "px" : computed;
      }
    });
  });

  // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
  _jQuery2.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    _jQuery2.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      _jQuery2.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
          extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return _access(this, function (elem, type, value) {
          var doc;
          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          }

          // Get document width or height
          if (elem.nodeType === 9) {
            doc = elem.documentElement;

            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value === undefined ?
          // Get width or height on the element, requesting but not forcing parseFloat
          _jQuery2.css(elem, type, extra) :
          // Set width or height on the element
          _jQuery2.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  _jQuery2.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
    _jQuery2.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
  _jQuery2.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function hover(fnOver, fnOut) {
      return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
    }
  });
  _jQuery2.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
    // Handle event binding
    _jQuery2.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });

  // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  // Require that the "whitespace run" starts from a non-whitespace
  // to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
  var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

  // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon
  _jQuery2.proxy = function (fn, context) {
    var tmp, args, proxy;
    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    }

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if (!isFunction(fn)) {
      return undefined;
    }

    // Simulated bind
    args = _slice.call(arguments, 2);
    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    };

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || _jQuery2.guid++;
    return proxy;
  };
  _jQuery2.holdReady = function (hold) {
    if (hold) {
      _jQuery2.readyWait++;
    } else {
      _jQuery2.ready(true);
    }
  };
  _jQuery2.isArray = Array.isArray;
  _jQuery2.parseJSON = JSON.parse;
  _jQuery2.nodeName = nodeName;
  _jQuery2.isFunction = isFunction;
  _jQuery2.isWindow = isWindow;
  _jQuery2.camelCase = camelCase;
  _jQuery2.type = toType;
  _jQuery2.now = Date.now;
  _jQuery2.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = _jQuery2.type(obj);
    return (type === "number" || type === "string") &&
    // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  };
  _jQuery2.trim = function (text) {
    return text == null ? "" : (text + "").replace(rtrim, "$1");
  };

  // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.

  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return _jQuery2;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  var
    // Map over jQuery in case of overwrite
    _jQuery = window.jQuery,
    // Map over the $ in case of overwrite
    _$ = window.$;
  _jQuery2.noConflict = function (deep) {
    if (window.$ === _jQuery2) {
      window.$ = _$;
    }
    if (deep && window.jQuery === _jQuery2) {
      window.jQuery = _jQuery;
    }
    return _jQuery2;
  };

  // Expose jQuery and $ identifiers, even in AMD
  // (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (trac-13566)
  if (typeof noGlobal === "undefined") {
    window.jQuery = window.$ = _jQuery2;
  }
  return _jQuery2;
});

/***/ }),

/***/ "./node_modules/what-input/dist/what-input.js":
/*!****************************************************!*\
  !*** ./node_modules/what-input/dist/what-input.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.12
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // removed by dead control flow
{}
})(this, function () {
  return /******/function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};

    /******/ // The require function
    /******/
    function __nested_webpack_require_1225__(moduleId) {
      /******/ // Check if module is in cache
      /******/if (installedModules[moduleId]) /******/return installedModules[moduleId].exports;

      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/exports: {},
        /******/id: moduleId,
        /******/loaded: false
        /******/
      };

      /******/ // Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1225__);

      /******/ // Flag the module as loaded
      /******/
      module.loaded = true;

      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }

    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __nested_webpack_require_1225__.m = modules;

    /******/ // expose the module cache
    /******/
    __nested_webpack_require_1225__.c = installedModules;

    /******/ // __webpack_public_path__
    /******/
    __nested_webpack_require_1225__.p = "";

    /******/ // Load entry module and return exports
    /******/
    return __nested_webpack_require_1225__(0);
    /******/
  }
  /************************************************************************/
  /******/([(/* 0 */
  /***/function (module, exports) {
    'use strict';

    module.exports = function () {
      /*
       * bail out if there is no document or window
       * (i.e. in a node/non-DOM environment)
       *
       * Return a stubbed API instead
       */
      if (typeof document === 'undefined' || typeof window === 'undefined') {
        return {
          // always return "initial" because no interaction will ever be detected
          ask: function ask() {
            return 'initial';
          },
          // always return null
          element: function element() {
            return null;
          },
          // no-op
          ignoreKeys: function ignoreKeys() {},
          // no-op
          specificKeys: function specificKeys() {},
          // no-op
          registerOnChange: function registerOnChange() {},
          // no-op
          unRegisterOnChange: function unRegisterOnChange() {}
        };
      }

      /*
       * variables
       */

      // cache document.documentElement
      var docElem = document.documentElement;

      // currently focused dom element
      var currentElement = null;

      // last used input type
      var currentInput = 'initial';

      // last used input intent
      var currentIntent = currentInput;

      // UNIX timestamp of current event
      var currentTimestamp = Date.now();

      // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`
      var shouldPersist = false;

      // form input types
      var formInputs = ['button', 'input', 'select', 'textarea'];

      // empty array for holding callback functions
      var functionList = [];

      // list of modifier keys commonly used with the mouse and
      // can be safely ignored to prevent false keyboard detection
      var ignoreMap = [16,
      // shift
      17,
      // control
      18,
      // alt
      91,
      // Windows key / left Apple cmd
      93 // Windows menu / right Apple cmd
      ];
      var specificMap = [];

      // mapping of events to input types
      var inputMap = {
        keydown: 'keyboard',
        keyup: 'keyboard',
        mousedown: 'mouse',
        mousemove: 'mouse',
        MSPointerDown: 'pointer',
        MSPointerMove: 'pointer',
        pointerdown: 'pointer',
        pointermove: 'pointer',
        touchstart: 'touch',
        touchend: 'touch'

        // boolean: true if the page is being scrolled
      };
      var isScrolling = false;

      // store current mouse position
      var mousePos = {
        x: null,
        y: null

        // map of IE 10 pointer events
      };
      var pointerMap = {
        2: 'touch',
        3: 'touch',
        // treat pen like touch
        4: 'mouse'

        // check support for passive event listeners
      };
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('test', null, opts);
      } catch (e) {}
      // fail silently

      /*
       * set up
       */

      var setUp = function setUp() {
        // add correct mouse wheel event mapping to `inputMap`
        inputMap[detectWheel()] = 'mouse';
        addListeners();
      };

      /*
       * events
       */

      var addListeners = function addListeners() {
        // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
        // can only demonstrate potential, but not actual, interaction
        // and are treated separately
        var options = supportsPassive ? {
          passive: true,
          capture: true
        } : true;
        document.addEventListener('DOMContentLoaded', setPersist, true);

        // pointer events (mouse, pen, touch)
        if (window.PointerEvent) {
          window.addEventListener('pointerdown', setInput, true);
          window.addEventListener('pointermove', setIntent, true);
        } else if (window.MSPointerEvent) {
          window.addEventListener('MSPointerDown', setInput, true);
          window.addEventListener('MSPointerMove', setIntent, true);
        } else {
          // mouse events
          window.addEventListener('mousedown', setInput, true);
          window.addEventListener('mousemove', setIntent, true);

          // touch events
          if ('ontouchstart' in window) {
            window.addEventListener('touchstart', setInput, options);
            window.addEventListener('touchend', setInput, true);
          }
        }

        // mouse wheel
        window.addEventListener(detectWheel(), setIntent, options);

        // keyboard events
        window.addEventListener('keydown', setInput, true);
        window.addEventListener('keyup', setInput, true);

        // focus events
        window.addEventListener('focusin', setElement, true);
        window.addEventListener('focusout', clearElement, true);
      };

      // checks if input persistence should happen and
      // get saved state from session storage if true (defaults to `false`)
      var setPersist = function setPersist() {
        shouldPersist = !(docElem.getAttribute('data-whatpersist') === 'false' || document.body.getAttribute('data-whatpersist') === 'false');
        if (shouldPersist) {
          // check for session variables and use if available
          try {
            if (window.sessionStorage.getItem('what-input')) {
              currentInput = window.sessionStorage.getItem('what-input');
            }
            if (window.sessionStorage.getItem('what-intent')) {
              currentIntent = window.sessionStorage.getItem('what-intent');
            }
          } catch (e) {
            // fail silently
          }
        }

        // always run these so at least `initial` state is set
        doUpdate('input');
        doUpdate('intent');
      };

      // checks conditions before updating new input
      var setInput = function setInput(event) {
        var eventKey = event.which;
        var value = inputMap[event.type];
        if (value === 'pointer') {
          value = pointerType(event);
        }
        var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;
        var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;
        var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

        // prevent touch detection from being overridden by event execution order
        if (validateTouch(value)) {
          shouldUpdate = false;
        }
        if (shouldUpdate && currentInput !== value) {
          currentInput = value;
          persistInput('input', currentInput);
          doUpdate('input');
        }
        if (shouldUpdate && currentIntent !== value) {
          // preserve intent for keyboard interaction with form fields
          var activeElem = document.activeElement;
          var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));
          if (notFormInput) {
            currentIntent = value;
            persistInput('intent', currentIntent);
            doUpdate('intent');
          }
        }
      };

      // updates the doc and `inputTypes` array with new input
      var doUpdate = function doUpdate(which) {
        docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);
        fireFunctions(which);
      };

      // updates input intent for `mousemove` and `pointermove`
      var setIntent = function setIntent(event) {
        var value = inputMap[event.type];
        if (value === 'pointer') {
          value = pointerType(event);
        }

        // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
        detectScrolling(event);

        // only execute if scrolling isn't happening
        if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
          currentIntent = value;
          persistInput('intent', currentIntent);
          doUpdate('intent');
        }
      };
      var setElement = function setElement(event) {
        if (!event.target.nodeName) {
          // If nodeName is undefined, clear the element
          // This can happen if click inside an <svg> element.
          clearElement();
          return;
        }
        currentElement = event.target.nodeName.toLowerCase();
        docElem.setAttribute('data-whatelement', currentElement);
        if (event.target.classList && event.target.classList.length) {
          docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
        }
      };
      var clearElement = function clearElement() {
        currentElement = null;
        docElem.removeAttribute('data-whatelement');
        docElem.removeAttribute('data-whatclasses');
      };
      var persistInput = function persistInput(which, value) {
        if (shouldPersist) {
          try {
            window.sessionStorage.setItem('what-' + which, value);
          } catch (e) {
            // fail silently
          }
        }
      };

      /*
       * utilities
       */

      var pointerType = function pointerType(event) {
        if (typeof event.pointerType === 'number') {
          return pointerMap[event.pointerType];
        } else {
          // treat pen like touch
          return event.pointerType === 'pen' ? 'touch' : event.pointerType;
        }
      };

      // prevent touch detection from being overridden by event execution order
      var validateTouch = function validateTouch(value) {
        var timestamp = Date.now();
        var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;
        currentTimestamp = timestamp;
        return touchIsValid;
      };

      // detect version of mouse wheel event to use
      // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
      var detectWheel = function detectWheel() {
        var wheelType = null;

        // Modern browsers support "wheel"
        if ('onwheel' in document.createElement('div')) {
          wheelType = 'wheel';
        } else {
          // Webkit and IE support at least "mousewheel"
          // or assume that remaining browsers are older Firefox
          wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
        }
        return wheelType;
      };

      // runs callback functions
      var fireFunctions = function fireFunctions(type) {
        for (var i = 0, len = functionList.length; i < len; i++) {
          if (functionList[i].type === type) {
            functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
          }
        }
      };

      // finds matching element in an object
      var objPos = function objPos(match) {
        for (var i = 0, len = functionList.length; i < len; i++) {
          if (functionList[i].fn === match) {
            return i;
          }
        }
      };
      var detectScrolling = function detectScrolling(event) {
        if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
          isScrolling = false;
          mousePos.x = event.screenX;
          mousePos.y = event.screenY;
        } else {
          isScrolling = true;
        }
      };

      // manual version of `closest()`
      var checkClosest = function checkClosest(elem, tag) {
        var ElementPrototype = window.Element.prototype;
        if (!ElementPrototype.matches) {
          ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
        }
        if (!ElementPrototype.closest) {
          do {
            if (elem.matches(tag)) {
              return elem;
            }
            elem = elem.parentElement || elem.parentNode;
          } while (elem !== null && elem.nodeType === 1);
          return null;
        } else {
          return elem.closest(tag);
        }
      };

      /*
       * init
       */

      // don't start script unless browser cuts the mustard
      // (also passes if polyfills are used)
      if ('addEventListener' in window && Array.prototype.indexOf) {
        setUp();
      }

      /*
       * api
       */

      return {
        // returns string: the current input type
        // opt: 'intent'|'input'
        // 'input' (default): returns the same value as the `data-whatinput` attribute
        // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
        ask: function ask(opt) {
          return opt === 'intent' ? currentIntent : currentInput;
        },
        // returns string: the currently focused element or null
        element: function element() {
          return currentElement;
        },
        // overwrites ignored keys with provided array
        ignoreKeys: function ignoreKeys(arr) {
          ignoreMap = arr;
        },
        // overwrites specific char keys to update on
        specificKeys: function specificKeys(arr) {
          specificMap = arr;
        },
        // attach functions to input and intent "events"
        // funct: function to fire on change
        // eventType: 'input'|'intent'
        registerOnChange: function registerOnChange(fn, eventType) {
          functionList.push({
            fn: fn,
            type: eventType || 'input'
          });
        },
        unRegisterOnChange: function unRegisterOnChange(fn) {
          var position = objPos(fn);
          if (position || position === 0) {
            functionList.splice(position, 1);
          }
        },
        clearStorage: function clearStorage() {
          window.sessionStorage.clear();
        }
      };
    }();

    /***/
  }
  /******/)]);
});
;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! what-input */ "./node_modules/what-input/dist/what-input.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(what_input__WEBPACK_IMPORTED_MODULE_1__);
function showContentFlowFromRuleDraft() {
  var contentFlow = document.getElementById('content-flow');
  var ruleDraft = document.getElementById('rule-draft');
  if (contentFlow && ruleDraft) {
    // Hide rule draft
    ruleDraft.style.opacity = '0';
    ruleDraft.style.transition = 'opacity 0.3s ease-in-out';
    setTimeout(function () {
      ruleDraft.classList.add('hidden');

      // Show content flow
      contentFlow.classList.remove('hidden');
      contentFlow.style.opacity = '0';
      contentFlow.style.transition = 'opacity 0.3s ease-in-out';
      setTimeout(function () {
        contentFlow.style.opacity = '1';
      }, 50);
    }, 300);
    console.log('Switched back to content flow from rule draft');
  }
}


window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
__webpack_require__(/*! foundation-sites */ "./node_modules/foundation-sites/dist/js/foundation.esm.js");
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).foundation();

// === Utility Functions - Define these first ===

// === Utility Functions - Define these first ===
function checkIfAllTagsRemoved() {
  var tagContainer = document.getElementById('tag-container');
  var remainingTags = tagContainer.querySelectorAll('.bx--tag');
  console.log('=== TAG CHECK DEBUG ===');
  console.log('Tag container found:', !!tagContainer);
  console.log('Remaining tags found:', remainingTags.length);
  console.log('Tag container innerHTML:', tagContainer.innerHTML);
  console.log('Tags array:', Array.from(remainingTags));

  // Double check by counting differently
  var allTags = tagContainer.children;
  console.log('All children in container:', allTags.length);
  if (remainingTags.length === 0) {
    console.log('✅ NO TAGS LEFT - GOING TO EMPTY STATE');
    returnToEmptyState();
  } else {
    console.log('❌ TAGS STILL REMAIN - SHOWING SKELETON FLASH');
    console.log('Remaining tag texts:', Array.from(remainingTags).map(function (tag) {
      return tag.textContent.trim();
    }));
    // Flash skeleton to simulate data refresh when tags change
    showSkeletonFlash();
  }
}
function showSkeletonFlash() {
  var table = document.getElementById('sample-table');
  if (table && table.style.visibility === 'visible') {
    console.log('Showing skeleton flash for tag change');

    // Show skeleton in cells
    showSkeletonInCells();

    // After 1 second (shorter than initial load), show data again
    setTimeout(function () {
      loadRealDataInCells();
    }, 1000);
  }
}
function returnToEmptyState() {
  var emptyState = document.getElementById('empty-state');
  var table = document.getElementById('sample-table');
  console.log('=== RETURN TO EMPTY STATE ===');
  console.log('Empty state element found:', !!emptyState);
  console.log('Table element found:', !!table);
  if (emptyState && table) {
    console.log('Starting empty state transition...');

    // Step 1: Immediately hide table with brute force
    table.style.setProperty('display', 'none', 'important');
    table.style.setProperty('visibility', 'hidden', 'important');
    table.style.setProperty('opacity', '0', 'important');
    table.classList.add('force-hidden');
    table.classList.remove('fade-in', 'fade-out');

    // Step 2: Immediately show empty state with brute force
    emptyState.style.setProperty('display', 'block', 'important');
    emptyState.style.setProperty('visibility', 'visible', 'important');
    emptyState.style.setProperty('opacity', '1', 'important');
    emptyState.classList.add('force-visible');
    emptyState.classList.remove('fade-out', 'hidden', 'force-hidden');
    emptyState.classList.add('fade-in');
    console.log('Applied styles:');
    console.log('- Table display:', getComputedStyle(table).display);
    console.log('- Empty state display:', getComputedStyle(emptyState).display);
    console.log('- Table classes:', table.className);
    console.log('- Empty state classes:', emptyState.className);

    // Reset table cells back to skeleton for next time
    resetTableToSkeleton();
    console.log('Empty state transition complete');
  } else {
    console.log('Could not find required elements for empty state transition');
  }
}
function resetTableToSkeleton() {
  var table = document.getElementById('sample-table');
  if (table) {
    var cellContents = table.querySelectorAll('.cell-content');
    cellContents.forEach(function (cell) {
      cell.innerHTML = '<div class="bx--skeleton__text"></div>';
      cell.classList.remove('fade-in', 'fade-out', 'ai-cell');
    });
    console.log('Table reset to skeleton state');
  }
}

// Helper function to extract from addCarbonTag for reuse
function showSkeletonInCells() {
  var table = document.getElementById('sample-table');
  var cellContents = table.querySelectorAll('.cell-content');
  cellContents.forEach(function (cell) {
    cell.classList.remove('fade-in');
    cell.classList.add('fade-out');
  });
  setTimeout(function () {
    cellContents.forEach(function (cell) {
      cell.innerHTML = '<div class="bx--skeleton__text"></div>';
      cell.classList.remove('fade-out', 'ai-cell');
      cell.classList.add('fade-in');
    });
  }, 200);
}
function loadRealDataInCells() {
  var table = document.getElementById('sample-table');
  // Real data to populate cells with
  var realData = [{
    variable: '<a href="#" class="bx--link variable-link">CA-POLICY-NO</a>',
    description: '<strong>■ AI </strong> Policy number identification',
    businessTerm: '<strong>■ AI</strong> Policy identifier',
    sourceProgram: 'LGAPOL01.cbl',
    relatedVars: 'VEHICLE-BODY-TYPE, VEHIC...',
    aliases: 'CA-POLICY-NUM'
  }, {
    variable: '<a href="#" class="bx--link variable-link">CA-M-VEHICLE-TYPE</a>',
    description: '<strong>■ AI</strong> Type of insured vehicle',
    businessTerm: '<strong>■ AI</strong> Vehicle Classification',
    sourceProgram: 'LGAPVS01.cbl, LGUPO01...',
    relatedVars: 'REGISTRATION-STATE, VEHI...',
    aliases: 'VEHICLE-TYPE-CODE'
  }, {
    variable: '<a href="#" class="bx--link variable-link">CA-M-PREMIUM-AMT</a>',
    description: '<strong>■ AI</strong> Calculated premium amount',
    businessTerm: '<strong>■ AI</strong> Premium Calculation',
    sourceProgram: 'LGAPOL01.cbl',
    relatedVars: 'VEHICLE-BODY-TYPE',
    aliases: 'CALCULATED-PREMIUM'
  }, {
    variable: '<a href="#" class="bx--link variable-link">CA-DISCOUNT-AMOUNT</a>',
    description: '<strong>■ AI</strong> Discount applied to premium',
    businessTerm: '<strong>■ AI</strong> Discount amount',
    sourceProgram: 'LGAPOL01.cbl',
    relatedVars: 'REGISTRATION-STATE',
    aliases: 'PREMIUM-DISCOUNT'
  }, {
    variable: '<a href="#" class="bx--link variable-link">CA-POLICY-PREMIUM</a>',
    description: '<strong>■ AI</strong> Final premium amount',
    businessTerm: '<strong>■ AI</strong> Policy premium amount',
    sourceProgram: 'LGAPVS01.cbl, LGAPDB01...',
    relatedVars: 'VEHICLE-USAGE-TYPE',
    aliases: 'FINAL-PREMIUM'
  },
  // Additional 5 rows of data
  {
    variable: '<a href="#" class="bx--link variable-link">CA-COVERAGE-TYPE</a>',
    description: '<strong>■ AI</strong> Insurance coverage type',
    businessTerm: '<strong>■ AI</strong> Coverage Classification',
    sourceProgram: 'LGCOV01.cbl, LGAPOL01...',
    relatedVars: 'POLICY-STATUS, PREMIUM...',
    aliases: 'COVERAGE-CODE'
  }, {
    variable: '<a href="#" class="bx--link variable-link">CA-CUSTOMER-ID</a>',
    description: '<strong>■ AI</strong> Unique customer identifier',
    businessTerm: '<strong>■ AI</strong> Customer Reference',
    sourceProgram: 'LGCUST01.cbl, LGAPOL01...',
    relatedVars: 'CUSTOMER-NAME, ADDRESS...',
    aliases: 'CUST-NUMBER'
  }, {
    variable: '<a href="#" class="bx--link variable-link">CA-EFFECTIVE-DATE</a>',
    description: '<strong>■ AI</strong> Policy effective start date',
    businessTerm: '<strong>■ AI</strong> Policy Start Date',
    sourceProgram: 'LGDATE01.cbl, LGAPOL01...',
    relatedVars: 'EXPIRY-DATE, TERM-LENGTH...',
    aliases: 'START-DATE'
  }, {
    variable: '<a href="#" class="bx--link variable-link">CA-RISK-FACTOR</a>',
    description: '<strong>■ AI</strong> Calculated risk assessment score',
    businessTerm: '<strong>■ AI</strong> Risk Assessment',
    sourceProgram: 'LGRISK01.cbl, LGCALC01...',
    relatedVars: 'AGE-FACTOR, LOCATION...',
    aliases: 'RISK-SCORE'
  }, {
    variable: '<a href="#" class="bx--link variable-link">CA-DEDUCTIBLE-AMT</a>',
    description: '<strong>■ AI</strong> Policy deductible amount',
    businessTerm: '<strong>■ AI</strong> Deductible Amount',
    sourceProgram: 'LGDED01.cbl, LGAPOL01...',
    relatedVars: 'COVERAGE-LIMIT, PREMIUM...',
    aliases: 'DEDUCTIBLE'
  }];
  var rows = table.querySelectorAll('tr[data-parent-row]');
  rows.forEach(function (row, index) {
    if (realData[index]) {
      var cells = row.querySelectorAll('.cell-content');
      var data = realData[index];

      // Add fade out class to skeleton
      cells.forEach(function (cell) {
        cell.classList.add('fade-out');
      });

      // After fade out, replace content and fade in
      setTimeout(function () {
        if (cells[0]) cells[0].innerHTML = data.variable;
        if (cells[1]) {
          cells[1].innerHTML = data.description;
          cells[1].classList.add('ai-cell');
        }
        if (cells[2]) {
          cells[2].innerHTML = data.businessTerm;
          cells[2].classList.add('ai-cell');
        }
        if (cells[3]) cells[3].innerHTML = 'LGUPDB01.cbl'; // Always show LGUPDB01.cbl for all rows
        if (cells[4]) cells[4].innerHTML = data.relatedVars;
        if (cells[5]) cells[5].innerHTML = data.aliases;

        // Fade in new content
        cells.forEach(function (cell) {
          cell.classList.remove('fade-out');
          cell.classList.add('fade-in');
        });
      }, 300);
    }
  });
}

// === Chat Script ===
var chatScript = [{
  role: "user",
  text: "I'm looking for the logic related to updating a motor policy in this application.",
  inputText: true,
  timestamp: "3:59 PM"
}, {
  role: "assistant",
  text: "I found logic related to Motor Policy. Based on your request, I've scoped the following COBOL programs <strong>LGUPDB01.cbl, LGUPOL01.cbl, LGUPVS01.cbl</strong><br><br><em>Would you like to apply this scope to your search?</em>",
  timestamp: "3:59 PM"
}, {
  role: "user",
  text: "Which programs are involved in the premium calculation?",
  inputText: true,
  timestamp: "4:00 PM"
}, {
  role: "assistant",
  text: "I found logic for the premium calculation in <strong>LGUPDB01.cbl</strong><br><br><em>Would you like to apply this scope to your search?</em>",
  timestamp: "4:00 PM"
}, {
  role: "user",
  text: "yes please",
  inputText: true,
  timestamp: "4:01 PM"
}, {
  role: "assistant",
  text: "done!</em>",
  timestamp: "4:00 PM"
}];
var chatStep = 0;
function showContentFlow() {
  console.log('=== showContentFlow START ===');
  var flow = document.getElementById('content-flow');
  console.log('Flow element found:', !!flow);
  if (flow) {
    console.log('Opening content flow...');
    flow.classList.remove('hidden');
    flow.classList.remove('fade-in');
    flow.classList.add('slide-up');

    // Initialize radio buttons after content flow opens
    setTimeout(function () {
      console.log('Initializing radio buttons...');
      var radioButtons = document.querySelectorAll('input[name="variable-usage"]');
      console.log('Found radio buttons:', radioButtons.length);
      radioButtons.forEach(function (radio) {
        radio.addEventListener('change', function () {
          if (this.checked) {
            console.log('Radio changed to:', this.value);
            var codeMapping = {
              '565-568': 'code1',
              '549-557': 'code2'
            };
            var targetId = codeMapping[this.value];
            if (targetId) {
              var target = document.getElementById(targetId);
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
                target.style.backgroundColor = '#d0e2ff';
                setTimeout(function () {
                  return target.style.backgroundColor = '';
                }, 2000);
                console.log('Scrolled to:', targetId);
              }
            }
          }
        });
      });

      // Auto-scroll to first checked radio with smooth animation
      var firstRadio = document.querySelector('input[name="variable-usage"]:checked');
      if (firstRadio) {
        console.log('Auto-scrolling to first radio:', firstRadio.value);
        setTimeout(function () {
          var codeMapping = {
            '565-568': 'code1',
            '549-557': 'code2'
          };
          var targetId = codeMapping[firstRadio.value];
          if (targetId) {
            var target = document.getElementById(targetId);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
              console.log('Auto-scrolled to:', targetId);
            }
          }
        }, 800); // Wait for content flow to fully open
      }
    }, 800);
  }
}
function addCarbonTag(labelText) {
  var tagContainer = document.getElementById('tag-container');
  if (!tagContainer) return;
  var tag = document.createElement('span');
  tag.className = 'bx--tag bx--tag--blue bx--tag--filter';
  tag.setAttribute('title', labelText);
  tag.innerHTML = "\n    <span class=\"bx--tag__label\">".concat(labelText, "</span>\n    <button class=\"bx--tag__close-icon\" type=\"button\" title=\"Remove tag\" aria-label=\"Remove tag\">\n      <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\"\n           xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 32 32\"\n           aria-hidden=\"true\">\n        <path d=\"M24 9.41L22.59 8 16 14.59 9.41 8 8 9.41 14.59 16 8 22.59 9.41 24 16 17.41\n                 22.59 24 24 22.59 17.41 16 24 9.41z\"></path>\n      </svg>\n    </button>\n  ");
  tag.querySelector('.bx--tag__close-icon').onclick = function () {
    console.log('Tag being removed:', labelText);
    tag.remove();

    // Check immediately after removal
    setTimeout(function () {
      checkIfAllTagsRemoved();
    }, 10);
  };
  tagContainer.appendChild(tag);
  var emptyState = document.getElementById('empty-state');
  var table = document.getElementById('sample-table');
  if (emptyState && table) {
    // Check if empty state is currently visible (either by style or by force-visible class)
    var emptyStateVisible = emptyState.classList.contains('force-visible') || getComputedStyle(emptyState).display !== 'none';
    console.log('Empty state visible?', emptyStateVisible);
    console.log('Empty state classes:', emptyState.className);
    if (emptyStateVisible) {
      console.log('Empty state is visible, hiding it first');
      emptyState.classList.remove('force-visible', 'fade-in');
      emptyState.classList.add('fade-out');
      emptyState.style.setProperty('display', 'none', 'important');
      emptyState.style.setProperty('visibility', 'hidden', 'important');
      setTimeout(function () {
        showTableWithSkeletonTransition();
      }, 300);
    } else {
      console.log('Empty state not visible, showing skeleton transition directly');
      // Table is already visible, just show skeleton transition
      showTableWithSkeletonTransition();
    }
  }
  function showTableWithSkeletonTransition() {
    console.log('Showing table with skeleton transition');

    // Remove force-hidden class and show table more forcefully
    table.classList.remove('force-hidden');
    table.style.setProperty('visibility', 'visible', 'important');
    table.style.setProperty('display', 'block', 'important');
    table.style.setProperty('opacity', '1', 'important');

    // Show skeleton content in cells
    showSkeletonInCells();

    // After 2 seconds, load real data
    setTimeout(function () {
      loadRealDataInCells();

      // Reinitialize Carbon components after data loads
      setTimeout(function () {
        var _window$CarbonCompone;
        if ((_window$CarbonCompone = window.CarbonComponents) !== null && _window$CarbonCompone !== void 0 && _window$CarbonCompone.DataTable) {
          window.CarbonComponents.DataTable.init(table);
        }
        initializeExpandableRows();
      }, 100);
    }, 2000);
  }
  function showSkeletonInCells() {
    var cellContents = table.querySelectorAll('.cell-content');
    cellContents.forEach(function (cell) {
      cell.classList.remove('fade-in');
      cell.classList.add('fade-out');
    });
    setTimeout(function () {
      cellContents.forEach(function (cell) {
        cell.innerHTML = '<div class="bx--skeleton__text"></div>';
        cell.classList.remove('fade-out', 'ai-cell');
        cell.classList.add('fade-in');
      });
    }, 200);
  }
  function loadRealDataInCells() {
    // Real data to populate cells with
    var realData = [{
      variable: '<a href="#" class="bx--link variable-link">CA-POLICY-NO</a>',
      description: '<strong>■ AI </strong> Policy number identification',
      businessTerm: '<strong>■ AI</strong> Policy identifier',
      sourceProgram: 'LGAPOL01.cbl',
      relatedVars: 'VEHICLE-BODY-TYPE, VEHIC...',
      aliases: 'CA-POLICY-NUM'
    }, {
      variable: '<a href="#" class="bx--link variable-link">CA-M-VEHICLE-TYPE</a>',
      description: '<strong>■ AI</strong> Type of insured vehicle',
      businessTerm: '<strong>■ AI</strong> Vehicle Classification',
      sourceProgram: 'LGAPVS01.cbl, LGUPO01...',
      relatedVars: 'REGISTRATION-STATE, VEHI...',
      aliases: 'VEHICLE-TYPE-CODE'
    }, {
      variable: '<a href="#" class="bx--link variable-link">CA-M-PREMIUM-AMT</a>',
      description: '<strong>■ AI</strong> Calculated premium amount',
      businessTerm: '<strong>■ AI</strong> Premium Calculation',
      sourceProgram: 'LGAPOL01.cbl',
      relatedVars: 'VEHICLE-BODY-TYPE',
      aliases: 'CALCULATED-PREMIUM'
    }, {
      variable: '<a href="#" class="bx--link variable-link">CA-DISCOUNT-AMOUNT</a>',
      description: '<strong>■ AI</strong> Discount applied to premium',
      businessTerm: '<strong>■ AI</strong> Discount amount',
      sourceProgram: 'LGAPOL01.cbl',
      relatedVars: 'REGISTRATION-STATE',
      aliases: 'PREMIUM-DISCOUNT'
    }, {
      variable: '<a href="#" class="bx--link variable-link">CA-POLICY-PREMIUM</a>',
      description: '<strong>■ AI</strong> Final premium amount',
      businessTerm: '<strong>■ AI</strong> Policy premium amount',
      sourceProgram: 'LGAPVS01.cbl, LGAPDB01...',
      relatedVars: 'VEHICLE-USAGE-TYPE',
      aliases: 'FINAL-PREMIUM'
    },
    // Additional 5 rows of data
    {
      variable: '<a href="#" class="bx--link variable-link">CA-COVERAGE-TYPE</a>',
      description: '<strong>■ AI</strong> Insurance coverage type',
      businessTerm: '<strong>■ AI</strong> Coverage Classification',
      sourceProgram: 'LGCOV01.cbl, LGAPOL01...',
      relatedVars: 'POLICY-STATUS, PREMIUM...',
      aliases: 'COVERAGE-CODE'
    }, {
      variable: '<a href="#" class="bx--link variable-link">CA-CUSTOMER-ID</a>',
      description: '<strong>■ AI</strong> Unique customer identifier',
      businessTerm: '<strong>■ AI</strong> Customer Reference',
      sourceProgram: 'LGCUST01.cbl, LGAPOL01...',
      relatedVars: 'CUSTOMER-NAME, ADDRESS...',
      aliases: 'CUST-NUMBER'
    }, {
      variable: '<a href="#" class="bx--link variable-link">CA-EFFECTIVE-DATE</a>',
      description: '<strong>■ AI</strong> Policy effective start date',
      businessTerm: '<strong>■ AI</strong> Policy Start Date',
      sourceProgram: 'LGDATE01.cbl, LGAPOL01...',
      relatedVars: 'EXPIRY-DATE, TERM-LENGTH...',
      aliases: 'START-DATE'
    }, {
      variable: '<a href="#" class="bx--link variable-link">CA-RISK-FACTOR</a>',
      description: '<strong>■ AI</strong> Calculated risk assessment score',
      businessTerm: '<strong>■ AI</strong> Risk Assessment',
      sourceProgram: 'LGRISK01.cbl, LGCALC01...',
      relatedVars: 'AGE-FACTOR, LOCATION...',
      aliases: 'RISK-SCORE'
    }, {
      variable: '<a href="#" class="bx--link variable-link">CA-DEDUCTIBLE-AMT</a>',
      description: '<strong>■ AI</strong> Policy deductible amount',
      businessTerm: '<strong>■ AI</strong> Deductible Amount',
      sourceProgram: 'LGDED01.cbl, LGAPOL01...',
      relatedVars: 'COVERAGE-LIMIT, PREMIUM...',
      aliases: 'DEDUCTIBLE'
    }];
    var rows = table.querySelectorAll('tr[data-parent-row]');
    rows.forEach(function (row, index) {
      if (realData[index]) {
        var cells = row.querySelectorAll('.cell-content');
        var data = realData[index];

        // Add fade out class to skeleton
        cells.forEach(function (cell) {
          cell.classList.add('fade-out');
        });

        // After fade out, replace content and fade in
        setTimeout(function () {
          if (cells[0]) cells[0].innerHTML = data.variable;
          if (cells[1]) {
            cells[1].innerHTML = data.description;
            cells[1].classList.add('ai-cell');
          }
          if (cells[2]) {
            cells[2].innerHTML = data.businessTerm;
            cells[2].classList.add('ai-cell');
          }
          if (cells[3]) cells[3].innerHTML = data.sourceProgram;
          if (cells[4]) cells[4].innerHTML = data.relatedVars;
          if (cells[5]) cells[5].innerHTML = data.aliases;

          // Fade in new content
          cells.forEach(function (cell) {
            cell.classList.remove('fade-out');
            cell.classList.add('fade-in');
          });
        }, 300);
      }
    });
  }
}
function initializeExpandableRows() {
  console.log('Initializing expandable rows...');

  // Remove any existing event listeners first
  var expandButtons = document.querySelectorAll('.bx--table-expand__button');
  console.log('Found expand buttons:', expandButtons.length);
  expandButtons.forEach(function (button, index) {
    console.log('Setting up button', index);

    // Remove existing click listeners
    button.replaceWith(button.cloneNode(true));
  });

  // Re-query after cloning
  var newExpandButtons = document.querySelectorAll('.bx--table-expand__button');
  newExpandButtons.forEach(function (button, index) {
    button.addEventListener('click', function (e) {
      console.log('Button clicked:', index);
      e.preventDefault();
      e.stopPropagation();
      var parentRow = this.closest('[data-parent-row]');
      console.log('Parent row found:', !!parentRow);
      var expandableRow = parentRow === null || parentRow === void 0 ? void 0 : parentRow.nextElementSibling;
      console.log('Expandable row found:', !!expandableRow);
      console.log('Has child-row attribute:', expandableRow === null || expandableRow === void 0 ? void 0 : expandableRow.hasAttribute('data-child-row'));
      if (!expandableRow || !expandableRow.hasAttribute('data-child-row')) {
        console.log('No valid expandable row found');
        return;
      }
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      var newState = !isExpanded;
      console.log('Toggling from', isExpanded, 'to', newState);
      this.setAttribute('aria-expanded', newState);
      this.title = newState ? 'Collapse row' : 'Expand row';
      this.setAttribute('aria-label', newState ? 'Collapse row' : 'Expand row');
      if (newState) {
        expandableRow.classList.remove('bx--expandable-row--hidden');
        expandableRow.style.display = '';
      } else {
        expandableRow.classList.add('bx--expandable-row--hidden');
      }
      var svg = this.querySelector('.bx--table-expand__svg');
      if (svg) {
        svg.style.transform = newState ? 'rotate(180deg)' : 'rotate(0deg)';
        svg.style.transition = 'transform 0.2s ease';
      }
      console.log('Row toggle complete');
    });
  });
}
document.addEventListener('DOMContentLoaded', function () {
  var contentWrapper = document.getElementById('content-wrapper');
  var title = document.querySelector('h1');
  var breadcrumb = document.querySelector('.breadcrumb');
  console.log('Breadcrumb scroll setup:');
  console.log('- Content wrapper found:', !!contentWrapper);
  console.log('- Title found:', !!title, title === null || title === void 0 ? void 0 : title.textContent);
  console.log('- Breadcrumb found:', !!breadcrumb);
  if (contentWrapper && title && breadcrumb) {
    console.log('Setting up breadcrumb scroll listener');
    contentWrapper.addEventListener('scroll', function () {
      var existing = breadcrumb.querySelector('.breadcrumb-dynamic');
      var titleTop = title.getBoundingClientRect().top;
      var contentWrapperTop = contentWrapper.getBoundingClientRect().top;
      console.log('Scroll event:', {
        titleTop: titleTop,
        contentWrapperTop: contentWrapperTop,
        hasExisting: !!existing,
        titleText: title.textContent
      });

      // When title scrolls above the content wrapper (out of view)
      if (titleTop < contentWrapperTop && !existing) {
        console.log('Adding breadcrumb dynamic text');

        // Add separator and title text
        var span = document.createElement('span');
        span.textContent = " / ".concat(title.textContent.trim()); // Add separator + title
        span.className = 'breadcrumb-dynamic fade-in';
        breadcrumb.appendChild(span);
      } else if (titleTop >= contentWrapperTop && existing) {
        console.log('Removing breadcrumb dynamic text');
        existing.classList.remove('fade-in');
        existing.classList.add('fade-out');
        setTimeout(function () {
          existing.remove();
        }, 500);
      }
    });
  } else {
    console.log('Breadcrumb scroll setup failed - missing elements');
  }
});

// Manual program input and tag flow
var programInput = document.getElementById('program-search');
var programList = document.getElementById('program-list');
if (programInput && programList) {
  programInput.addEventListener('input', function () {
    var value = programInput.value.toUpperCase();
    var items = programList.querySelectorAll('li');
    var matches = 0;
    items.forEach(function (item) {
      var text = item.getAttribute('data-program') || item.textContent;
      var match = text.includes(value);
      item.style.display = match ? 'block' : 'none';
      if (match) matches++;
    });
    programList.style.display = matches > 0 && value ? 'block' : 'none';
  });
  programList.addEventListener('click', function (e) {
    var li = e.target.closest('li');
    if (!li) return;
    var selectedProgram = li.getAttribute('data-program') || li.textContent;
    programInput.value = '';
    programList.style.display = 'none';

    // Remove any existing tag before adding a new one (optional)
    // document.querySelectorAll('.bx--tag').forEach(tag => tag.remove());

    addCarbonTag(selectedProgram.trim());
  });
}
document.addEventListener('click', function (e) {
  if (!programList.contains(e.target) && e.target !== programInput) {
    programList.style.display = 'none';
  }
});
var style = document.createElement('style');
style.textContent = "\n  .fade-in {\n    opacity: 0;\n    animation: fadeIn 0.4s ease forwards;\n  }\n\n  .fade-out {\n    opacity: 1;\n    animation: fadeOut 0.4s ease forwards;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .force-hidden {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n    height: 0 !important;\n    overflow: hidden !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n\n  .force-visible {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n\n  /* Hide parent containers when table is hidden */\n  .table-container.force-hidden {\n    display: none !important;\n    height: 0 !important;\n    overflow: hidden !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n\n  .table-container.force-hidden ~ *,\n  .table-container-wrapper:has(.force-hidden),\n  .table-scrollable-area:has(.force-hidden) {\n    height: 0 !important;\n    overflow: hidden !important;\n    margin: 0 !important;\n    padding: 0 !important;\n    display: none !important;\n  }\n\n  /* Show parent containers when table is visible */\n  .table-container:not(.force-hidden) ~ *,\n  .table-container-wrapper:has(.table-container:not(.force-hidden)),\n  .table-scrollable-area:has(.table-container:not(.force-hidden)) {\n    display: block !important;\n    height: auto !important;\n    overflow: visible !important;\n  }\n\n  /* Hide scrollbar when in empty state */\n  body:has(.empty-state.force-visible) #content-wrapper,\n  body:has(.empty-state:not([style*=\"display: none\"])) #content-wrapper {\n    overflow-y: hidden !important;\n  }\n\n  /* Show scrollbar when table is visible */\n  body:has(.table-container:not(.force-hidden)) #content-wrapper {\n    overflow-y: scroll !important;\n  }\n\n  /* Sticky table header - just the header row, not toolbar */\n  .bx--data-table thead {\n    position: sticky !important;\n    top: 0 !important;\n    z-index: 100 !important;\n    background-color: #e0e0e0 !important; /* Correct Carbon header gray */\n  }\n\n  .bx--data-table thead th {\n    background-color: #e0e0e0 !important; /* Correct Carbon header gray */\n    border-bottom: 1px solid #e0e0e0 !important;\n  }\n\n  /* Remove custom overrides that might be conflicting with Carbon v10 */\n  .bx--table-toolbar {\n    position: relative !important;\n    background-color: #fff !important;\n  }\n\n  /* Chat panel page shifting */\n  #content-wrapper.page-shifted {\n    margin-right: 400px;\n    transition: margin-right 0.3s ease-in-out;\n  }\n\n  /* Radio button fixes */\n  .bx--radio-button__appearance {\n    position: relative;\n    width: 18px;\n    height: 18px;\n    border: 2px solid #8d8d8d;\n    border-radius: 50%;\n    margin-right: 8px;\n    background-color: #ffffff;\n    flex-shrink: 0;\n    transition: all 0.15s cubic-bezier(0.2, 0, 0.38, 0.9);\n  }\n\n  /* Radio button checked state - creates the inner filled circle */\n  .bx--radio-button:checked + .bx--radio-button__label .bx--radio-button__appearance::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: #0f62fe;\n  }\n\n  /* Smooth scrolling with slower, more controlled timing */\n  #content-wrapper {\n    scroll-behavior: smooth;\n  }\n  \n  /* Make scrolling slower and more elegant */\n  html {\n    scroll-behavior: smooth;\n  }\n  \n  /* Add some scroll margin to elements for better positioning */\n  [id^=\"code\"] {\n    scroll-margin-top: 100px; /* Adds space above when scrolling to element */\n  }\n  \n  /* Carbon notification animations */\n  .notification-slide-out {\n    transform: translateX(100%) !important; /* Slide out to the right */\n    transition: transform 0.3s ease-in !important;\n  }\n  \n  /* Toast notification positioning */\n  .bx--toast-notification {\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n  }\n\n  /* Reduce motion for users who prefer it */\n  @media (prefers-reduced-motion: reduce) {\n    #content-wrapper, html {\n      scroll-behavior: auto;\n    }\n  }\n  \n  /* Reduce motion for users who prefer it */\n  @media (prefers-reduced-motion: reduce) {\n    #content-wrapper {\n      scroll-behavior: auto;\n    }\n    \n    [id^=\"code\"] {\n      transition: none;\n    }\n  }\n\n  /* Rule overlay styles */\n  .rule-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.6);\n    z-index: 9999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.3s ease-in-out;\n  }\n  \n  .rule-overlay.overlay-visible {\n    opacity: 1;\n    visibility: visible;\n  }\n  \n  .overlay-content {\n    background: white;\n    width: 90%;\n    max-width: 800px;\n    height: 80vh;\n    border-radius: 8px;\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n    display: flex;\n    flex-direction: column;\n    transform: translateY(20px);\n    transition: transform 0.3s ease-in-out;\n  }\n  \n  .rule-overlay.overlay-visible .overlay-content {\n    transform: translateY(0);\n  }\n  \n  .overlay-header {\n    padding: 24px 32px;\n    border-bottom: 1px solid #e0e0e0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  \n  .overlay-header h2 {\n    margin: 0;\n    font-size: 24px;\n    color: #161616;\n  }\n  \n  .overlay-close {\n    background: none;\n    border: none;\n    font-size: 24px;\n    cursor: pointer;\n    color: #525252;\n    padding: 8px;\n    line-height: 1;\n  }\n  \n  .overlay-close:hover {\n    color: #161616;\n  }\n  \n  .overlay-body {\n    flex: 1;\n    padding: 32px;\n    overflow-y: auto;\n  }\n  \n  .rule-preview h3 {\n    margin: 0 0 24px 0;\n    color: #161616;\n    font-size: 20px;\n  }\n  \n  .rule-block {\n    margin-bottom: 24px;\n  }\n  \n  .rule-block label {\n    display: block;\n    margin-bottom: 8px;\n    font-weight: 600;\n    color: #161616;\n  }\n  \n  .rule-block input,\n  .rule-block textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #8d8d8d;\n    border-radius: 4px;\n    font-family: inherit;\n  }\n  \n  .code-preview {\n    background: #f4f4f4;\n    border: 1px solid #e0e0e0;\n    border-radius: 4px;\n    padding: 16px;\n  }\n  \n  .code-preview pre {\n    margin: 0;\n    font-family: 'IBM Plex Mono', monospace;\n    font-size: 14px;\n    line-height: 1.6;\n    color: #161616;\n  }\n  \n  .terms-list {\n    display: flex;\n    gap: 8px;\n    flex-wrap: wrap;\n  }\n  \n  .overlay-footer {\n    padding: 24px 32px;\n    border-top: 1px solid #e0e0e0;\n    display: flex;\n    justify-content: flex-end;\n    gap: 16px;\n  }\n  \n  /* Progress step updates */\n  .bx--progress-step--complete svg {\n    fill: #0f62fe;\n  }\n\n  @keyframes fadeIn {\n    to { opacity: 1; }\n  }\n\n  @keyframes fadeOut {\n    to { opacity: 0; }\n  }\n";
document.head.appendChild(style);
document.addEventListener('DOMContentLoaded', function () {
  var aiBtn = document.getElementById('ai-toggle');
  var chatPanel = document.getElementById('chat-panel');
  var closeBtn = document.getElementById('close-chat');
  var pageWrapper = document.getElementById('content-wrapper'); // Changed from 'page-wrapper' to 'content-wrapper'
  var chatBody = document.getElementById('chat-body');
  var chatInput = document.getElementById('chat-input');
  var sendBtn = document.getElementById('send-message');
  var initialPrompt = {
    role: "assistant",
    text: "How can I help you today?",
    timestamp: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  };
  addMessage(initialPrompt.role, initialPrompt.text, initialPrompt.timestamp);
  aiBtn === null || aiBtn === void 0 || aiBtn.addEventListener('click', function () {
    var isOpen = chatPanel.classList.toggle('visible');

    // Only try to shift page if pageWrapper exists
    if (pageWrapper) {
      pageWrapper.classList.toggle('page-shifted', isOpen);
    }
    console.log('AI button clicked, isOpen:', isOpen);

    // Reset chat when opening
    if (isOpen) {
      var _chatScript$chatStep, _chatScript$chatStep2;
      chatStep = 0;
      console.log('Chat opened, chatStep reset to:', chatStep);

      // Clear the chat body except for the initial prompt
      if (chatBody) {
        var messages = chatBody.querySelectorAll('.chat-bubble');
        messages.forEach(function (msg, index) {
          if (index > 0) {
            // Keep the first "How can I help you today?" message
            msg.remove();
          }
        });
      }

      // Pre-populate with first user message
      console.log('Current chat script item:', chatScript[chatStep]);
      console.log('Has inputText?', (_chatScript$chatStep = chatScript[chatStep]) === null || _chatScript$chatStep === void 0 ? void 0 : _chatScript$chatStep.inputText);
      if ((_chatScript$chatStep2 = chatScript[chatStep]) !== null && _chatScript$chatStep2 !== void 0 && _chatScript$chatStep2.inputText && chatInput) {
        console.log('Setting input value to:', chatScript[chatStep].text);
        setTimeout(function () {
          chatInput.value = chatScript[chatStep].text;
          console.log('Input field value set to:', chatInput.value);
        }, 100); // Small delay to ensure chat panel is fully open
      } else {
        console.log('First message does not have inputText flag or chatInput not found');
      }
    }
  });

  // Initialize Carbon components and hide table properly
  var tables = document.querySelectorAll('.bx--data-table');
  console.log('Found tables:', tables.length);
  tables.forEach(function (table) {
    var _window$CarbonCompone2;
    if ((_window$CarbonCompone2 = window.CarbonComponents) !== null && _window$CarbonCompone2 !== void 0 && _window$CarbonCompone2.DataTable) {
      window.CarbonComponents.DataTable.init(table);
      console.log('Initialized Carbon table');
    }
  });

  // Hide table completely from layout on initial load
  var sampleTable = document.getElementById('sample-table');
  if (sampleTable) {
    sampleTable.classList.add('force-hidden'); // Use force-hidden instead of just visibility
    console.log('Hidden sample table with force-hidden class');
  }

  // Initialize expandable rows after Carbon is ready
  setTimeout(function () {
    initializeExpandableRows();
  }, 100);
  closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener('click', function () {
    chatPanel.classList.remove('visible');
    if (pageWrapper) {
      pageWrapper.classList.remove('page-shifted');
    }
  });
  sendBtn === null || sendBtn === void 0 || sendBtn.addEventListener('click', function () {
    if (chatStep < chatScript.length) {
      var current = chatScript[chatStep];
      if (current.role === "user") {
        addMessage("user", current.text, current.timestamp);
        chatInput.value = "";
        chatStep++;
        var typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.innerHTML = "\n          <div class=\"chat-bubble assistant\">\n            <div class=\"chat-meta assistant-meta\">\n              <img src=\"assets/img/watsonx.svg\" alt=\"Watsonx2\" class=\"chat-avatar\">\n              <span>watsonx is typing\u2026</span>\n            </div>\n            <div class=\"chat-text assistant-bubble\">\n              <span class=\"dot\"></span><span class=\"dot\"></span><span class=\"dot\"></span>\n            </div>\n          </div>\n        ";
        chatBody.appendChild(typingIndicator);
        chatBody.scrollTop = chatBody.scrollHeight;
        var delay = 1500 + Math.random() * 1000;
        setTimeout(function () {
          typingIndicator.remove();
          var next = chatScript[chatStep];
          if ((next === null || next === void 0 ? void 0 : next.role) === "assistant") {
            addMessage("assistant", next.text, next.timestamp);
            chatStep++;
            if (next.text.toLowerCase().includes("done")) {
              addCarbonTag("LGUPDB01.cbl");
            }

            // Look for the next user input to pre-populate
            var upcomingIndex = chatStep;
            var upcoming = null;

            // Find the next user message with inputText
            while (upcomingIndex < chatScript.length) {
              var _chatScript$upcomingI, _chatScript$upcomingI2;
              if (((_chatScript$upcomingI = chatScript[upcomingIndex]) === null || _chatScript$upcomingI === void 0 ? void 0 : _chatScript$upcomingI.role) === "user" && (_chatScript$upcomingI2 = chatScript[upcomingIndex]) !== null && _chatScript$upcomingI2 !== void 0 && _chatScript$upcomingI2.inputText) {
                upcoming = chatScript[upcomingIndex];
                break;
              }
              upcomingIndex++;
            }
            if (upcoming) {
              setTimeout(function () {
                chatInput.value = upcoming.text;
              }, 300);
            }
          }
        }, delay);
      }
    }
  });
  var closeFlowButtons = document.querySelectorAll('.content-flow-close');
  closeFlowButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var flow = document.getElementById('content-flow');
      var overlay = document.getElementById('rule-overlay');
      if (flow) {
        flow.classList.remove('slide-up');
        flow.classList.remove('fade-in');
        flow.classList.add('slide-down');
        setTimeout(function () {
          flow.classList.add('hidden');
          flow.classList.remove('slide-down');
        }, 400); // match animation duration
      }

      // Also hide overlay if it's open
      if (overlay) {
        overlay.classList.add('hidden');
        overlay.classList.remove('overlay-visible');
      }
    });
  });

  // Replace only the body content, keep header and footer
  document.addEventListener('click', function (e) {
    var _clickedButton$textCo;
    var clickedButton = e.target.closest('button');
    var buttonText = clickedButton === null || clickedButton === void 0 || (_clickedButton$textCo = clickedButton.textContent) === null || _clickedButton$textCo === void 0 ? void 0 : _clickedButton$textCo.trim();

    // Make sure we're in the right container
    var inContentFlow = e.target.closest('#content-flow');

    // Next button: load rule content into content-flow body only
    if (buttonText === 'Next' && inContentFlow) {
      console.log('✅ Next: loading rule content into body');
      e.preventDefault();

      // Get ONLY the main content from rule draft, not the header
      var ruleDraft = document.getElementById('rule-draft');
      var ruleMainContent = ruleDraft.querySelector('.flow-content.medium-cell-block-container');

      // Replace only the main content area in content-flow, keep header and right menu
      var contentFlowMainContent = document.querySelector('#content-flow .flow-content.medium-cell-block-container');
      if (ruleMainContent && contentFlowMainContent) {
        // Save original main content
        window.originalMainContentHTML = contentFlowMainContent.innerHTML;

        // Replace with rule main content only
        contentFlowMainContent.innerHTML = ruleMainContent.innerHTML;

        // Update progress steps to show Step 2 as current
        updateProgressToStep2();

        // Update the footer buttons for step 2
        updateFooterForStep2();
        console.log('Rule content loaded into main content area only');
      }
      return;
    }

    // Save Rule button: switch tab first, then fade out content flow  
    if (buttonText === 'Save Rule' && inContentFlow) {
      console.log('✅ Save Rule: switching tab then fading out');
      e.preventDefault();

      // Switch to Business rules tab FIRST (so fade-out looks smooth)
      switchToBusinessRulesTab();

      // Then fade out the content flow over the correct background
      var contentFlow = document.getElementById('content-flow');
      contentFlow.classList.remove('slide-up');
      contentFlow.classList.remove('fade-in');
      contentFlow.classList.add('slide-down');
      setTimeout(function () {
        contentFlow.classList.add('hidden');
        contentFlow.classList.remove('slide-down');

        // Reset content flow to step 1 for next time
        resetContentFlowToStep1();

        // Show success notification after transition completes
        showSuccessNotification();
        console.log('Rule saved with smooth transition');
      }, 400); // match animation duration

      return;
    }

    // Previous button: restore original content-flow body
    if (buttonText === 'Previous' && inContentFlow) {
      console.log('✅ Previous: restoring original content');
      e.preventDefault();

      // Restore original main content
      var _contentFlowMainContent = document.querySelector('#content-flow .flow-content.medium-cell-block-container');
      if (window.originalMainContentHTML && _contentFlowMainContent) {
        _contentFlowMainContent.innerHTML = window.originalMainContentHTML;
      }

      // Reset progress back to Step 1
      var step1 = document.querySelector('#content-flow .bx--progress-step:first-child');
      if (step1) {
        step1.classList.add('bx--progress-step--current');
        step1.classList.remove('bx--progress-step--complete');
      }
      var step2 = document.querySelector('#content-flow .bx--progress-step:last-child');
      if (step2) {
        step2.classList.add('bx--progress-step--incomplete');
        step2.classList.remove('bx--progress-step--current');
      }

      // Restore original footer buttons
      restoreFooterForStep1();
      console.log('Original content restored');
      return;
    }

    // Cancel button: restore original content
    if (buttonText === 'Cancel' && inContentFlow) {
      console.log('✅ Cancel: restoring original content');
      e.preventDefault();

      // Restore original body content
      var contentFlowBody = document.querySelector('#content-flow .content-flow-body');
      if (window.originalContentFlowBodyHTML && contentFlowBody) {
        contentFlowBody.innerHTML = window.originalContentFlowBodyHTML;
      }

      // Restore original footer buttons
      restoreFooterForStep1();
      console.log('Original content restored');
      return;
    }
  });
  function showSuccessNotification() {
    // Create Carbon success notification
    var notification = document.createElement('div');
    notification.className = 'bx--toast-notification bx--toast-notification--success';
    notification.setAttribute('role', 'alert');
    notification.id = 'rule-success-notification';
    notification.innerHTML = "\n      <div class=\"bx--toast-notification__details\">\n        <svg class=\"bx--toast-notification__icon\" focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" \n             style=\"will-change: transform;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" aria-hidden=\"true\">\n          <path d=\"M10,1A9,9,0,1,1,1,10,9,9,0,0,1,10,1Zm3.64,5.64L11.5,8.78,8.86,6.14,7.45,7.55l2.64,2.64-2.64,2.64,1.41,1.41L11.5,11.6l2.14,2.14,1.41-1.41L12.91,10l2.14-2.14Z\"></path>\n        </svg>\n        <div class=\"bx--toast-notification__text-wrapper\">\n          <div class=\"bx--toast-notification__title\">Business rule created</div>\n          <div class=\"bx--toast-notification__subtitle\">Your new rule was successfully created.</div>\n        </div>\n      </div>\n      <button class=\"bx--toast-notification__close-button\" type=\"button\" aria-label=\"Close notification\">\n        <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" style=\"will-change: transform;\" \n             xmlns=\"http://www.w3.org/2000/svg\" class=\"bx--toast-notification__close-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 32 32\" aria-hidden=\"true\">\n          <path d=\"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z\"></path>\n        </svg>\n      </button>\n    ";

    // Add click handler for close button
    var closeButton = notification.querySelector('.bx--toast-notification__close-button');
    closeButton.addEventListener('click', function () {
      notification.classList.add('notification-slide-out');
      setTimeout(function () {
        notification.remove();
      }, 300);
    });

    // Position and style the notification
    notification.style.position = 'fixed';
    notification.style.top = '47px'; // Below header
    notification.style.right = '1rem';
    notification.style.zIndex = '10000';
    notification.style.transform = 'translateX(100%)'; // Start off-screen to the right
    notification.style.transition = 'transform 0.3s ease-out';
    notification.style.maxWidth = '400px';

    // Add to page
    document.body.appendChild(notification);

    // Slide in from the right after a small delay
    setTimeout(function () {
      notification.style.transform = 'translateX(0)'; // Slide to final position
    }, 100);

    // Remove auto-dismiss - only manual close with X button

    console.log('✅ Success notification shown (manual dismiss only)');
  }
  function updateProgressToStep2() {
    // Update Step 1 to complete
    var step1 = document.querySelector('#content-flow .bx--progress-step:first-child');
    if (step1) {
      step1.classList.remove('bx--progress-step--current');
      step1.classList.add('bx--progress-step--complete');
    }

    // Update Step 2 to current
    var step2 = document.querySelector('#content-flow .bx--progress-step:last-child');
    if (step2) {
      step2.classList.remove('bx--progress-step--incomplete');
      step2.classList.add('bx--progress-step--current');
    }
    console.log('✅ Progress updated to Step 2');
  }
  function resetContentFlowToStep1() {
    // Restore original main content
    var contentFlowMainContent = document.querySelector('#content-flow .flow-content.medium-cell-block-container');
    if (window.originalMainContentHTML && contentFlowMainContent) {
      contentFlowMainContent.innerHTML = window.originalMainContentHTML;
    }

    // Reset progress back to Step 1
    var step1 = document.querySelector('#content-flow .bx--progress-step:first-child');
    if (step1) {
      step1.classList.add('bx--progress-step--current');
      step1.classList.remove('bx--progress-step--complete');
    }
    var step2 = document.querySelector('#content-flow .bx--progress-step:last-child');
    if (step2) {
      step2.classList.add('bx--progress-step--incomplete');
      step2.classList.remove('bx--progress-step--current');
    }

    // Restore original footer buttons
    restoreFooterForStep1();
    console.log('✅ Content flow reset to Step 1 for next use');
  }
  function switchToBusinessRulesTab() {
    // Find the Business rules tab (first tab)
    var businessRulesTab = document.querySelector('[aria-controls="2023"]');
    var identifyRulesTab = document.querySelector('[aria-controls="2025"]');

    // Find the tab content panels
    var businessRulesPanel = document.getElementById('2023');
    var identifyRulesPanel = document.getElementById('2024');
    if (businessRulesTab && identifyRulesTab && businessRulesPanel && identifyRulesPanel) {
      // Switch tab classes
      identifyRulesTab.parentElement.classList.remove('bx--tabs__nav-item--selected');
      identifyRulesTab.setAttribute('aria-selected', 'false');
      businessRulesTab.parentElement.classList.add('bx--tabs__nav-item--selected');
      businessRulesTab.setAttribute('aria-selected', 'true');

      // Hide the current panel
      identifyRulesPanel.setAttribute('hidden', 'true');
      identifyRulesPanel.setAttribute('aria-hidden', 'true');

      // Show new panel with fade-in effect
      businessRulesPanel.removeAttribute('hidden');
      businessRulesPanel.setAttribute('aria-hidden', 'false');

      // Add fade-in animation - MODIFY DURATION HERE
      businessRulesPanel.style.opacity = '0';
      businessRulesPanel.style.transition = 'opacity 0.6s ease-in-out'; // ← Change this value

      // Trigger fade-in after a tiny delay to ensure it's visible
      setTimeout(function () {
        businessRulesPanel.style.opacity = '1';
      }, 50);
      console.log('✅ Switched to Business rules tab with fade-in');
    } else {
      console.log('❌ Could not find tab elements');
    }
  }
  function updateFooterForStep2() {
    var footer = document.querySelector('#content-flow .flow_footer');
    if (footer) {
      footer.innerHTML = "\n        <button class=\"bx--btn bx--btn--primary\" type=\"button\">\n          Save Rule\n        </button>\n        <button class=\"bx--btn bx--btn--secondary\" type=\"button\">\n          Previous\n        </button>\n      ";
    }
  }
  function restoreFooterForStep1() {
    var footer = document.querySelector('#content-flow .flow_footer');
    if (footer) {
      footer.innerHTML = "\n        <button class=\"bx--btn bx--btn--primary\" type=\"button\">\n          Next\n        </button>\n        <button class=\"bx--btn bx--btn--disabled\" type=\"button\">\n          Previous\n        </button>\n      ";
    }
  }
  function showRuleDraft() {
    console.log('Showing rule draft...');
    var contentFlow = document.getElementById('content-flow');
    var ruleDraft = document.getElementById('rule-draft');
    console.log('Content flow element:', contentFlow);
    console.log('Rule draft element:', ruleDraft);
    console.log('Content flow classes:', contentFlow === null || contentFlow === void 0 ? void 0 : contentFlow.className);
    console.log('Rule draft classes:', ruleDraft === null || ruleDraft === void 0 ? void 0 : ruleDraft.className);
    if (contentFlow && ruleDraft) {
      console.log('Both elements found, starting transition...');

      // Hide content flow completely
      contentFlow.style.setProperty('display', 'none', 'important');
      contentFlow.style.setProperty('visibility', 'hidden', 'important');
      contentFlow.style.setProperty('opacity', '0', 'important');
      contentFlow.classList.add('hidden');

      // Show rule draft with brute force
      ruleDraft.classList.remove('hidden');
      ruleDraft.style.setProperty('display', 'block', 'important');
      ruleDraft.style.setProperty('visibility', 'visible', 'important');
      ruleDraft.style.setProperty('position', 'relative', 'important');
      ruleDraft.style.setProperty('opacity', '0', 'important');
      ruleDraft.style.transition = 'opacity 0.3s ease-in-out';

      // Fade in rule draft
      setTimeout(function () {
        ruleDraft.style.setProperty('opacity', '1', 'important');
        console.log('✅ Rule draft should be visible now');
        console.log('Rule draft final styles:', {
          display: getComputedStyle(ruleDraft).display,
          visibility: getComputedStyle(ruleDraft).visibility,
          opacity: getComputedStyle(ruleDraft).opacity
        });
      }, 100);
    } else {
      console.log('❌ Elements not found - Content flow:', !!contentFlow, 'Rule draft:', !!ruleDraft);
    }
  }
  function showContentFlow() {
    console.log('=== showContentFlow START ===');
    var flow = document.getElementById('content-flow');
    console.log('Flow element found:', !!flow);
    if (flow) {
      console.log('Opening content flow...');
      flow.classList.remove('hidden');
      flow.classList.remove('fade-in');
      flow.classList.add('slide-up');

      // Initialize radio buttons after content flow opens
      setTimeout(function () {
        console.log('Initializing radio buttons...');
        var radioButtons = document.querySelectorAll('input[name="variable-usage"]');
        console.log('Found radio buttons:', radioButtons.length);
        radioButtons.forEach(function (radio) {
          radio.addEventListener('change', function () {
            if (this.checked) {
              console.log('Radio changed to:', this.value);
              var codeMapping = {
                '565-568': 'code1',
                '549-557': 'code2'
              };
              var targetId = codeMapping[this.value];
              if (targetId) {
                var target = document.getElementById(targetId);
                if (target) {
                  target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
                  target.style.backgroundColor = '#d0e2ff';
                  setTimeout(function () {
                    return target.style.backgroundColor = '';
                  }, 2000);
                  console.log('Scrolled to:', targetId);
                }
              }
            }
          });
        });

        // Auto-scroll to first checked radio
        var firstRadio = document.querySelector('input[name="variable-usage"]:checked');
        if (firstRadio) {
          console.log('Auto-scrolling to first radio:', firstRadio.value);
          setTimeout(function () {
            var codeMapping = {
              '565-568': 'code1',
              '549-557': 'code2'
            };
            var targetId = codeMapping[firstRadio.value];
            if (targetId) {
              var target = document.getElementById(targetId);
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
                console.log('Auto-scrolled to:', targetId);
              }
            }
          }, 500);
        }
      }, 800);
    }
  }
  function hideRuleDraft() {
    var ruleDraft = document.getElementById('rule-draft');
    if (ruleDraft) {
      ruleDraft.style.opacity = '0';
      ruleDraft.style.transition = 'opacity 0.3s ease-in-out';
      setTimeout(function () {
        ruleDraft.classList.add('hidden');
      }, 300);
      console.log('Rule draft hidden');
    }
  }
  function updateProgressSteps() {
    // Update step 1 to complete
    var step1 = document.querySelector('.bx--progress-step:first-child');
    if (step1) {
      step1.classList.remove('bx--progress-step--current');
      step1.classList.add('bx--progress-step--complete');
    }

    // Update step 2 to current
    var step2 = document.querySelector('.bx--progress-step:last-child');
    if (step2) {
      step2.classList.remove('bx--progress-step--incomplete');
      step2.classList.add('bx--progress-step--current');
    }
  }
  function addMessage(role, text, timestamp) {
    var msg = document.createElement('div');
    msg.className = "chat-bubble ".concat(role);
    if (role === "user") {
      msg.innerHTML = "\n        <div class=\"chat-meta user-meta\">You ".concat(timestamp, "</div>\n        <div class=\"chat-text user-bubble\">").concat(text, "</div>\n      ");
    } else {
      msg.innerHTML = "\n        <div class=\"chat-meta assistant-meta\">\n          <img src=\"assets/img/watsonx.svg\" alt=\"Watsonx3\" class=\"chat-avatar\">\n          <span>watsonx ".concat(timestamp, "</span>\n        </div>\n        <div class=\"chat-text assistant-bubble\">").concat(text, "</div>\n      ");
    }
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a.bx--link');
    console.log('Link clicked:', !!link);
    if (link && link.closest('td')) {
      console.log('Table link clicked, opening content flow...');
      e.preventDefault();
      console.log('About to call showContentFlow()...');
      showContentFlow();
      console.log('showContentFlow() called');
    }
  });
}); // End of DOMContentLoaded

// === CONTENT FLOW FUNCTIONS (MOVED OUTSIDE DOMContentLoaded) ===
}();
/******/ })()
;
//# sourceMappingURL=app.js.map