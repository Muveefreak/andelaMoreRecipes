'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _all = require('./all');

var _all2 = _interopRequireDefault(_all);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reviews = require('express').Router({ mergeParams: true });

reviews.get('/', _all2.default);

exports.default = reviews;