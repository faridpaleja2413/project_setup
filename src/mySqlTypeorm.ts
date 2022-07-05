import { ConnectionOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

import {
  MYSQL_CONNECTION,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_PASSWORD,
  MYSQL_USER,
  MYSQL_DB,
} from "./config";
const isProduction = false;
const baseFolder = isProduction ? "" : "src";
const typeormConfig = {
  type: MYSQL_CONNECTION,
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false, // TODO: true when on dev.
  logging: true,
  entities: isProduction
    ? [`model/*{.js,.ts}`, `model/views/*{.js,.ts}`]
    : [
        `${baseFolder}/model/*{.js,.ts}`,
        `${baseFolder}/model/views/*{.js,.ts}`,
      ],
  // migrations: isProduction
  //   ? [`database/migration/**/*{.js,.ts}`]
  //   : [`${baseFolder}/database/migration/**/*{.js,.ts}`],
  // subscribers: isProduction
  //   ? [`database/subscriber/**/*{.js,.ts}`]
  //   : [`${baseFolder}/database/subscriber/**/*{.js,.ts}`],
  cli: {
    entitiesDir: isProduction ? `model` : `${baseFolder}/model`,
    // migrationsDir: isProduction
    //   ? `database/migration`
    //   : `${baseFolder}/database/migration`,
    // subscribersDir: isProduction
    //   ? `database/subscriber`
    //   : `${baseFolder}/database/subscriber`,
  },
  // cache: {
  //   type: 'ioredis',
  //   duration: CACHE_DURATION_IN_MS,
  //   alwaysEnabled: true,
  //   options: {
  //     host: REDIS_HOST,
  //     port: REDIS_PORT,
  //   },
  //   ignoreErrors: true,
  // },
} as ConnectionOptions;
// console.log(typeormConfig);
export default typeormConfig;
