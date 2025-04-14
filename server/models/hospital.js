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
    type: DataTypes.STRING,
    region: DataTypes.STRING,
    district: DataTypes.STRING,
    operating_day: DataTypes.STRING,
    phone: DataTypes.STRING,
    doctor_quantity: DataTypes.INTEGER,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    cluster_id: DataTypes.INTEGER,
    region_code: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Hospital',
    tableName: 'hospitals',
  });
  return Hospital;
};