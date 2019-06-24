(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/assets/js/page/module/containers/style/chat.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/assets/js/page/module/containers/style/chat.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nimg{ max-width:100%;}\r\n.inbox_people {\r\n  background: #f8f8f8 none repeat scroll 0 0;\r\n  float: left;\r\n  overflow: hidden;\r\n  width: 40%; border-right:1px solid #c4c4c4;\r\n}\r\n.inbox_msg {\r\n  border: 1px solid #c4c4c4;\r\n  clear: both;\r\n  overflow: hidden;\r\n}\r\n.top_spac{ margin: 20px 0 0;}\r\n\r\n\r\n.recent_heading {float: left; width:40%;}\r\n.srch_bar {\r\n  display: inline-block;\r\n  text-align: right;\r\n  width: 60%; padding:\r\n}\r\n.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}\r\n\r\n.recent_heading h4 {\r\n  color: #05728f;\r\n  font-size: 21px;\r\n  margin: auto;\r\n}\r\n.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}\r\n.srch_bar .input-group-addon button {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border: medium none;\r\n  padding: 0;\r\n  color: #707070;\r\n  font-size: 18px;\r\n}\r\n.srch_bar .input-group-addon { margin: 0 0 0 -27px;}\r\n\r\n.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}\r\n.chat_ib h5 span{ font-size:13px; float:right;}\r\n.chat_ib p{ font-size:14px; color:#989898; margin:auto}\r\n.chat_img {\r\n  float: left;\r\n  width: 11%;\r\n}\r\n.chat_ib {\r\n  float: left;\r\n  padding: 0 0 0 15px;\r\n  width: 88%;\r\n}\r\n\r\n.chat_people{ overflow:hidden; clear:both;}\r\n.chat_list {\r\n  border-bottom: 1px solid #c4c4c4;\r\n  margin: 0;\r\n  padding: 18px 16px 10px;\r\n}\r\n.inbox_chat { height: 550px; overflow-y: scroll;}\r\n\r\n.active_chat{ background:#ebebeb;}\r\n\r\n.incoming_msg_img {\r\n  display: inline-block;\r\n  width: 3%;\r\n}\r\n.received_msg {\r\n  display: inline-block;\r\n  padding: 0 0 0 10px;\r\n  vertical-align: top;\r\n  width: 92%;\r\n }\r\n .received_withd_msg p {\r\n  background: #ebebeb none repeat scroll 0 0;\r\n  border-radius: 3px;\r\n  color: #646464;\r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 5px 10px 5px 12px;\r\n  width: 100%;\r\n}\r\n\r\n.username {\r\n  margin-left: 4.2%;\r\n  color: #747474;\r\n  display: block;\r\n  font-size: 9px;\r\n}\r\n\r\n.time_date {\r\n  color: #747474;\r\n  display: block;\r\n  font-size: 9px;\r\n  /*margin: 8px 0 0;*/\r\n}\r\n.received_withd_msg { width: 57%;}\r\n.mesgs {\r\n  /* float: left; */\r\n  padding: 30px 15px 0 25px;\r\n  /* width: 60%; */\r\n}\r\n\r\n .sent_msg p {\r\n  background: #05728f none repeat scroll 0 0;\r\n  border-radius: 3px;\r\n  font-size: 14px;\r\n  margin: 0; color:#fff;\r\n  padding: 5px 10px 5px 12px;\r\n  width:100%;\r\n}\r\n.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}\r\n.sent_msg {\r\n  float: right;\r\n  width: 46%;\r\n}\r\n.input_msg_write input {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border: medium none;\r\n  color: #4c4c4c;\r\n  font-size: 15px;\r\n  min-height: 48px;\r\n  width: 100%;\r\n}\r\n\r\n.type_msg {border-top: 1px solid #c4c4c4;position: relative;}\r\n.msg_send_btn {\r\n  background: #05728f none repeat scroll 0 0;\r\n  border: medium none;\r\n  border-radius: 50%;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  /*font-size: 17px; */\r\n  /*height: 33px;*/\r\n  position: absolute;\r\n  right: 0;\r\n  top: 5px;\r\n  /*width: 33px; */\r\n}\r\n.messaging { padding: 0 0 50px 0;}\r\n.msg_history {\r\n  max-height: 300px;\r\n  overflow-y: auto;\r\n  margin-bottom: 21px;\r\n  height: 300px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/assets/js/page/module/containers/ChatPage.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/page/module/containers/ChatPage.js ***!
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
/* harmony import */ var _style_chat_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/chat.css */ "./resources/assets/js/page/module/containers/style/chat.css");
/* harmony import */ var _style_chat_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_chat_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
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










var ChatPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ChatPage, _Component);

  function ChatPage() {
    var _this;

    _classCallCheck(this, ChatPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChatPage).call(this));
    _this.state = {
      showCreateUser: false,
      showChatBox: false,
      messageList: [],
      message: '',
      username: '',
      users: []
    };
    _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()('http://127.0.0.1:3333');
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.keyPress = _this.keyPress.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ChatPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.socketEvents();
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _event$currentTarget = event.currentTarget,
          name = _event$currentTarget.name,
          value = _event$currentTarget.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "socketEvents",
    value: function socketEvents() {
      var _this2 = this;

      this.socket.on('joined_user', function (data) {
        console.log("".concat(data.user, " joined the chaaaat! "));
      });
      this.socket.on('add_user_response', function (data) {
        if (data.result) return _this2.setState({
          users: data.users,
          showChatBox: true
        });
        console.log('error creating users');
      });
      this.socket.on('new_message_response', function (data) {
        _this2.setState({
          messageList: data,
          message: ''
        });
      });
      this.socket.on('received_message', function (data) {
        _this2.setState({
          messageList: data
        });
      });
    }
  }, {
    key: "saveUser",
    value: function saveUser() {
      var username = this.state.username;
      this.socket.emit('add_user', username);
    }
  }, {
    key: "keyPress",
    value: function keyPress(e) {
      var message = this.state.message;
      if (e.keyCode == 13) this.socket.emit('new_message', message);
    }
  }, {
    key: "renderCreateUser",
    value: function renderCreateUser() {
      var _this3 = this;

      var username = this.state.username;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 12,
        md: 12,
        sm: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        "for": "username"
      }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "text",
        name: "username",
        id: "username",
        bsSize: "sm",
        value: username,
        onChange: this.handleChange
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "primary",
        onClick: function onClick() {
          return _this3.saveUser();
        }
      }, "Save"));
    }
  }, {
    key: "renderMessageList",
    value: function renderMessageList(messageList, username) {
      return messageList.map(function (item, index) {
        return item.username == username ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "outgoing_msg",
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "sent_msg"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "time_date"
        }, " ", item.time))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "incoming_msg",
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "username"
        }, " ", item.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "incoming_msg_img"
        }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "https://ptetutorials.com/images/user-profile.png",
          alt: "sunil"
        }), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "received_msg"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "received_withd_msg"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "time_date"
        }, " ", item.time))));
      });
    }
  }, {
    key: "renderChatBox",
    value: function renderChatBox() {
      var _this$state = this.state,
          message = _this$state.message,
          messageList = _this$state.messageList,
          username = _this$state.username;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 12,
        md: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mesgs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "msg_history"
      }, messageList.length > 0 ? this.renderMessageList(messageList, username) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, "No Message")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "type_msg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input_msg_write"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "write_msg",
        id: "message",
        name: "message",
        placeholder: "Type a message",
        onKeyDown: this.keyPress,
        value: message,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "msg_send_btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaPaperPlane"], null))))))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          showChatBox = _this$state2.showChatBox,
          username = _this$state2.username;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        className: "col-lg-8 col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Chaaaat! "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, showChatBox ? "Welcome ".concat(username, "!") : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), showChatBox ? this.renderChatBox() : this.renderCreateUser()));
    }
  }]);

  return ChatPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ChatPage);

/***/ }),

/***/ "./resources/assets/js/page/module/containers/style/chat.css":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/page/module/containers/style/chat.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--5-1!../../../../../../../node_modules/postcss-loader/src??ref--5-2!./chat.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/assets/js/page/module/containers/style/chat.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);