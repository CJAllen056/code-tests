var entries = require("../data/entries.js");

function entriesIndex(req, res) {
  res.render("entries/index", { entries : entries });
}

function entriesNew(req, res) {
  res.render("entries/new");
}

function entriesCreate(req, res) {
  var entry = req.body.entry;
  entry.id = entries.length;
  entry.address = req.body.entry.address + "," + req.body.entry.address2 + "," + req.body.entry.address3 + "," + req.body.entry.address4;
  entries.push(entry);
  res.redirect(302, "/entries");
}

function entriesShow(req, res) {
  var id = parseInt(req.params.id);
  var entry = entries[id];
  res.render("entries/show", { entry : entry });
}

function entriesEdit(req, res) {
  var id = parseInt(req.params.id);

  res.render("entries/edit", { entry : entries[id] });
}

function entriesUpdate(req, res) {
  var id = parseInt(req.params.id);
  var entry = req.body.entry;
  entry.id = id;
  entry.address = req.body.entry.address + "," + req.body.entry.address2 + "," + req.body.entry.address3 + "," + req.body.entry.address4;
  entries[id] = entry;
  res.redirect(302, "/entries");
}

function entriesDelete(req, res) {
  var id = parseInt(req.params.id);
  entries.splice(id, 1);
  entries = entries.map(function(entry) {
    entry.id--;
    return entry;
  });
  res.redirect("/");
}

module.exports = {
  entriesIndex  : entriesIndex,
  entriesNew    : entriesNew,
  entriesCreate : entriesCreate,
  entriesShow   : entriesShow,
  entriesEdit   : entriesEdit,
  entriesUpdate : entriesUpdate,
  entriesDelete : entriesDelete
};
