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
  });
  return HospitalDevice;
};