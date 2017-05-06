var express = require('express');
var router = express.Router();
var db = require('../db/connections.js');

/* GET users listing. */
router.get('/new', function(req, res, next) {
  db('contacts')
  res.render('contacts/newContact', { title: 'Address Book: New Contact' });
});

module.exports = router;
