var express = require("express");
var router = express.Router();

var staticsController = require("../controllers/staticsController");
var entriesController = require("../controllers/entriesController");

router.route("/")
  .get(staticsController.home);

router.route("/entries")
  .get(entriesController.entriesIndex)
    .post(entriesController.entriesCreate);

router.route("/entries/new")
  .get(entriesController.entriesNew);

router.route("/entries/:id")
  .get(entriesController.entriesShow)
    .put(entriesController.entriesUpdate)
      .delete(entriesController.entriesDelete);

router.route("/entries/:id/edit")
  .get(entriesController.entriesEdit);

module.exports = router;
