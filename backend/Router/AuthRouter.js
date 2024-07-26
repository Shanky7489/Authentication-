const { signup, login } = require("../Controller/AuthController");
const {
  signupvalidation,
  loginvalidation,
} = require("../Middleware/Authvalidation");

const router = require("express").Router();

router.post("/signup", signupvalidation, signup);
router.post("/login", loginvalidation, login);

module.exports = router;
