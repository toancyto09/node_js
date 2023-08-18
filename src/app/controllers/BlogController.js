const Blogs = require('../models/blog')

class BlogController {

  //[GET] /blog/:slug
  Show(req, res, next) {
    Blogs.findOne({ slug: req.params.slug }).lean()
      .then(blog => {
        res.render('blogs/show', { blog });
      })
      .catch(next);
  }
  //[GET] /blog/crate
  create(req, res, next) {
    res.render('blogs/create');
  }

  //[POST] /blog/store
  store(req, res, next) {
   const blog = new Blogs(req.body);
   blog.save()
  .then(() => res.redirect('/'))
  .catch(error => {

  })
  }
}


module.exports = new BlogController;