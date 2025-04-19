'use strict';

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hospital_devices = [];

    const filepath = path.resolve(__dirname, '../../analysis/import-data/hospital_devices.csv');

    return new Promise((resolve, reject) => {
      fs.createReadStream(filepath)
        .pipe(csv())
        .on('data', (row) => {
          hospital_devices.push({
            device_id: Number(row.device_id),
            hospital_id: Number(row.hospital_id),
            quantity: Number(row.quantity),
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        })
        .on('end', async () => {
          try {
            await queryInterface.bulkInsert('hospital_devices', hospital_devices)
            resolve();
          } catch (err) {
            reject(err);
          }
        })
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hospital_devices', null, {});
  }
};
