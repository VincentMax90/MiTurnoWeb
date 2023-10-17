const Location = require("../models/Location.model");

async function locationCreation(name, email, telefono, capacity, hourOpen, hourClose) {
  try {
    const location = await Location.create({
      name, email, telefono, capacity, hourOpen, hourClose
    });
    return location;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function locationDelete(id) {
  return await Location.destroy({
    where: {
      id: id,
    },
  });
}

async function locationEdit(id, location) {
  const locationEdit = await Location.update(location, {
    where: {
      id: id,
    },
  });
}

async function locationSearch() {
  return Location.findAll();
}

module.exports = {
  locationCreation,
  locationEdit,
  locationDelete,
  locationSearch,
};
