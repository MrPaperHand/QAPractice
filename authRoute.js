const router = require("express").Router();
const { createUser } = require("../controllers/auth.js");

// Register
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const savedUser = await createUser(email, password);
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;