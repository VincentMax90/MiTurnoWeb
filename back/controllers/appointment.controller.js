const appointmentService = require("../services/appointment.service");

exports.createAppointment = async (req, res) => {
  try {
    const { name, date, hour, location, id_user } = req.body;
    const appointment = await appointmentService.createAppointment(
      name,
      date,
      hour,
      location,
      id_user
    );

    res.status(201).json(appointment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    await appointmentService.deleteAppointment(id);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.searchAll = async (req, res) => {
  try {
    const appointmnet = await appointmentService.searchAll();
    return res.status(200).send(appointmnet);
  } catch (error) {
    return res.status(500).json({ error: "Search failed" });
  }
};

exports.editAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    const editAppointment = await appointmentService.editAppointment(
      id,
      req.body
    );
    return res.status(200).send(editAppointment);
  } catch (error) {
    return res.status(500).json({ error: "Search failed" });
  }
};

exports.searchUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const appointment = await appointmentService.searchUserId(id);
    if (!appointment) {
      return res.status(404).json({ message: "Cita no encontrada." });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la Cita." });
  }
};

exports.findByLocation = async (req, res) => {
  try {
    const id = req.params.id;
    const appointment = await appointmentService.findUserByOperador(id);
    if (!appointment) {
      return res.status(404).json({ message: "Citas no encontrada." });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la Cita." });
  }
};
