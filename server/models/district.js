'use strict';

import {
  Model, Sequelize,
} from 'sequelize';

export default (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      District.hasMany(models.Hospital, {
        foreignKey: 'district_id',
        sourceKey: 'id',
        onDelete: 'SET NULL',
      })
      District.belongsTo(models.Region, {
        foreignKey: 'region_id',
        targetKey: 'id',
      })
    }
  }

  District.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    region_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'District',
    tableName: 'districts',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return District;
};