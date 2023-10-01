// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


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
//add plugin
mongoose.plugin(slug);
BlogPost.plugin(mongooseDelete, 
  {
    deletedAt : true ,
    overrideMethods: 'all',
  });

module.exports = mongoose.model('BlogPost', BlogPost);