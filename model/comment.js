const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//to display the comment, the comment creator’s username, and the date created

comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'travelPost',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = comment;