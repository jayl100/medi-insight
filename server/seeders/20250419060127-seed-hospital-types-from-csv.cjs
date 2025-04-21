'use strict';

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hospital_types = [];

    const filepath = path.resolve(__dirname, '../../analysis/import-data/hospital_types.csv');

    return new Promise((resolve, reject) => {
      fs.createReadStream(filepath)
        .pipe(csv())
        .on('data', (row) => {
          hospital_types.push({
            name: row.name,
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        })
        .on('end', async () => {
          try {
            await queryInterface.bulkInsert('hospital_types', hospital_types)
            resolve();
          } catch (err) {
            reject(err);
          }
        })
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hospital_types', null, {});
  }
};
