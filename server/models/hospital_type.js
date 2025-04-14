'use strict';

import {
  Model,
} from "sequelize";

export default (sequelize, DataTypes) => {
  class HospitalType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  HospitalType.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'HospitalType',
    tableName: 'hospital_types',
  });
  return HospitalType;
};