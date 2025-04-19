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
      HospitalType.hasMany(models.Hospital, {
        foreignKey: 'hospital_type_id',
        sourceKey: 'id',
      })
      HospitalType.hasMany(models.HospitalDeviceStandard, {
        foreignKey: 'hospital_type_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
      })
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
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return HospitalType;
};