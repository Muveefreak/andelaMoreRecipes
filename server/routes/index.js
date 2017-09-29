import recipes from './recipes';

const routes = require('express').Router();


routes.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected!' });
});


routes.use('/recipes', recipes);

export default routes;