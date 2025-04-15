'use strict';

import {
  Model, Sequelize,
} from 'sequelize';

export default (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Region.hasMany(models.District, {
        foreignKey: 'region_id',
        targetKey: 'id',
        onDelete: 'SET NULL',
      })
    }
  }

  Region.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Region',
    tableName: 'regions',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return Region;
};