import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/Cars';
import CarsService from '../../../services/Cars';
import { mockNewCar, mockSendNewCar } from '../../mocks/carsMock';
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
  });
});