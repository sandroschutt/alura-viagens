'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class depoimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {as: 'user'})
    }
  }
  depoimento.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'depoimento',
  });
  return depoimento;
};
