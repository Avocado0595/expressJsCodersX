const db = require('../db');
//get member if already login
module.exports = function(req, res, next){
    let member = db.get('members').find({memId : req.signedCookies.userId}).value();
    if(member){
        res.locals.member = member;
    }
    
    next();
}