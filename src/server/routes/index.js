const router = require('express').Router();

router.get('/', (request, response) => {
  response.render('index.ejs');
});

module.exports = router; 