import all from './all';

const reviews = require('express').Router({ mergeParams: true });


reviews.get('/', all);

export default reviews;

