const jwt = require("jsonwebtoken");

const jwtSecret = "retrosariaDaBia";

const createToken = (userId, email) => {
  const tokenPayload = {
    userId,
    email,
  };

  const token = jwt.sign(tokenPayload, jwtSecret, {
    expiresIn: "2h",
  });

  return token;
};

const verifyToken = (token) => {
  let payload;

  try {
    payload = jwt.verify(token, jwtSecret);
  } catch (error) {
    console.log(error);
  }
  return payload;
};

module.exports = {
  createToken,
  verifyToken,
};
