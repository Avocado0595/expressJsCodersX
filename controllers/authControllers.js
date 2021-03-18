const db = require('../db');
const md5 = require('md5');
module.exports = {
    login: (req, res) => {
        res.render('auth/login');
    },
    postlogin: (req, res) => {
        var member = db.get('members').find({nickname : req.body.nickname}).value();
        if (!member){          
            res.render('auth/login', {err :'Invalid user!',  values : req.body});
            return;
        }

        if (!(member.password ===  md5(req.body.password))){
            res.render('auth/login', {err :'Invalid password!', values : req.body});
            return;
        }
        
        res.cookie('userId', member.memId,{
            signed: true
        });
        res.locals.member = member;
       res.redirect('/');
    }
}