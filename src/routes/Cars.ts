import { Router } from 'express';
import CarsController from '../controllers/Cars';
import CarsModel from '../models/Cars';
import CarsService from '../services/Cars';

const route = Router();

const car = new CarsModel();
const carsService = new CarsService(car);
const carsController = new CarsController(carsService);

route.post('/cars', (req, res) => carsController.create(req, res));
route.get('/cars', (req, res) => carsController.read(req, res));

export default route;