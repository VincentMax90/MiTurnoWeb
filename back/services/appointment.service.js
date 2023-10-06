const Appointment = require("../models/Appointment.model");

async function createAppointment(
  id_user,
  date,
  hour,
  id_location,
  confirmation,
  state
) {
  try {
    const appointment = await Appointment.create({
      id_user,
      date,
      hour,
      id_location,
      confirmation,
      state,
    });

    return appointment;
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteAppointment(id) {
  return await Appointment.destroy({
    where: {
      id: id,
    },
  });
}

async function searchAll() {
  return Appointment.findAll();
}

async function editAppointment(id, appointment) {
  const editAppointment = await Appointment.update(appointment, {
    where: {
      id: id,
    },
  });
}

async function searchUserId(id) {
  return Appointment.findAll({
    where: {
      id_user: id,
    },
  });
}

module.exports = {
  createAppointment,
  deleteAppointment,
  searchAll,
  editAppointment,
  searchUserId,
};
