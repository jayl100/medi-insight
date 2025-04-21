'use strict';

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hospital_device_standards = [];

    const filepath = path.resolve(__dirname, '../../analysis/import-data/hospital_device_standards.csv');

    return new Promise((resolve, reject) => {
      fs.createReadStream(filepath)
        .pipe(csv())
        .on('data', (row) => {
          hospital_device_standards.push({
            hospital_type_id: Number(row.hospital_type_id),
            device_id: Number(row.device_id),
            expected_quantity: row.expected_quantity === '' ? null : Number(row.expected_quantity),
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        })
        .on('end', async () => {
          try {
            await queryInterface.bulkInsert('hospital_device_standards', hospital_device_standards)
            resolve();
          } catch (err) {
            reject(err);
          }
        })
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hospital_device_standards', null, {});
  }
};
