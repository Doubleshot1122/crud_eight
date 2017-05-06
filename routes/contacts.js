var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('contacts/newContact', { title: 'Address Book: New Contact' });
});

module.exports = router;
