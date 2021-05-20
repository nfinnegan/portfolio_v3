const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/projects", async (req, res) => {
  try {
    res.render("projects");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
