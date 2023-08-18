// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const BlogPost = new Schema({
  name: { type: String },
  description: { type: String },
  title: { type: String },
  image: { type: String },
  slug: { type: String, slug: "name", unique: true },
},
  {
    timestamps: true,
  });

module.exports = mongoose.model('BlogPost', BlogPost);