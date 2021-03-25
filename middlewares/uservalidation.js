//check blank field
module.exports = function(req, res, next){
    if (!req.body.name || !req.body.age || !req.body.phone) {
        let errs = "Vui lòng nhập đầy đủ các trường"
        res.render('users/create', { errs: errs, values:req.body});
        return;
    }
    else
    next();
}