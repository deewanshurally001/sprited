var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sprited ' });
});

router.get('/About',(req, res, next) => {
    res.render('About', {message: 'Content  from the controller goes here'})
});


module.exports = router;
