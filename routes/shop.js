const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(
    "<h1> 🎃 Hello from Express!🎃  </h1>  <h2> by Athila Alexandre</h2>"
  );
});

module.exports = router;
