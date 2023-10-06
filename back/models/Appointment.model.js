const db = require("../config/db");
const Sequelize = require("sequelize");

class Appointment extends Sequelize.Model {}

Appointment.init(
  {
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_locations: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    hour: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    confirmation: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    state: { type: Sequelize.STRING, defaultValue: true },
  },
  { sequelize: db, modelName: "appointment" }
);

module.exports = Appointment;
