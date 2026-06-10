# Hero Module Documentation

## Overview

The Hero Section is the first section displayed on the user's portfolio website.

Users can customize:

* Name
* Professional Title
* Tagline
* Resume Link
* Profile Image

The Hero Section includes a live preview system allowing users to see changes instantly.

---

## Hero Architecture

```text
User Inputs Data
        ↓
React Hook Form
        ↓
Zod Validation
        ↓
Submit Request
        ↓
POST /api/portfolio/hero
        ↓
MongoDB
        ↓
Portfolio Updated
```

---

## Hero Data Structure

```javascript
hero: {
  name: String,
  title: String,
  tagline: String,
  resumeUrl: String,
  image: String
}
```

---

## Live Preview Architecture

```text
User Types
      ↓
useWatch()
      ↓
Preview Updates Instantly
      ↓
User Sees Final Result
```

---

## Cloudinary Integration

### Purpose

Cloudinary is used to store user profile images.

Instead of storing images directly in MongoDB:

```text
Image
   ↓
Cloudinary
   ↓
Image URL
   ↓
MongoDB
```

---

## Upload Flow

```text
User Selects Image
         ↓
Cloudinary Upload Widget
         ↓
Image Uploaded
         ↓
Cloudinary Returns URL
         ↓
URL Saved In State
         ↓
URL Stored In MongoDB
```

---

## Cloudinary Components

### ImageUpload Component

Responsible for:

* Opening Cloudinary Widget
* Uploading Images
* Returning Secure URL

### Hero Form

Responsible for:

* Receiving Image URL
* Sending URL to API
* Displaying Live Preview

---

## API Architecture

### POST /api/portfolio/hero

Purpose:

Create or update Hero data.

Flow:

```text
JWT Cookie
      ↓
Verify Token
      ↓
Get User ID
      ↓
Find Portfolio
      ↓
Create / Update Hero
      ↓
Save To MongoDB
```

---

## MongoDB Example

```javascript
{
  userId: "...",

  hero: {
    name: "Raeen Fatima",
    title: "Full Stack Developer",
    tagline: "Building modern web applications",
    resumeUrl: "https://example.com",
    image: "https://res.cloudinary.com/..."
  }
}
```

---

## Technologies Used

* Next.js
* React Hook Form
* Zod
* MongoDB
* Mongoose
* Cloudinary
* next-cloudinary
* Tailwind CSS

---

## Current Features

Completed:

* Hero Form
* Validation
* Live Preview
* Cloudinary Upload
* MongoDB Storage
* Responsive Design

In Progress:

* GET Hero API
* Auto-fill Form
* Image Persistence After Refresh
* Full CRUD Operations

```
```
