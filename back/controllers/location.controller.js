const locationService = require("../services/location.service");

exports.locationCreation = async (req, res) => {
  try {
    const { name, email, telefono, capacity, hourOpen, hourClose } = req.body;
    const location = await locationService.locationCreation(
      name,
      email,
      telefono,
      capacity,
      hourOpen,
      hourClose
    );
    res.status(201).json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.locationDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await locationService.locationDelete(id);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.locationEdit = async (req, res) => {
  try {
    const id = req.params.id;
    const locationEdit = await locationService.locationEdit(id, req.body);
    return res.status(200).send(locationEdit);
  } catch (error) {
    return res.status(500).json({ error: "Search failed" });
  }
};

exports.locationsearch = async (req, res) => {
  try {
    const locations = await locationService.locationSearch();
    return res.status(200).send(locations);
  } catch (error) {
    return res.status(500).json({ error: "Search failed" });
  }
};
