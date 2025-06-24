# 08reactRouter

This project demonstrates the use of React Router in a React application built with Vite. It includes multiple components and pages to showcase routing, navigation, hooks, and data loading features.

## Features
- Client-side routing with React Router
- Nested routes and layouts
- Data fetching using loader functions
- Example components: Home, About, Contact, User, Github, and more
- Tailwind CSS for styling
- Demonstrates use of React hooks (useState, useEffect, useLoaderData)

## Getting Started

### Installation
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

### Project Structure
- `src/components/` - Contains all the React components organized by feature
- `src/App.jsx` - Main app component with route definitions
- `src/Layout.jsx` - Layout component for nested routes
- `src/index.css` & `src/App.css` - Styling files

## Example Routes
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/user/:username` - Dynamic user page
- `/github` - Github user info (with data loader)

## Concepts Used

### React Router
- **Routes & Nested Routes:** Define navigation paths and nested layouts for different pages.
- **Loader Functions:** Fetch data before rendering a route (e.g., Github user info).
- **Dynamic Routing:** Use URL parameters (e.g., `/user/:username`) to render user-specific content.

### React Hooks
- **useState:** Manage local component state (e.g., form inputs, toggles).
- **useEffect:** Perform side effects such as data fetching or subscriptions.
- **useLoaderData:** Access data loaded by route loaders (used in the Github component).

### Components Overview
- **App.jsx:** Main entry, sets up all routes and navigation.
- **Layout.jsx:** Shared layout for nested routes (header, footer, etc.).
- **Home.jsx, About.jsx, Contact.jsx:** Simple page components for demonstration.
- **User.jsx:** Dynamic user page, uses route parameters.
- **Github.jsx:** Fetches and displays GitHub user data using a loader and `useLoaderData`.
- **Header/Footer:** Navigation and layout structure.

### Styling
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.

## Technologies Used
- React
- React Router DOM
- Vite
- Tailwind CSS

## Loader Functions in React Router

A **loader** in React Router is a special function used to fetch data before rendering a route. Loaders allow you to load data on the server or client side, and the data is then made available to your component via the `useLoaderData` hook.

### How Loaders Work
- Loaders are defined as async functions and attached to routes in your route configuration.
- When a route is matched, the loader runs before the component renders.
- The data returned by the loader is accessible in the component using `useLoaderData()`.

### Example
```jsx
// Define a loader function
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/AbhishekJaiswal6822");
  return response.json();
};

// Use the loader in your route
<Route path="/github" element={<Github />} loader={githubInfoLoader} />

// Access the data in your component
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  return <div>Followers: {data.followers}</div>;
}
```

### Benefits
- Ensures data is available before rendering the component
- Simplifies data fetching logic
- Works well with server-side rendering and code splitting

For more details, see the [React Router documentation on loaders](https://reactrouter.com/en/main/route/loader).

---

**Author:** Abhishek Jaiswal
