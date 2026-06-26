# 🚀 Episode 5 - Let's Get Hooked

> **Goal:** Learn how to organize a React project, understand exports/imports, and most importantly understand State, Hooks, Virtual DOM, React Fiber and React's rendering process.

---

## 🤔 Why should we split our code into multiple files?

Till now everything was inside one file.

As our application grows,

```text
App.js

↓

100 lines

↓

500 lines

↓

1000+ lines
```

Finding bugs, reading code and collaborating with other developers becomes difficult.

Instead, every component should live in its own file.

Example:

```text
src/

│

├── components/
│      ├── Header.js
│      ├── Body.js
│      ├── RestaurantCard.js
│      └── Footer.js
│
├── utils/
│
└── App.js
```

This makes the project cleaner and easier to maintain.

---

## 💡 Naming Convention

Whenever possible,

file name = component name.

✅ Good

```text
Header.js

RestaurantCard.js

Footer.js
```

❌ Avoid

```text
component1.js

abc.js

new.js
```

Because after a few months,

you should immediately know what that file contains.

---

## 🤔 .js or .jsx ?

Both are completely valid.

```text
Header.js

Header.jsx
```

React doesn't care.

Most companies use `.js`.

Some prefer `.jsx` because it clearly indicates that JSX is being used.

Use one convention consistently throughout the project.

---

## 🧠 Never Keep Hardcoded Data Inside Components

Bad

```jsx
const RestaurantCard = () => {
  const restaurant = {
    name: "Domino's",
  };
};
```

Question:

What if tomorrow backend sends 100 restaurants?

Will you edit this component every day?

No.

Component should only focus on **displaying data**, not storing it.

Keep data separate.

```text
components/

↓

UI

---------------------

utils/mockData.js

↓

Data
```

This separation makes components reusable.

---

## 🤔 Why do we need Export & Import?

Imagine

```text
Header.js
```

contains

```jsx
Header;
```

How will App.js use it?

Using exports and imports.

They allow different files to communicate with each other.

---

## Types of Export

### Default Export

Used when exporting only one main thing.

```js
export default Header;
```

Import

```js
import Header from "./Header";
```

No curly braces.

---

### Named Export

Used when exporting multiple values.

```js
export const LOGO_URL = "...";

export const CDN_URL = "...";
```

Import

```js
import { LOGO_URL, CDN_URL } from "./constants";
```

Curly braces are mandatory.

---

## 🧠 React Hooks

Question:

What exactly is a Hook?

Many beginners think Hooks are something magical.

Reality:

A Hook is just a **normal JavaScript function** written by the React team.

React provides these functions to add extra capabilities to Functional Components.

Example

```js
useState();

useEffect();

useContext();

useMemo();
```

Episode 5 focuses on two important Hooks.

- useState()
- useEffect()

---

## 🤔 Why were Hooks introduced?

Earlier,

Functional Components could only display UI.

Only Class Components had features like

- State
- Lifecycle methods

Hooks changed that.

Now Functional Components can also have state and many advanced React features.

---

## 🧠 useState()

Imagine we have

```jsx
let count = 0;
```

Button click

```js
count++;
```

Question:

Will UI update?

❌ No.

JavaScript variable changed.

React doesn't know it changed.

React only reacts to **State changes.**

This is exactly why `useState()` exists.

---

## Creating a State Variable

```jsx
const [count, setCount] = useState(0);
```

Break it down.

```text
count

↓

Current State

-------------------

setCount

↓

Function to update state

-------------------

0

↓

Initial Value
```

---

## Why does useState return an Array?

```jsx
const [count, setCount] = useState(0);
```

Actually,

```js
const state = useState(0);
```

returns something similar to

```js
[currentValue, updateFunction];
```

Using array destructuring,

we get

```js
count;

setCount;
```

---

## Named Import

Notice

```js
import { useState } from "react";
```

Question:

Why curly braces?

Because

`useState`

is a **Named Export** from React.

---

## Preferred Naming Convention

React community follows

```text
value

↓

setValue
```

Examples

```jsx
const [count, setCount] = useState(0);

const [user, setUser] = useState(null);

const [restaurants, setRestaurants] = useState([]);
```

This immediately tells us

which function updates which state.

---

## Local State Variable

State belongs only to the component where it is created.

Example

```jsx
Body

↓

useState()
```

Only `Body` can directly access that state.

Other components cannot.

This is why it is called **Local State**.

---

## 🧠 What happens when State changes?

This is one of the most important React concepts.

Suppose

```jsx
const [count, setCount] = useState(0);
```

Button click

```js
setCount(1);
```

Question:

What happens now?

Many beginners think

React updates only the `<h1>`.

Actually,

first React **re-runs the entire component function.**

```text
setCount()

↓

Body() executes again

↓

New React Elements are created

↓

Comparison starts

↓

Only necessary DOM updates happen
```

Notice

Component re-renders.

DOM doesn't necessarily re-render completely.

Huge difference.

---

## Re-rendering

Whenever a State Variable changes,

React re-executes that component.

This process is called

**Re-rendering.**

> ⚠️ Re-rendering a component does NOT mean recreating the entire DOM.

---

## 🧠 Virtual DOM

This is one of React's biggest innovations.

Many beginners think

Virtual DOM = Copy of HTML.

Not exactly.

A better definition is:

> Virtual DOM is a lightweight JavaScript representation of the Real DOM.

Remember Episode 3?

```jsx
<h1>Hello</h1>
```

became

```js
{
    type: "h1",
    props: ...
}
```

That object itself becomes part of the Virtual DOM.

React works with JavaScript Objects,

not directly with browser DOM.

Reason:

JavaScript objects are much cheaper to create and compare than manipulating the real browser DOM.

---

## Real DOM vs Virtual DOM

```text
Real DOM

↓

Actual Browser Elements

(Button, Div, Input...)

---------------------------

Virtual DOM

↓

JavaScript Objects

↓

Lightweight Representation
```

React first updates the Virtual DOM,

not the Real DOM.

---

## Diffing Algorithm

Imagine

Old UI

```text
A

B

C
```

New UI

```text
A

B

D
```

Question:

Should React recreate everything?

No.

React compares

Old Virtual DOM

with

New Virtual DOM.

This comparison process is called the

**Diffing Algorithm.**

Result

```text
Only C changed

↓

Update only C
```

Instead of updating everything.

---

## Reconciliation

Question:

After finding differences,

who updates the Real DOM?

Answer:

The **Reconciliation Process.**

Flow

```text
State Change

↓

Component Re-runs

↓

New Virtual DOM

↓

Diffing

↓

Find Changes

↓

Update Real DOM
```

This entire process is called

**Reconciliation.**

---

## React Fiber

React Fiber is the **new reconciliation engine** introduced in React 16.

Think of it as

> The brain that decides **how**, **when**, and **which** updates should happen.

Earlier React updated everything synchronously.

Fiber made React much smarter.

It can

- pause work
- prioritize updates
- resume work later
- make UI feel more responsive

You won't directly use Fiber,

but every React application today runs on it.

---

## Mental Model

Imagine editing a Word document.

You change only one word.

Does Microsoft Word recreate the whole document?

No.

It updates only the changed word.

React works similarly.

```text
State Changes

↓

React creates new Virtual DOM

↓

Compare with previous Virtual DOM

↓

Find Difference

↓

Update only changed DOM nodes
```

This is why React is fast.

---

## 🔍 Important Observations

- Hooks are normal JavaScript functions provided by React.
- `useState()` creates a state variable.
- State is local to the component.
- Updating state triggers a re-render.
- Re-rendering ≠ Recreating the whole DOM.
- Virtual DOM is a JavaScript representation of the UI.
- Diffing finds what changed.
- Reconciliation updates only the required DOM nodes.
- React Fiber is the engine that performs reconciliation efficiently.

---

## ⚠️ Common Mistakes

❌ Updating normal variables and expecting UI to change.

Only state updates trigger React re-renders.

---

❌ Modifying state directly.

Wrong

```js
count++;
```

Correct

```js
setCount(count + 1);
```

---

❌ Thinking React refreshes the entire page on every state update.

React only updates the parts that actually changed.

---

## 💭 Interview Questions

<details>
<summary>What is a React Hook?</summary>

A Hook is a normal JavaScript function provided by React that adds React features (like state and lifecycle behavior) to Functional Components.

</details>

<details>
<summary>Why do we use useState instead of a normal variable?</summary>

React does not track normal variables. State updates notify React to re-render the component and update the UI.

</details>

<details>
<summary>What is the difference between Virtual DOM and Real DOM?</summary>

The Real DOM is the actual browser DOM. The Virtual DOM is a lightweight JavaScript representation of the UI that React uses to efficiently determine what needs to change.

</details>

<details>
<summary>What is Reconciliation?</summary>

Reconciliation is the process where React compares the old and new Virtual DOM, finds the differences, and updates only the necessary parts of the Real DOM.

</details>

<details>
<summary>What is React Fiber?</summary>

React Fiber is React's reconciliation engine. It powers the diffing and update process, allowing React to prioritize, pause, and efficiently process UI updates.

</details>

---

## 🧠 React Philosophy

This episode teaches one of React's most important ideas:

```text
State Changes

↓

UI Changes

NOT

DOM Manipulation

↓

UI Changes
```

In React,

we don't manually manipulate the DOM.

We simply update the **State**.

React takes care of everything else.

---

## ⚡ Quick Revision

- Keep each component in its own file.
- Prefer file name = component name.
- Keep data separate from UI.
- Use **Default Export** for one value and **Named Export** for multiple values.
- Hooks are normal JavaScript functions provided by React.
- `useState()` creates a local state variable.
- Updating state triggers a component re-render.
- Virtual DOM is a lightweight JavaScript representation of the UI.
- Diffing compares old and new Virtual DOM.
- Reconciliation updates only the necessary Real DOM nodes.
- React Fiber is the engine behind React's efficient rendering.

## 🧪 Under the Hood

Question:
setCount(1)

Internally kya hota hai?

Step 1 → React stores new state

↓

Step 2 → Component function executes again

↓

Step 3 → New Virtual DOM created

↓

Step 4 → Diffing

↓

Step 5 → Reconciliation

↓

Step 6 → Browser updates only changed nodes
