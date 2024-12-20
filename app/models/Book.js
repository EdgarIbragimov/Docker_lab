import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  datePublication: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  inStock: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  readerId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  dateReturn: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
},
    {
      timestamps: false,
    }
);

export default Book; 