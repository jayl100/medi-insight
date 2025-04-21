'use strict';

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const regions = [];

    const filepath = path.resolve(__dirname, '../../analysis/import-data/region.csv');

    return new Promise((resolve, reject) => {
      fs.createReadStream(filepath)
        .pipe(csv({
          mapHeaders: ({ header }) => header.trim().replace('\uFEFF', '') // BOM 제거
        }))
        .on('data', (row) => {
          console.log('[DEBUG]', row);
          regions.push({
            name: row.name,
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        })
        .on('end', async () => {
          try {
            await queryInterface.bulkInsert('regions', regions)
            resolve();
          } catch (err) {
            reject(err);
          }
        })
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('regions', null, {});
  }
};
