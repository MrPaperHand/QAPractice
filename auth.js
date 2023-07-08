const User = require("../models/User");

async function createUser(email, password) {
  const newUser = new User({
    email,
    password,
  });

  try {
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createUser,
};