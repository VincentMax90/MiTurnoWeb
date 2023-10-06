const Location = require("../models/Location.model");

async function locationCreation(name, ubication, days, hour) {
  try {
    const location = await Location.create({
      name,
      ubication,
      days,
      hour,
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




module.exports = {
  locationCreation,locationEdit,locationDelete
};
