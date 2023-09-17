'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.depoimento, {as: "userId"});
    }
  }
  User.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    role: DataTypes.INTEGER,
    profession: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'users'
  });
  return User;
};