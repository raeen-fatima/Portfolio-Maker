# Projects Section

## Overview

The Projects Section allows users to manage and showcase their portfolio projects through a complete CRUD (Create, Read, Update, Delete) system.

Users can:

* Add new projects
* View existing projects
* Edit project details
* Delete projects
* Upload project images using Cloudinary
* Add GitHub and Live Demo links
* Manage technologies used in each project

---

# Project Architecture

```text
Projects Dashboard
       │
       ▼
ProjectForm Component
       │
       ▼
Form Validation (Zod)
       │
       ▼
React Hook Form
       │
       ▼
API Request
       │
       ▼
/api/portfolio/projects
       │
       ▼
JWT Authentication
       │
       ▼
MongoDB Portfolio Document
       │
       ▼
Projects Array Updated
       │
       ▼
Response Returned
       │
       ▼
Projects Refetched
       │
       ▼
UI Updated
```

---

# Database Structure

Each project is stored inside the Portfolio document.

```js
projects: [
  {
    title: String,
    description: String,
    image: String,
    githubUrl: String,
    liveUrl: String,
    technologies: [String]
  }
]
```

---

# Components

## ProjectsPage.jsx

Main dashboard page responsible for:

* Fetching projects
* Displaying project cards
* Managing edit state
* Handling project deletion

### Responsibilities

```text
Load Projects
      ↓
Render Form
      ↓
Render Cards
      ↓
Handle Edit/Delete Actions
```

---

## ProjectForm.jsx

Handles project creation and updating.

### Features

* React Hook Form integration
* Zod validation
* Cloudinary image upload
* Create project
* Update project
* Auto-fill fields during editing

### Workflow

```text
Fill Form
    ↓
Validate Input
    ↓
Upload Image
    ↓
Submit Form
    ↓
POST or PUT Request
    ↓
Save Project
    ↓
Refresh Project List
```

---

## ProjectCard.jsx

Displays project information.

### Features

* Project image preview
* Technologies display
* GitHub link
* Live Demo link
* Edit menu
* Delete confirmation modal

### Workflow

```text
Project Card
      ↓
Three Dot Menu
      ↓
 ┌──────────────┐
 │ Edit Project │
 │ Delete       │
 └──────────────┘
```

---

# CRUD Operations

## Create Project

```text
User fills form
       ↓
POST /api/portfolio/projects
       ↓
Project added to MongoDB
       ↓
Success response
```

---

## Read Projects

```text
Page loads
      ↓
GET /api/portfolio/projects
      ↓
Projects fetched
      ↓
Cards rendered
```

---

## Update Project

```text
User clicks Edit
       ↓
Form auto-populated
       ↓
User updates data
       ↓
PUT /api/portfolio/projects
       ↓
Project updated
       ↓
Projects refreshed
```

---

## Delete Project

```text
User clicks Delete
       ↓
Confirmation Modal
       ↓
DELETE /api/portfolio/projects
       ↓
Project removed
       ↓
Projects refreshed
```

---

# Cloudinary Integration

Project images are uploaded using Cloudinary.

### Upload Flow

```text
Select Image
      ↓
Cloudinary Upload Widget
      ↓
Cloudinary Storage
      ↓
Image URL Returned
      ↓
Saved in MongoDB
      ↓
Displayed in Project Card
```

---

# API Endpoints

## GET

```http
/api/portfolio/projects
```

Fetch all user projects.

---

## POST

```http
/api/portfolio/projects
```

Create a new project.

---

## PUT

```http
/api/portfolio/projects
```

Update an existing project.

---

## DELETE

```http
/api/portfolio/projects
```

Delete a project.

---

# Validation

Project data is validated using Zod.

### Validation Rules

* Title is required
* Description is required
* GitHub URL must be valid
* Live URL must be valid
* Technologies are required
* Image is uploaded separately through Cloudinary

---

# Technologies Used

* Next.js
* React
* MongoDB
* Mongoose
* React Hook Form
* Zod
* Cloudinary
* Tailwind CSS
* JWT Authentication

---

# Current Status

✅ Create Project

✅ Read Projects

✅ Update Project

✅ Delete Project

✅ Cloudinary Image Upload

✅ Project Preview Cards

✅ Edit Functionality

✅ Delete Confirmation Modal

✅ MongoDB Integration

✅ Form Validation

Projects Module is fully functional and production-ready.
