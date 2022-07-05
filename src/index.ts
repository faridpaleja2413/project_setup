// import "module-alias/register";
import "./init-env";
// import "newrelic";
import server from "./server";
import Database from "./database";
import { PORT } from "./config";
// import gracefulShutdown from '@utils/graceful-shutdown';
import { logger as parentLogger } from "./utils/get-logger";

const database = new Database();

const logger = parentLogger.child({
  filepath: "src/index",
});

server.listen(PORT, async () => {
  try {
    await database.connect();
    logger.info(`Server connected-Port:${PORT}!`);
  } catch (error) {
    logger.error("Unable to connect to database. ", error);
  }
});

// if (ALLOW_GRACEFUL_SHUTDOWN) {
//   gracefulShutdown(app);
// }
