'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recipes = require('./recipes');

var _recipes2 = _interopRequireDefault(_recipes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = require('express').Router();

routes.get('/', function (req, res) {
	res.status(200).json({ message: 'Connected!' });
});

routes.use('/recipes', _recipes2.default);

exports.default = routes;