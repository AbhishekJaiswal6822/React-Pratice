# React + Vite

# 🌐 React Router DOM - Deep Dive Notes

A beautiful, simple, and comprehensive guide to understand routing in React applications.

---

## 🧭 1. RouterProvider – The Routing Context

* Acts as the **wrapper** for your routing logic.
* Must be wrapped around your app.
* Takes a `router` instance created using `createBrowserRouter`.

```jsx
<RouterProvider router={router} />
```

---

## 🛣️ 2. createBrowserRouter – Defining Routes

* Defines your entire app's routing configuration.
* Can be written using either an array of objects or JSX-based routes (with `createRoutesFromElements`).

### ✅ Array-based Example:

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Parent route
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ]
  }
]);
```

### ✅ JSX-based Example:

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);
```

---

## 📦 3. Route Component

* Used to declare paths and their corresponding elements.
* Supports **nesting** of routes for layout-based rendering.

```jsx
<Route path='/' element={<Layout />}>
  <Route path='about' element={<About />} />
</Route>
```

---

## 🔄 4. Outlet Component – Rendering Children

* Works **with nested routes**.
* Acts as a placeholder in the parent route’s component to render child routes.

```jsx
function Layout() {
  return (
    <>
      <Header />
      <Outlet />  {/* This displays nested route's component */}
      <Footer />
    </>
  );
}
```

---

## 🧵 5. Relationship Between Route & Outlet

* `<Route>` defines the path and the element.
* `<Outlet />` renders the children inside the parent component.

Example:

```jsx
<Route path='/' element={<Layout />}>
  <Route path='about' element={<About />} />
</Route>
```

➡ The `About` component will be rendered at the `<Outlet />` location in `Layout`.

---

## 🪝 6. useParams Hook

* Used to **access dynamic parameters** from the URL.

### Example:

```jsx
<Route path='/user/:userId' element={<User />} />
```

### Inside `User` Component:

```jsx
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  return <div>User ID: {userId}</div>;
}
```

✅ **Why useParams?**

* Enables dynamic route handling (e.g., `/product/:id`)
* Simplifies extracting values without props.

---

## 📡 7. loader – Pre-fetching Data

* A **function** that loads data before a route renders.
* Prevents flickering by preparing data before component loads.

### Example:

```jsx
<Route 
  path="/github"
  element={<Github />}
  loader={() => fetch("https://api.github.com/users/AbhishekJaiswal6822")}
/>
```

### Accessing the Loaded Data:

```jsx
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  return (
    <div className='text-center bg-gray-600 m-4 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="GitHub Avatar" width={300} />
    </div>
  );
}
```

✅ **Why loader?**

* Keeps data fetching declarative.
* Works great with SSR and Suspense.
* Cleaner separation of logic and view.

---

## 🧠 Summary

| Feature                  | Purpose                                     |
| ------------------------ | ------------------------------------------- |
| RouterProvider           | Connects router to the React app            |
| createBrowserRouter      | Creates a router instance                   |
| createRoutesFromElements | JSX-based route definition                  |
| Route                    | Maps a URL path to a component              |
| Outlet                   | Renders child routes inside parent route    |
| useParams                | Access dynamic parameters from URL          |
| loader                   | Pre-fetch data before rendering a component |

---

✨ This guide helps you build robust routing with React Router DOM using modern features.

Let me know if you want to add animation, transitions, protected routes, or navigation! 🚀
