// seeders/20250415014109-seed-hospital-types.cjs

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('hospital_types', [
      { name: '상급종합', createdAt: now, updatedAt: now },
      { name: '종합병원', createdAt: now, updatedAt: now },
      { name: '병원', createdAt: now, updatedAt: now },
      { name: '의원', createdAt: now, updatedAt: now },
      { name: '보건소', createdAt: now, updatedAt: now },
      { name: '보건의료원', createdAt: now, updatedAt: now },
      { name: '치과병원', createdAt: now, updatedAt: now },
      { name: '치과의원', createdAt: now, updatedAt: now },
      { name: '정신병원', createdAt: now, updatedAt: now },
      { name: '요양병원', createdAt: now, updatedAt: now },
      { name: '한방병원', createdAt: now, updatedAt: now },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hospital_types', null, {});
  }
};
