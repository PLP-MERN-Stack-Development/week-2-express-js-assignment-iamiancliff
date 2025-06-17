# 🛍️ Product API

A simple Express.js REST API for managing an in-memory list of products. This project is designed for learning purposes and demonstrates basic CRUD operations, middleware, pagination, filtering, and search functionality.

## 🚀 Features

- Create, Read, Update, Delete (CRUD) products
- Filter products by category
- Paginate product listings
- Search products by name
- Get product statistics by category
- Middleware for logging and API key authentication
- Structured with clean and modular code

## 📦 Technologies Used

- Node.js
- Express.js
- UUID for unique product IDs
- Custom middleware (auth, logger, error handler)

## 📂 Project Structure

```
project/
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   └── logger.js
├── routes/
│   └── productRoutes.js
├── server.js
├── .env.example
├── README.md
```

## 🛠️ Setup Instructions

1. **Clone the repo**  
```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-iamiancliff.git
cd product-api
```

2. **Install dependencies**  
```bash
npm install
```

3. **Set up environment variables**  
Create a `.env` file using the provided `.env.example` as a template:

```bash
cp .env.example .env
```

Edit `.env` and set your API key value.

4. **Start the server**  
```bash
node server.js
```

The server runs at: `http://localhost:3000`

## 🔐 Authentication

This API uses a simple API key check.

Include this in the **Headers** of your requests:

```
x-api-key: your_secret_key
```

## 📬 API Endpoints

| Method | Endpoint                        | Description                      |
|--------|----------------------------------|----------------------------------|
| GET    | `/api/products`                 | Get all products (supports `category`, `page`, `limit`) |
| GET    | `/api/products/:id`             | Get a product by ID              |
| POST   | `/api/products`                 | Create a new product             |
| PUT    | `/api/products/:id`             | Update an existing product       |
| DELETE | `/api/products/:id`             | Delete a product                 |
| GET    | `/api/products/search/by-name`  | Search products by name          |
| GET    | `/api/products/stats`           | Get product count by category    |

## 📄 Example Requests

- Get paginated electronics:
```
GET /api/products?category=electronics&page=1&limit=2
```

- Search for products by name:
```
GET /api/products/search/by-name?name=laptop
```

- View statistics:
```
GET /api/products/stats
```

## 🙏 Acknowledgements

Built as part of a learning exercise to improve Express.js skills.

---

Happy Coding! 
=======

