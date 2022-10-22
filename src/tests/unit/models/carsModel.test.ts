import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/Cars';
import { Model } from 'mongoose';
const { expect } = chai;

const mockNewCar = {
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

const mockSendNewCar = {
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

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