const productsDB = require('../../db/products/all-products.json');

const products = (response) => {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    response.write(JSON.stringify(productsDB));
}
module.exports = products;