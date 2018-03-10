const express = require('express');
const router = express.Router();
const user = require("../controllers/user")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/login',user.login);

router.post('/login',user.doLogin);

router.get('/logout',user.logout);

module.exports = router;
