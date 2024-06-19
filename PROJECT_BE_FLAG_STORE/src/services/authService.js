import networkService from "./networkService";

async function registerUser(username, email, password) {
  const body = {
    username,
    email,
    password,
  };
  return networkService.postFetch("/register", body);
}

async function loginUser(email, password) {
  const body = {
    email,
    password,
  };
  return networkService.postFetch("/login", body);
}

export default {
  registerUser,
  loginUser,
};
