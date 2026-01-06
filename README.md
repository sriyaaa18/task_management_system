# Secure Task Management System – Backend

This repository contains the **backend** for a Secure Task Management System built using **Node.js, Express, and MongoDB**.

The backend handles **authentication, task management, and security** using simple and industry-accepted practices.  
This project was built as part of an internship / learning assignment.

---

## 🚀 Features

### Authentication
- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Authentication using HTTP-only Cookies
- Auto Login (Session Persistence)

### Task Management
- Create Task
- Read Tasks (User-specific)
- Update Task
- Delete Task
- Task Ownership Enforcement

### Security
- HTTP-only Cookies
- Rate Limiting on Login API
- Protected Routes using Middleware
- Helmet for Secure Headers

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- cookie-parser
- express-rate-limit
- helmet

---

## 📂 Project Folder Structure

```
task_management_system/
│
├── server-clean/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── rateLimiter.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env (not pushed to GitHub)
│
├── README.md
└── .gitignore
```

---

## ▶️ How to Run the Backend

### 1️⃣ Navigate to backend folder
```bash
cd server-clean
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env` file
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the server
```bash
node server.js
```

You should see:
```
DB connected
Server running
```

---

## 🔐 API Usage

### 🔹 Authentication APIs

#### Register User
```
POST /api/auth/register
```
Body:
```json
{
  "name": "tester",
  "email": "tester@gmail.com",
  "password": "123456"
}
```

---

#### Login User
```
POST /api/auth/login
```
Body:
```json
{
  "email": "tester@gmail.com",
  "password": "123456"
}
```

- Sets JWT in **HTTP-only cookie**
- Rate limited to prevent brute-force attacks

---

#### Auto Login (Get Logged-in User)
```
GET /api/auth/me
```

- Uses cookie automatically
- No token required in frontend

---

### 🔹 Task APIs (Protected)

> ⚠️ User must be logged in before accessing these APIs.

---

#### Create Task
```
POST /api/tasks
```
Body:
```json
{
  "title": "Finish backend work",
  "description": "Complete task CRUD APIs"
}
```

---

#### Get All Tasks (User-specific)
```
GET /api/tasks
```

---

#### Update Task
```
PUT /api/tasks/:id
```
Body:
```json
{
  "title": "Updated task title",
  "description": "Updated description"
}
```

---

#### Delete Task
```
DELETE /api/tasks/:id
```

---

## ⏱ Task Timestamps

Tasks automatically include:
- `createdAt`
- `updatedAt`

Handled using Mongoose timestamps.

---

## 🔒 Security Implementation Summary

- Passwords are hashed using bcrypt
- JWT tokens are stored in HTTP-only cookies
- Cookies are validated on every request
- Rate limiting prevents brute-force login attacks
- Helmet secures HTTP headers
- Users cannot access other users’ tasks

---

## ✅ Project Status

- Backend implementation completed
- Tested locally using Postman
- Ready for frontend integration

---

## 🧠 Note

This backend focuses on **clarity, security, and correctness**, avoiding unnecessary complexity.  
The frontend is intentionally minimal to demonstrate backend functionality.
