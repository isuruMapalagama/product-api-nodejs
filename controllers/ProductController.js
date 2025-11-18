const Product = require('../models/Product');

class ProductController {
  async index(req, res) {
    try {
      const products = await Product.findAll({
        attributes: ['id', 'name', 'description', 'price', 'image_url'],
      });
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new ProductController();


