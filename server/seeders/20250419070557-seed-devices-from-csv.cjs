'use strict';

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const devices = [];

    const filepath = path.resolve(__dirname, '../../analysis/import-data/devices.csv');

    return new Promise((resolve, reject) => {
      fs.createReadStream(filepath)
        .pipe(csv())
        .on('data', (row) => {
          devices.push({
            name: row.name,
            code: row.code,
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        })
        .on('end', async () => {
          try {
            await queryInterface.bulkInsert('devices', devices)
            resolve();
          } catch (err) {
            reject(err);
          }
        })
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('devices', null, {});
  }
};
