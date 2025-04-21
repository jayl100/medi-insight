'use strict';

import {
  Model,
} from "sequelize";

export default (sequelize, DataTypes) => {
  class HospitalDeviceStandard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HospitalDeviceStandard.belongsTo(models.Device, {
        foreignKey: 'device_id',
        targetKey: 'id',
      })
      HospitalDeviceStandard.belongsTo(models.HospitalType, {
        foreignKey: 'hospital_type_id',
        targetKey: 'id',
      })
    }
  }

  HospitalDeviceStandard.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    hospital_type_id: DataTypes.INTEGER,
    device_id: DataTypes.INTEGER,
    expected_quantity: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'HospitalDeviceStandard',
    tableName: 'hospital_device_standards',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return HospitalDeviceStandard;
};