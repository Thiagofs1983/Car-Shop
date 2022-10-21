import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

// Soluçao para extender o schema em: https://www.npmjs.com/package/zod#extend:~:text=ZodEnum%3C%5B%22name%22%2C%20%22age%22%5D%3E-,.extend,breed%3A%20z.string()%2C%0A%7D)%3B,-You%20can%20use
const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

type ICar = z.infer<typeof carZodSchema>;

export { ICar, carZodSchema };
