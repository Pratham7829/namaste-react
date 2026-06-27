# 🚀 Episode 6 - Exploring the World

> **Goal:** Learn how React applications communicate with backend APIs, understand Monolith vs Microservices, master `useEffect()`, and understand how React renders data fetched from APIs.

---

## 🤔 How does a React application get data?

Till now,

all restaurant data was hardcoded.

```js
const resList = [...]
```

Question:

Does Swiggy have restaurant data written inside React?

Obviously No.

Data comes from a **Backend Server** through APIs.

Flow:

```text
Backend

↓

API

↓

React

↓

UI
```

Today's React applications mostly work like this.

---

## 🤔 Monolith Architecture

Imagine one huge application.

```text
Application

├── Login
├── Payments
├── Orders
├── Restaurants
├── Reviews
├── Notifications
└── Chat
```

Everything exists inside one backend.

This is called

**Monolith Architecture.**

### Advantages

- Easy to start
- Simple deployment
- Easy for small projects

### Problems

Suppose

Payment service crashes.

Question:

Can it affect the whole application?

Yes.

Because everything lives together.

Scaling is also difficult.

If only Chat receives more traffic,

we still need to scale the entire application.

---

## 🤔 Microservices Architecture

Instead of one huge application,

split everything into independent services.

```text
Login Service

Orders Service

Payment Service

Restaurant Service

Review Service

Notification Service
```

Each service

- has its own code
- has its own database (sometimes)
- can be deployed independently

Frontend simply calls different APIs.

```text
React

↓

Restaurant API

↓

Review API

↓

Payment API

↓

Login API
```

This is how most large companies work.

---

## 🧠 Why Microservices?

Suppose only Restaurant Service gets huge traffic.

With Monolith

```text
Scale Entire App ❌
```

With Microservices

```text
Scale Only Restaurant Service ✅
```

Much cheaper.

Much more flexible.

---

## 🤔 Problem while Fetching Data

Imagine

React starts.

API request takes

```text
2 seconds
```

Question:

Should user stare at a blank white page?

Terrible user experience.

---

## Shimmer UI

Instead of showing nothing,

we show fake loading cards.

```text
□□□□□□□□

□□□□□□□□

□□□□□□□□
```

These placeholders are called

**Shimmer UI.**

User immediately feels

> "Application is loading."

instead of

> "Application is broken."

---

## Conditional Rendering

Question:

When should Shimmer appear?

Only while data is loading.

After API finishes,

Restaurant Cards should appear.

This is called

**Conditional Rendering.**

Example

```jsx
return listOfRestaurants.length === 0 ? <Shimmer /> : <Body />;
```

Think of it as

```text
Condition

↓

True?

↓

Render A

↓

False?

↓

Render B
```

React allows UI to change based on conditions.

---

## 🧠 Rendering

Many beginners misunderstand this word.

Rendering does **NOT** mean

"Updating only HTML."

Rendering means

> React executes the Component Function again.

Example

```jsx
const Body = () => {};
```

Whenever state changes,

React simply calls

```js
Body();
```

again.

New React Elements are produced.

Then Diffing starts.

Remember

```text
Rendering

≠

Updating DOM
```

Rendering = Executing Component Again

---

## React Hook - useEffect()

Question:

When Body() executes,

should API be called every time?

No.

Imagine typing inside search.

Every key press

↓

Body() executes

↓

API again

↓

Again

↓

Again

Terrible.

We need something that runs **after rendering**, not during rendering.

That's exactly what `useEffect()` does.

---

## Syntax

```jsx
useEffect(() => {}, []);
```

It takes

```text
1.

Callback Function

↓

Code you want to execute

---------------------------

2.

Dependency Array

↓

Controls when callback should run
```

---

## Callback Function

```jsx
useEffect(() => {
  fetchData();
}, []);
```

The callback contains the side effect.

Examples

- API Call
- Timer
- Event Listener
- Local Storage

---

## Why is it called "Effect"?

Rendering should ideally only calculate UI.

Things like

- API calls
- timers
- subscriptions

are **side effects**.

React says

> Keep rendering pure.

Run side effects separately.

Hence

`useEffect`.

---

## Dependency Array

This is the most important part.

### Case 1

```jsx
useEffect(() => {});
```

No dependency array.

Runs

**after every render.**

---

### Case 2

```jsx
useEffect(() => {}, []);
```

Empty dependency array.

Runs

only once

(after the initial render).

Perfect for API calls.

---

### Case 3

```jsx
useEffect(() => {}, [searchText]);
```

Runs

- first render
- whenever `searchText` changes

Nothing else triggers it.

---

## 🧠 Why API calls inside useEffect?

Imagine

```jsx
fetchData();
```

directly inside component.

```jsx
const Body = () => {
  fetchData();
};
```

What happens?

State updates

↓

Component re-renders

↓

fetchData()

↓

State updates

↓

Re-render

↓

fetchData()

Infinite loop.

`useEffect()` prevents this by controlling when side effects execute.

---

## Search Functionality

Suppose

```jsx
const [searchText, setSearchText] = useState("");
```

User types

```text
Pi
```

State changes.

```text
searchText

↓

"Pi"
```

React executes

```js
Body();
```

again.

Now UI updates automatically.

This is React's biggest idea.

> UI is a function of State.

---

## 🤔 How can a const state variable change?

Question

```jsx
const [searchText, setSearchText] = useState("");
```

`searchText` is `const`.

How can it change?

Important:

`searchText` never changes.

React executes the component again.

During the next execution,

React gives a **new value**.

Think like this.

First Render

```text
searchText

↓

""
```

Second Render

```text
searchText

↓

"P"
```

Third Render

```text
searchText

↓

"Pi"
```

Each render gets its own variable.

The old variable is gone.

React simply provides the latest state value during the next render.

---

## 🧠 useState + useEffect Together

Example

```jsx
const [listOfRestaurants, setListOfRestaurants] = useState([]);

useEffect(() => {
  fetchData();
}, []);
```

Flow

```text
Component Renders

↓

Empty Array

↓

Shimmer UI

↓

useEffect Executes

↓

API Call

↓

setListOfRestaurants()

↓

State Updated

↓

Component Re-renders

↓

Restaurant Cards Displayed
```

Notice

API call happened only once,

but UI updated automatically because State changed.

---

## 🔍 Important Observations

- Modern React apps get data from APIs.
- Shimmer UI improves user experience while data loads.
- Conditional Rendering displays different UI based on conditions.
- Rendering means executing the component function again.
- `useEffect()` is used for side effects.
- API calls should usually be placed inside `useEffect()`.
- Empty dependency array means "run only once after the first render."
- State variables are recreated on every render with the latest value.

---

## ⚠️ Common Mistakes

❌ Calling APIs directly inside component body.

This may cause unnecessary or infinite API calls.

---

❌ Thinking rendering means updating the DOM.

Rendering means the component function executes again.

DOM updates happen later.

---

❌ Expecting `const` state variables to mutate.

Each render gets a fresh variable containing the latest state value.

---

## 💭 Interview Questions

<details>
<summary>Difference between Monolith and Microservices?</summary>

A Monolith keeps all features inside one application, while Microservices split them into independent services that can be developed, deployed, and scaled separately.

</details>

<details>
<summary>Why do we use useEffect() for API calls?</summary>

Because API calls are side effects. Putting them inside `useEffect()` lets us control when they execute and prevents unnecessary repeated calls during every render.

</details>

<details>
<summary>What are the different behaviors of useEffect()?</summary>

- No dependency array → Runs after every render.
- Empty dependency array (`[]`) → Runs only once after the initial render.
- Dependency array with values (`[value]`) → Runs after the initial render and whenever those dependencies change.

</details>

<details>
<summary>If state variables are declared with const, how do they change?</summary>

They don't mutate. On every re-render, React executes the component again and provides a new variable containing the latest state value.

</details>

---

## 🧠 Mental Model

```text
Initial Render

↓

State Created

↓

UI Rendered

↓

useEffect Executes

↓

API Call

↓

State Updated

↓

Component Executes Again

↓

New Virtual DOM

↓

Diffing

↓

Reconciliation

↓

Updated UI
```

---

## 🧠 React Philosophy

React follows one simple rule:

```text
Data Changes

↓

State Changes

↓

UI Automatically Changes
```

Developers should never manually manipulate the DOM.

Just update the **State**.

React handles everything else.

---

## ⚡ Quick Revision

- Large applications usually follow Microservices Architecture.
- Fetch data using APIs.
- Show Shimmer UI while data loads.
- Use Conditional Rendering to display different UI based on state.
- Rendering means executing the component function again.
- `useEffect()` handles side effects like API calls.
- `useEffect(callback, [])` runs only once after the first render.
- State variables don't mutate; React provides updated values on each render.

---

## 🧪 Under the Hood

```text
Body()

↓

useState([])

↓

Render Shimmer

↓

useEffect Registered

↓

Browser Paint

↓

useEffect Callback Executes

↓

fetchData()

↓

API Response Received

↓

setListOfRestaurants(data)

↓

React Stores New State

↓

Body() Executes Again

↓

New Virtual DOM

↓

Diffing

↓

React Fiber

↓

Reconciliation

↓

Restaurant Cards Displayed
```
