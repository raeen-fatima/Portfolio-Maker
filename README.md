<div align="center">

# 🚀 FolioForge

### Build • Customize • Publish Your Developer Portfolio

Create stunning, professional portfolio websites without writing repetitive frontend code.

[Live Demo](https://portfolio-maker-plum.vercel.app/) •
[Report Bug](../../issues) •
[Request Feature](../../issues)

</div>

---

## 📖 Overview

**FolioForge** is a modern portfolio builder built with **Next.js**, allowing developers, designers, and students to create, customize, and publish beautiful portfolio websites through an intuitive dashboard.

Instead of spending hours building portfolio websites from scratch, users can simply fill out forms, choose a template, and instantly publish their own shareable portfolio.

---

## ✨ Features

### 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- HTTP Only Cookie Sessions
- Forgot Password
- Password Reset via Email
- Logout

---

### 👤 Portfolio Builder

Build every section individually.

- Hero
- About
- Skills
- Projects
- Experience
- Education
- Certifications
- Contact

---

### 🎨 Multiple Portfolio Templates

- Nova
- Minimal
- Terminal

Each template renders the same portfolio data with a completely different design.

---

### 📊 Dashboard

- Portfolio Overview
- Completion Score
- Portfolio Progress
- Insights
- Portfolio Analytics
- Settings

---

### 📈 Analytics

Track your portfolio performance.

- Total Views
- Weekly Views
- Monthly Views
- Unique Visitors
- Resume Downloads
- GitHub Clicks
- LinkedIn Clicks
- Contact Clicks
- Device Analytics
- Browser Analytics
- Country Analytics
- Traffic Sources
- Top Projects

---

### ⚙ Settings

- Change Portfolio URL
- Publish / Unpublish Portfolio
- Profile Settings
- Password Management
- Delete Portfolio

---

## 🏗 Project Architecture

```
Browser
    │
    ▼
Next.js App Router
    │
    ▼
API Routes
    │
    ▼
Service Layer
    │
    ▼
MongoDB
```

---

## 📂 Folder Structure

```text
src
│
├── app/
│   ├── api/
│   ├── auth/
│   ├── dashboard/
│   └── u/
│
├── components/
│
├── hooks/
│
├── services/
│
├── models/
│
├── validators/
│
├── templates/
│
├── lib/
│
├── utils/
│
└── middleware.js
```

---

## 🧩 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | Full-stack React Framework |
| React | UI Development |
| Tailwind CSS | Styling |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Zod | Validation |
| React Hook Form | Form Management |
| Cloudinary | Image Uploads |
| Nodemailer | Password Reset Emails |
| Sonner | Toast Notifications |
| Lucide React | Icons |

---

## 🔑 Authentication Flow

```
Register
     │
     ▼
Login
     │
     ▼
JWT Token
     │
     ▼
HTTP Only Cookie
     │
     ▼
Protected Dashboard
```

---

## 🏗 Portfolio Builder Flow

```
Hero
  ↓
About
  ↓
Skills
  ↓
Projects
  ↓
Experience
  ↓
Education
  ↓
Certifications
  ↓
Publish
```

---

## 🌍 Public Portfolio Flow

```
Dashboard
     │
     ▼
Publish Portfolio
     │
     ▼
Generate Public URL
     │
     ▼
/u/username
     │
     ▼
Portfolio Visitors
```

---

## 📊 Analytics Flow

```
Visitor
    │
    ▼
PortfolioTracker
    │
    ▼
Analytics API
    │
    ▼
MongoDB
    │
    ▼
Dashboard Analytics
```

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/your-username/folioforge.git
```

---

### Install Dependencies

```bash
npm install
```

---

### Configure Environment Variables

Create a `.env.local` file.

```env
MONGODB_URI=

JWT_SECRET=

NEXT_PUBLIC_APP_URL=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

EMAIL_USER=

EMAIL_PASS=
```

---

### Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📦 API Overview

### Authentication

```
POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout

POST /api/auth/forgot-password

POST /api/auth/reset-password
```

---

### Portfolio

```
GET  /api/dashboard/portfolio/hero

POST /api/dashboard/portfolio/hero

GET  /api/dashboard/portfolio/about

POST /api/dashboard/portfolio/about

...
```

---

### Dashboard

```
GET /api/dashboard/overview

GET /api/dashboard/analytics

GET /api/dashboard/settings

PUT /api/dashboard/settings
```

---

## 📸 Screenshots

> Screenshots will be added after the final UI polish.

- Landing Page
- Dashboard
- Portfolio Builder
- Analytics
- Settings
- Nova Template
- Minimal Template
- Terminal Template

---

## 🚧 Roadmap

### ✅ Completed

- Authentication
- Portfolio Builder
- Dashboard
- Analytics
- Settings
- Portfolio Templates
- Public Portfolio URLs

### 🚀 Coming Soon

- GSAP Animations
- Portfolio Sharing
- Disable Public Sharing
- Portfolio Themes
- Custom Domains
- AI Portfolio Generator
- Drag & Drop Builder

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

If you'd like to contribute:

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Raeen Fatima**

- GitHub: https://github.com/raeen-fatima
- LinkedIn: https://linkedin.com/in/raeenfatima

---

<div align="center">

⭐ If you like this project, consider giving it a star!

Made with ❤️ using Next.js

</div>