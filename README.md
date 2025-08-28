# Biovision Africa Trust (BvAT) Backend API

A Node.js/Express backend service for Biovision Africa Trust's Agroecology consumer website.

## 🚀 Features

- RESTful API for products, outlets, and FAQs
- PostgreSQL database with Knex.js query builder
- Joi validation for input data
- Search functionality across products and outlets
- Pagination and filtering support
- Comprehensive error handling

## 📋 API Endpoints

### Products
- `GET /api/products` - Get all products (with optional category/certification filters and pagination)
- `POST /api/products` - Create a new product

### Outlets
- `GET /api/outlets` - Get all outlets (with optional region filter)

### FAQs
- `GET /api/faqs` - Get all FAQs (with optional language filter)

### Search
- `GET /api/search?q=:query` - Search across products and outlets

### Stats
- `GET /api/stats` - Get database statistics (counts of products, outlets, FAQs)

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM/Query Builder**: Knex.js
- **Validation**: Joi
- **Environment Management**: dotenv

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd bvat-backend


2. Install dependencies
bash
npm install
3. Set up environment variables
bash
cp .env.sample .env
Edit .env with your database credentials:

text
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=bvat_db
DB_USER=your_username
DB_PASSWORD=your_password
4. Create the database
bash
createdb bvat_db
5. Run migrations
bash
npm run migrate
6. Seed the database
bash
npm run seed
7. Start the server
bash
npm start
For development with auto-restart:

bash
npm run dev
🧪 Testing the API
Using the test script
bash
# Install axios if not already installed
npm install axios

# Run the test script
node api-tests.js
Using cURL commands
bash
# Make the script executable (Unix-based systems)
chmod +x test-api.sh

# Run the tests
./test-api.sh
Manual testing with cURL
bash
# Get statistics
curl http://localhost:3000/api/stats

# Get products with pagination
curl "http://localhost:3000/api/products?page=1&limit=5"

# Create a product
curl -X POST "http://localhost:3000/api/products" \
  -H "Content-Type: application/json" \
  -d '{ "name": "Organic Kale", "category": "Vegetable", "certification": "Organic", "description": "Leafy greens." }'

# Search
curl "http://localhost:3000/api/search?q=organic"
📁 Project Structure
text
src/
├── app.js                 # Main application setup
├── server.js             # Server entry point
├── config/
│   └── db.js            # Database configuration
├── db/
│   ├── knexfile.js      # Knex configuration
│   ├── migrations/      # Database migrations
│   └── seeds/           # Database seeds
├── modules/
│   ├── products/        # Product-related files
│   ├── outlets/         # Outlet-related files
│   ├── faqs/           # FAQ-related files
│   └── search/         # Search functionality
├── middlewares/
│   └── errorHandler.js  # Error handling middleware
└── utils/
    └── pagination.js    # Pagination utilities
🔧 Development
Running migrations
bash
npm run migrate
Rolling back migrations
bash
npm run migrate:rollback
Running seeds
bash
npm run seed
🐛 Troubleshooting
Common Issues
Database connection refused

Ensure PostgreSQL is running

Check your .env file has correct credentials

Verify the database exists: createdb bvat_db

Module not found errors

Check all file paths in require statements

Ensure all directories exist

Validation errors

Check request body matches expected schema

📝 Implementation Notes
Used modular architecture with separation of concerns (routes, controllers, services, models)

Implemented proper error handling middleware

Added input validation using Joi

Configured environment-based configuration

Set up database migrations and seeds for reproducible setup

Added comprehensive API documentation

👨‍💻 Author
Lucky Baraka -> Web Masters

📄 License
This project is licensed under the ISC License.

text

## 4. Package.json Scripts Update

Add test scripts to your `package.json`:

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js",
  "migrate": "knex migrate:latest",
  "seed": "knex seed:run",
  "migrate:rollback": "knex migrate:rollback",
  "test:api": "node api-tests.js",
  "test:curl": "./test-api.sh"
}
5. Running the Tests
Make sure your server is running:

bash
npm start
In a new terminal, run the tests:

bash
npm run test:api
Or if you prefer cURL:

bash
npm run test:curl