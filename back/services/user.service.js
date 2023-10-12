const User = require("../models/User.model");
const tokenService = require("../config/tokens");
const bcrypt = require("bcrypt");

async function registerUser(nameAndLastname,dni, email, password) {
  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      throw new Error("El correo electrónico ya está registrado");
    }

    const user = await User.create({ nameAndLastname,dni, email, password});
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserByEmail(email) {
  return User.findOne({
    where: { email },
  });
}

async function getUserById(userId) {
  return User.findByPk(userId);
}

async function validateUserPassword(password, secondPassword) {
  return bcrypt.compare(password, secondPassword);
}

function generateToken(payload) {
  return tokenService.generateToken(payload);
}

async function getUserProfile(userId) {
  const userProfile = await User.findByPk(userId, {
    attributes: {
      exclude: ["password"],
      include: ["name", "lastname", "email", "phone", "img_url"],
    },
  });
  return userProfile;
}

async function updateUserProfile(userId, profileData) {
  try {
    await User.update(
      {
        nameAndLastname: profileData.name,
        phone: profileData.phone,
        dni:profileData.dni,
        email:profileData.email,

      },
      { returning: true, where: { id: userId } }
    );

    const updatedUser = await User.findByPk(userId, {
      attributes: {
        exclude: ["password"],
        include: ["nameAndLastname", "email", "phone", "dni"],
      },
    });

    return updatedUser;
  } catch (error) {
    console.error("Error al actualizar el perfil del usuario:", error);
    throw new Error("Error al actualizar el perfil del usuario");
  }
}


module.exports = {
  registerUser,
  findUserByEmail,
  getUserById,
  validateUserPassword,
  generateToken,
  getUserProfile,
  updateUserProfile,
 
};
