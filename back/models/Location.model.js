const db = require("../config/db");
const Sequelize = require("sequelize");

class Location extends Sequelize.Model {}

Location.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ubication: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    days: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    hour: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "location" }
);

module.exports = Location;
