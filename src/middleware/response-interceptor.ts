import { ContextualRequest } from '../utils/common-types';
import { NextFunction, Response } from 'express';
import { onResponseEnd } from './response-cache';

export default function responseInterceptor(
  request: ContextualRequest,
  response: Response,
  next: NextFunction
): void {
  const originalResponseJson = response.json;
  response.json = (body: string) => {
    response.json = originalResponseJson;
    response.locals = {
      ...response.locals,
      body
    };
    if (response.headersSent) {
      response.end(async function intercepteResponseEnd() {
        return onResponseEnd(request, response);
      });
      return response;
    }
    return response.json(body);
  };
  next();
}
