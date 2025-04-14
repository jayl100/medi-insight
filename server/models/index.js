'use strict';

import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import configData from '../config/config.js';  // default import
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);

const configs  = configData;
const env = process.env.NODE_ENV || 'development';
const config = configs[env];

console.log('env =>', env);
console.log('config =>', config);

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: 'mysql',
    dialectOptions: {
      connectTimeout: 10000
    },
    logging: false,
    timezone: "+09:00",
  });

const modelFiles = fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.') === -1
    );
  });

// for...of + await import 사용
for (const file of modelFiles) {
  const filePath = path.join(__dirname, file);
  const moduleUrl = pathToFileURL(filePath).href;

  const modelModule = await import(moduleUrl);
  const model = modelModule.default(sequelize, Sequelize); // ESM 스타일로 export default 되어야 함
  db[model.name] = model;
}

// associate 연결
for (const modelName of Object.keys(db)) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;