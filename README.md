# React Learning Project 
- We going to note down here the things which are either important or new to us. So next time when we want to revise topics will just go through this file to get over-view.
- Let's start with this simple example 
```js
export function About() {
    return (
        <>
            <h1> About Us</h1>
        </>
    )
}

function Home() {
    return (
        <>
            <h1> Welcome To React World </h1>
        </>
    )
}

export default Home
```
Here there are two components `Home` and `About`
```js
import Home, { About } from './components/Home'

function App() {
    return(
        <>
            <Home />
            <About />
        </>     
    )
}
```

**Note:** 
- The difference in the import statements 
```js
import Home, { About } from './components/Home'
```
It is because of the way we use export key, while exporting the `About` we have not used the `default` keyword so while importing the component we used `{}` this is called __Named Export__ eg `{About}` whereas `Home` is called **Default export** 

---

In React (and modern JavaScript), __default exports__ and __named exports__ are __the two primary ways to share components, functions, or variables between different files.__ The core difference lies in __how many items you can export per file__ and the __syntax required to import them.__

## Quick Comparison
## Default Export vs Named Export in React

In JavaScript and React, modules can export components, functions, and variables using Default Exports or Named Exports.

| Feature | Default Export | Named Export |
| --- | --- | --- |
| Quantity per file | Only one default export per file | Multiple named exports are allowed in a file |
| Import syntax | Curly braces are not required. Example: `import Button from './Button';` | Curly braces are required. Example: `import { Button } from './Button';` |
| Naming flexibility | Can be imported using any local name without special syntax | Must use the exported name by default. Use `as` to rename it during import |
| Main use case | Used for the primary component or main feature of a file | Used for utility functions, constants, or multiple components |

### 1. Default Export

```jsx
// Button.jsx
function Button() {
  return <button>Click Me</button>;
}

export default Button;

// App.jsx
import Button from './Button';
```

Explanation:

- Use `export default` to export a component.
- Curly braces are not required when importing a default export.

### 2. Renaming a Default Export During Import

```jsx
// Button.jsx
function Button() {
  return <button>Click Me</button>;
}

export default Button;

// App.jsx
import MyButton from './Button';
```

Explanation:

- A default export can be imported using any valid local name.
- Here, the component is exported as `Button` but imported as `MyButton`.
- You do not need the `as` keyword to rename a default import.

You can also use `as` when re-exporting a default export from another module, but not in the ordinary default import syntax.

### 3. Named Export

```jsx
// Button.jsx
export function Button() {
  return <button>Click Me</button>;
}

// App.jsx
import { Button } from './Button';
```

Explanation:

- Use `export` to create a named export.
- Import it with curly braces and the same exported name by default.

### 4. Renaming a Named Export Using `as`


```jsx
// Button.jsx
export function Button() {
  return <button>Click Me</button>;
}

// App.jsx
import { Button as MyButton } from './Button';
```

Explanation:

- Use the `as` keyword to rename a named export during import.
- `Button` is the original exported name, while `MyButton` is the local name used in `App.jsx`.
- Curly braces are still required.

### 5. Importing Default and Named Exports Together

You can import a default export and named exports from the same file.


```jsx
// Button.jsx
export default function Button() {
  return <button>Click Me</button>;
}

export function Icon() {
  return <span>★</span>;
}

// App.jsx
import MyButton, { Icon as StarIcon } from './Button';
```

Explanation:

- `MyButton` is the renamed default import.
- `StarIcon` is the renamed named import.
- The default import comes first, followed by the named imports in curly braces.

### Key Takeaways

- Default export: Import without curly braces; choose any local name.
- Named export: Import with curly braces; use the original exported name by default.
- Rename a default import: `import MyButton from './Button';`
- Rename a named import: `import { Button as MyButton } from './Button';`
- Import both together: `import MyButton, { Icon as StarIcon } from './Button';`

Remember: The `as` keyword is required to rename a named import, but it is not required to rename a default import.
