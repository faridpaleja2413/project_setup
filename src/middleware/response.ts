import { Request, NextFunction } from "express";
import { LANGUAGES } from "../utils/mapper/language.constant";
import { mapStatusLang } from "../utils/mapper/mapper";
import {
  ContextualResponse,
  ResponseFormatter,
  ResponseError,
  ResponseSuccess,
  GenericObject,
  ResponseSuccessData,
} from "../utils/common-types";

interface IResponseData {
  data: ResponseSuccessData | GenericObject | undefined;
  status: boolean;
  code: string;
  lang?: string;
  err?: Error;
}

/**
 * Date: April 21, 2021
 * Author: Jayesh Anandani
 * Function defination:
 *   provides a common response that will be sent to each request based
 *   on the status received from the controller function inside response
 *
 * req @params
 *
 * res @params
 */
export const addResponseEnhancer = (
  req: Request,
  res: ContextualResponse,
  next: NextFunction
): void => {
  res.formatter = _generateFormatters(req);
  next();
};

export const _generateFormatters = (req: Request): ResponseFormatter => {
  const formatter = {} as ResponseFormatter;
  let responseBody = {};
  const language = req.body?.language || req.headers?.language || "en",
    lang = getLanguage(language);
    // console.log("language*****************",language)
    // console.log("lang*****************",lang)
  formatter["ok"] = (
    data: ResponseSuccessData,
    status: boolean,
    code: string
  ) => {
    responseBody = _generateSuccessResponse({ data, status, code, lang });
    return responseBody as ResponseSuccess;
  };

  formatter["error"] = (
    data: GenericObject,
    status: boolean,
    code: string,
    err?: Error
  ) => {
    responseBody = _generateErrorResponse({ data, status, code, err, lang });
    return responseBody as ResponseError;
  };

  return formatter;
};

const _generateSuccessResponse = async (
  result: IResponseData
): Promise<ResponseSuccess> => {
  const { data, status, code, lang = "en" } = result;
  const message = await mapStatusLang(lang, "success", code);
  return {
    status,
    success: {
      code,
      message,
      data: JSON.parse(JSON.stringify(data)), // to check and find a better solution
    },
    error: null,
  };
};

const _generateErrorResponse = async (
  result: IResponseData
): Promise<ResponseError> => {
  const { data, status, code, err : errorStack, lang = "en" } = result;
  const message = await mapStatusLang(lang, "error", code);
  return {
    status,
    error: {
      code,
      message,
      data: data as GenericObject,
      errorStack ,
    },
    success: null,
  };
};

const getLanguage = (lang: string) => {
  return parseInt(lang) ? LANGUAGES[lang] : lang;
};
