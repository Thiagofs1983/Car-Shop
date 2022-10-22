export const mockSendNewCar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

export const mockNewCar = {
  _id: "4edd40c86762e0fb12000003",
  ...mockSendNewCar,
};

export const mockSendUpdateCar = {
  model: "Mazzerati Turbo",
  year: 2004,
  color: "blue",
  buyValue: 600000,
  seatsQty: 2,
  doorsQty: 2
};

export const mockUpdateCar = {
  _id: "4edd40c86762e0fb12000003",
  ...mockSendUpdateCar,
};
