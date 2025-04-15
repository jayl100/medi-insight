'use strict';

import {
  Model, Sequelize,
} from 'sequelize';

export default (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Hospital.belongsTo(models.HospitalType, {
       foreignKey: 'hospital_type_id',
       targetKey: 'id',
     })
      Hospital.belongsTo(models.District, {
        foreignKey: 'district_id',
        targetKey: 'id',
      })
      Hospital.hasMany(models.Favorite, {
        foreignKey: 'hospital_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
      })
      Hospital.hasMany(models.HospitalDevice, {
        foreignKey: 'hospital_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
      })
    }
  }

  Hospital.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    hospital_type_id: DataTypes.INTEGER,
    district_id : DataTypes.INTEGER,
    operating_day: DataTypes.STRING,
    phone: DataTypes.STRING,
    doctor_quantity: DataTypes.INTEGER,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Hospital',
    tableName: 'hospitals',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return Hospital;
};