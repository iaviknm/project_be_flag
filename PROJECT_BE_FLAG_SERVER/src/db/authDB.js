const db = require("./connection");

const insertUser = async (username, email, hash) => {
  const sql = "INSERT INTO clients (username, email, password) VALUES (?, ?, ?)";
  const values = [username, email, hash];

  try {
    const [result] = await db.promise().query(sql, values);

    return result.insertId;
  } catch (error) {
    console.log(error);
    return -1;
  }
};

const getUserByEmail = async (email) => {
  const sql = "SELECT * FROM clients WHERE email = ?";
  const values = [email];

  const [results] = await db.promise().query(sql, values);

  return results[0];
};

module.exports = {
  insertUser,
  getUserByEmail,
};
