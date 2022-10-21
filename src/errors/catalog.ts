export enum ErrorTypes {
  InvalidMongoId = 'InvalidMongoId',
  EntityNotFound = 'EntityNotFound',
}

type ErrorResponseObject = { 
  message: string;
  httpStatus: number
};

export type ErrorCatalog = Record<ErrorTypes, ErrorResponseObject>;

export const errorCatalog: ErrorCatalog = {
  InvalidMongoId: {
    message: 'Id must be a 24 characters hexadecimal',
    httpStatus: 400,
  },
  EntityNotFound: {
    message: 'Entity Not Found',
    httpStatus: 404,
  },
};