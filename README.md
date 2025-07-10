# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Employee Management App

This is a fully-featured Employee Management Application built with **React (TypeScript)**, designed using **ShadCN UI**, and integrates **Clark authentication**, **EmailJS** for email notifications, and **Toaster** for UI feedback. The application supports full **CRUD** operations and includes **pagination** for efficient data handling.

---

## 🚀 Features

* **User Authentication** using **Clark**
* **Create, Read, Update, Delete** operations for employees
* **Pagination** for managing large employee datasets
* **ShadCN UI** components for consistent and accessible design
* **Email notifications** via **EmailJS**
* **Toast notifications** for real-time feedback
* **Responsive** and **accessible** interface

---

## 🛠️ Setup Instructions

### Prerequisites

* Node.js (v18+ recommended)
* npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/employee-management-app.git
cd employee-management-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

> 🔐 Ensure you never commit your `.env` file to version control.

### 4. Start the App

```bash
npm run dev
# or
yarn dev
```

The app will run at `http://localhost:5173` by default.

---

## 💾 Data Persistence

Currently, the app uses **local state management** combined with **CRUD logic** via API or mock backend (depending on your setup). For a real-world deployment, integrating a backend like **Firebase**, **Supabase**, or **Express + MongoDB/PostgreSQL** is recommended.

---

## ✨ Design Approach

* **Modular Components**: Every UI section is broken into clean, reusable React components using TypeScript for type safety.
* **ShadCN UI**: Used for all UI components, ensuring consistency, accessibility, and dark/light theme support.
* **Clark Authentication**: Used for secure user login and session handling.
* **Toaster**: Provides real-time feedback for actions like adding/editing/deleting employees.
* **EmailJS**: Sends email notifications to users/admins based on specific triggers (e.g., new employee added).
* **Pagination**: Enhances performance and UX when displaying large datasets.

