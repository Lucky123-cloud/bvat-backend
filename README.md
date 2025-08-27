# Biovision Africa Trust (BvAT) Backend Service

A Node.js/Express backend service for Biovision Africa Trust's Agroecology consumer website.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bvat-backend
Install dependencies

bash
npm install
Set up environment variables

bash
cp .env.sample .env
Edit .env with your PostgreSQL database credentials.

Create the database

bash
createdb bvat_db
Run migrations

bash
npm run migrate
Seed the database

bash
npm run seed
Start the server

bash
npm start
For development with auto-restart:

bash
npm run dev
API Endpoints
GET /api/products - Get products with optional category/certification filters and pagination

POST /api/products - Create a new product

GET /api/outlets - Get outlets with optional region filter

GET /api/faqs - Get FAQs filtered by language (default: en)

GET /api/search?q=... - Search across products and outlets

GET /api/stats - Get statistics (counts of products, outlets, FAQs)

Example Usage
List products with pagination:

bash
curl "http://localhost:3000/api/products?page=1&limit=5"
Create a product:

bash
curl -X POST "http://localhost:3000/api/products" \
  -H "Content-Type: application/json" \
  -d '{ "name":"Organic Kale","category":"Vegetable","certification":"Organic","description":"Leafy greens." }'
Search:

bash
curl "http://localhost:3000/api/search?q=organic"
Technologies Used
Node.js

Express.js

PostgreSQL with Knex.js

Joi for validation

text

## Setup and Run Instructions

1. Install dependencies: `npm install`
2. Create a PostgreSQL database named `bvat_db`
3. Update the `.env` file with your database credentials
4. Run migrations: `npm run migrate`
5. Seed the database: `npm run seed`
6. Start the server: `npm start` or `npm run dev` for development

The server will start on port 3000 (or the port specified in your `.env` file).

This implementation provides all the required endpoints with proper validation, error handling, and a clean modular structure. The code is well-organized with separate concerns for models, services, controllers, and routes.
