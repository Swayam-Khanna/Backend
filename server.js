const express = require('express');
const app = express();
const product = require('./routes/product');
const PORT = 7000;

app.use('/api/products', product);

app.get('/', (req, res) => {
    res.send('Welcome to API! Try visiting /api/products or /api/products/:category/:id');
});

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
