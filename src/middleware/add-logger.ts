import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/get-logger';

export default (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  request.log = logger;
  return next();
};
