# Aahaas Product API (Node.js)

Simple REST API serving products for the Aahaas Ecommerce frontend, built with Node.js and Express.

## Requirements
- Node.js >= 16.0.0
- npm or yarn
- MySQL

## Setup

1) Install dependencies:
```bash
cd product-api-nodejs
npm install
```

2) Configure environment:
- Copy `.env.example` to `.env` (if `.env.example` exists):
```bash
copy .env.example .env
```
- Or create a `.env` file with the following content:
```
APP_NAME=Aahaas
NODE_ENV=development
PORT=8000
APP_URL=http://127.0.0.1:8000

DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=aahaas_db
DB_USERNAME=root
DB_PASSWORD=

FRONTEND_URL=http://127.0.0.1:5173
```

3) Create database:
- Create a MySQL database named `aahaas_db`.

4) Run migrations:
```bash
npm run migrate
```

5) Seed the database:
```bash
npm run seed
```

6) Start the server:
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The API is available at `http://127.0.0.1:8000/api`.

## Endpoint

- GET `/api/products`
  - Returns: JSON array of `{ id, name, description, price, image_url }`.

## CORS
- Managed in `config/cors.js`.
- Set `FRONTEND_URL` in `.env` (default `http://127.0.0.1:5173`) to allow the Vite dev server.

## Project Structure

```
product-api-nodejs/
├── config/
│   ├── cors.js          # CORS configuration
│   └── database.js      # Sequelize database connection
├── controllers/
│   └── ProductController.js  # Product controller
├── database/
│   ├── migrate.js       # Database migration script
│   └── seed.js          # Database seeder script
├── models/
│   └── Product.js       # Product model
├── routes/
│   └── api.js           # API routes
├── .env                 # Environment variables (create from .env.example)
├── .gitignore
├── package.json
├── README.md
└── server.js            # Main server file
```

## Test the Endpoint

- curl:
```bash
curl http://127.0.0.1:8000/api/products
```

- Postman:
  - GET `http://127.0.0.1:8000/api/products`
  - Expect a 200 response with seeded products.

## Scripts

- `npm start` - Start the server
- `npm run dev` - Start the server in development mode with auto-reload (nodemon)
- `npm run migrate` - Run database migrations
- `npm run seed` - Seed the database with sample products


