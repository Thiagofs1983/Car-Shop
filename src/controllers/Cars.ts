import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarsController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request, res: Response<ICar>) {
    const created = await this._service.create(req.body);
    res.status(201).json(created);
  }

  public async read(req: Request, res: Response<ICar[]>) {
    const readAll = await this._service.read(); 
    res.status(200).json(readAll);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const readById = await this._service.readOne(req.params.id);
    res.status(200).json(readById);
  }
}