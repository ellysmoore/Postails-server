import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
const basename = path.basename(__filename);
import ENV_CONFIG from "../config";
const env = ENV_CONFIG.env;
const DB_CONFIG = require("../config/database");
const config = DB_CONFIG[env];

interface DbType {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  [key: string]: any;
}

const db: DbType = {
  sequelize: {} as Sequelize,
  Sequelize: Sequelize,
};

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect as "mysql",
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
  logging: config.logging,
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && (file.slice(-3) === ".ts" || file.slice(-3) === ".js");
  })
  .forEach((file) => {
    console.log("====================================");
    console.log({ file });
    console.log("====================================");
    const modelDefiner = require(path.join(__dirname, file));
    const model = modelDefiner.default ? modelDefiner.default(sequelize, DataTypes) : modelDefiner(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  console.log("====================================");
  console.log({ modelName });
  console.log("====================================");
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
