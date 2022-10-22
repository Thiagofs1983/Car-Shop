import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/Cars';
import { Model } from 'mongoose';
import { mockNewCar, mockSendNewCar } from '../../mocks/carsMock';
const { expect } = chai;



describe('Cars Model', () => {
  const carsModel = new CarsModel();
  before(async () => {
    sinon.stub(Model, 'create').resolves(mockNewCar);
    sinon.stub(Model, 'find').resolves([]);
  });

  after(()=>{
    sinon.restore();
  });

  describe('Cria um novo carro', () => {
    it('Caso de sucesso', async () => {
      const newCar = await carsModel.create(mockSendNewCar);
      expect(newCar).to.be.deep.equal(mockNewCar);
    });
  });

  describe('Busca carros cadastrados no BD', () => {
    it('Busca todos os carros', async () => {
      const cars = await carsModel.read();
      expect(cars).to.be.deep.equal([]);
    });
  });

});