'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _data = require('../../../../../data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res) {
	var recipeId = req.params.recipeId * 1;
	var reviews = _data2.default.reviews.filter(function (c) {
		return c.recipeId === recipeId;
	});

	res.status(200).json({ reviews: reviews });
};