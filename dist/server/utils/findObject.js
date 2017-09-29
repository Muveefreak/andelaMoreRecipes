'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _data = require('../../../data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (type) {
	return function (req, res, next, value) {
		var typePlural = type + 's';
		var obj = _data2.default[typePlural].find(function (t) {
			return t.id === value * 1;
		});

		if (obj) {
			req[type] = obj;
			next();
		} else {
			res.status(404).send('Invalid ' + type + ' ID');
		}
	};
};