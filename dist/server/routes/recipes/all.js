'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _data = require('../../../../data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res) {
	var recipes = _data2.default.recipes;

	res.status(200).json({ recipes: recipes });
};