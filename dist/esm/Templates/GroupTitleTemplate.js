"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AbstractTemplate2 = _interopRequireDefault(require("./AbstractTemplate"));

var _RotatedText = _interopRequireDefault(require("./RotatedText"));

var _basicprimitives = require("basicprimitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GroupTitleTemplate = /*#__PURE__*/function (_AbstractTemplate) {
  _inherits(GroupTitleTemplate, _AbstractTemplate);

  var _super = _createSuper(GroupTitleTemplate);

  function GroupTitleTemplate(options) {
    var _this;

    _classCallCheck(this, GroupTitleTemplate);

    _this = _super.call(this);
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this.options = options;
    _this.style = {
      position: "absolute",
      fontFamily: "Trebuchet MS, Tahoma, Verdana, Arial, sans-serif",
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
      WebkitUserSelect: "none",
      WebkitTouchCallout: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      boxSizing: "content-box",
      MozBorderRadius: "4px",
      WebkitBorderRadius: "4px",
      KhtmlBorderRadius: "4px",
      BorderRadius: "4px",
      background: "royalblue",
      borderWidth: 0,
      color: "white",
      padding: 0,
      width: "100%",
      height: "100%",
      left: "-1px",
      top: "-1px"
    };
    return _this;
  }

  _createClass(GroupTitleTemplate, [{
    key: "render",
    value: function render(data) {
      var _this$options = this.options,
          groupTitleFontSize = _this$options.groupTitleFontSize,
          groupTitleFontFamily = _this$options.groupTitleFontFamily,
          groupTitleFontWeight = _this$options.groupTitleFontWeight,
          groupTitleFontStyle = _this$options.groupTitleFontStyle,
          itemTitleSecondFontColor = _this$options.itemTitleSecondFontColor,
          itemTitleFirstFontColor = _this$options.itemTitleFirstFontColor,
          groupTitleOrientation = _this$options.groupTitleOrientation,
          groupTitleHorizontalAlignment = _this$options.groupTitleHorizontalAlignment,
          groupTitleVerticalAlignment = _this$options.groupTitleVerticalAlignment,
          groupTitleColor = _this$options.groupTitleColor;
      var itemConfig = data.context,
          width = data.width,
          height = data.height;
      var backgroundColor = itemConfig.groupTitleColor || groupTitleColor;
      var label = (itemConfig.groupTitle || "").replace("\n", "<br/>");
      var color = (0, _basicprimitives.highestContrast)(backgroundColor, itemTitleSecondFontColor, itemTitleFirstFontColor);
      var orientations = ['Horizontal', 'RotateLeft', 'RotateRight', 'Horizontal'],
          horizontalAlignments = ['center', 'left', 'right'],
          verticalAlignments = ['top', 'middle', 'bottom'];

      var style = _objectSpread(_objectSpread({}, this.style), {}, {
        backgroundColor: backgroundColor,
        color: color,
        fontSize: groupTitleFontSize,
        fontFamily: groupTitleFontFamily,
        fontWeight: groupTitleFontWeight,
        fontStyle: groupTitleFontStyle
      });

      return /*#__PURE__*/_react.default.createElement("div", {
        style: style
      }, /*#__PURE__*/_react.default.createElement(_RotatedText.default, {
        width: width,
        height: height,
        orientation: orientations[groupTitleOrientation],
        horizontalAlignment: horizontalAlignments[groupTitleHorizontalAlignment],
        verticalAlignment: verticalAlignments[groupTitleVerticalAlignment]
      }, label));
    }
  }]);

  return GroupTitleTemplate;
}(_AbstractTemplate2.default);

;
var _default = GroupTitleTemplate;
exports.default = _default;