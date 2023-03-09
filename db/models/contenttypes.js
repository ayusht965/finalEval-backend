'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ContentTypes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ContentTypes.init({
        Name: DataTypes.STRING,
        Entries: DataTypes.INTEGER,
        Fields: DataTypes.JSON,
    }, {
        sequelize,
        modelName: 'ContentTypes',
    });
    return ContentTypes;
};