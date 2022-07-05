import "reflect-metadata";
import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { useContainer } from "typeorm";
import { Container } from "typeorm-typedi-extensions";

// import * as Sentry from "@sentry/node";
import {
  ALLOW_SWAGGER,
  ALLOW_SENTRY,
  ALLOW_BULL_BOARD,
  ALLOW_GRACEFUL_SHUTDOWN,
  NODE_ENV,
  PORT,
  SENTRY_URL,
  CORS_MAXAGE,
  CORS_ORIGIN,
} from "./config";
// import mySqlConnector from "@db/mysql.connector";
import addRequestId from "./middleware/add-request-id";
import logApiDetails from "./middleware/log-api-details";
import addLogger from "./middleware/add-logger";
import { addResponseEnhancer } from "./middleware/response";
import { logger as parentLogger } from "./utils/get-logger";
import initRoute from "./routes";
// import handlerRouteApiDocs from "./swagger/handler-route-api-docs";
// import handlerRouteQueues from "@queue/handler-route-queues";

const logger = parentLogger.child({
  filepath: "src/server",
});

logger.info(
  {
    ALLOW_SENTRY,
    ALLOW_SWAGGER,
    ALLOW_BULL_BOARD,
    PORT,
    ALLOW_GRACEFUL_SHUTDOWN,
    NODE_ENV,
  },
  "Environment variables!"
);

// if (ALLOW_SENTRY) {
//   Sentry.init({
//     dsn: SENTRY_URL
//   });
// }

const app = express();

// The request handler must be the first middleware on the app
// if (ALLOW_SENTRY) {
//   app.use(Sentry.Handlers.requestHandler() as express.RequestHandler);
// }
// const corsOptions = {
//   origin: CORS_ORIGIN,
//   maxAge: CORS_MAXAGE,
// };
// @ToDo Configure CORS for each env
// app.use(cors(corsOptions));
app.use(json());

// low priority work
// ALLOW_SWAGGER && app.use("/api-docs", handlerRouteApiDocs);
// ALLOW_BULL_BOARD && app.use("/queues", handlerRouteQueues);

app.use(addRequestId);
app.use(addLogger);
app.use(logApiDetails);
app.use(addResponseEnhancer as express.RequestHandler);

// initialise route here
initRoute(app);


app.get("/health", (req: any, res: any) => {
  res.status(200).send("<h1>okay buddy</h1>");
});

useContainer(Container);
// database connections
//mySqlConnector.connect();

// The error handler must be before any other error middleware and after all controllers
// if (ALLOW_SENTRY)
//   app.use(
//     Sentry.Handlers
//       .errorHandler
//       //   {
//       //    shouldHandleError(error) {
//       //     // Capture all 404 and 500 errors
//       //     if (error.status === 400 || error.status === 500) {
//       //       return true;
//       //     }
//       //     return false;
//       //   },
//       // }
//       () as express.ErrorRequestHandler
//   );

export default app;
