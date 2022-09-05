"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDAO = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Product = require("../models/Product");

var mysql = _interopRequireWildcard(require("mysql"));

var util = _interopRequireWildcard(require("util"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var ProductDAO = /*#__PURE__*/function () {
  function ProductDAO(host, port, username, password) {
    (0, _classCallCheck2.default)(this, ProductDAO);
    (0, _defineProperty2.default)(this, "host", "");
    (0, _defineProperty2.default)(this, "port", 3306);
    (0, _defineProperty2.default)(this, "username", "");
    (0, _defineProperty2.default)(this, "password", "");
    (0, _defineProperty2.default)(this, "schema", "localdb");
    (0, _defineProperty2.default)(this, "pool", this.initDbConnection());
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.pool = this.initDbConnection();
  }

  (0, _createClass2.default)(ProductDAO, [{
    key: "initDbConnection",
    value: function initDbConnection() {
      return mysql.createPool({
        host: this.host,
        port: this.port,
        user: this.username,
        password: this.password,
        database: this.schema,
        connectionLimit: 10
      });
    }
  }, {
    key: "findProducts",
    value: function findProducts(productId, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, connection) {
          var result, product;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context.next = 6;
                  return connection.query('SELECT * FROM PRODUCTS WHERE ID=?', [productId]);

                case 6:
                  result = _context.sent;
                  if (result.length != 1) callback(null);
                  product = new _Product.ProductModel(result[0].ID, result[0].NAME, result[0].TYPE, result[0].SHELFLIFE, result[0].PRICE);
                  callback(product);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "findAllProducts",
    value: function findAllProducts(callback) {
      var products = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, connection) {
          var result, x;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context2.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context2.next = 6;
                  return connection.query('SELECT * FROM PRODUCTS ORDER BY ID');

                case 6:
                  result = _context2.sent;

                  for (x = 0; x < result.length; ++x) {
                    products.push(new _Product.ProductModel(result[x].ID, result[x].NAME, result[x].TYPE, result[x].SHELFLIFE, result[x].PRICE));
                  }

                  callback(products);

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "create",
    value: function create(product, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err, connection) {
          var result, productId;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context3.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context3.next = 6;
                  return connection.query('INSERT INTO PRODUCTS (NAME, TYPE, SHELFLIFE, PRICE) VALUES (?,?,?,?)', [product.Name, product.Type, product.ShelfLife, product.Price]);

                case 6:
                  result = _context3.sent;
                  if (result.affectedRows != 1) callback(-1);
                  productId = result.insertId;
                  callback(productId);

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "update",
    value: function update(product, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, connection) {
          var changeCount, result;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context4.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  changeCount = 0;
                  connection.query = util.promisify(connection.query);
                  _context4.next = 7;
                  return connection.query('UPDATE PRODUCTS SET NAME=?, TYPE=?, SHELFLIFE=?, PRICE=? WHERE ID=?', [product.Name, product.Type, product.ShelfLife, product.Price, product.Id]);

                case 7:
                  result = _context4.sent;
                  if (result.changedRows != 0) ++changeCount;
                  callback(changeCount);

                case 10:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "delete",
    value: function _delete(productId, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(err, connection) {
          var changeCount, result;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context5.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  changeCount = 0;
                  connection.query = util.promisify(connection.query);
                  _context5.next = 7;
                  return connection.query('DELETE FROM PRODUCTS WHERE ID=?', [productId]);

                case 7:
                  result = _context5.sent;
                  changeCount = changeCount + result.affectedRows;
                  callback(changeCount);

                case 10:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }]);
  return ProductDAO;
}();

exports.ProductDAO = ProductDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9kdWN0REFPIiwiaG9zdCIsInBvcnQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaW5pdERiQ29ubmVjdGlvbiIsInBvb2wiLCJteXNxbCIsImNyZWF0ZVBvb2wiLCJ1c2VyIiwiZGF0YWJhc2UiLCJzY2hlbWEiLCJjb25uZWN0aW9uTGltaXQiLCJwcm9kdWN0SWQiLCJjYWxsYmFjayIsImdldENvbm5lY3Rpb24iLCJlcnIiLCJjb25uZWN0aW9uIiwicmVsZWFzZSIsInF1ZXJ5IiwidXRpbCIsInByb21pc2lmeSIsInJlc3VsdCIsImxlbmd0aCIsInByb2R1Y3QiLCJQcm9kdWN0TW9kZWwiLCJJRCIsIk5BTUUiLCJUWVBFIiwiU0hFTEZMSUZFIiwiUFJJQ0UiLCJwcm9kdWN0cyIsIngiLCJwdXNoIiwiTmFtZSIsIlR5cGUiLCJTaGVsZkxpZmUiLCJQcmljZSIsImFmZmVjdGVkUm93cyIsImluc2VydElkIiwiY2hhbmdlQ291bnQiLCJJZCIsImNoYW5nZWRSb3dzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2RhdGFiYXNlL1Byb2R1Y3REQU8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9Qcm9kdWN0XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBteXNxbCBmcm9tIFwibXlzcWxcIjtcclxuXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcInV0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0REFPIHtcclxucHJpdmF0ZSBob3N0OnN0cmluZyA9IFwiXCI7XHJcbnByaXZhdGUgcG9ydDpudW1iZXIgPSAzMzA2O1xyXG5wcml2YXRlIHVzZXJuYW1lOnN0cmluZyA9IFwiXCI7XHJcbnByaXZhdGUgcGFzc3dvcmQ6c3RyaW5nID0gXCJcIjtcclxucHJpdmF0ZSBzY2hlbWE6c3RyaW5nID0gXCJsb2NhbGRiXCI7XHJcbnByaXZhdGUgcG9vbCA9IHRoaXMuaW5pdERiQ29ubmVjdGlvbigpO1xyXG5cclxuXHJcbmNvbnN0cnVjdG9yKGhvc3Q6c3RyaW5nLCBwb3J0Om51bWJlciwgdXNlcm5hbWU6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmcpe1xyXG4gICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuICAgIHRoaXMucG9ydCA9IHBvcnQ7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7ICAgIFxyXG4gICAgdGhpcy5wb29sID0gdGhpcy5pbml0RGJDb25uZWN0aW9uKCk7XHJcbn1cclxuXHJcbnB1YmxpYyBpbml0RGJDb25uZWN0aW9uKCk6YW55e1xyXG4gICAgcmV0dXJuIG15c3FsLmNyZWF0ZVBvb2woe2hvc3Q6IHRoaXMuaG9zdCwgcG9ydDogdGhpcy5wb3J0LCB1c2VyOiB0aGlzLnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5wYXNzd29yZCwgZGF0YWJhc2U6IHRoaXMuc2NoZW1hLCBjb25uZWN0aW9uTGltaXQ6IDEwfSk7XHJcbn1cclxuXHJcbnB1YmxpYyBmaW5kUHJvZHVjdHMocHJvZHVjdElkOm51bWJlciwgY2FsbGJhY2s6IGFueSl7XHJcbiAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOmFueSwgY29ubmVjdGlvbjphbnkpIHtcclxuICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG5cclxuICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gUFJPRFVDVFMgV0hFUkUgSUQ9PycsIFtwcm9kdWN0SWRdKTtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoICE9MSkgY2FsbGJhY2sgKG51bGwpO1xyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdCA9IG5ldyBQcm9kdWN0TW9kZWwocmVzdWx0WzBdLklELCByZXN1bHRbMF0uTkFNRSwgcmVzdWx0WzBdLlRZUEUsIHJlc3VsdFswXS5TSEVMRkxJRkUsIHJlc3VsdFswXS5QUklDRSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKHByb2R1Y3QpO1xyXG4gICAgfSlcclxufVxyXG5cclxucHVibGljIGZpbmRBbGxQcm9kdWN0cyhjYWxsYmFjazogYW55KXtcclxuICAgIGxldCBwcm9kdWN0czpQcm9kdWN0TW9kZWxbXSA9IFtdO1xyXG5cclxuICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uIChlcnI6YW55LCBjb25uZWN0aW9uOmFueSkge1xyXG4gICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFBST0RVQ1RTIE9SREVSIEJZIElEJyk7XHJcbiAgICAgICAgZm9yKGxldCB4PTA7IHggPCByZXN1bHQubGVuZ3RoOyArK3gpe1xyXG4gICAgICAgICAgICBwcm9kdWN0cy5wdXNoKG5ldyBQcm9kdWN0TW9kZWwocmVzdWx0W3hdLklELCByZXN1bHRbeF0uTkFNRSwgcmVzdWx0W3hdLlRZUEUsIHJlc3VsdFt4XS5TSEVMRkxJRkUsIHJlc3VsdFt4XS5QUklDRSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FsbGJhY2socHJvZHVjdHMpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5wdWJsaWMgY3JlYXRlKHByb2R1Y3Q6UHJvZHVjdE1vZGVsLCBjYWxsYmFjazphbnkpe1xyXG4gICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24gKGVycjphbnksIGNvbm5lY3Rpb246YW55KSB7XHJcbiAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG5cclxuICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0lOU0VSVCBJTlRPIFBST0RVQ1RTIChOQU1FLCBUWVBFLCBTSEVMRkxJRkUsIFBSSUNFKSBWQUxVRVMgKD8sPyw/LD8pJywgW3Byb2R1Y3QuTmFtZSwgcHJvZHVjdC5UeXBlLCBwcm9kdWN0LlNoZWxmTGlmZSwgcHJvZHVjdC5QcmljZV0pO1xyXG4gICAgICAgIGlmIChyZXN1bHQuYWZmZWN0ZWRSb3dzICE9MSkgY2FsbGJhY2sgKC0xKTtcclxuXHJcbiAgICAgICAgbGV0IHByb2R1Y3RJZCA9IHJlc3VsdC5pbnNlcnRJZDtcclxuICAgICAgICBjYWxsYmFjayhwcm9kdWN0SWQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbnB1YmxpYyB1cGRhdGUocHJvZHVjdDpQcm9kdWN0TW9kZWwsIGNhbGxiYWNrOmFueSl7XHJcbiAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOmFueSwgY29ubmVjdGlvbjphbnkpIHtcclxuICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgIGxldCBjaGFuZ2VDb3VudCA9IDA7XHJcblxyXG4gICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnVVBEQVRFIFBST0RVQ1RTIFNFVCBOQU1FPT8sIFRZUEU9PywgU0hFTEZMSUZFPT8sIFBSSUNFPT8gV0hFUkUgSUQ9PycsIFtwcm9kdWN0Lk5hbWUsIHByb2R1Y3QuVHlwZSwgcHJvZHVjdC5TaGVsZkxpZmUsIHByb2R1Y3QuUHJpY2UsIHByb2R1Y3QuSWRdKTtcclxuICAgICAgICBpZihyZXN1bHQuY2hhbmdlZFJvd3MgIT0wKSArK2NoYW5nZUNvdW50O1xyXG5cclxuICAgICAgICBjYWxsYmFjayhjaGFuZ2VDb3VudCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxucHVibGljIGRlbGV0ZShwcm9kdWN0SWQ6bnVtYmVyLCBjYWxsYmFjazogYW55KXtcclxuICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uIChlcnI6YW55LCBjb25uZWN0aW9uOmFueSkge1xyXG4gICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICAgICAgbGV0IGNoYW5nZUNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdERUxFVEUgRlJPTSBQUk9EVUNUUyBXSEVSRSBJRD0/JywgW3Byb2R1Y3RJZF0pO1xyXG4gICAgICAgIGNoYW5nZUNvdW50ID0gY2hhbmdlQ291bnQgKyByZXN1bHQuYWZmZWN0ZWRSb3dzO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhjaGFuZ2VDb3VudCk7XHJcbiAgICB9KTtcclxufVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7Ozs7OzsrQ0FIQSxvSjs7SUFLYUEsVTtFQVNiLG9CQUFZQyxJQUFaLEVBQXlCQyxJQUF6QixFQUFzQ0MsUUFBdEMsRUFBdURDLFFBQXZELEVBQXVFO0lBQUE7SUFBQSw0Q0FS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