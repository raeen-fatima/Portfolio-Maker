# About Module Documentation

## Overview

The About Module allows users to provide detailed personal and professional information for their portfolio website.

This section helps visitors, recruiters, and clients learn more about the portfolio owner and provides essential contact information.

---

# Features

## About Form

Users can manage:

* Bio
* Location
* Email
* Phone Number
* GitHub Profile
* LinkedIn Profile

All fields are validated before submission.

---

# Live Preview

As users type into the form, the preview updates instantly.

Flow:

```text
User Types
      ↓
React Hook Form
      ↓
useWatch()
      ↓
Live Preview Updates
```

This creates a real-time portfolio building experience.

---

# Authentication Flow

The About section is protected using JWT authentication.

```text
User Login
      ↓
JWT Generated
      ↓
Cookie Stored
      ↓
About API Access
```

Only authenticated users can create, update, or retrieve About data.

---

# Architecture

```text
About Form
      ↓
React Hook Form
      ↓
Zod Validation
      ↓
POST /api/portfolio/about
      ↓
JWT Verification
      ↓
MongoDB
      ↓
Portfolio Updated
```

---

# Database Structure

```javascript
about: {
  bio: String,
  location: String,
  email: String,
  phone: String,
  github: String,
  linkedin: String
}
```

Example:

```javascript
about: {
  bio: "Full Stack Developer passionate about building modern web applications.",
  location: "Remote",
  email: "raeen@example.com",
  phone: "9876543210",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username"
}
```

---

# Validation

Validation is implemented using Zod.

Rules:

## Bio

* Required
* Minimum 20 characters

## Location

* Required

## Email

* Must be a valid email address

## Phone

* Required
* Minimum length validation

## GitHub

* Must be a valid URL

## LinkedIn

* Must be a valid URL

---

# API Endpoints

## POST /api/portfolio/about

Purpose:

Create or update About information.

Flow:

```text
Request
    ↓
Verify JWT
    ↓
Find Portfolio
    ↓
Update About Section
    ↓
Save To MongoDB
    ↓
Success Response
```

Example Request:

```json
{
  "bio": "Full Stack Developer",
  "location": "Remote",
  "email": "user@example.com",
  "phone": "9876543210",
  "github": "https://github.com/user",
  "linkedin": "https://linkedin.com/in/user"
}
```

---

## GET /api/portfolio/about

Purpose:

Retrieve saved About information.

Flow:

```text
Request
    ↓
Verify JWT
    ↓
Find Portfolio
    ↓
Return About Data
```

Example Response:

```json
{
  "success": true,
  "about": {
    "bio": "Full Stack Developer",
    "location": "Remote",
    "email": "user@example.com",
    "phone": "9876543210",
    "github": "https://github.com/user",
    "linkedin": "https://linkedin.com/in/user"
  }
}
```

---

# Auto Fill Functionality

Saved About data automatically loads whenever the page opens.

Flow:

```text
About Page Opens
        ↓
GET /api/portfolio/about
        ↓
Fetch Saved Data
        ↓
reset()
        ↓
Form Populated Automatically
```

Benefits:

* No data loss
* Faster editing experience
* Better user experience

---

# React Hook Form Integration

The module uses:

```javascript
useForm()
useWatch()
reset()
handleSubmit()
```

Purpose:

* Form state management
* Validation handling
* Live Preview
* Auto population of saved data

---

# Technologies Used

* Next.js
* React
* React Hook Form
* Zod
* MongoDB
* Mongoose
* JWT
* Tailwind CSS
* Sonner

---

# CRUD Status

```text
Create  ✅
Read    ✅
Update  ✅
Delete  ⏳ (Future Enhancement)
```

---

# Learning Outcomes

This module demonstrates:

* Form Handling
* Form Validation
* JWT Authentication
* MongoDB CRUD Operations
* API Development
* State Management
* Live Preview Systems
* Auto Fill Forms
* Responsive Dashboard Design

---

# Module Completion Status

```text
About UI                 ✅
Validation               ✅
POST API                 ✅
GET API                  ✅
MongoDB Integration      ✅
Auto Fill                ✅
Live Preview             ✅
Responsive Design        ✅
```

About Module Status: COMPLETED
