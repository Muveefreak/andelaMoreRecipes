import data from '../../../../data.json';

export default (req, res) => {
	const recipes = data.recipes;

	res.status(200).json({ recipes });
};