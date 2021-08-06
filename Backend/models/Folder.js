const {DataTypes} = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define('Folder',{
       title: {
          type: DataTypes.STRING,
        },
      }
    );
};