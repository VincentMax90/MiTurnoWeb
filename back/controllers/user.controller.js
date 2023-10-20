const userService = require("../services/user.service");

exports.registerUser = async (req, res) => {
  try {
    const { nameAndLastname, dni, email, password, admin, operador } = req.body;
    const user = await userService.registerUser(
      nameAndLastname,
      dni,
      email,
      password,
      admin,
      operador
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res.sendStatus(401);
    }

    const isValid = await userService.validateUserPassword(
      password,
      user.password
    );
    if (!isValid) {
      return res.sendStatus(401);
    }

    const payload = {
      email: user.email,
      nameAndLastname: user.nameAndLastname,
      dni: user.dni,
      id: user.id,
      admin: user.admin,
      operador: user.operador,
    };
    const token = userService.generateToken(payload);

    res.cookie("token", token);

    res.send(payload);
  } catch (error) {
    console.error("Error during login:", error);
    res.sendStatus(500);
  }
};

exports.getAuthenticatedUser = async (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    console.error("Error during getting authenticated user:", error);
    res.sendStatus(500);
  }
};

exports.logout = (req, res) => {
  try {
    res.clearCookie("token");
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: "Logout failed" });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profileData = req.body;

    const updatedProfile = await userService.updateUserProfile(id, profileData);
    res.json(updatedProfile);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al actualizar el perfil" });
  }
};

exports.searchAll = async (req, res) => {
  try {
    const user = await userService.searchAll();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).json({ error: "Search failed" });
  }
};

exports.searchUserId = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userService.findUserById(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};
