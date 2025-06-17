<<<<<<< HEAD

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
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19793096&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 
>>>>>>> 02984a7ad65686b402f11993ce40420ed9121150
