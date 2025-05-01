# 🌳 Hierarchy Table App

A dynamic hierarchy table built with React and TypeScript.

---

## 🚀 Features

- 📂 Render nested hierarchical data (3 levels deep)
- 🔽 Expand and collapse table rows interactively
- ❌ Remove any row — including parent, child, or grandchild
- 🧹 Duplicates are automatically removed on load
- ⚛️ Clean separation of data and presentation layers
- 📦 Fully typed with TypeScript

---

## 🛠️ Tech Stack

- Vite
- React
- TypeScript
- ESLint + Prettier
- CSS (custom, no framework)

---

## 🧪 Development Notes

- Built with Vite for fast dev experience
- Centralized state management using `useState` in ParentTable
- Toggle buttons are shown only when nested records exist
- filterOutById is used to remove items from all levels

---

## 🔧 Possible improvements

- State management: The app uses `useState` for all interactions, centralized in ParentTable. For larger applications or shared state, this logic can be scaled using tools like Redux.

- Data validation & typing: All transformed values are currently treated as string. A more robust solution would validate and cast values to appropriate types (e.g. boolean, number, Date) based on their shape in the original JSON.

- Recursive rendering: The app supports three levels of hierarchy. Rendering logic could be refactored into a single recursive component to support unlimited nesting depth.

- Testing: Core utilities such as filterOutById and the data transformation logic could be covered by unit tests to ensure stability over time.

- Responsive design: Layout is currently fixed-width and optimized for desktop. Responsive design would improve usability on tablets and mobile devices.

- User feedback: Deletion could be accompanied by a confirmation prompt to enhance UX and reduce accidental data loss.
