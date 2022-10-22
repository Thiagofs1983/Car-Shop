import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(req: Request, res: Response<IMotorcycle>) {
    const created = await this._service.create(req.body);
    res.status(201).json(created);
  }

  public async read(req: Request, res: Response<IMotorcycle[]>) {
    const readAll = await this._service.read(); 
    res.status(200).json(readAll);
  }
}