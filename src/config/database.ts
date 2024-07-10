import dotenv from "dotenv";
import { DBConfig } from "../interfaces";
import ENV_CONFIG from ".";
const SQL = ENV_CONFIG.sql;
dotenv.config();

module.exports = {
  development: {
    username: SQL.user,
    password: SQL.password,
    database: SQL.database,
    host: SQL.host,
    dialect: SQL.dialect as "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
    seederStorage: "json",
    seederStoragePath: "sequelizeData.json",
    seederStorageTableName: "sequelize_data",
  },
  production: {
    username: SQL.user,
    password: SQL.password,
    database: SQL.database,
    host: SQL.host,
    dialect: SQL.dialect as "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  },
  test: {
    username: SQL.user,
    password: SQL.password,
    database: SQL.database,
    host: SQL.host,
    dialect: SQL.dialect as "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  },
};
