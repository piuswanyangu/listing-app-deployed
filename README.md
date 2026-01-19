📘 ALX Listing App – README.md
# 🏡 ALX Listing App

A modern Airbnb-style listing application built as part of the ALX Software Engineering program.  
This milestone focuses on **scaffolding the project**, creating **reusable components**, establishing a **scalable folder structure**, and using powerful modern tools like **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**.

---

## 🚀 Project Overview

The **ALX Listing App** serves as the foundation for a full property listing platform.  
This milestone includes:

- Setting up a production-ready Next.js project.
- Structuring folders for scalability and clean architecture.
- Implementing reusable UI components (e.g., `Card`, `Button`).
- Creating TypeScript interfaces for type safety and maintainability.
- Organizing assets for easy usage.
- Ensuring code quality via ESLint.
- Connecting the project setup to the given Figma design.

This project represents the "starting point" for building a complete real-world application.

---

## 🎯 Learning Objectives

By completing this milestone, you will:

- Scaffold a modern Next.js project using best practices.
- Use **TypeScript** for type-safe, scalable code.
- Configure and apply **TailwindCSS** for styling responsive UI.
- Create reusable **React components** aligned with professional standards.
- Manage project assets and constants cleanly.
- Understand project structure for long-term maintainability.
- Work from a provided **Figma mockup** to rebuild UI components.

---

## 🧰 Tech Stack

- **Next.js 13+** (App Router)
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **ESLint**
- Node.js 16+

---

## 📁 Folder Structure

Below is the recommended project structure:



alx-listing-app/
│
├── app/
│ ├── layout.tsx # Root layout
│ └── page.tsx # Home page using reusable components
│
├── components/
│ ├── Button.tsx # Reusable button component
│ └── Card.tsx # Reusable card component
│
├── interfaces/
│ └── index.ts # TypeScript interfaces (CardProps, ButtonProps, etc.)
│
├── constants/
│ └── index.ts # Global constants for the app
│
├── public/
│ └── assets/ # Images, SVGs and icons for UI
│
├── styles/
│ └── globals.css # Tailwind base styles
│
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json # TypeScript configuration
├── package.json
└── README.md


---

## 🛠 Installation & Setup

### 1. **Clone the repository**
```bash
git clone https://github.com/piuswanyangu/alx-listing-app.git
cd alx-listing-app

2. Install dependencies
npm install

3. Run the development server
npm run dev


The app will be live at:
👉 http://localhost:3000

🧱 Reusable Components
✔ Card Component

Displays a property listing (image, title, price).

✔ Button Component

A standard styled button using TailwindCSS.

🧩 TypeScript Interfaces

All reusable interfaces are stored inside:

interfaces/index.ts


Example:

export interface CardProps {
  title: string;
  image: string;
  price: number;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}


This ensures consistent typing across components.

🎨 TailwindCSS Configuration

Tailwind is fully integrated using:

import "@tailwindcss"


The tailwind.config.js is optimized to scan:

./app/**/*.{js,ts,jsx,tsx}
./components/**/*.{js,ts,jsx,tsx}

🖼 Assets

All assets (images, icons, illustrations) are stored in:

public/assets/


This ensures clean imports like:

<img src="/assets/house.jpeg" />


or using Next.js optimized <Image />.

📐 Figma Mockup

This milestone also involves translating UI elements from the provided Figma design into reusable components using TailwindCSS.

The focus is on:

Layout structure

Consistent spacing

Typography

Responsive component behavior

🎯 Key Best Practices Followed

Modular folder organization

Reusable, isolated components

Type safety with TypeScript

Clear naming conventions

Separation of concerns

Consistent asset management

ESLint enforced code quality

📦 Production Readiness

This project is structured for future expansion, including:

Authentication

Property listing pages

Filters & search

Backend integration

Database support (e.g., PostgreSQL)

API routes

Deployment to Vercel

👨‍💻 Author

Pius Wanyangu
ALX Software Engineering Student
Backend Developer • Full-Stack Learner
Email: ndubipius96@gmail.com