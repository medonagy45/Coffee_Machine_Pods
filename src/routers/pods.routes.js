var podsController = require("../controllers/pods.ctrl.js");
var express = require("express");
var router = express.Router();

/* Middleware that wil handle all pods routes*/
router.use(function (req, res, next) {
  console.log("Tinkering with pods");
  next();
});


router.get("/", podsController.index);

module.exports = router;
