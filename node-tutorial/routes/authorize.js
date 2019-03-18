var express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');

/* GET /authorize. */
router.get('/', function(req, res, next) {
    //get auth code
    const code = req.query.code;

    //if the code is present then use it.
    if(code) {
        res.render('index', {title: 'Home', debug: `Auth code: ${code}`});
    } else {
        //otherwise complain
        res.render('error', { title: 'Error', message: 'Authoriation error', error: {status: 'Missing code parameter' } });
    }
});

module.exports = router;