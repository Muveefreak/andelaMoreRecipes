'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('./config/express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_express2.default.listen(3060, function () {
	console.log('API Server started and listening on port 3060');
});

exports.default = _express2.default;