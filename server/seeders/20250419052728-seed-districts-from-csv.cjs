'use strict';

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const districts = [];

    const filepath = path.resolve(__dirname, '../../analysis/import-data/districts.csv');

    return new Promise((resolve, reject) => {
      fs.createReadStream(filepath)
        .pipe(csv())
        .on('data', (row) => {
          console.log('[ROW]', row);
          districts.push({
            region_id: Number(row.region_id),
            name: row.name,
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        })
        .on('end', async () => {
          try {
            await queryInterface.bulkInsert('districts', districts)
            resolve();
          } catch (err) {
            reject(err);
          }
        })
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('districts', null, {});
  }
};
