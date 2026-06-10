# Dashboard Module Documentation

## Overview

The Dashboard is the central workspace of FolioForge where users manage and customize their portfolio website.

After successful authentication, users are redirected to the dashboard where they can edit different sections of their portfolio.

---

## Dashboard Architecture

```text
User Login
    ↓
JWT Authentication
    ↓
Dashboard Access
    ↓
Portfolio Management
```

---

## Dashboard Layout Structure

```text
Dashboard
│
├── Sidebar
│   ├── Dashboard
│   ├── Hero
│   ├── About
│   ├── Projects
│   ├── Skills
│   ├── Experience
│   ├── Education
│   ├── Templates
│   ├── Preview
│   └── Settings
│
└── Main Content Area
```

---

## Technologies Used

* Next.js App Router
* React
* Tailwind CSS
* JWT Authentication
* MongoDB
* Mongoose

---

## Features Implemented

### Authentication

* User Registration
* User Login
* JWT Token Generation
* Secure Cookie Storage
* Logout Functionality
* Forgot Password
* Reset Password

### Dashboard

* Responsive Sidebar Navigation
* Protected Routes
* Modular Portfolio Sections
* Mobile Responsive Layout

---

## User Flow

```text
User Registers
      ↓
User Logs In
      ↓
JWT Generated
      ↓
Cookie Stored
      ↓
Dashboard Access Granted
      ↓
Portfolio Editing Begins
```

---

## Current Status

Completed:

* Authentication System
* Dashboard Layout
* Sidebar Navigation
* Hero Section Integration

Upcoming:

* About Section
* Projects Section
* Skills Section
* Portfolio Templates
* Portfolio Publishing

```
```
