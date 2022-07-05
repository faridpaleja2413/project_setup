declare namespace Express {
  export interface Request {
    context?: RequestContext;
  }
  export interface Response {
    formatter: ResponseFormatter;
  }
}

declare namespace NodeJS {
  export interface ProcessEnv {
    AGORA_APP_ID: string;
    AGORA_APP_CERTIFICATE: string;
  }
}

// declare module 'microseconds';

// declare module 'fcm-node';

// declare module 'html-pdf-node';
