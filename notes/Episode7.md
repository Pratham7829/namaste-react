# 🚀 Episode 7 - Finding the Path

> **Goal:** Master `useEffect`, understand the Rules of Hooks, and learn how routing works in React using `react-router-dom`.

---

## 🤔 Why do we need Routing?

Till now our application had only one page.

```text
Home Page
```

But imagine building Swiggy.

We have

- Home
- About
- Contact
- Restaurant Menu
- Cart

Question:

Should everything be displayed on a single page?

Obviously No.

We need a mechanism that decides

> "When the URL changes, which component should React display?"

That's exactly what **Routing** does.

---

## 🧠 Diving Deep into useEffect()

Earlier we learnt

```jsx
useEffect(() => {}, []);
```

But the biggest question is

> **When exactly is useEffect executed?**

Many beginners think

```text
Component Executes

↓

useEffect Executes

↓

UI Appears
```

❌ Wrong.

Actual Flow

```text
Component Executes

↓

React Creates Virtual DOM

↓

Browser Paints UI

↓

useEffect Executes
```

Notice

React first renders the UI.

Only after rendering is completed,

`useEffect` runs.

That's why API calls don't block the first render.

---

## Different Behaviours of useEffect()

### Case 1

No Dependency Array

```jsx
useEffect(() => {
  console.log("Hello");
});
```

Runs after

**every render**

Flow

```text
Render

↓

useEffect

↓

State Change

↓

Render

↓

useEffect

↓

State Change

↓

Render

↓

useEffect
```

---

### Case 2

Empty Dependency Array

```jsx
useEffect(() => {}, []);
```

Runs only once.

```text
Initial Render

↓

useEffect

↓

Done
```

Perfect for

- API Calls
- Initial Setup
- Event Listeners

---

### Case 3

Dependency Array

```jsx
useEffect(() => {}, [searchText]);
```

Runs

- after initial render
- whenever `searchText` changes

Suppose

```text
searchText

↓

""

↓

"P"

↓

"Pi"

↓

"Piz"
```

Every change triggers

```text
useEffect()
```

---

## 🤔 What can be a Dependency?

A dependency is simply

> **Any value that your effect depends on.**

Example

```jsx
const [searchText, setSearchText] = useState("");
```

If your effect uses

```jsx
searchText;
```

then

```jsx
useEffect(() => {}, [searchText]);
```

makes sense.

Similarly

```jsx
[listOfRestaurants][user][count];
```

can all be dependencies.

Whenever any dependency changes,

React runs the effect again.

---

## 🧠 Why Dependency Array Exists?

Imagine

```jsx
fetchData();
```

runs after every render.

User types

```text
P

↓

Pi

↓

Piz

↓

Pizza
```

Every key press

↓

New API Call.

Terrible.

Dependency Array gives React a rule.

> "Only execute this effect when these values change."

---

## 🧠 Diving Deep into useState()

Rules of Hooks are extremely important.

Hooks work because React remembers

the order in which they are called.

Breaking that order breaks React's internal state management.

---

## Rule 1

Never use Hooks outside a Component.

❌ Wrong

```jsx
const [count, setCount] = useState(0);

const App = () => {};
```

✅ Correct

```jsx
const App = () => {
  const [count, setCount] = useState(0);
};
```

Reason:

State belongs to a component.

Without a component,

React has nowhere to store that state.

---

## Rule 2

Always call Hooks at the Top Level.

Good

```jsx
const App = () => {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState(null);
};
```

Avoid placing them after multiple conditions or deeply nested logic.

Keeping Hooks at the top makes their execution order predictable.

---

## Rule 3

Never call Hooks inside if-else

Wrong

```jsx
if (isLoggedIn) {
  const [count, setCount] = useState(0);
}
```

Question

Why?

Imagine

First Render

```text
Condition

↓

true

↓

Hook executes
```

Second Render

```text
Condition

↓

false

↓

Hook skipped
```

Now React's Hook order changes.

React gets confused about which state belongs to which Hook.

This leads to inconsistent behavior.

---

## Rule 4

Never call Hooks inside Loops

Wrong

```jsx
for (let i = 0; i < 5; i++) {
  useState();
}
```

Because

number of Hook calls changes.

React cannot maintain state correctly.

---

## Rule 5

Never call Hooks inside Nested Functions

Wrong

```jsx
function hello() {
  useState();
}
```

Hooks should always execute

in the same order

during every render.

Nested functions may or may not execute.

Hence,

they break React's expectations.

---

## 🧠 Easy Rule to Remember

Hooks should always execute

```text
Top

↓

Level

↓

Every Render

↓

Same Order
```

---

# Routing in React

Till now

```text
localhost:1234
```

always showed one page.

Now we want

```text
/

Home

----------------

/about

About

----------------

/contact

Contact

----------------

/restaurant/12

Restaurant Menu
```

React Router helps us achieve this.

---

## Installing React Router

```bash
npm install react-router-dom
```

This library provides

- Routing
- Navigation
- Dynamic Routes
- Nested Routes

---

## Routing Configuration

Question

How does React know

which component belongs to which URL?

Answer

Routing Configuration.

Think of it as

a map.

```text
"/"

↓

Home

----------------

"/about"

↓

About

----------------

"/contact"

↓

Contact
```

---

## createBrowserRouter()

Routing configuration is created using

```jsx
createBrowserRouter();
```

Example

```jsx
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
```

React Router stores this configuration internally.

Whenever URL changes,

it checks this configuration.

---

## RouterProvider

Creating routes isn't enough.

React also needs to know

which router should control the application.

That's why we write

```jsx
<RouterProvider router={appRouter} />
```

Think

```text
Configuration

↓

RouterProvider

↓

Application Starts Routing
```

---

## Common Convention

Whenever you see

```text
useSomething()
```

there is a high chance

it is a React Hook.

Examples

```jsx
useState();

useEffect();

useRouteError();

useContext();
```

---

## useRouteError()

Suppose user enters

```text
/randompage
```

No route exists.

Instead of crashing,

React Router allows us to display

our own Error Page.

```jsx
const err = useRouteError();
```

This Hook gives information

about the routing error.

---

## Nested Routes

Question

Should Header disappear

every time page changes?

No.

Header and Footer remain common.

Only middle content changes.

Layout

```text
Header

↓

Page Content

↓

Footer
```

---

## Outlet

React Router provides

```jsx
<Outlet />
```

Think of it as

an empty placeholder.

```text
Header

↓

Outlet

↓

Footer
```

When URL changes,

React replaces only

the Outlet content.

Header and Footer remain untouched.

---

## Why NOT use Anchor Tag?

HTML

```html
<a href="/about"></a>
```

What happens?

Entire page reloads.

JavaScript restarts.

React application loads again.

Bad user experience.

---

## Link Component

Instead

React provides

```jsx
<Link to="/about">
```

This changes URL

without refreshing the page.

Only required components update.

That's why React applications feel fast.

---

## Single Page Application (SPA)

React applications are called

Single Page Applications

because

the browser loads

one HTML page.

After that,

React changes the UI

without refreshing the page.

---

## Behind the Scenes

Question

Does Link create some magic?

Actually

No.

Internally

`<Link>`

uses an

`<a>`

tag.

Difference is

React intercepts the click event

and performs client-side navigation.

---

## Client Side Routing

Browser already has

JavaScript application loaded.

Changing route

↓

React changes UI.

No server reload.

Flow

```text
Browser

↓

React Router

↓

New Component

↓

Updated UI
```

---

## Server Side Routing

Browser requests

```text
/about
```

Server sends

a completely new HTML page.

Every navigation

reloads the page.

Traditional websites work like this.

---

## Dynamic Routing

Sometimes

URL itself contains information.

Example

```text
/restaurant/101

/restaurant/205

/restaurant/999
```

Instead of creating

1000 routes,

React Router creates one dynamic route.

```jsx
/restaurant/:id
```

Now

`:id`

can be anything.

Later,

we'll use this id

to fetch restaurant details.

---

## Keys while Mapping

Suppose

```jsx
restaurants.map(...)
```

Always place

```jsx
key={restaurant.id}
```

on the parent JSX element

being returned from `map()`.

Correct

```jsx
<RestaurantCard key={restaurant.info.id} resData={restaurant} />
```

React tracks

the parent element returned by `map()`.

---

## 🔍 Important Observations

- `useEffect()` runs after rendering.
- Dependency Array controls when effects execute.
- Hooks must always execute in the same order.
- Routing maps URLs to Components.
- `Outlet` is a placeholder for child routes.
- Use `Link` instead of `<a>` for navigation.
- React Router enables Client Side Routing.
- Dynamic Routes allow one route to handle multiple URLs.

---

## ⚠️ Common Mistakes

❌ Calling Hooks inside if statements.

❌ Calling Hooks inside loops.

❌ Using `<a>` for internal navigation.

❌ Forgetting `<Outlet />` in parent layouts.

❌ Missing `key` while rendering lists.

---

## 💭 Interview Questions

<details>
<summary>When exactly is useEffect executed?</summary>

After the component renders and the browser paints the UI.

</details>

<details>
<summary>Why should Hooks always be called at the top level?</summary>

React relies on the order of Hook calls to associate state with the correct Hook. Changing that order causes inconsistent state management.

</details>

<details>
<summary>Why should we use Link instead of an anchor tag in React?</summary>

`<Link>` performs client-side navigation without refreshing the page, preserving the React application state and making navigation much faster.

</details>

<details>
<summary>What is the purpose of Outlet?</summary>

`Outlet` acts as a placeholder where child route components are rendered while common layout components like Header and Footer remain unchanged.

</details>

<details>
<summary>Difference between Client Side Routing and Server Side Routing?</summary>

Client-side routing updates the UI using JavaScript without reloading the page. Server-side routing requests a new HTML page from the server for every route change.

</details>

---

## 🧠 Mental Model

```text
User Clicks Link

↓

URL Changes

↓

React Router Checks Route Configuration

↓

Matching Route Found

↓

Outlet Replaces Only Middle Content

↓

Header & Footer Stay Same

↓

Updated UI
```

---

## 🧠 React Philosophy

React believes in two important ideas:

```text
State decides UI

AND

URL decides which UI to show
```

The developer only changes **State** or **URL**.

React handles rendering automatically.

---

## ⚡ Quick Revision

- `useEffect()` runs after rendering.
- Dependency array controls when effects run.
- Hooks must be called only at the top level of Functional Components.
- Use `react-router-dom` for routing.
- Define routes using `createBrowserRouter()`.
- Provide the router using `RouterProvider`.
- Use `Outlet` for nested routes.
- Use `Link` instead of `<a>` for internal navigation.
- React uses Client Side Routing to avoid full page reloads.
- Dynamic routes use parameters like `/restaurant/:id`.
- Always put the `key` on the parent JSX element returned by `map()`.

---

## 🧪 Under the Hood

```text
User clicks <Link>

↓

Browser URL changes

↓

React Router intercepts navigation

↓

Checks Route Configuration

↓

Finds Matching Route

↓

Parent Layout stays same

↓

Outlet receives new Component

↓

Component Executes

↓

React Creates New Virtual DOM

↓

Diffing

↓

React Fiber

↓

Reconciliation

↓

Updated UI (No Page Refresh)
```
