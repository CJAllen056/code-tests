var express = require("express");
var router = express.Router();

var entriesController = require("../controllers/entriesController");

router.route("/films")
  .get(entriesController.entriesIndex)
    .post(entriesController.entriesCreate);

router.route("/films/new")
  .get(entriesController.entriesNew);

router.route("/films/:id")
  .get(entriesController.entriesShow)
    .put(entriesController.entriesUpdate)
      .delete(entriesController.entriesDelete);

router.route("/films/:id/edit")
  .get(entriesController.entriesEdit);

module.exports = router;
