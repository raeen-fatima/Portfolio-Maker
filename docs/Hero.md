# Hero Module Documentation

## Overview

The Hero Module is the first customizable section of the FolioForge Portfolio Builder.

It allows users to manage their portfolio introduction, including:

* Full Name
* Professional Title
* Personal Tagline
* Resume Link
* Profile Image

The module provides real-time preview, image upload support, data persistence, and automatic data restoration after refresh.

---

# Features

## Hero Form

Users can enter:

* Name
* Professional Title
* Tagline
* Resume URL

All fields are validated before submission.

---

## Cloudinary Image Upload

Users can upload a profile image using Cloudinary.

Flow:

```text
User Selects Image
        ↓
Cloudinary Upload Widget
        ↓
Image Uploaded
        ↓
Cloudinary Returns Secure URL
        ↓
URL Stored In State
        ↓
URL Saved In MongoDB
```

---

## Live Preview

The Hero Section preview updates instantly while the user types.

Flow:

```text
User Types
      ↓
React Hook Form
      ↓
useWatch()
      ↓
Preview Updates Instantly
```

This provides a website-builder experience instead of a traditional form.

---

## Authentication Flow

Hero data is protected using JWT authentication.

```text
User Login
      ↓
JWT Generated
      ↓
Cookie Stored
      ↓
Hero API Access
```

Only authenticated users can create or update Hero data.

---

# Architecture

```text
Hero Form
     ↓
React Hook Form
     ↓
Zod Validation
     ↓
POST /api/portfolio/hero
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
hero: {
  name: String,
  title: String,
  tagline: String,
  resumeUrl: String,
  image: String
}
```

Example:

```javascript
hero: {
  name: "Raeen Fatima",
  title: "Full Stack Developer",
  tagline: "Building modern web applications",
  resumeUrl: "https://example.com/resume",
  image: "https://res.cloudinary.com/..."
}
```

---

# Validation

Validation is implemented using Zod.

```javascript
name
title
tagline
resumeUrl
```

Rules:

* Name is required
* Title is required
* Tagline is required
* Resume URL must be a valid URL

---

# API Endpoints

## POST /api/portfolio/hero

Purpose:

Create or update Hero data.

Flow:

```text
Request
   ↓
Verify JWT
   ↓
Find Portfolio
   ↓
Create/Update Hero
   ↓
Save To MongoDB
   ↓
Response
```

---

## GET /api/portfolio/hero

Purpose:

Retrieve existing Hero data.

Flow:

```text
Request
   ↓
Verify JWT
   ↓
Find Portfolio
   ↓
Return Hero Data
```

Example Response:

```json
{
  "success": true,
  "hero": {
    "name": "Raeen Fatima",
    "title": "Full Stack Developer",
    "tagline": "Building modern web applications",
    "resumeUrl": "https://example.com",
    "image": "https://res.cloudinary.com/..."
  }
}
```

---

# Auto Fill Functionality

Saved Hero data automatically loads when the page opens.

Flow:

```text
Hero Page Opens
        ↓
GET /api/portfolio/hero
        ↓
Fetch Saved Data
        ↓
reset()
        ↓
Form Populated Automatically
```

Benefits:

* No data loss on refresh
* Better user experience
* Faster editing workflow

---

# Technologies Used

* Next.js
* React
* React Hook Form
* Zod
* MongoDB
* Mongoose
* JWT
* Cloudinary
* next-cloudinary
* Tailwind CSS
* Sonner

---

# Current Status

Completed:

✅ Hero Form

✅ Form Validation

✅ Live Preview

✅ Cloudinary Image Upload

✅ MongoDB Integration

✅ JWT Protected APIs

✅ Create Hero

✅ Read Hero

✅ Update Hero

✅ Auto Fill Saved Data

✅ Responsive Design

---

# Learning Outcomes

Through this module, the following concepts were implemented:

* Form Handling
* Form Validation
* JWT Authentication
* MongoDB CRUD Operations
* Cloudinary Image Uploads
* State Management
* API Development
* Responsive UI Design
* Real-Time Preview Systems

---

# Module Completion Status

```text
Create  ✅
Read    ✅
Update  ✅
Delete  ⏳ (Optional Future Enhancement)
```

Hero Module Status: COMPLETED
