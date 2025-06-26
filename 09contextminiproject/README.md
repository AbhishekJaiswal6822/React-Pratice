# React + Vite


# 📘 React Context API – Full Guide in Simple Words

---

## 🔹 What is Context API?

- Context API helps us **share data globally** across components.
- It avoids the problem of **"prop drilling"** (passing props through many layers).
- It's like a **global state** that any component can use.

---

## 🔹 Why use it?

- To manage data like user login, theme, language, etc.
- Makes the app cleaner and easier to maintain.
- Useful when multiple components need access to the same data.

---

## 🧱 Basic Structure

### 1️⃣ Create the Context

```js
import { createContext } from "react";

const UserContext = createContext();
export default UserContext;
```

- `createContext()` creates a **global object** for sharing data.
- We export this to use it in other files.

---

### 2️⃣ Create the Provider

```js
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

#### 🧠 What's happening here?

- `useState` holds the actual data (`user`, `setUser`).
- `.Provider` wraps all components and **shares this data**.
- `{children}` is a special prop that lets the provider wrap any child components (like `<App />`, `<Login />`, etc.).

---

### 3️⃣ Wrap Your App

In `main.jsx` or `App.jsx`:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserContextProvider from "./context/UserContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
```

#### 🎯 Why?

- This gives `App` and **all its children** access to the context data (`user`, `setUser`).

---

### 4️⃣ Use Context in Components

Example: `Login.jsx`

```js
import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
```

---

## 🧠 Key Concepts Summary

| Concept | Meaning |
|--------|---------|
| `createContext()` | Creates the context (global space for data) |
| `.Provider` | Sends data to all child components |
| `{children}` | Represents the components inside the provider |
| `useContext()` | Lets a component access the context's data |
| `value={{...}}` | The data you want to share (e.g., `user`, `setUser`) |

---

## ✅ Final Flow Recap

1. **Create** the context.
2. **Make a provider** and share data using `.Provider`.
3. **Wrap your app** with the provider.
4. **Use `useContext`** to access or update the data from any component.

---

## 🌟 Real-Life Example

- You log in → `setUser` stores your data in context
- Any page (e.g., `Profile`) can show your name using that same `user`
