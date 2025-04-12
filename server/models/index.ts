'use strict';

import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import configData from '../config/config';  // default import
import { fileURLToPath } from 'url';
import { Config } from '../src/types/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);

const configs: Config  = configData;
const env = process.env.NODE_ENV || 'development';
const config = configs[env];

console.log('env =>', env);
console.log('config =>', config);

interface DB {
  [key: string]: any;
  sequelize?: Sequelize;
}
const db: DB = {};

const sequelize = new Sequelize(
  config.database || 'development',
  config.username,
  config.password === null ? undefined : config.password,
  {
    host: config.host,
    dialect: 'mysql',
    logging: false,
    timezone: "+09:00",
  });

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      (file.slice(-3) === '.js' || file.slice(-3) === '.ts') &&
      file.indexOf('.test.') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default sequelize;
