var express = require("express");
var router  = express.Router();

var entryController = require("../controllers/entryController.js");

router.route("/entries")
  .get(entryController.index)
  .post(entryController.create);

router.route("/entry/:id")
  .get(entryController.show)
  .put(entryController.update)
  .patch(entryController.update)
  .delete(entryController.delete);

module.exports = router;
