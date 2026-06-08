# FolioForge 

A full-stack Portfolio Builder platform built with Next.js, MongoDB, and JWT Authentication.

Users can create accounts, securely log in, manage their portfolios, and reset their passwords through a complete authentication system.

---

## Features

### Authentication System

* User Registration
* User Login
* JWT-based Authentication
* HTTP-Only Cookie Sessions
* Protected Dashboard Routes
* Logout Functionality
* Forgot Password
* Reset Password via Email
* Password Hashing using bcrypt

### Form Handling

* React Hook Form
* Zod Validation
* Real-time Error Handling
* Toast Notifications

### Database

* MongoDB
* Mongoose ODM

### Email Service

* Nodemailer
* Gmail SMTP Integration

---

## Tech Stack

### Frontend

* Next.js 16
* React
* Tailwind CSS
* React Hook Form
* Zod
* Sonner

### Backend

* Next.js Route Handlers
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* Nodemailer

---

## Project Architecture

```text
User
 │
 ▼
Register Page
 │
 ▼
/api/register
 │
 ▼
bcrypt.hash()
 │
 ▼
MongoDB
```

### Login Flow

```text
User Login
 │
 ▼
/api/login
 │
 ▼
Find User
 │
 ▼
bcrypt.compare()
 │
 ▼
Generate JWT
 │
 ▼
Store Token in HTTP-Only Cookie
 │
 ▼
Dashboard Access
```

### Protected Route Flow

```text
Dashboard Request
 │
 ▼
Read Cookie
 │
 ▼
Verify JWT
 │
 ▼
Valid Token?
 │
 ├── Yes → Allow Access
 │
 └── No → Redirect Login
```

### Forgot Password Flow

```text
Forgot Password
 │
 ▼
Enter Email
 │
 ▼
Generate Reset Token
 │
 ▼
Store Token in Database
 │
 ▼
Send Email
 │
 ▼
User Opens Reset Link
 │
 ▼
Enter New Password
 │
 ▼
Update Password
```

---

## Folder Structure

```text
src
│
├── app
│   ├── api
│   │   ├── register
│   │   ├── login
│   │   ├── logout
│   │   ├── forgot-password
│   │   └── reset-password
│   │
│   ├── login
│   ├── register
│   ├── forgot-password
│   ├── reset-password
│   └── dashboard
│
├── components
│
├── lib
│   ├── db.js
│   ├── jwt.js
│   ├── auth.js
│   └── mail.js
│
├── models
│   └── User.js
│
└── validators
    └── auth.js
```

---

## Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## Authentication Security

### Password Security

Passwords are never stored in plain text.

```text
User Password
      ↓
bcrypt Hash
      ↓
Stored in Database
```

### Session Security

JWT tokens are stored inside HTTP-Only cookies.

```text
JWT
 ↓
HTTP-Only Cookie
 ↓
Protected Routes
```

This prevents client-side JavaScript from accessing authentication tokens.

---

## Future Roadmap

### Portfolio Builder

* Profile Management
* Projects Management
* Skills Management
* Education Management
* Experience Management
* Social Links Management
* Resume Upload
* Portfolio Templates
* Portfolio Preview
* Public Portfolio Pages

### Advanced Features

* AI Portfolio Generator
* Analytics Dashboard
* Custom Domains
* Template Marketplace
* Admin Panel

---

## Author

Developed as a full-stack SaaS portfolio builder project using modern web development technologies.

**Project Name:** FolioForge
