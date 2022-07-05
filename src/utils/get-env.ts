import dotenv from "dotenv";
dotenv.config();

type IGetEnvOutput = string | number | boolean | undefined;

export interface IGetEnv {
  (_key: string): IGetEnvOutput;
}

const getEnv: IGetEnv = (key: string): IGetEnvOutput => {
  const env = process.env[key];
  if (!env) {
    return env;
  }
  if (env.toLowerCase() === "true") {
    return true;
  }
  if (env.toLowerCase() === "false") {
    return false;
  }
  if (!isNaN(+env)) {
    return +env;
  }
  return env;
};

export default getEnv;
