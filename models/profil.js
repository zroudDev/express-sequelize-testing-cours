'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profil.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    country: DataTypes.STRING,
    userId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profil',
  });
  Profil.associate=models=>{
    Profil.hasMany(models.Product,{
      onDelete:'cascade'
    })
    Profil.belongsTo(models.User,{ForeignKey:'userId'})
  }
  
   
  return Profil;
};