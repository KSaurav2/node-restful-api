const getDB = require('./db').getDB;

function findAll() {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM product";
        let query = getDB().query(sql, (err, results) => {
            if (err) reject(err);
            console.log(results);
            resolve(results);
        });
    })
}

function findOne(id) {
    return new Promise((resolve, reject) => {
        let query = `Select * from product where product_id=${id}`;
        getDB().query(query, (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                console.log(results);
                resolve(results);
            }
        })
    })
}

function save(product) {
    return new Promise((resolve, reject) => {
        let query = `insert into product(product_id, product_name, product_price) values (${product.product_id}, '${product.product_name}', ${product.product_price})`;
        getDB().query(query, (err, results) => {
            if(err) {
                reject(err);
            }
            else {
                console.log("record inserted" + results);
                resolve(results);
            }
        })
    })
}

function update(product) {
    return new Promise((resolve, reject) => {
        let query = `update product set product_name='${product.product_name}', product_price=${product.product_price} where product_id=${product.product_id}`;
        getDB().query(query, (err, results) => {
            if(err) {
                reject(err);
            }
            else {
                console.log("record inserted" + results);
                resolve(results);
            }
        })
    })
}

module.exports = {
    findAll,
    findOne,
    save,
    update
};