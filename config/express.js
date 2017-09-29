// Bring in our dependencies
import express from 'express';
import routes from '../server/routes/';


const app = express();


// mount all routes on /api path
app.use('/', routes);

export default app;