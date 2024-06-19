function getInfo(req, res) {
  res.json({
    status: "ok",
    message: "Welcome user: " + req.userData.email,
  });
}

module.exports = {
  getInfo,
};
