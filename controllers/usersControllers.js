const db = require('../db');

module.exports = {
    index: (req, res) => {
        res.render('users/index', { users: db.get("users").value() });
    },
    search: (req, res) => {
        let q = req.query.q;
        let matchUsersList = db.get("users")
            .value()

        matchUsersList = matchUsersList.filter((user) => {
            return user.name.indexOf(q) !== -1;
        });

        res.render('users/index', { users: matchUsersList });
    },
    create: (req, res) => {
        res.render('users/create');
    },
    postcreate: (req, res) => {
        req.body.uid = db.get('users').size() + 1 + '';
        db.get('users')
            .push(req.body)
            .write()
        res.redirect('/');
    },
    detail: (req, res) => {
        let q = req.params.uid;
        let user1 = db.get("users")
            .find({ "uid": q })
            .value();
        //console.log(user);               
        res.render('users/detail', { user: user1 });
    }
}