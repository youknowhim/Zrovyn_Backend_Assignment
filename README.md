# 💰 Finance Backend API

A backend system for managing financial records with role-based access control (RBAC).
Built using Node.js, Express, and MySQL, this project demonstrates secure API design, authentication, and data handling.

---

## 🚀 Features

* 🔐 JWT Authentication (Login/Register)
* 👥 Role-Based Access Control (Admin, Analyst, Viewer)
* 💳 Financial Records Management (CRUD)
* 📊 Dashboard Summary APIs (Income, Expense, Net)
* 🔍 Search Functionality
* 📄 Pagination (5 records per page)
* 🚦 Rate Limiting (Login protection)
* 📚 API Documentation using Swagger
* ⚙️ Environment-based Configuration (.env)

---
live URL of API documentation if run locally
http://localhost:5000/api-docs/#/Finance/get_api_finance
## 🏗️ Tech Stack

* Node.js
* Express.js
* MySQL
* JWT (jsonwebtoken)
* bcrypt.js (password hashing)
* Swagger (API docs)

---

## 📁 Project Structure

finance-backend/
│
├── config/           # DB & Swagger config
├── controllers/      # Business logic
├── middleware/       # Auth, role, rate limit
├── models/           # DB queries (optional)
├── routes/           # API routes
├── app.js
├── server.js
└── .env

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd finance_backend
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=finance_db
JWT_SECRET=supersecretkey
PORT=5000
```

---

### 4. Setup MySQL Database

Run:

```sql
CREATE DATABASE finance_db;

USE finance_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('viewer','analyst','admin') DEFAULT 'viewer',
  status ENUM('active','inactive') DEFAULT 'active'
);

CREATE TABLE records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  amount DECIMAL(10,2),
  type ENUM('income','expense'),
  category VARCHAR(100),
  note TEXT,
  date DATE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

### 5. Run the server

```bash
npm start
```

Server runs on:

```
http://localhost:5000
```

---

## 📚 API Documentation

Swagger UI available at:

```
http://localhost:5000/api-docs
```

---

## 🔐 Authentication

* Login returns JWT token
* Use token in protected routes:

```
Authorization: Bearer <token>
```

---

## 📌 API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Finance

* POST `/api/finance` (Admin only)
* GET `/api/finance` (Pagination + Search)
* DELETE `/api/finance/:id`

### Dashboard

* GET `/api/dashboard`

---

## 🔍 Search & Pagination

Example:

```
GET /api/finance?search=salary&page=1&limit=5
```

---

## 🚦 Rate Limiting

* Applied on login API
* Prevents brute-force attacks

---

## 🧠 Key Concepts Implemented

* Role-Based Access Control (RBAC)
* JWT Authentication & Authorization
* Secure password hashing
* REST API design
* Pagination & filtering
* Error handling & validation

---

## 💬 Author

Pallav Rai

---

## 📌 Note

This project is built as part of a backend internship assignment to demonstrate backend architecture, API design, and security practices.
