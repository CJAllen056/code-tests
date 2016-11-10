function home(req, res) {
  res.redirect(302, "/entries");
}

module.exports = {
  home: home
};
