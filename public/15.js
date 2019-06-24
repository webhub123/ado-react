(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ "./resources/assets/js/page/module/containers/ProfileLists.js":
/*!********************************************************************!*\
  !*** ./resources/assets/js/page/module/containers/ProfileLists.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_profileActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/profileActions */ "./resources/assets/js/page/module/actions/profileActions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var ProfileLists =
/*#__PURE__*/
function (_Component) {
  _inherits(ProfileLists, _Component);

  function ProfileLists() {
    _classCallCheck(this, ProfileLists);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProfileLists).call(this));
  }

  _createClass(ProfileLists, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setProfile();
    }
  }, {
    key: "selectProfile",
    value: function selectProfile(id) {
      var _this = this;

      sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
        title: "Are you sure?",
        text: "You will not be able to recover this file.",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (ok) {
        if (ok) _this.props.removeProfile(id);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          list = _this$props.list,
          loading = _this$props.loading;
      var columns = [{
        Header: function Header() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "NAME");
        },
        accessor: 'fullname'
      }, {
        Header: function Header() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "AGE");
        },
        accessor: 'age',
        Cell: function Cell(row) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "text-center"
          }, row.value);
        }
      }, {
        Header: function Header() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "EMAIL");
        },
        accessor: 'email'
      }, {
        Header: function Header() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "ADDRESS");
        },
        accessor: 'address'
      }, {
        Header: function Header() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "ACTION");
        },
        accessor: 'id',
        Cell: function Cell(row) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "text-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "btn-group text-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: 'edit/' + row.value,
            className: "btn btn-primary btn-sm"
          }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "btn btn-danger btn-sm",
            onClick: function onClick() {
              return _this2.selectProfile(row.value);
            }
          }, "Delete")));
        }
      }];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "col-sm-2"
      }, "Profile List "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/create",
        disabled: loading,
        className: "btn btn-primary btn-sm pull-right btn-mrg-top"
      }, "Add New")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: list,
        columns: columns,
        loading: loading,
        pageSizeOptions: [5, 10, 20],
        defaultPageSize: 5
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null));
    }
  }]);

  return ProfileLists;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.list,
    loading: state.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setProfile: _actions_profileActions__WEBPACK_IMPORTED_MODULE_6__["setProfile"],
  removeProfile: _actions_profileActions__WEBPACK_IMPORTED_MODULE_6__["removeProfile"]
})(ProfileLists));

/***/ })

}]);