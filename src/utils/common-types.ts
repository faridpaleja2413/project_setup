import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";
// import { Types } from "mongoose";
// export const { ObjectId } = Types;
// export type TypesObjectId = Types.ObjectId;
export interface RequestContext {
  // user: {
  //   // @ToDo make _id as string
  //   _id: string;
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   // @ToDo make user_id as number
  //   user_id: string | number;
  //   profilePictures: {
  //     orignal: string;
  //     thumb: string;
  //   };
  //   designation: string;
  //   organisation_name: string;
  //   isBlocked: string;
  //   user_id_sql: string;
  // };
  // event: {
  //   // @ToDo make organiser_id as number
  //   organiser_id: number | string;
  //   // @ToDo make event_id as number
  //   event_id: number | string;
  //   device_type: string;
  //   api_key: string;
  //   start_time_milli: string;
  //   end_time_milli: string;
  //   name: string;
  //   is_deactive: 0 | 1;
  //   timezone_id: number;
  //   description: string;
  //   isPublished: 0 | 1;
  //   isPoweredBy?: number;
  // };
  // auth: boolean;
  // community: {
  //   _id?: string;
  //   userId?: string;
  //   // @ToDo make isActive as enum of 0 | 1
  //   isActive: number;
  //   // guestAgendaIds: number[];
  //   broadcastStudioAgendaIds?: number[];
  //   exhibitor_id?: number;
  //   speaker_id: number;
  //   host_id: number;
  //   groups: string[];
  //   guestAgendaIds?: string[];
  //   isStudioHost?: string;
  // };
  // groups: number[];
}

export type SysRequestHeaders = Omit<
  IncomingHttpHeaders,
  | "is_single_device_login"
  | "timezone_id"
  | "is_new_dashboard"
  | "is_onboarding"
> & {
  authorization: string;
  is_single_device_login: null | number;
  timezone_id: null | number;
  is_new_dashboard: boolean;
  is_onboardingContextualResponse: null | number;
};

export interface ContextualRequest extends Request {
  log: Request["log"];
  context: RequestContext;
  // context: any;
  headers: SysRequestHeaders;
}

export type ResponseSuccessData = GenericObject;

export interface ResponseSuccess {
  status: boolean;
  success: {
    code: string;
    message: string;
    data: ResponseSuccessData;
  };
  error: null;
}

export interface ResponseError {
  status: boolean;
  error: {
    code: string;
    message: string;
    data: GenericObject;
    errorStack?: Error;
  };
  success: null;
}
export interface ResponseErrorFormatter {
  (
    data: GenericObject,
    status: boolean,
    code: string,
    err?: Error
  ): ResponseError;
}

export interface ResponseSuccessFormatter {
  (data: ResponseSuccessData, status: boolean, code: string): ResponseSuccess;
}
export interface ResponseFormatter {
  error: ResponseErrorFormatter;
  ok: ResponseSuccessFormatter;
}

export interface ContextualResponse extends Response {
  formatter: ResponseFormatter;
}

export type GenericObject = Record<string, unknown>;

export interface PromiseResolve {
  (_value: void | PromiseLike<void>): void;
  (_value: void | PromiseLike<void>): void;
  (): void;
}

export type StandardResponse = ResponseSuccess | ResponseError;

export type Ok = "OK";
