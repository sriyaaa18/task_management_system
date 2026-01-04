# Secure Task Management System – Backend

This repository contains the **backend implementation** of a Secure Task Management System developed as part of a backend internship project.  
The primary focus of this backend is **authentication, security, clean architecture, and scalability**.

---

## Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **MongoDB** – database
- **Mongoose** – MongoDB ODM
- **JWT (JSON Web Tokens)** – Authentication & auto-login
- **bcrypt** – Password hashing
- **dotenv** – Environment variable management

---

## Project Structure
```bash
backend/
│
├── src/
│ ├── app.js
│ ├── server.js
│ ├── controllers/
│ │ └── authController.js
│ ├── routes/
│ │ └── authRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ └── User.js
│ └── utils/
│ └── db.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## File Explanation

---

### `src/server.js`

**Purpose:**  
Acts as the entry point of the backend application.

**Responsibilities:**
- Loads environment variables
- Establishes database connection
- Starts the Express server
- Listens on the configured port

This file is responsible for **bootstrapping the backend**.

---

### `src/app.js`

**Purpose:**  
Configures the Express application.

**Responsibilities:**
- Initializes Express
- Applies global middleware (JSON parsing, security middleware, etc.)
- Registers API routes

---

### `src/utils/db.js`

**Purpose:**  
Handles MongoDB database connection logic.

**Responsibilities:**
- Connects to MongoDB using Mongoose
- Handles successful and failed connections
- Keeps database logic isolated from application logic

---

### `src/models/User.js`

**Purpose:**  
Defines the User schema for MongoDB.

**Responsibilities:**
- Defines user fields such as email and password
- Enforces schema-level validation
- Represents the `users` collection in MongoDB

Passwords stored here are **hashed**, never stored in plain text.

---

### `src/controllers/authController.js`

**Purpose:**  
Contains the core business logic related to authentication.

**Responsibilities:**
- User registration with password hashing
- User login with credential verification
- JWT generation for authenticated users
- Input validation and error handling

This ensures a clean separation between routing and logic.

---

### `src/routes/authRoutes.js`

**Purpose:**  
Defines authentication-related API routes.

**Responsibilities:**
- `POST /register` – Register a new user
- `POST /login` – Authenticate user credentials
- `GET /me` – Auto-login using JWT token

Routes delegate logic to controllers to keep them lightweight.

---

### `src/middleware/authMiddleware.js`

**Purpose:**  
Protects secured routes using JWT authentication.

**Responsibilities:**
- Extracts JWT from request headers
- Verifies token validity
- Attaches authenticated user data to the request
- Prevents unauthorized access

This enables **secure authentication**.

---

## Configuration Files

---

### `.env.example`

**Purpose:**  
Provides a template for required environment variables.

---

## Security Features Implemented

- Password hashing using bcrypt
- JWT-based authentication
- Auto-login using token verification
- Input validation and sanitization
- Secure environment variable handling
- No sensitive files committed to GitHub

---

## How to Run the Project

```bash
npm install
node src/server.js

