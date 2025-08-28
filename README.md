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

### 2. Clone & Install

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

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=bvat_db
DB_USER=your_username
DB_PASSWORD=your_password
```

### 4. Setup Database

```bash
createdb bvat_db
npm run migrate
npm run seed
```

### 5. Run the Server

```bash
npm start
```

For development (with auto-restart):

```bash
npm run dev
```

---

## 🧪 Testing the API

### Option 1: Node test script

```bash
npm install axios
node api-tests.js
```

### Option 2: cURL

```bash
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
    └── pagination.js   # Pagination helper
```

---

## 🔧 Development Commands

* Run migrations → `npm run migrate`
* Rollback migrations → `npm run migrate:rollback`
* Run seeds → `npm run seed`

---

## 🐛 Troubleshooting

**Database connection refused**

* Ensure PostgreSQL is running
* Verify `.env` credentials
* Check database exists (`createdb bvat_db`)

**Module not found**

* Check `require` paths
* Ensure files exist

**Validation errors**

* Ensure request body matches expected schema

---

## 📝 Notes

* Modular architecture: **routes, controllers, services, models** separated
* Centralized error handling middleware
* Request validation with Joi
* Database migrations & seeds for reproducibility
* Environment-based configuration

---

## 👨‍💻 Author

**Lucky Baraka** — *Future Star in Node.js & Golang (Web Masters)*

> *“I know God gave me this chance, I will use it to make a name for both myself and Web Masters.
> I will use it to be the best engineer there could be. So help me God.”*

---

## 📄 License

This project is licensed under the **ISC License**.

