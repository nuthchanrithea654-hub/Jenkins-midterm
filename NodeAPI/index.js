const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET APIs
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to FoodExpress API'
  });
});

app.get('/about', (req, res) => {
  res.json({
    project: 'FoodExpress Backend API',
    version: '1.0.0'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

app.get('/api/menu', (req, res) => {
  res.json([
    { id: 1, name: 'Burger', price: 5 },
    { id: 2, name: 'Pizza', price: 8 },
    { id: 3, name: 'Fried Rice', price: 4 }
  ]);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
app.post('/api/orders', (req, res) => {
  res.json({
    message: 'New order created successfully',
    order: req.body
  });
});
app.put('/api/orders/:id', (req, res) => {
  const orderId = req.params.id;

  res.json({
    message: `Order ${orderId} updated successfully`,
    updatedOrder: req.body
  });
});
app.delete('/api/orders/:id', (req, res) => {
  const orderId = req.params.id;

  res.json({
    message: `Order ${orderId} deleted successfully`
  });
});