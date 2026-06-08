User Visits FolioForge
          ↓
Create Account
          ↓
Dashboard
          ↓
Fill Portfolio Data
          ↓
Choose Template
          ↓
Publish
          ↓
Get Portfolio Link

### Authentication Checklist

```text
MongoDB Connection          ✅
User Registration           ✅
Password Hashing (bcrypt)   ✅
Login                       ✅
JWT Generation              ✅
JWT Cookie Storage          ✅
Protected Dashboard         ✅
Logout                      ✅
Forgot Password             ✅
Reset Password Email        ✅
Reset Password Page         ✅
Password Update             ✅
Route Protection            ✅
```



---


##  Phase: Dashboard Architecture

Instead of directly building forms, let's build the foundation.

### Dashboard Layout

```text
/dashboard
│
├── Sidebar
│
├── Overview
├── Profile
├── Projects
├── Skills
├── Education
├── Experience
├── Social Links
├── Resume
├── Portfolio Settings
└── Preview Portfolio
```

---

## Folder Structure

```text
src/app/dashboard

├── layout.jsx
├── page.jsx

├── profile/page.jsx
├── projects/page.jsx
├── skills/page.jsx
├── education/page.jsx
├── experience/page.jsx
├── social-links/page.jsx
├── resume/page.jsx
├── settings/page.jsx
└── preview/page.jsx
```

---

## Build Order

Industry-wise I'd do:

```text
Dashboard Layout
      ↓
Sidebar
      ↓
Profile Module
      ↓
Projects Module
      ↓
Skills Module
      ↓
Education Module
      ↓
Experience Module
      ↓
Portfolio Preview
```

Because:

```text
Profile + Projects + Skills
```

are the core of every portfolio.

---

## My Recommendation

Let's build:

```text
Dashboard Layout
+
Reusable Sidebar
```

first.

Once the layout exists, every new page automatically gets the same dashboard UI.

```text
Dashboard
 ├── Sidebar
 ├── Topbar
 └── Content Area
```

