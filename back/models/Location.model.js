const db = require("../config/db");
const Sequelize = require("sequelize");

class Location extends Sequelize.Model {}

Location.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefono: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    capacity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    hourOpen: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    hourClose: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "location" }
);

module.exports = Location;
