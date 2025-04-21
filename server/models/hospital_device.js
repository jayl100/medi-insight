'use strict';

import {
  Model,
} from "sequelize";

export default (sequelize, DataTypes) => {
  class HospitalDevice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HospitalDevice.belongsTo(models.Hospital, {
        foreignKey: 'hospital_id',
        targetKey: 'id',
      })
      HospitalDevice.belongsTo(models.Device, {
        foreignKey: 'device_id',
        targetKey: 'id',
      })
    }
  }

  HospitalDevice.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    device_id: DataTypes.INTEGER,
    hospital_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'HospitalDevice',
    tableName: 'hospital_devices',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return HospitalDevice;
};