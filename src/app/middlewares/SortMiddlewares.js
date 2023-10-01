module.exports = function SortMiddlewares(req, res, next) {

  res.locals._sort = {
    enanble: false,
    type: 'default'
  };

  if (req.query.hasOwnProperty('_sort')) {
    res.locals._sort.enanble = true;
    res.locals._sort.type = req.query.type;
    res.locals._sort.column = req.query.column;
  }
  next();
}