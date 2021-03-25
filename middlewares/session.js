const db = require('../db');
const shortid = require('shortid');
module.exports = function(req, res, next){
    if(!req.signedCookies.sessionId){
        let sessionID = shortid.generate();
        res.cookie('sessionId', sessionID,{
            signed: true
        });
        db.get('sessions')
        .push({sessionId : sessionID})
        .write();
    }
   
    
    next();
}