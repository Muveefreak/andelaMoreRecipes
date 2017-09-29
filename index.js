import app from './config/express';

app.listen(3060, () => {
	console.log('API Server started and listening on port 3060');
});

export default app;