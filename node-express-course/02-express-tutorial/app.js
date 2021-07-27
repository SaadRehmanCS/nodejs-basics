const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.status(200).json(newProducts);
    
})

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const product = products.find((product) => product.id === Number(productID));
    //res.json(product);
    res.json(product)
    console.log(req.params);
});


app.listen(5000, () => {
    console.log('sever is listening');
})