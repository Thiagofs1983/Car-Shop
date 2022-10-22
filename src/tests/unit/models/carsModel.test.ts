import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/Cars';
import { Model } from 'mongoose';
import mongoose from 'mongoose';
import { mockNewCar, mockSendNewCar, mockSendUpdateCar, mockUpdateCar } from '../../mocks/carsMock';
import { ErrorTypes } from '../../../errors/catalog';
const { expect } = chai;



describe('Cars Model', () => {
  const carsModel = new CarsModel();
  before(async () => {
    sinon.stub(Model, 'create').resolves(mockNewCar);
    sinon.stub(Model, 'find').resolves([mockNewCar]);
    sinon.stub(Model, 'findOne').resolves(mockNewCar);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(mockUpdateCar);
    sinon.stub(Model, 'findOneAndDelete').resolves(mockNewCar);
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
      expect(cars).to.be.deep.equal([mockNewCar]);
    });
    it('Busca um carro específico pelo id informado', async () => {
      const car = await carsModel.readOne(mockNewCar._id);
      expect(car).to.be.deep.equal(mockNewCar);
    });
    it('Caso id não seja um mongoId gera um ERRO', async () => {
      before(() => {
        sinon.stub(mongoose, 'isValidObjectId').returns(false);
      })

      try {
        await carsModel.readOne('iderrado');
      } catch (err: any) {
        expect(err.message).to.be.equal(ErrorTypes.InvalidMongoId);
      }

      after(() => {
        sinon.restore();
      });
    });
  });

  describe('Atualiza um carro', () => {
    it('Atualiza um carro conforme id e body da requisição', async () => {
      const updated = await carsModel.update(mockNewCar._id, mockSendUpdateCar);
      expect(updated).to.be.deep.equal(updated);
    });
    it('Caso id não seja um mongoId gera um ERRO', async () => {
      before(() => {
        sinon.stub(mongoose, 'isValidObjectId').returns(false);
      })

      try {
        await carsModel.update('iderrado', mockSendUpdateCar);
      } catch (err: any) {
        expect(err.message).to.be.equal(ErrorTypes.InvalidMongoId);
      }

      after(() => {
        sinon.restore();
      });
    });
  });

  describe('Apaga um registro de um carro', () => {
    it('Apaga um carro conforme id e body da requisição', async () => {
      const deleted = await carsModel.delete(mockNewCar._id);
      expect(deleted).to.be.deep.equal(mockNewCar);
    });
    it('Caso id não seja um mongoId gera um ERRO', async () => {
      before(() => {
        sinon.stub(mongoose, 'isValidObjectId').returns(false);
      })

      try {
        await carsModel.delete('iderrado');
      } catch (err: any) {
        expect(err.message).to.be.equal(ErrorTypes.InvalidMongoId);
      }

      after(() => {
        sinon.restore();
      });
    });
  });
});