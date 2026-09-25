# AI-Powered Personal Diet Planner with Cloud Storage

## Project Overview

The AI-Powered Personal Diet Planner is a web-based application that helps users create and manage personalized diet plans based on their goals, diet preferences, and activity level.

The project provides user authentication, profile management, diet plan generation, saved plans, dashboard management, and cloud file storage functionality.

## Features

- User Registration and Login
- User Authentication using Firebase
- User Profile Management
- Personalized Diet Plan Generation
- Saved Diet Plans
- Dashboard
- Cloud File Storage
- Upload Food / Meal Images
- Logout Functionality

## Technology Stack

### Frontend
- React
- JavaScript
- HTML
- CSS

### Backend / Cloud
- Firebase Authentication
- Firebase Firestore
- Firebase Storage

### Development Tools
- Visual Studio Code
- Git
- GitHub

## Application Flow

1. User Registration / Login
2. User Profile
3. Generate Diet Plan
4. Save Diet Plan
5. View Saved Plans
6. Dashboard
7. Cloud File Management

## Diet Plan

The application generates a sample personalized meal plan based on:

- Goal
- Diet Preference
- Activity Level

The generated plan includes:

- Breakfast
- Lunch
- Snack
- Dinner
- Hydration

## Project Structure

```text
AI-powered diet planning system
│
├── frontend
│   └── src
│       ├── App.jsx
│       ├── Dashboard.jsx
│       ├── Profile.jsx
│       ├── GenerateDietPlan.jsx
│       ├── SavedPlans.jsx
│       ├── CloudFiles.jsx
│       ├── Login.jsx
│       └── firebase.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
