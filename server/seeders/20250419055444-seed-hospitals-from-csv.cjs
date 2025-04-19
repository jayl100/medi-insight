'use strict';

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { fileURLToPath, pathToFileURL } = require('url');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hospitals = [];
    const BATCH_SIZE = 1000;
    const filepath = path.resolve(__dirname, '../../analysis/import-data/hospitals.csv');
    const modelPath = pathToFileURL(path.resolve(__dirname, '../models/index.js')).href;

    const db = await import(modelPath);

    return new Promise((resolve, reject) => {
      fs.createReadStream(filepath)
        .pipe(csv())
        .on('data', (row) => {
          hospitals.push({
            name: row.name,
            address: row.address,
            hospital_type_id: Number(row.hospital_type_id),
            district_id: Number(row.district_id),
            phone: row.phone,
            doctor_quantity: Number(row.doctor_quantity),
            lng: Number(row.lng),
            lat: Number(row.lat),
            createdAt: new Date(),
            updatedAt: new Date()
          });
        })
        .on('end', async () => {
          try {
            for (let i = 0; i < hospitals.length; i += BATCH_SIZE) {
              await db.default.Hospital.bulkCreate(hospitals.slice(i, i + BATCH_SIZE));
            }
            console.log('✅ 병원 데이터 삽입 완료');
            resolve();
          } catch (err) {
            console.error('❌ 삽입 오류:', err);
            reject(err);
          }
        })
        .on('error', (err) => {
          console.error('❌ CSV 읽기 오류:', err);
          reject(err);
        });
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hospitals', null, {});
  }
};
