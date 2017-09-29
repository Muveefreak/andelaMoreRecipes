'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _all = require('./all');

var _all2 = _interopRequireDefault(_all);

var _single = require('./single');

var _single2 = _interopRequireDefault(_single);

var _reviews = require('./reviews');

var _reviews2 = _interopRequireDefault(_reviews);

var _data = require('../../../../data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var recipes = _express2.default.Router();

recipes.get('/', _all2.default);

recipes.get('/:recipeId', _single2.default);

recipes.use('/:recipeId/reviews', _reviews2.default);

recipes.param('recipeId', function (req, res, next, value) {
	var recipe = _data2.default.recipes.find(function (m) {
		return m.id === value * 1;
	});

	if (recipe) {
		req['model'] = recipe;
		next();
	} else {
		res.status(404).send('Invalid model ID');
	}
});

exports.default = recipes;