'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ContentTypeEntries extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ContentTypeEntries.init({
        ContentTypeId: DataTypes.STRING,
        Fields: DataTypes.JSON,
    }, {
        sequelize,
        modelName: 'ContentTypeEntries',
    });
    return ContentTypeEntries;
};