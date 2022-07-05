import _get from "lodash/get";
import { ExpressErrorMiddlewareInterface } from "routing-controllers";
import { Response, NextFunction } from "express";
import { COMMON_ERROR_NAME } from "../constants/common";
import { ContextualRequest } from "../utils/common-types";

interface ChildError {
  property: string;
}
// interface ChildrenError {
//   children: ChildError[];
// }

// interface ChildrenErrors {
//   children: ChildrenError[];
// }

interface CustomError {
  errors: ChildError[];
  name: string;
  body: string;
}

export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(
    error: CustomError,
    request: ContextualRequest,
    response: Response,
    next: (error?: boolean) => NextFunction
  ) {
    const { statusCode: code } = response;
    request.log.error("error-handler", { error, code });
    if (response.headersSent) {
      response.end();
      return next(false);
    }

    if (!error) {
      return next(false);
    }

    request.log.error("body validation failed.");
    if (error.name !== COMMON_ERROR_NAME.BadRequestError) {
      return response.send({
        status: false,
        success: null,
        error: {
          code,
          message: error.body,
          res: error,
        },
      });
    }

    const childrenErrorData = _get(
      error,
      "errors[0]",
      []
    ) as ChildError[];

    const errorJson = { fields: [] as string[] };
    childrenErrorData.forEach((child) => errorJson.fields.push(child.property));

    return response.send({
      status: false,
      success: null,
      error: {
        code,
        message: error.body,
        res: errorJson,
      },
    });
  }
}
