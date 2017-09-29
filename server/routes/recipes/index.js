import express from 'express';
import all from './all';
import single from './single';
import reviews from './reviews';
import data from '../../../../data.json';

const recipes = express.Router();

recipes.get('/', all);

recipes.get('/:recipeId', single);

recipes.use('/:recipeId/reviews', reviews);

recipes.param('recipeId', (req, res, next, value) => {
	const recipe = data.recipes.find(m => m.id === (value * 1));

	if (recipe) {
		req['model'] = recipe;
		next();
	} else {
		res.status(404).send('Invalid model ID');
	}
});

export default recipes;