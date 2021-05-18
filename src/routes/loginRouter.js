const express = require('express');
const bcrypt = require('bcrypt');
const AccountData = require('../model/accnData');

const loginRouter = express.Router();

function router(nav) {
    loginRouter.get('/', function (req, res) {
        res.render('login', {
            nav
        });
    });

    loginRouter.post('/auth', function (req, res) {
        var mail = req.body.email;
        var pwd = req.body.password;
        AccountData.findOne({ email: mail })
            .then(function (data) {
                if (data === null) {
                    console.log('user doesnt exist');
                } else {
                    if (bcrypt.compareSync(pwd, data.password)) {
                        req.session.userId = data._id;
                        res.redirect('/books');
                    }
                    else {
                        alert("Error: Wrong username/password!");
                        res.redirect('/login');
                    }
                }

            });
    });
    return loginRouter;
}

module.exports = router;