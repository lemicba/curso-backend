var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

module.exports = router;