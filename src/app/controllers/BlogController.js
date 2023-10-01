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
      .then(() => res.redirect('/me/stored/blog'))
      .catch(error => {
      })
  }

  //[GET] /blog/:id/edit
  edit(req, res, next) {
    Blogs.findById(req.params.id).lean()
      .then(blog => res.render('blogs/edit', { blog }))
      .catch(next)
  }

  //[PUT] /blog/:id
  update(req, res, next) {
    Blogs.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/blog'))
      .catch(next)
  }
  //[DELETE] /blog/:id
  destroy(req, res, next) {
    Blogs.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  //[DELETE] /blog/:id/force
  forceDestroy(req, res, next) {
    Blogs.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  //[PATCH] /blog/:id/restore
  restore(req, res, next) {
    Blogs.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  //[POST] /blog/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Blogs.delete({ _id: { $in: req.body.blogIds } })
          .then(() => res.redirect('back'))
          .catch(next)
        break;
      default:
        res.json({ message: 'Action is invailis' })
    }
  }
}


module.exports = new BlogController;