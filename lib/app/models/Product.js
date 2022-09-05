"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductModel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var ProductModel = /*#__PURE__*/function () {
  function ProductModel(id, name, type, shelflife, price) {
    (0, _classCallCheck2.default)(this, ProductModel);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "name", "");
    (0, _defineProperty2.default)(this, "type", "");
    (0, _defineProperty2.default)(this, "shelflife", -1);
    (0, _defineProperty2.default)(this, "price", -1);
    this.id = id;
    this.name = name;
    this.type = type;
    this.shelflife = shelflife;
    this.price = price;
  }

  (0, _createClass2.default)(ProductModel, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }, {
    key: "Type",
    get: function get() {
      return this.type;
    },
    set: function set(type) {
      this.type = type;
    }
  }, {
    key: "ShelfLife",
    get: function get() {
      return this.shelflife;
    },
    set: function set(shelflife) {
      this.shelflife = shelflife;
    }
  }, {
    key: "Price",
    get: function get() {
      return this.price;
    },
    set: function set(price) {
      this.price = price;
    }
  }]);
  return ProductModel;
}();

exports.ProductModel = ProductModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9kdWN0TW9kZWwiLCJpZCIsIm5hbWUiLCJ0eXBlIiwic2hlbGZsaWZlIiwicHJpY2UiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL1Byb2R1Y3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2R1Y3RNb2RlbFxyXG57XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgdHlwZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgc2hlbGZsaWZlOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgcHJpY2U6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgbmFtZTpzdHJpbmcsIHR5cGU6c3RyaW5nLCBzaGVsZmxpZmU6bnVtYmVyLCBwcmljZTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5zaGVsZmxpZmUgPSBzaGVsZmxpZmU7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgSWQoaWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBOYW1lKCk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG4gICAgc2V0IE5hbWUobmFtZTpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBUeXBlKCk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgfVxyXG4gICAgc2V0IFR5cGUodHlwZTpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBTaGVsZkxpZmUoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNoZWxmbGlmZTtcclxuICAgIH1cclxuICAgIHNldCBTaGVsZkxpZmUoc2hlbGZsaWZlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2hlbGZsaWZlID0gc2hlbGZsaWZlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBQcmljZSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2U7XHJcbiAgICB9XHJcbiAgICBzZXQgUHJpY2UocHJpY2U6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFBYUEsWTtFQVFULHNCQUFZQyxFQUFaLEVBQXVCQyxJQUF2QixFQUFvQ0MsSUFBcEMsRUFBaURDLFNBQWpELEVBQW1FQyxLQUFuRSxFQUFnRjtJQUFBO0lBQUEsMENBTjNELENBQUMsQ0FNMEQ7SUFBQSw0Q0FMekQsRUFLeUQ7SUFBQSw0Q0FKekQsRUFJeUQ7SUFBQSxpREFIcEQsQ0FBQyxDQUdtRDtJQUFBLDZDQUZ4RCxDQUFDLENBRXVEO0lBQzVFLEtBQUtKLEVBQUwsR0FBVUEsRUFBVjtJQUNBLEtBQUtDLElBQUwsR0FBWUEsSUFBWjtJQUNBLEtBQUtDLElBQUwsR0FBWUEsSUFBWjtJQUNBLEtBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0lBQ0EsS0FBS0MsS0FBTCxHQUFhQSxLQUFiO0VBQ0g7Ozs7U0FFRCxlQUFnQjtNQUNaLE9BQU8sS0FBS0osRUFBWjtJQUNILEM7U0FDRCxhQUFPQSxFQUFQLEVBQWtCO01BQ2QsS0FBS0EsRUFBTCxHQUFVQSxFQUFWO0lBQ0g7OztTQUVELGVBQWtCO01BQ2QsT0FBTyxLQUFLQyxJQUFaO0lBQ0gsQztTQUNELGFBQVNBLElBQVQsRUFBc0I7TUFDbEIsS0FBS0EsSUFBTCxHQUFZQSxJQUFaO0lBQ0g7OztTQUVELGVBQWtCO01BQ2QsT0FBTyxLQUFLQyxJQUFaO0lBQ0gsQztTQUNELGFBQVNBLElBQVQsRUFBc0I7TUFDbEIsS0FBS0EsSUFBTCxHQUFZQSxJQUFaO0lBQ0g7OztTQUVELGVBQXVCO01BQ25CLE9BQU8sS0FBS0MsU0FBWjtJQUNILEM7U0FDRCxhQUFjQSxTQUFkLEVBQWdDO01BQzVCLEtBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0lBQ0g7OztTQUVELGVBQW1CO01BQ2YsT0FBTyxLQUFLQyxLQUFaO0lBQ0gsQztTQUNELGFBQVVBLEtBQVYsRUFBd0I7TUFDcEIsS0FBS0EsS0FBTCxHQUFhQSxLQUFiO0lBQ0gifQ==