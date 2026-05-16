# Notification System Dashboard

A responsive notification management dashboard built using Next.js and Material UI.

## Features

- View all notifications
- Priority notifications page
- Notification type filtering
- Pagination support
- Responsive UI for desktop and mobile
- Professional dashboard design
- Priority calculation based on notification type
- API integration using async services
- Reusable component architecture

---

## Tech Stack

- Next.js
- React
- TypeScript
- Material UI (MUI)

---

## Notification Types

- Placement
- Result
- Event

---

## Priority Logic

Notifications are prioritized using weighted scores:

| Type | Priority |
|------|----------|
| Placement | Highest |
| Result | Medium |
| Event | Lowest |

---

## Screenshots

### Home Page

![Home Page](home%20page.png)

### Filter Notifications

![Filter Notifications](text%20bar.png)

### Priority Notifications

![Priority Notifications](Priority%20page.png)

---

## Project Structure

```txt
src/
 ├── app/
 │    ├── page.tsx
 │    └── priority/
 │         └── page.tsx
 │
 ├── components/
 │    ├── Navbar.tsx
 │    ├── NotificationCard.tsx
 │    └── FilterBar.tsx
 │
 ├── services/
 │    └── notificationService.ts
 │
 └── utils/
      └── priorityCalculator.ts  


