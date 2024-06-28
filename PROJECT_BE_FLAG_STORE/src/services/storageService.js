const getAuthToken = () => localStorage.getItem("at");

const setAuthToken = (token) => localStorage.setItem("at", token);

const removeAuthToken = () => localStorage.removeItem("at");

const setUsername = (username) => localStorage.setItem("user", username);

const getUsername = () => localStorage.getItem("user");

const getEmail = () => localStorage.getItem("email");

const setEmail = (email) => localStorage.setItem("email", email);

const clearUserData = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("email");
};

export default {
  getAuthToken,
  setAuthToken,
  removeAuthToken,
  setUsername,
  getUsername,
  getEmail,
  setEmail,
  clearUserData,
};
