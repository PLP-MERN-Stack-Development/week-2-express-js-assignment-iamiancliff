// routes/products.js

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Sample in-memory products database
let products = [
  { id: '1', 
    name: 'Laptop',
    description: '16GB RAM',
    price: 1200, 
    category: 'electronics', 
    inStock: true
  },
  { id: '2',
    name: 'Smartphone',
    description: '128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true 
},
  { id: '3',
    name: 'Coffee Maker',
    description: 'With timer', 
    price: 50, 
    category: 'kitchen',
    inStock: false
  },

  { id: '4',
    name: 'Blender',
    description: 'High speed',
    price: 30,
    category: 'kitchen',
    inStock: true
  },

  { id: '5',
    name: 'Headphones',
    description: 'Noise cancelling',
    price: 150,
    category: 'electronics',
    inStock: true
  },

  { id: '6',
    name: 'Smartwatch',
    description: 'Fitness tracking',
    price: 200,
    category: 'electronics',
    inStock: false
  }
];


// SEARCH products by name
router.get('/search/by-name', (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: 'Please provide a name to search' });

  const results = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  res.json({ results });
});


// PRODUCT STATS (e.g., count by category)
router.get('/stats', (req, res) => {
  const stats = {};

  products.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });

  res.json({
    total: products.length,
    byCategory: stats
  });
});


// 📄 GET all products (supports filtering + pagination)
router.get('/', (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  let filtered = [...products];

  // Optional filtering
  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  // Pagination logic
  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  const paginated = filtered.slice(start, end);

  res.json({
    page: parseInt(page),
    limit: parseInt(limit),
    total: filtered.length,
    data: paginated
  });
});


// GET a single product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  res.json(product);
});


// POST: Add a new product
router.post('/', (req, res) => {
  const newProduct = {
    id: uuidv4(),
    ...req.body
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});


// PUT: Update a product
router.put('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});


// DELETE: Remove a product
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
});


module.exports = router;
