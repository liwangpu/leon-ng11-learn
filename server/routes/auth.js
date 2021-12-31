var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    const time = new Date().getTime().toString();
    const token = {
        token: time.substring(0, 10)
    };
    // res.send(token);

    setTimeout(() => {
        res.send(token);
    }, 1500);
});

module.exports = router;
