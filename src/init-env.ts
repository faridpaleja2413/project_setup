import dotenv from "dotenv";
import path from "path";
import getEnv from "./utils/get-env";
// const envInit = dotenv.config({
//   // @ToDo remove all .env files and path should to the git ignored .env file only
//   path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
//   encoding: "utf8",
//   debug: getEnv(process.env.DEBUG as string) as boolean,
// });
const envInit = dotenv.config();

if (envInit.error) {
  throw envInit.error;
}

export default envInit;
