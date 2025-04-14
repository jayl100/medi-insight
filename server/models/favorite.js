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
    }
  }

  Favorite.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    hospital_id: DataTypes.INTEGER,
    favorite: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Favorite',
    tableName: 'favorites',
  });
  return Favorite;
};