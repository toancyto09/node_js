
class NewsController {

  // [GET] News
  index(req, res) {
    res.render('news');
  }
  // [GET] News detail
  index(req, res) {
    res.send('news detail');
  }
}

module.exports = new NewsController;