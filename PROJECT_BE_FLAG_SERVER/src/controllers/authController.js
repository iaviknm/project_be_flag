const authDB = require("../db/authDB");
const argon2 = require("argon2");
const jwtService = require("../services/jwtService");

const postRegister = async (req, res) => {
  const { username, email, password } = req.body;

  const hash = await argon2.hash(password);

  const userId = await authDB.insertUser(username, email, hash);

  if (userId === -1) {
    res.status(400).json({
      status: "Error",
      message: "User already exists",
    });
    return;
  }

  res.json({
    status: "OK",
    message: "User created",
    userId,
  });
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;

  const result = await authDB.getUserByEmail(email);

  if (!result) {
    res.status(400).json({
      status: "error",
      message: "User not found",
    });
    return;
  }

  const dbSavedHash = result.password;
  const passwordMatch = await argon2.verify(dbSavedHash, password);

  if (!passwordMatch) {
    res.status(404).json({
      status: "error",
      message: "Wrong password",
    });
    return;
  }

  const token = jwtService.createToken(result.id, result.email);

  res.json({
    status: "ok",
    message: "User logged in",
    token,
  });
};

module.exports = {
  postRegister,
  postLogin,
};
