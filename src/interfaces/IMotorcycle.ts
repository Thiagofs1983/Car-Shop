import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

// Soluçao para extender o schema em: https://www.npmjs.com/package/zod#extend:~:text=ZodEnum%3C%5B%22name%22%2C%20%22age%22%5D%3E-,.extend,breed%3A%20z.string()%2C%0A%7D)%3B,-You%20can%20use
const motorcycleZodSchema = vehicleZodSchema.extend({
  // Solução para especificar as categorias possiveis em:
  // https://www.npmjs.com/package/zod#zod-enums:~:text=const%20FishEnum%20%3D%20z.enum(%5B%22Salmon%22%2C%20%22Tuna%22%2C%20%22Trout%22%5D)%3B%0Atype%20FishEnum%20%3D%20z.infer%3Ctypeof%20FishEnum%3E%3B%0A//%20%27Salmon%27%20%7C%20%27Tuna%27%20%7C%20%27Trout%27
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().min(1).max(2500),
});

type IMotorcycle = z.infer<typeof motorcycleZodSchema>;

export { IMotorcycle, motorcycleZodSchema };