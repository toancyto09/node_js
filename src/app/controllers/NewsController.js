
class NewsController {

  // [GET] News
  index(req, res) {
    res.render('news');
  }

}

module.exports = new NewsController;