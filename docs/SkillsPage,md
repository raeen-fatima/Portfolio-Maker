# Skills Section

The Skills section allows users to manage the technologies, frameworks, tools, and programming languages displayed in their portfolio. It provides a simple interface for adding, viewing, and deleting skills while keeping the portfolio data synchronized with MongoDB.

---

## Features

### Add Skills

Users can add new skills from the dashboard.

Examples:

```text
React
Next.js
MongoDB
Tailwind CSS
Node.js
```

Validation is handled using Zod.

---

### View Skills

All saved skills are displayed in a responsive grid layout.

Each skill is rendered as an individual card containing:

* Skill name
* Delete action

---

### Delete Skills

Skills can be removed safely using a reusable confirmation modal.

Workflow:

```text
Click Delete
      ↓
Confirmation Modal Opens
      ↓
Confirm Delete
      ↓
Skill Removed
      ↓
UI Refreshes Automatically
```

---

### Duplicate Protection

The API prevents duplicate skills from being added.

Example:

```text
React
react
REACT
```

Only one entry is allowed.

---

## Architecture

```text
Dashboard
│
├── Skills Page
│
├── Skill Form
│     └── Add Skill
│
├── Skill Card
│     └── Delete Skill
│
└── Delete Modal
      └── Confirmation UI
```

---

## Folder Structure

```text
src
│
├── app
│   └── dashboard
│       └── skills
│           └── page.jsx
│
├── components
│   ├── skills
│   │   ├── SkillForm.jsx
│   │   └── SkillCard.jsx
│   │
│   └── ui
│       └── DeleteModal.jsx
│
├── app
│   └── api
│       └── portfolio
│           └── skills
│               └── route.js
│
└── validators
    └── portfolio.js
```

---

## Validation

Skills are validated using Zod before submission.

```javascript
export const skillSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Skill name is required")
    .max(30, "Skill name is too long"),
});
```

Rules:

* Minimum 2 characters
* Maximum 30 characters
* Automatically trims spaces

---

## API Endpoints

### Get Skills

```http
GET /api/portfolio/skills
```

Returns all skills belonging to the authenticated user.

---

### Add Skill

```http
POST /api/portfolio/skills
```

Request:

```json
{
  "name": "Next.js"
}
```

Response:

```json
{
  "success": true,
  "message": "Skill added successfully"
}
```

---

### Delete Skill

```http
DELETE /api/portfolio/skills
```

Request:

```json
{
  "skillId": "skill_id"
}
```

Response:

```json
{
  "success": true,
  "message": "Skill deleted successfully"
}
```

---

## Database Structure

```javascript
skills: [
  {
    _id: ObjectId,
    name: String,
  },
];
```

Example:

```json
[
  {
    "_id": "123",
    "name": "React"
  },
  {
    "_id": "456",
    "name": "Next.js"
  }
]
```

---

## User Workflow

```text
Open Skills Dashboard
          ↓
Add New Skill
          ↓
Validate Input
          ↓
Save To Database
          ↓
Refresh Skills List
          ↓
Display Updated Skills
```

Delete Flow:

```text
Click Delete
          ↓
Open Confirmation Modal
          ↓
Confirm Action
          ↓
Remove Skill
          ↓
Refresh Skills List
```

---

## Future Improvements

* Skill categories (Frontend, Backend, Database, Tools)
* Skill proficiency levels
* Drag-and-drop sorting
* Skill search and filtering
* Skill icons/logos
* Skill endorsements
* Public portfolio skill analytics

---

## Completed Functionality

* [x] Add Skill
* [x] View Skills
* [x] Delete Skill
* [x] Input Validation
* [x] Duplicate Prevention
* [x] Confirmation Modal
* [x] Responsive UI
* [x] MongoDB Integration
* [x] Authentication Protection
* [x] Real-time UI Refresh

The Skills section is now fully functional and production-ready for the Portfolio Maker platform. 🚀
