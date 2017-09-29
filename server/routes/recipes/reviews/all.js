import data from '../../../../../data.json';

export default (req, res) => {
	const recipeId = req.params.recipeId * 1;
	const reviews = data.reviews.filter(c => c.recipeId === recipeId);

	res.status(200).json({ reviews });
};

