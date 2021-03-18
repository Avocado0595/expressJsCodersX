const db = require('../db');
module.exports.member = function(req, res, next){
    let member = db.get('members').find({memId : req.signedCookies.userId}).value();
    if(member){
        res.locals.member = member;
    }
    
    next();
}