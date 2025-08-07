const express = require('express');
const router = express.Router();

const products = {
    electronics: [
        { id: 1, name: 'laptop' },
        { id: 2, name: 'Smart TV' }
    ],
    books: [
        { id: 1, name: 'Morris Manno' },
        { id: 2, name: 'RD Sharma' },
    ]
};

// Route to get all products from all categories
router.get('/', (req, res) => {
    const categoryProduct = Object.values(products).flat();
    res.json(categoryProduct);
});

// Route to get a specific product by category and id
router.get('/:category/:id', (req, res) => {
    const { category, id } = req.params;
    const newProd = products[category];

    if (!newProd) {
        return res.status(404).json({ error: 'Category Not Found' });
    }

    const product = newProd.find((p) => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ error: `Product not found corresponding to id: ${id}` });
    }

    res.status(200).json(product);  // Return the found product only
});

module.exports = router;
