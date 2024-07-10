import Joi from "joi";
import dotenv from "dotenv";
dotenv.config();

// require and configure env
const ENV_SCHEMA = Joi.object({
  NODE_ENV: Joi.string().required(),
  SERVER_PORT: Joi.number().default(4597),
  DB_HOST: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_PORT: Joi.string().required(),
  DB_DIALECT: Joi.string().required(),
})
  .unknown()
  .required();

const { error, value: envVars } = ENV_SCHEMA.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const ENV_CONFIG = {
  env: envVars.NODE_ENV,
  port: envVars.SERVER_PORT,
  sql: {
    host: envVars.DB_HOST,
    user: envVars.DB_USER,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_NAME,
    port: envVars.DB_PORT,
    dialect: envVars.DB_DIALECT,
  },
};

export default ENV_CONFIG;
