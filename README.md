# 🌍 Biovision Africa Trust (BvAT) Backend API

A **Node.js + Express** backend service powering **Biovision Africa Trust’s Agroecology consumer website**.

---

## 🚀 Features

* RESTful API for **products, outlets, FAQs, and search**
* **PostgreSQL** database with **Knex.js**
* **Joi** validation for request payloads
* Global **error handling middleware**
* Built-in **pagination & filtering**
* **Search API** across products & outlets
* Database **migrations & seeds**

---

## 📋 API Endpoints

### Products

* `GET /api/products` → Fetch all products (with pagination & optional filters: `category`, `certification`)
* `POST /api/products` → Create a new product

### Outlets

* `GET /api/outlets` → Fetch all outlets (with optional `region` filter)

### FAQs

* `GET /api/faqs` → Fetch FAQs (with optional `language` filter)

### Search

* `GET /api/search?q=:query` → Search across products & outlets

### Stats

* `GET /api/stats` → Fetch database statistics (counts of products, outlets, FAQs)

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL
* **ORM/Query Builder:** Knex.js (+ Objection.js ready)
* **Validation:** Joi
* **Env Management:** dotenv

---

## 📦 Installation & Setup

### 1. Prerequisites

* Node.js `>=14`
* PostgreSQL installed & running
* npm (or yarn)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd bvat-backend
npm install
```

### 3. Configure Environment

Copy sample env file and edit with your credentials:

```bash
cp .env.sample .env
```

`.env`

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
```

---

## 📁 Project Structure

```
src/
├── app.js              # App setup
├── server.js           # Server entry point
├── config/
│   └── db.js           # Database config
├── db/
│   ├── knexfile.js     # Knex configuration
│   ├── migrations/     # Migration files
│   └── seeds/          # Seed files
├── modules/
│   ├── products/       # Products module
│   ├── outlets/        # Outlets module
│   ├── faqs/           # FAQs module
│   └── search/         # Search module
├── middlewares/
│   └── errorHandler.js # Error handler
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