var router = require('express').Router();
var calendar = require('../modules/calendar');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { user: process.env.User || 'Unkown', workplace: process.env.Workplace || 'Workplace', dates: '/api/dates' });
});

module.exports = router;
