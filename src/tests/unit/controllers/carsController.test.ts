import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/Cars';
import CarsService from '../../../services/Cars';
import CarsController from '../../../controllers/Cars';
import { Request, Response } from 'express';
import { mockNewCar, mockSendNewCar, mockSendUpdateCar, mockUpdateCar } from '../../mocks/carsMock';
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

  describe('Busca os carros cadastrados no BD', () => {
    beforeEach(() => {
      sinon.stub(carsService, 'read').resolves([mockNewCar]);
      sinon.stub(carsService, 'readOne').resolves(mockNewCar);
    });

    describe('Lista todos os carros cadastrados no BD', () => {
      it('Lista todos os carros cadastrados no BD', async () => {
        await carsController.read(req, res);
  
        const statusStub = res.status as sinon.SinonStub;
        expect(statusStub.calledWith(200)).to.be.true;
  
        const jsonStub = res.json as sinon.SinonStub;
        expect(jsonStub.calledWith([mockNewCar])).to.be.true;
      });
    });
    describe('Busca carro cadastrado pelo id', () => {
      it('Retorna carro pelo id específico', async () => {
        req.params = { id: mockNewCar._id }
        await carsController.readOne(req, res);

        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
        expect((res.json as sinon.SinonStub).calledWith(mockNewCar)).to.be.true;
      });
    });
  });
  describe('Atualiza um carro', () => {
    beforeEach(() => {
      sinon.stub(carsService, 'update').resolves(mockUpdateCar);
    });

    it('Atualiza um carro com sucesso', async () => {
      req.params = { id: mockNewCar._id };
      req.body = mockSendUpdateCar;
      await carsController.update(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(mockUpdateCar)).to.be.true;
    });
  });

  describe('Apaga carro cadastrado pelo id', () => {
    beforeEach(() => {
      sinon.stub(carsService, 'delete').resolves(mockUpdateCar);
    });
    it('Apaga carro pelo id específico', async () => {
      req.params = { id: mockNewCar._id }
      await carsController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith()).to.be.true;
    });
  });
});