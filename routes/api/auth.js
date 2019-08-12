const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/").get((req, res) => {
  res.json({ success: true });
});

module.exports = router;
