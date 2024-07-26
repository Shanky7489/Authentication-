const ensureAuthenticated = require("../Middleware/Auth");

const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
  res.status(200).json([
    {
      name: "mobile",
      price: 1000,
    },
    {
      name: "TV",
      price: 12000,
    },
  ]);
});

module.exports = router;
