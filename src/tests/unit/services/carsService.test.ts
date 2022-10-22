import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/Cars';
import CarsService from '../../../services/Cars';
import { mockNewCar, mockSendNewCar } from '../../mocks/carsMock';
import { ZodError } from 'zod';
const { expect } = chai;

describe('Car Service', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);

  before(async () => {
    sinon.stub(carsModel, 'create').resolves(mockNewCar);
  });

  after(()=>{
    sinon.restore();
  });

  describe('Criar um novo carro', () => {
    it('Caso de sucesso', async () => {
      const carCreated = await carsService.create(mockSendNewCar);
      expect(carCreated).to.be.deep.equal(mockNewCar);
    });
    it('Caso os dados não sejam enviados corretamente gera um ERRO', async () => {
      let error;
      try {
        await carsService.create({});
      } catch(err) {
        error = err;
      }
      expect(error).to.be.instanceOf(ZodError);
    });
  });
});