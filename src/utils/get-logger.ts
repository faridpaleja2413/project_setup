import pino from "pino";
import { LOGGER_LEVEL, LOGGER_PRETTY } from "../config";
// import { getRequestId } from '@middleware/add-request-id';
console.log(LOGGER_LEVEL, LOGGER_PRETTY);
interface LogObject {
  level: 10 | 20 | 30 | 40 | 50 | 60;
  time: number;
  requestId: string;
  pid: number;
  hostname: string;
  filepath: string;
  responseTime: number;
  payload: Record<string, unknown>;
  msg: string;
}

export const logger = pino({
  // transport: {
  //   target: 'pino-pretty',
  //   options: {
  //     colorize: true
  //   }
  // },
  level: LOGGER_LEVEL as string,
  prettyPrint: LOGGER_PRETTY as boolean,
  nestedKey: "payload", // logs the json object in the payload key at the root
  useLevelLabels: false, // prints log level number instead of it's name
  customLevels: {
    trace: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60,
  },
  useOnlyCustomLevels: true,
  formatters: {
    log(object) {
      return {
        ...object,
        // requestId: getRequestId()
      } as LogObject;
    },
    bindings(bindings) {
      return {
        pid: bindings.pid,
        hostname: bindings.hostname,
      };
    },
  },
});
