

class SiteControllers {


  index(req, res) {
    res.render('home');
  }

  search(req, res) {
    res.render('searchs');
  }
}

module.exports  = new SiteControllers;