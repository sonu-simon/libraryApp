const express = require('express');
const bcrypt = require('bcryptjs');
const AccountData = require('../model/accnData');

const signupRouter = express.Router();

function router(nav) {
    signupRouter.get('/', function (req, res) {
        res.render('signup', {
            nav
        });
    });

    signupRouter.post('/auth', function (req, res) {
        var passwordHash = bcrypt.hashSync(req.body.pwd, 10);
        var mail = req.body.email;
        var item = {
            email: mail,
            password: passwordHash
        };
        AccountData.findOne({ email: mail })
            .then(function (data) {
                console.log(data);

                if (data === null) {
                    var creds = AccountData(item);
                    creds.save();
                    req.session.userId = creds._id;
                    return res.redirect('/admin');
                }
                else {
                    return res.redirect('/login');
                }
                return res.redirect('/admin');
            });
    });
    return signupRouter;
}

module.exports = router;