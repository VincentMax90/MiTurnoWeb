const db = require("../config/db");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}

User.init(
  {
    nameAndLastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dni: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    operador: {
      type: Sequelize.STRING,
      defaultValue: null,
    },
    admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    phone: {
      type: Sequelize.STRING,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", (user) => {
  const salt = bcrypt.genSaltSync(8);
  user.salt = salt;

  return user.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
