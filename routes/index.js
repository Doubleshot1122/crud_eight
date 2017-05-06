var express = require('express');
var router = express.Router();
var db = require('../db/connections.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  db('contacts')
  .select('contacts.*', 'addresses.*', 'contacts.id as cid')
  .innerJoin('addresses', 'addresses.id', 'contacts.addresses_id')
  .then(results => {
    res.render('home', { title: 'Address Book', results});
  })
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  res.render('home', { title: 'Address Book' });
});

module.exports = router;
