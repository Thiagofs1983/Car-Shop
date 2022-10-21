import express from 'express';
import errorHandler from './middlewares/error';
import carRoute from './routes/Cars';

const app = express();

app.use(express.json());
app.use(carRoute);
app.use(errorHandler);

export default app;
