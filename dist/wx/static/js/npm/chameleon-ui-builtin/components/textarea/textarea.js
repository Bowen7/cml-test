var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([11],{

/***/ "../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/zhangwenxiang/.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/textarea/textarea.wx.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/zhangwenxiang/Documents/code/personal/cml-test/node_modules/chameleon-ui-builtin/components/textarea/textarea.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {
    "inputEventDetail": {
      "value": "String"
    }
  },
  "interfaces": {
    "TextareaInterface": {
      "cStyle": "String",
      "cstyle": "String",
      "value": "String",
      "placeholder": "String",
      "disabled": "Boolean",
      "focus": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "maxlength": "Number",
      "returnKeyType": "String",
      "placerHolderColor": "String",
      "rows": "Number",
      "inputevent": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "blurevent": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "focusevent": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "confirmevent": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "input": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "blur": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "confirm": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      }
    }
  },
  "classes": {}
};
var __CML__DEFINES__ = {
  "types": {},
  "interfaces": {},
  "classes": {
    "Textarea": ["TextareaInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js");
/*
event: cinput cblur cfocus cconfirm
*/
var Textarea = function Textarea() {
  _classCallCheck(this, Textarea);

  this.props = {
    cStyle: {
      type: String,
      default: ''
    },
    cstyle: {
      type: String,
      default: ''
    },
    //textarea的内容
    value: {
      type: String,
      default: ''
    },
    //textarea的placerholder
    placeholder: {
      type: String,
      default: ''
    },
    //是否禁用textarea输入
    disabled: {
      type: Boolean,
      default: false
    },
    //控制textarea是否聚焦
    focus: {
      type: Boolean,
      default: false
    },
    //最大长度
    maxlength: {
      type: Number,
      default: 140
    },
    //右下角返回键类型
    returnKeyType: {
      //枚举值 done search next go
      type: String,
      default: 'done'
    },
    placerHolderColor: {
      type: String,
      default: '#666'
    },
    rows: {
      type: Number,
      default: 2
    }
  };
  this.data = {};
  this.computed = {
    wxPlaceHolderStyle: function wxPlaceHolderStyle() {
      return "color: " + this.placerHolderColor;
    },
    computedStyle: function computedStyle() {
      // props 必须经过计算属性，否则没有经过 cpx 转换
      return this.cStyle || this.cstyle;
    }
  };
  this.watch = {
    focus: function focus(newVal, oldVal) {}
  };
  this.methods = {
    inputEvent: function inputEvent(e) {
      this.$cmlEmit('input', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('inputevent', {
        value: e.detail.value || ''
      });
    },
    blurEvent: function blurEvent(e) {
      this.$cmlEmit('blur', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('blurevent', {
        value: e.detail.value || ''
      });
    },
    focusEvent: function focusEvent(e) {
      this.$cmlEmit('focus', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('focusevent', {
        value: e.detail.value || ''
      });
    },
    confirmEvent: function confirmEvent(e) {
      this.$cmlEmit('confirm', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('confirmevent', {
        value: e.detail.value || ''
      });
    }
  };
};

exports.default = __CML__WRAPPER__(new Textarea(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/zhangwenxiang/.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/textarea/textarea.wx.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/textarea/textarea.wx.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/zhangwenxiang/.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/textarea/textarea.wx.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/zhangwenxiang/.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v11.10.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/textarea/textarea.wx.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/textarea/textarea.wx.cml"]);