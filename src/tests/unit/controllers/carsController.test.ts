import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/Cars';
import CarsService from '../../../services/Cars';
import CarsController from '../../../controllers/Cars';
import { Request, Response } from 'express';
import { mockNewCar, mockSendNewCar } from '../../mocks/carsMock';
const { expect } = chai;

describe('Cars Controller', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);
  const carsController = new CarsController(carsService);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Criar um novo carro', () => {
    beforeEach(() => {
      sinon.stub(carsService, 'create').resolves(mockNewCar);
    });

    it('Cria um novo carro com sucesso', async () => {
      req.body = mockSendNewCar
      await carsController.create(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(201)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(mockNewCar)).to.be.true;
    });
  });
});