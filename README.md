# Uzence Front-End Assignment 

This repository contains my submission for the Uzence Front-End Internship Assignment.  
The task was to build **two reusable UI components** (`InputField` and `DataTable`) using **React, TypeScript, TailwindCSS, and Storybook**.

---

## 📦 Tech Stack
- **React (TypeScript)** – Component development  
- **TailwindCSS** – Styling with utility classes  
- **Storybook 8** – Documentation & interactive preview  
- **Jest / Testing Library** – Basic tests for props & states (planned)  

---

## 🎯 Components

### 1️⃣ InputField
A flexible, accessible input component with validation states and multiple variants.

**Features**
- Label, placeholder, helper text, error message
- States: `disabled`, `invalid`, `loading`
- Variants: `filled`, `outlined`, `ghost`
- Sizes: `sm`, `md`, `lg`
- Optional: clear button ❌, password toggle 👁️
- Responsive + dark mode support 🌙
- Accessible (ARIA attributes)

---

### 2️⃣ DataTable
A lightweight, responsive data table with essential functionality.

**Features**
- Display tabular data
- Column sorting (asc/desc)
- Row selection (single/multiple)
- Loading & empty states
- Hover styles
- Search & filter example 🔍
- Responsive design
- Extensible for future (pagination, server-side data)

---

## 📘 Storybook Preview
You can explore the components interactively in Storybook here:  

To run locally:
npm run storybook
⚙️ Setup Instructions

Clone the repository

git clone https://github.com/adityavats21/uzence-assignment.git
cd uzence-assignment


Install dependencies

npm install


Run the app locally

npm start


Run Storybook locally

npm run storybook


Build Storybook (for deployment)

npm run build-storybook
📂 Project Structure
uzence-assignment/
 ├── src/
 │   ├── components/
 │   │   ├── InputField.tsx
 │   │   ├── InputField.stories.tsx
 │   │   ├── DataTable.tsx
 │   │   └── DataTable.stories.tsx
 │   ├── App.tsx
 │   └── index.css
 ├── .storybook/
 ├── package.json
 └── README.md
🧠 Approach

Started with InputField: built props from the assignment spec, added extra polish (floating label, password toggle, clearable).

Built DataTable: implemented sorting, row selection, empty/loading states, typed with generics for scalability.

Used TailwindCSS for quick, consistent styling.

Documented everything in Storybook, allowing interactive testing of all props & states.

Ensured accessibility (ARIA labels) and responsive layouts.

Left room for extension (pagination, server-side sorting, more variants).


🙋 Author

Aditya Vats
B.Tech CSE @ VIT (2026) | MERN Stack Developer | DSA Enthusiast
