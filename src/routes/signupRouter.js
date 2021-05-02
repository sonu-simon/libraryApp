const express = require('express');

const signupRouter = express.Router();

function router(nav){
    signupRouter.get('/', function(req,res){
        res.render('signup',{
            nav
        });
    });
    return signupRouter;
}

module.exports = router;