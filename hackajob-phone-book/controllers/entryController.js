var Entry = require("../models/entry");

function entriesIndex(req, res) {
  Entry.find(function(err, entries) {
    if (err) return res.status(404).json({ message: "Request for entries failed" });
    res.status(200).json({ entries: entries });
  });
}

function entriesCreate(req, res) {
  Entry.create(req.body.game, function(err, game) {
    if (err) return res.status(404).json({ message: "Unable to create new entry" });
    return res.status(201).json({ entry: entry });
  });
}

function entriesUpdate(req, res) {
  Entry.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function(err, entry) {
    if(err) return res.status(500).json({ message: "Unable to update entry" });
    res.status(200).send(entry);
  });
}

function entriesShow(req, res) {
  Entry.findById(req.params.id, function(err, entry) {
    if (err) return res.status(404).json({ message: "Request for entry failed" });
    res.status(200).json({ entry: entry });
  });
}

module.exports = {
  create: entriesCreate,
  index:  entriesIndex,
  update: entriesUpdate,
  show:   entriesShow
};
