'use strict';

import {
  Model,
} from "sequelize";

export default (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Device.hasMany(models.HospitalDevice, {
        foreignKey: 'device_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
      })
      Device.hasMany(models.HospitalDeviceStandard, {
        foreignKey: 'device_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
      })
    }
  }

  Device.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    code: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Device',
    tableName: 'devices',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });  return Device;
};