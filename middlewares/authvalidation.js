
const db = require('../db');
module.exports.validation = function(req, res, next){
    if (!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }
    let member = db.get('members').find({memId : req.signedCookies.userId}).value();
    if(!member){
        res.redirect('/auth/login');
        return;
    }
    next();
}
