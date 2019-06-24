(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./resources/assets/js/page/module/containers/TestPage.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/page/module/containers/TestPage.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker-cssmodules.css */ "./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var TestPage =
/*#__PURE__*/
function (_Component) {
  _inherits(TestPage, _Component);

  function TestPage() {
    var _this;

    _classCallCheck(this, TestPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TestPage).call(this));
    _this.state = {
      invalid: true,
      valid: true
    };
    return _this;
  }

  _createClass(TestPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = [{
        username: 'u1',
        password: '1',
        first_name: 'a',
        middle_name: 'b',
        last_name: 'c',
        email: 'a@email.com'
      }, {
        username: '',
        password: '2',
        first_name: 'd',
        middle_name: '',
        last_name: 'f',
        email: 'b@email.com'
      }, {
        username: 'u3',
        password: '3',
        first_name: 'g',
        middle_name: '',
        last_name: 'i',
        email: 'c@email.com'
      }, {
        username: '',
        password: '4',
        first_name: 'j',
        middle_name: '',
        last_name: 'l',
        email: 'd@email.com'
      }];
      var requiredColumns = ['username', 'password', 'first_name', 'middle_name', 'last_name', 'email'];
      var fileColumns = ['username', 'password', 'first_name', 'middle_name', 'last_name', 'email'];
      var checkedColumns = this.columnChecker(fileColumns, requiredColumns);
      var summarizeData = this.summarizeData(data, requiredColumns); // console.table(summarizeData.finalizeData)
      // console.table(checkedColumns)

      console.table(data);
      this.fetchUnitTest();
    }
  }, {
    key: "fetchUnitTest",
    value: function fetchUnitTest() {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('api/get-profile/' + 1).then(function (_ref) {
        var data = _ref.data;
        console.log(data);
      })["catch"](function (err) {
        return err.response;
      });
    }
  }, {
    key: "summarizeData",
    value: function summarizeData(data, requiredColumns) {
      var invalidColumns = [];
      var finalizeData = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var items = _step.value;
          var skipData = this.validateColumnData(items, requiredColumns);

          if (skipData.result) {
            invalidColumns.push(skipData.invalidColumns);
            continue;
          }

          finalizeData.push({
            first_name: items.first_name,
            middle_name: items.middle_name,
            last_name: items.last_name,
            username: items.username,
            password: items.password,
            email: items.email
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return {
        finalizeData: finalizeData,
        invalidColumns: invalidColumns
      };
    }
  }, {
    key: "columnChecker",
    value: function columnChecker(fileColumns, requiredColumns) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = requiredColumns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          if (fileColumns.indexOf(item) <= -1) fileColumns.push(item);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return fileColumns;
    }
  }, {
    key: "validateColumnData",
    value: function validateColumnData(items, requiredColumns) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = requiredColumns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var req = _step3.value;
          items[req] = req in items ? items[req] : '';

          if (items[req].toString().trim().length <= 0 && req !== 'middle_name') {
            return {
              result: true,
              invalidColumns: items.first_name + ' ' + items.last_name + ' ' + ' missing/empty fields.'
            };
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          invalid = _this$state.invalid,
          valid = _this$state.valid;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        className: "col-lg-8 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Testing "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)));
    }
  }]);

  return TestPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TestPage);

/***/ })

}]);