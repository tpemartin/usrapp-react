(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _page_story = _interopRequireDefault(require("./modules/page_story.js"));

var _page_event = _interopRequireWildcard(require("./modules/page_event.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(function () {
  fillInEventPage(); // sidebar storyPage click

  $("#storyPage").click(fillInStoryPage);
  $("#storyPage").on("tap", fillInStoryPage); // sidebar eventPage click 

  $("#eventPage").click(fillInEventPage);
  $("#eventPage").on("touchstart", fillInEventPage);
  $("#eventPage").on("tap", function () {
    alert("tap");
  });
  var el = document.getElementById('eventPage');
  el.addEventListener("touchstart", function () {
    alert("tap");
    fillInEventPage();
  });
  var id = getQueryParameter();
  if (id) eventPageForShare(id);
});

function eventPageForShare(_x) {
  return _eventPageForShare.apply(this, arguments);
}

function _eventPageForShare() {
  _eventPageForShare = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fillInEventPage().then(function (eventInfo) {
              console.log(eventInfo); //console.log(window.eventMap[id])

              var index = eventInfo.eventMap[id];
              $("#carouselExampleCaptions").carousel(index).carousel("pause"); //window.eventMap[id])

              var ev = eventInfo.events[index];
              /*
              let metaTag= meta("https://tpemartin.github.io/usrapp-react/src/index.html?id="+ev.id, ev.活動名稱, ev.活動內容簡述, ev['海報網址'])
              console.log(metaTag) 
              $("head").append(metaTag)
              */
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _eventPageForShare.apply(this, arguments);
}

function fillInEventPage() {
  return _fillInEventPage.apply(this, arguments);
}

function _fillInEventPage() {
  _fillInEventPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _page_event.default)().then(function (eventJson) {
              var events = eventJson.slice(1, eventJson.length + 1); //remove title row

              return (0, _page_event.carousel)(events);
            }).then(function (eventCarousel) {
              $("#app").empty().append((0, _page_event.eventPageContent)(eventCarousel));
              window.events = eventCarousel.events;
              window.eventMap = eventCarousel.eventMap;
              (0, _page_event.clickGetElement)(getClickEvent);
              $("body").prepend("<div id=\"modal\" class=\"row justify-content-center\"></div>");
              return {
                events: eventCarousel.events,
                eventMap: eventCarousel.eventMap
              };
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fillInEventPage.apply(this, arguments);
}

function fillInStoryPage() {
  fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eaglemt2019").then(function (response) {
    return response.json();
  }) // without {} the value will be the succes return
  .then(function (data) {
    return (0, _page_story.default)(data.items);
  }).then(function (data) {
    var htmlContent = data.reduce(function (s, e) {
      return s + e;
    });
    $("#app").empty().append("\n        <div class=\"row\">\n        ".concat(htmlContent, "\n        </div>\n        "));
  });
}

function createMeta() {
  var id = getQueryParameter();

  if (id) {
    fillInEventPage().then();
  }
} //helpers


function meta(url, title) {
  var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var imgSrc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  return "<meta property=\"og:url\"           content=\"".concat(url, "\" />\n<meta property=\"og:type\"          content=\"web app\" />\n<meta property=\"og:title\"         content=\"").concat(title, "\" />\n<meta property=\"og:description\"   content=\"").concat(description, "\" />\n<meta property=\"og:image\"         content=\"").concat(imgSrc, "/>");
}

function getQueryParameter() {
  var params = new Proxy(new URLSearchParams(window.location.search), {
    get: function get(searchParams, prop) {
      return searchParams.get(prop);
    }
  }); // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"

  return params.id; // "some_value"
}

function getClickEvent(e) {
  console.log(e);
  var eventid = $(e.currentTarget).data().eventid;
  var eventIndex = eventMap[eventid];
  var targetEvent = events[eventIndex];
  console.log(targetEvent);
  var targetUrl = targetEvent['活動官方網站（若無免填）'];

  if (targetUrl === '') {
    targetUrl = "https://tpemartin.github.io/usrapp-react/src/event-".concat(targetEvent["id"], ".html");
  }

  var evModal = (0, _page_event.eventModal)(targetEvent['活動名稱'], (0, _page_event.eventTime)(targetEvent), targetEvent['活動內容簡述'], targetEvent['地點'], targetEvent['主辦單位細節'], targetEvent["Google行事曆事件訂閱連結"], targetEvent['活動報名網址（若無免填）'], targetUrl);
  console.log(evModal);
  $("#modal").empty();
  $("#modal").append("\n            <div class=\"col-sm-12 col-md-6 col-lg-5\">\n            ".concat(evModal.modal, "\n            </div>\n            \n              \n        "));
  $("#exampleModal").modal("show");
  $("#shareEventBtn").click(function () {
    $("#shareBox").toggle();
  });
  return targetEvent;
}

},{"./modules/page_event.js":2,"./modules/page_story.js":3}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carousel = carousel;
exports.clickGetElement = clickGetElement;
exports.default = fetchEventJson;
exports.eventModal = eventModal;
exports.eventPageContent = eventPageContent;
exports.eventTime = eventTime;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function eventPageContent(eventCarousel) {
  return "<div class=\"row\">\n        <div class=\"col\">\n        ".concat(eventCarousel.carouselhtml, "\n        </div>\n    <div>\n    ");
}
/* export default async function fetchEventJson(){
  let eventAPI="https://script.google.com/macros/s/AKfycbzE0Td7xZrldnxH06AC7HfJZ5b5Mms5Z2Z8DCFu2jDjfFZa0GgTMX1qMbfILi0ESVjbIg/exec"
  return await fetch(eventAPI).then(e=>e.json())
} */


function fetchEventJson() {
  return _fetchEventJson.apply(this, arguments);
}

function _fetchEventJson() {
  _fetchEventJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var eventAPI;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            eventAPI = "https://script.google.com/macros/s/AKfycbzE0Td7xZrldnxH06AC7HfJZ5b5Mms5Z2Z8DCFu2jDjfFZa0GgTMX1qMbfILi0ESVjbIg/exec";
            _context.next = 3;
            return $.ajax({
              dataType: "json",
              url: eventAPI
            }).then(function (e) {
              alert("success");
              return e;
            }, function (e) {
              alert(JSON.stringify(e));
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchEventJson.apply(this, arguments);
}

function footer(element) {
  return "<div class=\"fixed-bottom\" style=\"padding-bottom:15px\">\n    <div class=\"row\">\n      <div class=\"mx-auto\">\n         ".concat(element, "\n      </div>\n      </div>\n    </div>");
}

function eventButtons() {
  return "<div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n      <button type=\"button\" class=\"btn btn-secondary\">\u8A73\u7D30\u5167\u5BB9</button>\n    </div>\n    <div class=\"share-group\" style=\"height:0;\">\n    <div class=\"share-group\" id=\"share-icon\" style=\"display:none\">\n      ".concat(share(), "\n      ").concat(share(), "\n    </div>\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">  \n      <button type=\"button\" class=\"btn btn-secondary\">\u5206\u4EAB</button>\n    </div>\n    </div>\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\n      \n      <a target=\"_blank\" href=\"https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NDM3bW50cnZpYW50Ymk2N2N2ZXN0ZTJqNDcgZ20ubnRwdS5lZHUudHdfY2xhc3Nyb29tMDkwNTg4ODlAZw&amp;tmsrc=gm.ntpu.edu.tw_classroom09058889%40group.calendar.google.com\"><img border=\"0\" src=\"https://www.google.com/calendar/images/ext/gc_button1_en.gif\"><button type=\"button\" class=\"btn btn-secondary\">\u52A0\u5165\u884C\u4E8B\u66C6</button></a>\n    </div>\n    \n  </div>");
}

function share() {
  return "<div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">  \n    <button type=\"button\" class=\"btn btn-secondary\">\u5206\u4EAB2</button>\n    </div>";
}

function clickGetElement() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {
    return console.log(e);
  };
  $(".carousel-item").each(function (i, element) {
    $(element).click(callback);
  });
}

function carousel(events) {
  var eventsDup = _toConsumableArray(events);

  var event_active = eventsDup.shift(); //shift out first active row

  var carouselComponents = eventsDup.reduce(function (o, e) {
    return {
      total: o.total + 1,
      carouselItem: o.carouselItem + carouselItem(e),
      indicator: o.indicator + indicator(e, o.total + 1)
    };
  }, {
    total: 0,
    carouselItem: carouselItem(event_active, "active"),
    indicator: indicator(event_active, 0, "active")
  });
  var carouselhtml = "<div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      ".concat(carouselComponents.indicator, "\n    </ol>\n    <div class=\"carousel-inner\">\n      ").concat(carouselComponents.carouselItem, "\n    </div>\n    <button class=\"carousel-control-prev\" type=\"button\" data-target=\"#carouselExampleCaptions\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n    </button>\n    <button class=\"carousel-control-next\" type=\"button\" data-target=\"#carouselExampleCaptions\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n    </button>\n    </div>");
  return {
    events: events,
    eventMap: constructEventMap(events),
    carouselhtml: carouselhtml
  };
}

function carouselItem(e) {
  var activeClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return "<div class=\"carousel-item ".concat(activeClass, "\" data-eventId=\"").concat(e.id, "\">\n    <div class=\"poster\" style=\"background-image: url(").concat(e.海報網址, ")\"></div>\n  </div>");
}

function indicator(e, i) {
  var activeClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return "<li data-target=\"#carouselExampleCaptions\" data-slide-to=\"".concat(i, "\" class=\"").concat(activeClass, "\"></li>");
}

function constructEventMap(events) {
  var eventMap = {};
  events.forEach(function (e, i) {
    eventMap[e.id] = i;
  });
  return eventMap;
} //Event Modal
//helpers


function eventModal() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "北大玩具節";
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "2018.11.10";
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "現場凡攜帶項二手玩具或2張111年1-4月發票. 報名方式: 至服務台捐出,即可領取闖關卡入場券。(絨毛娃娃不在回收範圍裡喔!)";

  var _location = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "...";

  var organizer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "...";
  var calendarUrl = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
  var registerUrl = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
  var eventUrl = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";
  var calendarHtml = "";

  if (calendarUrl !== "") {
    calendarHtml = googleCalendar(calendarUrl);
  }

  var registerHtml = "";

  if (registerUrl !== "") {
    registerHtml = registerBtn(registerUrl);
  }

  return {
    "button": "\n  <!-- Button trigger modal -->\n  <button id=\"eventModal\" style=\"display:none\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n    \u8A73\u7D30\u5167\u5BB9\n  </button>",
    "modal": "<!-- Modal -->\n  <div class=\"modal fade text-center\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog  modal-dialog-centered\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title\">".concat(title, "</h3>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">").concat(time, "</h4>\n        </div>\n        <div class=\"modal-body\">\n          ").concat(tabNav(), "\n        <br>\n          ").concat(tabContent(content, _location, organizer), "\n        </div>\n        <div class=\"modal-footer justify-content-center\">\n          ").concat(eventDecision(calendarHtml, registerHtml, eventUrl), "\n        </div>\n      </div>\n    </div>\n  </div>\n  ")
  };
}

function eventModalButton() {
  return "\n  <!-- Button trigger modal -->\n  <button id=\"eventDetailBtn\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n    \u8A73\u7D30\u5167\u5BB9\n  </button>";
}

function eventTime(ev) {
  var formatCase = getFormatCase(ev);

  switch (formatCase.formatCase) {
    case "a":
      return formatCase.activityTime.A;

    case "ab":
      return "".concat(formatCase.activityTime.A, " ").concat(formatCase.activityTime.B);

    case "ay":
      return "".concat(formatCase.activityTime.A, " \u5230 ").concat(formatCase.activityTime.Y);

    case "abz":
      return "".concat(formatCase.activityTime.A, " ").concat(formatCase.activityTime.B, "-").concat(formatCase.activityTime.Z);

    case "abyz":
      return "".concat(formatCase.activityTime.A, " \u5230 ").concat(formatCase.activityTime.Y, "\n      ").concat(ev["頻率"], " ").concat(formatCase.activityTime.B, "-").concat(formatCase.activityTime.Z);
  }
}

function ymd(timeString) {
  var startD = new Date(timeString);
  return startD.getFullYear() + '.' + startD.getMonth() + "." + startD.getDay();
}

function hm(timeString) {
  var startD = new Date(timeString);
  var hmString = startD.toLocaleTimeString().replace(/:[0-9][0-9] (?=[PA])/, "");
  return hmString;
}

function getFormatCase(ev) {
  var formatCaseMap = {
    "日期(1)": "a",
    "時間(1)": "b",
    "日期(2)": "y",
    "時間(2)": "z"
  };
  var formatCase = "";
  var activityTime = {};

  if (ev["日期(1)"] !== "") {
    activityTime.A = ymd(ev['日期(1)']);
    formatCase = formatCase + formatCaseMap["日期(1)"];
  }

  if (ev["時間(1)"] !== "") {
    activityTime.B = hm(ev['時間(1)']);
    formatCase = formatCase + formatCaseMap["時間(1)"];
  }

  if (ev["日期(2)"] !== "") {
    activityTime.Y = ymd(ev['日期(2)']);
    formatCase = formatCase + formatCaseMap["日期(2)"];
  }

  if (ev["時間(2)"] !== "") {
    activityTime.Z = hm(ev['時間(1)']);
    formatCase = formatCase + formatCaseMap["時間(2)"];
  }

  return {
    formatCase: formatCase,
    activityTime: activityTime
  };
}

function facebookShare() {
  var shareUri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "https://tpemartin.github.io/usrapp-react/src/eventpage5.html";
  return "<div class=\"fb-share-button\" data-href=\"".concat(shareUri, "\"  data-layout=\"button_count\" data-size=\"small\"><a target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=").concat(encodeURI(shareUri), "&amp;src=sdkpreparse\" class=\"fb-xfbml-parse-ignore\">Share</a></div>");
}

function lineShare(shareUrl) {
  return "<button type=\"button\" class=\"btn btn-secondary\" data-url=\"".concat(shareUrl, "\"></button>");
}

function eventDecision(calendarHtml, registerHtml, eventUrl) {
  return "\n  <div class=\"btn-toolbar justify-content-center\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n    <div class=\"share-group\" style=\"height:0\">\n    <div class=\"share-group\" id=\"shareBox\" style=\"display:none\">\n      <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">  \n      ".concat(lineShare(eventUrl), "\n      </div>\n      <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">  \n   ").concat(facebookShare(eventUrl), "\n    </div>\n    </div>\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n   \n      <button type=\"button\" class=\"btn btn-secondary\" id=\"shareEventBtn\">\u5206\u4EAB</button>\n    </div>\n    </div>\n    ").concat(registerHtml, "\n    ").concat(calendarHtml, "\n  </div>");
}

function googleCalendar(calendarUrl) {
  return "<div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\n  <a target=\"_blank\" href=\"".concat(calendarUrl, "\">\n    <button type=\"button\" class=\"btn btn-secondary\">\u52A0\u5165\u884C\u4E8B\u66C6</button>\n  </a> \n  </div>");
}

function registerBtn(registerUrl) {
  return "<div class=\"btn-group\" role=\"group\" aria-label=\"Fourth group\">\n  <a target=\"_blank\" href=\"".concat(registerUrl, "\">\n    <button type=\"button\" class=\"btn btn-secondary\">\u5831\u540D</button>\n  </a> \n  </div>");
}

function tabNav() {
  return " \n  \n  <nav>\n  <div class=\"nav nav-pills  justify-content-center\" id=\"nav-tab\" role=\"tablist\">\n    <button type=\"button\" class=\"btn btsm btn-outline-primary nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#nav-home\" type=\"button\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">\u5167\u5BB9</button>\n    <button type=\"button\" class=\"btn btsm btn-outline-primary nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" data-target=\"#nav-profile\" type=\"button\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">\u5730\u9EDE</button>\n    <button type=\"button\" class=\"btn btsm btn-outline-primary nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" data-target=\"#nav-contact\" type=\"button\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">\u4E3B\u8FA6\u55AE\u4F4D</button>\n  </div>\n</nav>\n\n";
}

function tabContent(content, location, organizer) {
  return "\n  <div class=\"tab-content\" id=\"nav-tabContent\" style=\"height:60vh;\">\n  <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">".concat(content, "</div>\n  <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">").concat(location, "</div>\n  <div class=\"tab-pane fade\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">").concat(organizer, "</div>\n</div>\n  ");
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// helpers
function storyCardLarge() {
  var imgSrc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "lib/usrApp-1.0.0/img/storyimage.jpeg";
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "USR與鳶山協會為在地老人據點介紹長照資源";
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "...";
  return "<div class=\"card mb-3\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-md-6\">\n            <img src=\"".concat(imgSrc, "\" style=\"width:100%\" alt=\"...\">\n        </div>\n    <div class=\"col-md-6\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(title, "</h5>\n        <p class=\"card-text\">").concat(text.match(/(?<=\<p\>).*(?=\<\/p\>)/)[0], "</p>\n      </div>\n    </div>\n    </div></div>");
}

function storyCardSmall() {
  var imgSrc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "lib/usrApp-1.0.0/img/storyimage.jpeg";
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "楊麗蘭理事長談「在宅沐浴服務」";
  return "<div class=\"card mb-3 col-md-6\">\n      <div class=\"row no-gutters\">\n    <div class=\"col-6\">\n      <img src=\"".concat(imgSrc, "\" style=\"width:100%\" alt=\"...\">\n    </div>\n    <div class=\"col-6\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(title, "</h5>\n      </div>\n    </div>\n    </div>\n    </div>");
}

function createStoryPageContent(items) {
  console.log(items);
  var storyContent = items.map(function (e, i) {
    if (i === 0) {
      return latestStory(e);
    } else {
      return pasteStory(e);
    }
  });
  return storyContent;
}

function latestStory(item) {
  return storyCardLarge(item.thumbnail, item.title, item.content);
}

function pasteStory(item) {
  return storyCardSmall(item.thumbnail, item.title);
}

var _default = createStoryPageContent;
exports.default = _default;

},{}]},{},[1]);
