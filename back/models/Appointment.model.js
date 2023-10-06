const db = require("../config/db");
const Sequelize = require("sequelize");

class Appointment extends Sequelize.Model {}

Appointment.init(
  {
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_location: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    date: {
      type: Sequelize.STRING,
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
    state: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize: db, modelName: "appointment" }
);

module.exports = Appointment;
