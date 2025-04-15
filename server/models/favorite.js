'use strict';

import {
  Model,
} from "sequelize";

export default (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorite.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'id',
      })
      Favorite.belongsTo(models.Hospital, {
        foreignKey: 'hospital_id',
        targetKey: 'id',
      })
    }
  }

  Favorite.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    hospital_id: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    favorite: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Favorite',
    tableName: 'favorites',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return Favorite;
};