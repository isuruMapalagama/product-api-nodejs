require('dotenv').config();
const sequelize = require('../config/database');
const Product = require('../models/Product');

const products = [
  {
     name: 'Wireless Headphones',
    description: 'Comfortable, noise-isolating wireless headphones with 30-hour battery life.',
    price: 99.99,
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Smart Watch',
    description: 'Track fitness and notifications with a vibrant AMOLED display.',
    price: 149.00,
    image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Running Shoes',
    description: 'Lightweight running shoes engineered for comfort and speed.',
    price: 79.50,
    image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Denim Jacket',
    description: 'Classic denim jacket with a modern fit and durable stitching.',
    price: 59.00,
    image_url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with deep bass and splash-proof design.',
    price: 89.95,
    image_url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Laptop Backpack',
    description: 'Durable laptop backpack with multiple compartments and USB charging port.',
    price: 49.99,
    image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Coffee Mug',
    description: 'Ceramic coffee mug with ergonomic handle and heat-resistant design.',
    price: 12.99,
    image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Desk Lamp',
    description: 'Adjustable LED desk lamp with multiple brightness settings.',
    price: 34.50,
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Water Bottle',
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours.',
    price: 24.95,
    image_url: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Sunglasses',
    description: 'Polarized sunglasses with UV400 protection and stylish frame.',
    price: 45.00,
    image_url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
];

async function seed() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');

    // Clear existing products
    await Product.destroy({ where: {}, truncate: true });
    console.log('Cleared existing products.');

    // Insert products
    for (const product of products) {
      await Product.create(product);
    }

    console.log(`Seeded ${products.length} products successfully.`);
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();


