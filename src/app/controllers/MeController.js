const Blogs = require('../models/blog')

class MeControllers {

  //[GET] /me/stored/blog
  storedBlog(req, res, next) {
    let blogQuery = Blogs.find({}).lean();

    if (req.query.hasOwnProperty('_sort')) {
      blogQuery = blogQuery.sort({
        [req.query.column]: req.query.type
      });
    }


    Promise.all([blogQuery, Blogs.countDocumentsWithDeleted({ deleted: true })])
      .then(([blog, deleteCount]) =>
        res.render('me/stored-blog', { blog, deleteCount })
      )
      .catch(next);
  }

  //[GET] /me/trash/blog
  trashdBlog(req, res, next) {
    Blogs.findWithDeleted({ deleted: true }).lean()
      .then(blog => res.render('me/trash-blog', { blog }))
      .catch(next);
  }
}

module.exports = new MeControllers;