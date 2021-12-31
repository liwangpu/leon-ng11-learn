var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  const users = [
    {
      name: 'Leon',
      age: 18
    }
  ];
  res.send(users);
  
  // setTimeout(() => {
  //   res.send(users);
  // }, 1500);
});

module.exports = router;
