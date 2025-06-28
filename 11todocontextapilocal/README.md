📝 React Todo App using Context API with Local Storage

A clean and simple Todo application built with React, Context API, and Tailwind CSS, storing todos in localStorage.

📁 Folder Structure
11todocontextapilocal/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   ├── assets/
│   │   └── contexts/
│   │       └── TodoContext.js
│   ├── App.jsx
│   └── App.css

React Context (TodoContext)

// TodoContext.js
```
import { createContext, useContext } from "react";

export const TodoContext = createContext({});

export const TodoProvider = TodoContext.Provider;
export const useTodo = () => useContext(TodoContext);
```
Wrap your app with TodoProvider and share state via context.

🏗️ Components

✅ TodoForm.jsx
```
const [todo, setTodo] = useState("");
const { addTodo } = useTodo();

const add = (e) => {
  e.preventDefault();
  if (!todo) return;
  addTodo({ todo, completed: false });
  setTodo("");
};
```
Controlled input

Adds new todo on submit

✏️ TodoItem.jsx
```
const [isTodoEditable, setIsTodoEditable] = useState(false);
const [todoMsg, setTodoMsg] = useState(todo.todo);
const { updatedTodo, deleteTodo, toggleComplete } = useTodo();

const editTodo = () => {
  updatedTodo(todo.id, { ...todo, todoMsg });
  setIsTodoEditable(false);
};
```
Toggle complete, edit, and delete todo

Editable input with conditional styling

🧠 useEffect and LocalStorage

1. Load from localStorage
```
useEffect(() => {
  const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
  if (Array.isArray(todosFromLocalStorage)) {
    setTodos(todosFromLocalStorage);
  }
}, []);
```
2. Save to localStorage
```
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```
🧩 App.jsx Overview

Manages core todos state and actions: add, update, delete, toggle

Wraps everything in TodoProvider

Uses Tailwind for styling
```
<TodoProvider value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}>
  <TodoForm />
  {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
</TodoProvider>
```git add 11todocontextapilocal
git commit -m "Add: 11todocontextapilocal with README and final changes"
git push origin main

💡 Summary

🔄 Context API for global state

💾 localStorage for persistence

🎨 TailwindCSS for styling

🔧 Fully editable, manageable todos

✨ Output Preview

A minimal dark-themed UI to manage tasks with add, edit, complete, and delete options — all synced with localStorage.

📌 Tips

Use JSON.stringify() and JSON.parse() to handle localStorage

Always use unique key for React lists (todo.id)

Use useEffect to sync state and side-effects like storage
