// Using Node.js `require()`
const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/blog_dev');
    console.log("connect susscesfuly");
  } catch (error) {
    console.log("connect error", error);
  }
}

module.exports = { connect }