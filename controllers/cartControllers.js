const db = require('../db');

module.exports = {
    add: (req, res) => {
        const productid = req.params.productId;
        const sessionID = req.signedCookies.sessionId;

        if (!sessionID){
            res.redirect('/products');
            return;
        };
        let numOfProducts = db.get('sessions')
                                .find({sessionId : sessionID})
                                .get('cart.' + productid , 0)
                                .value();
        db.get('sessions')
            .find({sessionId : sessionID})
            .set('cart.' + productid , numOfProducts + 1)
            .write();
            res.redirect('/products');
    }
}