# MARVOS - Corporate Branding & Blog Management System

![Homepage Screenshot](./screenshots/homepage-desktop.png)

A complete MERN stack application featuring a professional corporate branding landing page and a fully functional blog management system with user authentication.

## 🚀 Live Demo

[Add your deployed link here if available]

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Admin Access](#admin-access)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Assumptions Made](#assumptions-made)
- [Future Improvements](#future-improvements)
- [License](#license)

## ✨ Features

### Task 1: Landing Page (Frontend)
- ✅ Fully responsive black/white corporate branding design
- ✅ Hero section with CTA buttons
- ✅ Statistics section with key metrics
- ✅ Services section (6 professional services)
- ✅ About section with company information
- ✅ Testimonials section with client reviews
- ✅ Contact form with validation
- ✅ Footer with social media links
- ✅ Smooth scroll navigation
- ✅ Mobile-friendly hamburger menu
- ✅ Animations and transitions

### Task 2: Admin Authentication
- ✅ User registration system
- ✅ Admin login with email and password
- ✅ Password hashing using bcrypt
- ✅ JWT authentication
- ✅ JWT stored in localStorage
- ✅ Protected routes (redirect to login if not authenticated)
- ✅ Logout functionality
- ✅ Seed script to create initial admin user

### Task 3: Blog Management (Admin Panel)
- ✅ Complete CRUD operations (Create, Read, Update, Delete)
- ✅ Blog fields:
  - Title (required)
  - Slug/URL (auto-generated from title, editable)
  - Cover Image URL
  - Content/Body
  - Category
  - Tags (comma-separated)
  - Status (Draft/Published)
  - Created At/Updated At timestamps
- ✅ Clean admin dashboard with table view
- ✅ Edit blog posts with pre-filled form
- ✅ Delete with confirmation prompt
- ✅ Draft and published status toggle

### Bonus: Public Blog Page
- ✅ Public page listing all published blogs
- ✅ Individual blog detail page accessible via slug
- ✅ View counter for each blog post
- ✅ Category and tags display
- ✅ Responsive blog cards

## 🛠️ Tech Stack

### Frontend
- **React.js 18** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Routing and navigation
- **Tailwind CSS** - Styling and responsive design
- **Axios** - API calls and HTTP requests
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Nodemon** - Auto-restart server during development
- **Postman** - API testing (optional)

## 📁 Project Structure
corporate-website/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ │ ├── Navbar.jsx
│ │ │ ├── HeroSection.jsx
│ │ │ ├── StatsSection.jsx
│ │ │ ├── ServicesSection.jsx
│ │ │ ├── AboutSection.jsx
│ │ │ ├── TestimonialsSection.jsx
│ │ │ ├── CTASection.jsx
│ │ │ ├── Footer.jsx
│ │ │ ├── BlogForm.jsx
│ │ │ └── PrivateRoute.jsx
│ │ ├── pages/ # Page components
│ │ │ ├── HomePage.jsx
│ │ │ ├── BlogPage.jsx
│ │ │ ├── BlogDetailPage.jsx
│ │ │ ├── RegisterPage.jsx
│ │ │ ├── AdminLogin.jsx
│ │ │ └── AdminDashboard.jsx
│ │ ├── context/ # React context
│ │ │ └── AuthContext.jsx
│ │ ├── services/ # API services
│ │ │ └── axiosConfig.js
│ │ ├── styles/ # CSS files
│ │ │ └── index.css
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ ├── package.json
│ ├── vite.config.js
│ └── tailwind.config.js
├── server/ # Node.js backend
│ ├── models/ # Mongoose models
│ │ ├── User.js
│ │ └── Blog.js
│ ├── routes/ # API routes
│ │ ├── auth.js
│ │ └── blog.js
│ ├── controllers/ # Route controllers
│ │ ├── authController.js
│ │ └── blogController.js
│ ├── middleware/ # Custom middleware
│ │ └── auth.js
│ ├── seed.js # Admin user seed script
│ ├── server.js
│ ├── package.json
│ └── .env.example
├── screenshots/ # Application screenshots
├── .gitignore
└── README.md

## 📥 Installation

### Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local or Atlas) - [Download](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/atlas)
- **Git** - [Download](https://git-scm.com/)

### Step-by-Step Setup

#### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/corporate-website.git
cd corporate-website