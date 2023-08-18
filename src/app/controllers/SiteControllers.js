const Blogs = require('../models/blog')

class SiteControllers {


  async index(req, res, next) {
    Blogs.find({}).lean()
      .then(blog => res.render('home', { blog }))
      .catch(next);
  }

  search(req, res) {
    res.render('searchs');
  }
}

module.exports = new SiteControllers;