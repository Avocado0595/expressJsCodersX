const db = require('../db');

module.exports = {
    index: (req, res) => {
        let listProduct = db.get("products").value();
        let currentPage = req.query.page || 1;
        const itemPerPage = 8;
        let startItem = currentPage*itemPerPage - itemPerPage;
        let endItem = startItem + itemPerPage > listProduct.length ? listProduct.length-1 : startItem + itemPerPage;
        res.render('products/products', { products:listProduct .slice(startItem, endItem) });
    },
}