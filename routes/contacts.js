var express = require('express');
var router = express.Router();
var db = require('../db/connections.js');

/* GET users listing. */
router.get('/new', function(req, res, next) {
  db('contacts')
  res.render('contacts/newContact', { title: 'Address Book: New Contact' });
});

router.delete('/:index', (req, res, next) => {
  let id = req.params.index;

  console.log(id);
  db('contacts')
  .del().where({id})
  .then(() => {
    res.redirect('/')
  })
})

module.exports = router;
