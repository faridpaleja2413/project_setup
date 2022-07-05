// Please make sure this file contains either just variables on any function without outside variable/function dependencies
import getEnv from "./utils/get-env";
import dotenv from "dotenv";
dotenv.config();

export const MYSQL_CONNECTION = process.env.MYSQL_CONNECTION;
export const MYSQL_HOST = process.env.MYSQL_HOST;
export const MYSQL_USER = process.env.MYSQL_USER;
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
export const MYSQL_DB = process.env.MYSQL_DB;
export const MYSQL_PORT = process.env.MYSQL_PORT;

export const NODE_ENV = process.env.NODE_ENV;
const envType = NODE_ENV?.trim() || "";
export const isProd = NODE_ENV === "production";
export const isQA = NODE_ENV === "qa";
export const isRelease = NODE_ENV === "v2release";
export const isLOCAL = envType === "local";
export const PORT = process.env.PORT || 3000;

export const SWAGGER_USERNAME = process.env.SWAGGER_USERNAME as string;
export const SWAGGER_PASSWORD = process.env.SWAGGER_PASSWORD as string;

export const isUnitTest = NODE_ENV === "unittest";
export const MONGO_URL = process.env.MONGO_URL || "";
export const MONGO_CONFIG = {
  poolSize: parseInt(process.env.MONGO_POOL_SIZE || "") || 10,
};
export const MYSQL_TEST_DBNAME = process.env.MYSQL_TEST_DBNAME || "testdb";
export const MYSQL_DBNAME = process.env.MYSQL_DBNAME?.trim();
export const MYSQL_URL = `${process.env.MYSQL_URL}/${MYSQL_DBNAME}`;
export const MYSQL_TEST_URL = `${process.env.MYSQL_URL}/testdb`;
export const MYSQL_CONFIG = {
  url: MYSQL_URL,
  extra: {
    connectionLimit: parseInt(process.env.MYSQL_POOL_MAX || "") || 10,
  },
};

export const CASSANDRA_CONFIG: any = {
  URL: process.env.CASSANDRA_URL,
  KEYSPACE: process.env.CASSANDRA_KEYSPACE,
  LOCAL_DATA_CENTER: process.env.CASSANDRA_LOCAL_DATA_CENTER || "datacenter1",
  USERNAME: process.env.CASSANDRA_USERNAME || "",
  PWD: process.env.CASSANDRA_PWD || "",
};

export const REDIS_CONFIG = {
  port: parseInt(process.env.REDIS_PORT || "") || 6379, // Redis port
  host: process.env.REDIS_HOST || "", // Redis host
  family: 4, // 4 (IPv4) or 6 (IPv6)
  password: process.env.REDIS_PASSWORD || "",
  db: 0,
};

export const KAFKA_URL = process.env.KAFKA_URL;
export const KAFKA_CONSUMER_GROUP = process.env.KAFKA_CONSUMER_GROUP;
export const KAFKA_CLIENT_ID = process.env.KAFKA_CLIENT_ID;
export const KAFKA_CONSUMER_CONFIG = {
  partitionsConsumedConcurrently:
    parseInt(process.env.KAFKA_PARTITION_CONSUMED_CONCURRENT || "") || 3,
};

export const JWT_KEY = process.env.JWT_KEY || "ertyuixcvbnmfdrtyuikjbvcfghj";
export const JWT_KEY_COMMUNITY_V1 =
  process.env.JWT_KEY_COMMUNITY_V1 || "ertyuixcvbnmfdrtyuikjbvcfghj";
export const JWT_KEY_DASHBOARD_V1 =
  process.env.JWT_KEY_DASHBOARD_V1 || "Sx35C6bPomVS7u65pXCzLa0SX4JWrbDE";
export const DEFAULT_TIME_ZONE_ID = process.env.DEFAULT_TIME_ZONE_ID || 94;

export const OPERATION_EMAIL =
  process.env.OPERATION_EMAIL || "hubilo.operations@gmail.com";

export const AWS_CREDENTIALS = {
  AWS_BUCKET: process.env.AWS_BUCKET || "",
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION || "ap-south-1",
  AWS_SIGNATURE_VERSION: process.env.AWS_SIGNATURE_VERSION || "",
};

export const BASE_IMG_PATH =
  process.env.BASE_IMAGE_PATH || "https://d28hsb6vkzynsw.cloudfront.net";

export const DEFAULT_CACHE_TIME = getEnv("DEFAULT_CACHE_TIME");
export const LOGGER_LEVEL = getEnv("LOGGER_LEVEL");
export const LOGGER_PRETTY = getEnv("LOGGER_PRETTY");


export const ALLOW_SENTRY = getEnv("ALLOW_SENTRY");
export const ALLOW_SWAGGER = getEnv("ALLOW_SWAGGER");
export const ALLOW_BULL_BOARD = getEnv("ALLOW_BULL_BOARD");
export const ALLOW_BULL_BOARD_READONLY = getEnv(
  "ALLOW_BULL_BOARD_READONLY"
) as boolean;
export const ALLOW_GRACEFUL_SHUTDOWN = getEnv("ALLOW_GRACEFUL_SHUTDOWN");

export const ELASTIC_HOST_URL = process.env.ELASTIC_HOST_URL || "";
export const ELASTIC_INDEX_HUB_STORE =
  process.env.ELASTIC_INDEX_HUB_STORE || "";
export const ELASTIC_USERNAME = process.env.ELASTIC_USERNAME || "";
export const ELASTIC_PASSWORD = process.env.ELASTIC_PASSWORD || "";

export const SENTRY_URL =
  process.env.SENTRY_URL ||
  "https://8ad8b11dbd0a4e43a0d26dc7a4d0a9c3@o652315.ingest.sentry.io/5761263";

export const CORS_MAXAGE =
  parseInt(process.env.CORS_MAXAGE || "86400") || 86400;
export const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

export const CHAT_SERVER_ENDPOINT = process.env.CHAT_SERVER_ENDPOINT || "";

export const DASHBOARD_NODE_ENDPOINT =
  process.env.DASHBOARD_NODE_ENDPOINT || "http://localhost:3111";

export const COMM_ENDPOINT =
  process.env.COMM_ENDPOINT || "http://localhost:3000";

export const API_MS_KEY_NODE_DASH =
  process.env.API_MS_KEY_NODE_DASH || "DY4Wfsn3f46dlJzNWcns";

export const KAFKA_URL_HTM = process.env.KAFKA_URL_HTM;
export const KAFKA_CONSUMER_GROUP_HTM = process.env.KAFKA_CONSUMER_GROUP_HTM;
export const KAFKA_CLIENT_ID_HTM = process.env.KAFKA_CLIENT_ID_HTM;
export const KAFKA_CONSUMER_CONFIG_HTM = {
  partitionsConsumedConcurrently:
    parseInt(process.env.KAFKA_PARTITION_CONSUMED_CONCURRENT_HTM || "") || 3,
};

export const SESSION_AVG_WATCH_TIME =
  process.env.SESSION_AVG_WATCH_TIME || "v2";
