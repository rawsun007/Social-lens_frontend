# Frontend - Social Lens

This repository contains the frontend for the Social Lens project, built for the Level Supermind Hackathon. The application provides an interactive user interface to display insights about social media engagement, including an AI chatbot for personalized assistance.

## Features

- Interactive and user-friendly dashboard for engagement insights.
- AI chatbot for dynamic assistance and data queries.
- Integration with the backend API for fetching and displaying insights.

## Tech Stack

- **React.js** - For building the user interface.
- **Vite** - As the development environment and build tool.
- **HTML & CSS** - For structure and styling.
- **Tailwind CSS** - For utility-first styling.

## Installation and Deployment

Run the following commands step by step to install, configure, and deploy the application:

```bash
# Install dependencies
npm install

# Create the environment file
echo "VITE_API_BASE_URL=http://localhost:5000/api" > .env

# Start the development server
npm run dev

# Build for deployment
npm run build
