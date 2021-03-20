var articlesController = require("../controllers/machines.ctrl.js");
var express = require("express");
var router = express.Router();

/* Middleware that wil handle all articles routes*/
router.use(function (req, res, next) {
  /* Log a message */
  console.log("Tinkering with articles");
  /* Make sure we go to the next routes and don't stop here */
  next();
});

// router.use(authenticator.ensureAuthenticated);
// router.use(authorizer.authorize);

router.get("/", articlesController.index);

module.exports = router;
