import data from '../../../../data.json';

export default (req, res) => {
	const recipeId = req.params.recipeId * 1;
	const recipe = data.recipes.find(m => m.id === recipeId);

	res.status(200).json({ recipe });
};