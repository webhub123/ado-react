(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./resources/assets/js/page/module/actions/profileActions.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/page/module/actions/profileActions.js ***!
  \*******************************************************************/
/*! exports provided: retrieveProfile, setProfile, saveProfile, editProfile, removeProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveProfile", function() { return retrieveProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfile", function() { return setProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProfile", function() { return saveProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProfile", function() { return editProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProfile", function() { return removeProfile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_promise_middleware_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-promise-middleware-actions */ "./node_modules/redux-promise-middleware-actions/lib/index.js");
/* harmony import */ var redux_promise_middleware_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_promise_middleware_actions__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var getProfile = Object(redux_promise_middleware_actions__WEBPACK_IMPORTED_MODULE_3__["createAsyncAction"])('GET_PROFILE',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/profile/' + id);

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var getProfiles = Object(redux_promise_middleware_actions__WEBPACK_IMPORTED_MODULE_3__["createAsyncAction"])('SET_PROFILES',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/profiles');

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
var addProfile = Object(redux_promise_middleware_actions__WEBPACK_IMPORTED_MODULE_3__["createAsyncAction"])('ADD_PROFILE',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data, skills) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/save', {
              data: data,
              skills: skills
            });

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response.data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}());
var updateProfile = Object(redux_promise_middleware_actions__WEBPACK_IMPORTED_MODULE_3__["createAsyncAction"])('UPDATE_PROFILE',
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id, data, skills) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/update/' + id, {
              data: data,
              skills: skills
            });

          case 2:
            response = _context4.sent;
            return _context4.abrupt("return", response.data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}());
var deleteProfile = Object(redux_promise_middleware_actions__WEBPACK_IMPORTED_MODULE_3__["createAsyncAction"])('DELETE_PROFILE',
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]('/api/delete/' + id);

          case 2:
            response = _context5.sent;
            return _context5.abrupt("return", response.data);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x7) {
    return _ref5.apply(this, arguments);
  };
}()); //////////////////////////////////////////////////////////////////////////////////////////////

function retrieveProfile(id) {
  return function (dispatch) {
    dispatch(getProfile(id));
  };
}
function setProfile() {
  return function (dispatch) {
    dispatch(getProfiles());
  };
}
function saveProfile(data, skills) {
  return function (dispatch) {
    dispatch(addProfile(data, skills));
    window.location.href = '/profiles';
  };
}
function editProfile(id, data, skills) {
  return function (dispatch) {
    dispatch(updateProfile(id, data, skills));
    window.location.href = '/profiles';
  };
}
function removeProfile(id) {
  return function (dispatch) {
    dispatch(deleteProfile(id));
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
      title: "Successfully Deleted.",
      text: "",
      icon: "success"
    }).then(function (ok) {
      if (ok) {
        window.location.href = '/profiles';
      }
    });
  };
}

/***/ }),

/***/ "./resources/assets/js/page/module/containers/CreateProfile.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/page/module/containers/CreateProfile.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formsy_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formsy-react */ "./node_modules/formsy-react/lib/index.js");
/* harmony import */ var formsy_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formsy_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _components_error_page_ErrorLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/error_page/ErrorLoading */ "./resources/assets/js/page/module/components/error_page/ErrorLoading.js");
/* harmony import */ var _actions_profileActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/profileActions */ "./resources/assets/js/page/module/actions/profileActions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Input = react_loadable__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../components/fields/Input */ "./resources/assets/js/page/module/components/fields/Input.js"));
  },
  loading: _components_error_page_ErrorLoading__WEBPACK_IMPORTED_MODULE_6__["default"]
});

var CreateProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateProfile, _Component);

  function CreateProfile() {
    var _this;

    _classCallCheck(this, CreateProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateProfile).call(this));
    _this.state = {
      fullname: '',
      age: '',
      address: '',
      email: '',
      message: '',
      selectedItems: '',
      options: []
    };
    _this.changeHandler = _this.changeHandler.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CreateProfile, [{
    key: "saveProf",
    value: function saveProf() {
      var _this$state = this.state,
          fullname = _this$state.fullname,
          age = _this$state.age,
          address = _this$state.address,
          email = _this$state.email,
          selectedItems = _this$state.selectedItems;

      if (!selectedItems || selectedItems.length == 0) {
        this.inValid();
        return false;
      }

      var items = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = selectedItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          items.push({
            skills: item.value
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

      var data = {
        fullname: fullname,
        age: age,
        address: address,
        email: email
      };
      this.props.saveProfile(data, items);
    }
  }, {
    key: "inValid",
    value: function inValid() {
      this.setState({
        message: 'Please fill up required field. (*) '
      });
    }
  }, {
    key: "valid",
    value: function valid() {
      this.setState({
        message: ''
      });
    }
  }, {
    key: "changeHandler",
    value: function changeHandler(event) {
      var _event$currentTarget = event.currentTarget,
          name = _event$currentTarget.name,
          value = _event$currentTarget.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleChange",
    value: function handleChange(selectedItems) {
      this.setState({
        selectedItems: selectedItems
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.props.skills[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          options.push({
            label: item.skills,
            value: item.skills
          });
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

      this.setState({
        options: options
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          fullname = _this$state2.fullname,
          age = _this$state2.age,
          address = _this$state2.address,
          email = _this$state2.email,
          message = _this$state2.message,
          selectedItems = _this$state2.selectedItems,
          options = _this$state2.options;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formsy_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onValidSubmit: function onValidSubmit() {
          return _this2.saveProf();
        },
        onValid: function onValid() {
          return _this2.valid();
        },
        onInvalid: function onInvalid() {
          return _this2.inValid();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container col-sm-offset-3 col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Create Profile "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-12 col-md-7"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, message))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-12 col-md-7"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Name: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "form-control input-sm",
        type: "fullname",
        value: fullname,
        name: "fullname",
        required: true,
        changeHandler: this.changeHandler
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-6 col-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Age: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "form-control input-sm text-right",
        type: "age",
        value: age,
        name: "age",
        required: true,
        changeHandler: this.changeHandler
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-12 col-md-7"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Address: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "form-control input-sm",
        type: "address",
        value: address,
        name: "address",
        validationError: "This field is required",
        required: true,
        changeHandler: this.changeHandler
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-6 col-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Email: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "form-control input-sm",
        type: "email",
        value: email,
        name: "email",
        validations: "isEmail",
        validationError: "This is not a valid email",
        required: true,
        changeHandler: this.changeHandler
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-12 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Skills: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: selectedItems,
        onChange: this.handleChange,
        options: options,
        isMulti: true
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary",
        type: "submit",
        disabled: this.props.loading
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/profiles",
        className: "btn btn-warning"
      }, "Return"))));
    }
  }]);

  return CreateProfile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.loading,
    skills: state.skills
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  saveProfile: _actions_profileActions__WEBPACK_IMPORTED_MODULE_7__["saveProfile"]
})(CreateProfile));

/***/ })

}]);