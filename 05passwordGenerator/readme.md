🔐 React Password Generator App - Notes

📌 useState

What it does:

Manages local state within a component.

Syntax:

const [state, setState] = useState(initialValue);

Example:

const [length, setLength] = useState(8);

length is the current value.

setLength is the function to update it.

📌 useCallback

What it does:

Returns a memoized version of the callback function that only changes if one of its dependencies has changed.

Syntax:

const memoizedCallback = useCallback(() => {
  // function logic
}, [dependencies]);

Example:

const passwordGenerator = useCallback(() => {
  // password generation logic
}, [length, numberAllowed, charAllowed]);

Helps to prevent unnecessary re-creation of functions.

Useful for performance optimizations especially with refs or props.

📌 useEffect

What it does:

Runs side effects (like data fetching, subscriptions, or manually changing the DOM) after render.

Syntax:

useEffect(() => {
  // side-effect logic
}, [dependencies]);

Example:

useEffect(() => {
  passwordGenerator();
}, [length, numberAllowed, charAllowed, passwordGenerator]);

Re-runs only when one of the dependencies changes.

📌 useRef

What it does:

Creates a reference to a DOM element or a value that persists across renders without causing re-renders.

Syntax:

const myRef = useRef(initialValue);

Example:

const passwordRef = useRef(null);

Used here to:

Select and copy the password text using inputRef.current.select()

✅ Final Features Covered

Live password generation based on options

Copy password to clipboard

Range slider for length

Checkbox toggles for numbers and special characters

⚠️ Important Fixes

Use ref={passwordRef} instead of ref={password}

Math.random() * str.length + 1 should be Math.random() * str.length

Convert slider value to number: setLength(Number(e.target.value))

Use password.length instead of str.length for copying


