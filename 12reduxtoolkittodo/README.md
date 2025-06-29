# React + Vite

# 📘 Redux Toolkit Todo App

A simple and clean Todo app built with **React** and **Redux Toolkit**, demonstrating how to use a global state management pattern effectively. This project uses `@reduxjs/toolkit` to manage the todo list through slices and Redux store, following best practices.

---

## 📂 Folder Structure

```
12reduxtoolkittodo/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   └── todo/
│   │       └── todoSlice.js
│   ├── components/
│   │   ├── AddTodo.jsx
│   │   └── Todo.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🧠 Redux Flow Explained

### 🔄 What is Redux?

Redux is a **global state management** library for React. It lets components share and update common data without passing props through many levels.

### 🎯 Why Redux Toolkit?

`@reduxjs/toolkit` simplifies Redux usage:

* Automatically configures the store
* Uses `createSlice()` to reduce boilerplate
* Helps avoid common mistakes

---

## ⚙️ Redux Flow in This App

### 1. `store.js` – Setting up the Store

```js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});
```

➡️ Creates a central Redux **store** that holds global app state

### 2. `todoSlice.js` – Creating the Slice

```js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: "Hello World" }]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

➡️ Defines **reducers** and **initial state** for todo functionality
➡️ Uses `nanoid()` to create unique todo IDs

### 3. `App.jsx` – Rendering Components

```js
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todo';

function App() {
  return (
    <>
      <h1>Learn about Redux tool</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
```

➡️ Loads two components: one for adding todos, and one for displaying them

---

## 🚀 Components (to be added)

### `AddTodo.jsx`

* Takes user input and **dispatches `addTodo`** action

### `Todo.jsx`

* Displays all todos from Redux store
* Allows users to **delete** using `removeTodo`

---

## 🧪 Technologies Used

* **React**
* **Redux Toolkit** (`@reduxjs/toolkit`)
* **Tailwind CSS** for styling
* **Vite** as the bundler/dev server

---

## 🧩 How Redux Connects to React

* `useDispatch()` – dispatch actions from components
* `useSelector()` – access Redux state in any component

```js
const todos = useSelector(state => state.todo.todos);
const dispatch = useDispatch();
```

---

## 📌 Summary

* Centralized state managed by Redux
* Slices simplify action/reducer management
* Components interact with store using hooks

---

## ✅ How to Run

```bash
npm install
npm run dev
```



