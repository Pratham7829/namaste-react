# 🚀 Episode 9 - Optimising Our App (Part 1)

> **Goal:** Learn how to write scalable React code using the Single Responsibility Principle and understand why Custom Hooks are one of React's most powerful features.

---

# 🤔 Why do applications become difficult to maintain?

Imagine you create one huge component.

```jsx
Body;
```

Inside Body you have

- API Calls
- Search Logic
- Online Status Check
- Filtering Logic
- Sorting Logic
- Restaurant Rendering
- Loading Logic
- Error Handling

Question

Who will understand this file after 6 months?

Probably no one.

This is exactly why software engineers follow

**Single Responsibility Principle (SRP).**

---

# Single Responsibility Principle (SRP)

The principle says

> **A component (or function) should have only ONE responsibility.**

Not

```text
Body

↓

Everything
```

Instead

```text
Body

↓

Search

↓

RestaurantContainer

↓

RestaurantCard

↓

Filter

↓

Shimmer
```

Each component should do

**one job only.**

---

## Real Life Analogy

Imagine a restaurant.

One person

- takes orders
- cooks food
- serves food
- collects payment
- cleans tables

Will it work?

Maybe.

Will it scale?

Never.

Instead

```text
Chef

↓

Cooking

--------------------

Waiter

↓

Serving

--------------------

Cashier

↓

Payment
```

Everyone has

one responsibility.

React follows exactly the same philosophy.

---

# Why is SRP Important?

Suppose tomorrow

RestaurantCard design changes.

Question

Should we modify Search Component?

No.

Only RestaurantCard.

This reduces

- Bugs
- Coupling
- Confusion

---

# Benefits of SRP

### Better Readability

Instead of

```text
1000 lines
```

you get

```text
Header

Body

RestaurantCard

Footer
```

Easy to understand.

---

### Better Maintainability

Need to modify search?

Open only

```text
Search.js
```

Need to modify Navbar?

Open only

```text
Header.js
```

---

### Better Testing

Suppose Search has a bug.

You test only

```text
Search Component
```

instead of

the whole application.

Small components are easier to test.

---

# 🤔 We have reusable Components...

Can we also reuse Logic?

Suppose

Project A

needs

Online Status Check.

Project B

also needs

Online Status Check.

Should we copy-paste code?

No.

React gives us

**Custom Hooks.**

---

# What is a Hook?

Earlier we learnt

```jsx
useState();

useEffect();
```

Question

Who wrote these?

React Team.

They are simply

JavaScript Functions.

Nothing magical.

---

# Then what is a Custom Hook?

Question

If React Team can create Hooks...

Can we?

Absolutely.

A Custom Hook is simply

> **A JavaScript function that uses one or more React Hooks and contains reusable logic.**

Notice

Reusable **Logic**

not reusable UI.

---

# Utility Function

Akshay Sir says

> "At the end of the day, a Hook is just a utility function."

What does Utility Function mean?

Think

```text
Math.max()

Math.min()

parseInt()
```

These are helper functions.

Similarly

```text
useOnlineStatus()

useFetch()

useAuth()
```

are helper functions

for React.

They simply help us

reuse logic.

---

# Naming Convention

Every Hook

must start with

```text
use
```

Examples

```jsx
useState();

useEffect();

useContext();

useMemo();
```

Your Hook

```jsx
useOnlineStatus();

useFetchRestaurant();

useTheme();
```

Question

Can we name it

```jsx
onlineStatus();
```

Technically

Yes.

But React conventions say

always begin with

```text
use
```

This immediately tells developers

> "This function is a Hook."

---

# Why "use"?

Because React itself identifies Hooks through this naming convention.

Whenever developers read

```jsx
useSomething();
```

they immediately know

- It may contain Hooks.
- It follows Rules of Hooks.
- It should only be called inside Components or other Hooks.

This improves readability.

---

# Example

Suppose

every page

needs

Online Status.

Without Custom Hook

```jsx
Body

↓

useState

↓

useEffect

↓

Online Events
```

About Page

```jsx
About

↓

useState

↓

useEffect

↓

Online Events
```

Contact

Again

same code.

Huge duplication.

---

# Solution

Create

```text
useOnlineStatus.js
```

Inside

```jsx
function useOnlineStatus() {}
```

Now

Body

```jsx
const status = useOnlineStatus();
```

About

```jsx
const status = useOnlineStatus();
```

Contact

```jsx
const status = useOnlineStatus();
```

One Hook.

Many Components.

---

# Deep Understanding

Suppose

```jsx
function useOnlineStatus(){

    const [onlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{

        ...

    },[]);

    return onlineStatus;

}
```

Question

When Body calls

```jsx
useOnlineStatus();
```

what happens?

Exactly same as

calling a normal function.

```text
Body()

↓

useOnlineStatus()

↓

useState()

↓

useEffect()

↓

return onlineStatus
```

Nothing magical.

---

# Important Observation

Many beginners think

Hooks are special objects.

No.

Think

```jsx
useOnlineStatus();
```

exactly like

```jsx
calculateAge();

formatDate();

sum();
```

Difference

is that

Hooks internally use

other React Hooks.

---

# Does Custom Hook create Shared State?

This is a very common interview question.

Suppose

```jsx
Body

↓

useOnlineStatus()
```

and

```jsx
Header

↓

useOnlineStatus()
```

Question

Will both share

the same state?

❌ No.

Every Component

gets its own

independent state.

Think

```text
Body

↓

Own State

------------------

Header

↓

Own State
```

Even though

both call

the same Hook.

Reason?

Because every component execution creates its own Hook state.

---

# Flow of a Custom Hook

```text
Component

↓

Calls Custom Hook

↓

Custom Hook calls

↓

useState()

↓

useEffect()

↓

Returns Data

↓

Component Uses Data
```

Notice

Hook

doesn't render anything.

It only returns

Logic/Data.

---

# Component vs Custom Hook

Many beginners confuse these.

### Component

Returns

```jsx
JSX;
```

Example

```jsx
const Header = () => {
  return <h1>Hello</h1>;
};
```

---

### Custom Hook

Returns

```jsx
Data;

Functions;

State;
```

Example

```jsx
const onlineStatus = useOnlineStatus();
```

It never returns UI.

---

# When should you create a Custom Hook?

Whenever you notice

```text
Copy

Paste

Copy

Paste
```

of the same React logic.

Move it into

one Hook.

---

# Example

Bad

```text
Component A

↓

API Logic

----------------

Component B

↓

Same API Logic

----------------

Component C

↓

Same API Logic
```

Good

```text
useFetch()

↓

Reusable Logic

↓

Component A

Component B

Component C
```

---

# 🔍 Important Observations

- Follow the Single Responsibility Principle.
- Components should focus on one responsibility.
- Hooks are normal JavaScript functions.
- Custom Hooks are utility functions that reuse React logic.
- A Hook should always start with `use`.
- Custom Hooks return data and logic, **not JSX**.
- Calling the same Custom Hook in multiple components does **not** create shared state.

---

# ⚠️ Common Mistakes

❌ Creating one huge component handling everything.

❌ Returning JSX from a Custom Hook.

❌ Naming a Hook without the `use` prefix.

❌ Thinking Custom Hooks share state between components.

---

# 💭 Interview Questions

<details>
<summary>What is the Single Responsibility Principle?</summary>

It states that a component or function should have only one responsibility. This improves readability, maintainability, testing and scalability.

</details>

<details>
<summary>What is a Custom Hook?</summary>

A Custom Hook is a JavaScript function that uses one or more React Hooks to encapsulate and reuse stateful logic across multiple components.

</details>

<details>
<summary>Why should Custom Hooks start with "use"?</summary>

It follows React's convention, making it immediately clear that the function is a Hook and follows the Rules of Hooks.

</details>

<details>
<summary>Do multiple components share state when using the same Custom Hook?</summary>

No. Each component gets its own independent state. The logic is reused, not the state.

</details>

---

# 🧠 Mental Model

```text
Problem

↓

Repeated Logic

↓

Move Logic into Custom Hook

↓

Return State / Functions

↓

Reuse Anywhere
```

Think

```text
Component

↓

"What should I display?"

-----------------------

Custom Hook

↓

"How should it work?"
```

This separation makes React applications clean and scalable.

---

# 🧠 React Philosophy

React encourages separating

```text
UI

from

Logic
```

Components should focus on

displaying UI.

Custom Hooks should focus on

handling logic.

When UI and Logic are separated,

applications become easier to read, test and maintain.

---

# ⚡ Quick Revision

- Follow the Single Responsibility Principle.
- One Component = One Responsibility.
- Hooks are normal JavaScript utility functions.
- Custom Hooks reuse logic, not UI.
- Always prefix Custom Hooks with `use`.
- Components return JSX.
- Custom Hooks return state, functions or data.
- Every component gets its own state, even when using the same Custom Hook.

---

# 🧪 Under the Hood

```text
Body()

↓

Calls useOnlineStatus()

↓

React Executes Custom Hook

↓

useState()

↓

Creates Local State

↓

useEffect()

↓

Registers Side Effect

↓

Returns onlineStatus

↓

Body Receives Value

↓

JSX Rendered

↓

If State Changes

↓

Body Re-renders

↓

useOnlineStatus() Executes Again

↓

React Returns Updated State
```

# 🚀 Episode 9 - Optimising Our App (Part 2)

> **Goal:** Understand how bundling works, why one large JavaScript bundle is a problem, and how React improves performance using Code Splitting, Lazy Loading and Suspense.

---

# 🤔 What does it mean when we say...

> **"Parcel bundles our application."**

Suppose our project has

```text id="i7l8a1"
Header.js

Body.js

Footer.js

RestaurantCard.js

About.js

Contact.js

Cart.js

Grocery.js
```

Question

When users open our application,

does the browser download

10 different JavaScript files?

❌ No.

Parcel combines everything.

```text id="l1n8c7"
Many JS Files

↓

Parcel

↓

One Optimized Bundle

↓

index.js
```

This process is called

**Bundling.**

---

# Why do we need Bundlers?

Imagine

```text id="x0w6pa"
100 JavaScript Files
```

Without bundling,

browser would make

100 HTTP Requests.

Very slow.

Instead,

Parcel combines files,

optimizes them,

minifies them

and creates

one bundle.

---

# 🤔 If one bundle is good...

Then what's the problem?

Imagine

our application becomes huge.

```text id="tzx8q4"
Header

Body

Footer

Restaurant

Admin Panel

Payment

Chat

Profile

Settings

Grocery
```

Now

Parcel creates

```text id="gpn0h6"
index.js

↓

10 MB
```

Question

User opens Home Page.

Do they need

Admin Panel?

No.

Need Chat?

No.

Need Grocery?

No.

Still

browser downloads

everything.

Huge waste.

---

# Problem with One Large Bundle

Suppose

```text id="7od4t7"
index.js

↓

10 MB
```

User only wants

```text id="p7u0ye"
Home Page
```

Still

10 MB downloads.

Result

```text id="l33w2j"
Slow Loading

↓

Bad Performance

↓

Poor User Experience
```

---

# React's Solution

Question

Can we keep Bundling

and still avoid

one huge JavaScript file?

Yes.

Instead of

one giant bundle,

create

multiple smaller bundles.

---

# Code Splitting

Instead of

```text id="ur5sps"
One Bundle

↓

10 MB
```

Create

```text id="88pn5v"
Main Bundle

↓

2 MB

-------------------

Grocery Bundle

↓

500 KB

-------------------

Admin Bundle

↓

1 MB

-------------------

Profile Bundle

↓

400 KB
```

This idea is called

**Code Splitting.**

---

# Other Names

Akshay Sir mentioned

these terms.

They all refer to

almost the same idea.

```text id="s8xk2r"
Code Splitting

Chunking

Dynamic Bundling

Lazy Loading

On Demand Loading
```

Difference is mostly terminology.

Core idea remains

> **Load only what is needed.**

---

# Logical Separation

Question

Can we randomly split files?

No.

Bundles should represent

features.

Example

```text id="0c4gq1"
Main Bundle

↓

Home

Header

Footer

Restaurant

-------------------

Grocery Bundle

↓

Everything related to Grocery

-------------------

Admin Bundle

↓

Everything related to Admin
```

Each bundle should contain

one logical feature.

---

# Grocery Example

Suppose

our application has

```text id="mkh2q0"
/

Home

--------------------

/about

--------------------

/grocery
```

Question

Should Grocery code

download immediately

when user opens Home?

No.

Because

user may never

visit Grocery.

---

# Lazy Loading

Idea

```text id="xehjwr"
Download

Only

When Required
```

This is called

**Lazy Loading**

or

**On Demand Loading.**

---

# lazy()

React provides

```jsx id="wp8o41"
lazy();
```

Example

```jsx id="xykyd3"
const Grocery = lazy(() => import("./components/Grocery"));
```

Notice

Earlier

```jsx id="1lk2m0"
import Grocery from "./Grocery";
```

loaded immediately.

Now

```jsx id="4du5i3"
lazy();
```

delays loading.

---

# Dynamic Import

Question

What is

```jsx id="g95cjl"
import()
```

with parentheses?

Normally

```jsx id="68yxx2"
import Header from "./Header";
```

is a

Static Import.

It loads immediately.

But

```jsx id="s9rq8j"
import("./Grocery");
```

returns

a Promise.

Think

```text id="kknjfp"
Need Grocery?

↓

Yes

↓

Download Grocery

↓

Resolve Promise

↓

Render Component
```

This is called

**Dynamic Import.**

---

# Execution Flow

User opens

```text id="q0vghx"
Home
```

Browser downloads

```text id="jlwm5m"
Main Bundle
```

Question

Does Grocery exist?

No.

Not downloaded yet.

---

Now

User clicks

```text id="9sov4m"
Grocery
```

React immediately tries

```jsx id="mn4ggh"
<Grocery />
```

Problem

```text id="4od74l"
Component

↓

Not Downloaded Yet
```

React cannot render

something

it doesn't have.

Without handling this,

the application throws an error.

---

# Suspense

React provides

```jsx id="jlwmgx"
<Suspense>
```

Think

```text id="i4kp8g"
Waiting Room
```

Until

Lazy Component

downloads,

Suspense shows

fallback UI.

---

# Example

```jsx id="j5yxbb"
<Suspense fallback={<h1>Loading...</h1>}>
  <Grocery />
</Suspense>
```

Flow

```text id="b7ojj4"
User Opens Grocery

↓

Download Starts

↓

Show Loading

↓

Download Finished

↓

Render Grocery
```

User never sees

an error.

---

# Better Example

Instead of

```jsx id="brmjlwm"
Loading...
```

companies usually show

```text id="53m3qe"
Skeleton

Shimmer

Loader
```

Because

it provides

better user experience.

---

# Complete Flow

Suppose

User visits

Home.

```text id="pdyf92"
Home

↓

Main Bundle Downloaded

↓

Header

↓

Body

↓

Footer
```

No Grocery code.

---

User clicks

Grocery.

```text id="8yl62m"
React sees

<Grocery />

↓

Bundle Missing

↓

Dynamic Import Starts

↓

Promise Pending

↓

Suspense Shows Loader

↓

Bundle Downloaded

↓

Promise Resolved

↓

React Renders Grocery
```

Notice

Only Grocery Bundle

downloaded.

Entire application

didn't reload.

---

# Real World Example

Think

Netflix.

When you open Netflix,

does it download

the entire application

including

Settings,

Downloads,

Kids,

Account,

Help,

Profiles?

No.

Everything loads

only when required.

That's exactly

Lazy Loading.

---

# 🔍 Important Observations

- Parcel bundles multiple files into optimized bundles.
- One huge bundle slows down application loading.
- Code Splitting divides the application into smaller logical bundles.
- Lazy Loading downloads code only when it is required.
- `lazy()` creates a lazily loaded component.
- Dynamic `import()` returns a Promise.
- `Suspense` displays fallback UI while waiting for the lazy component to load.

---

# ⚠️ Common Mistakes

❌ Creating one huge bundle for the entire application.

❌ Forgetting to wrap Lazy Components inside `Suspense`.

❌ Splitting bundles randomly instead of feature-wise.

❌ Thinking `lazy()` downloads code immediately.

It downloads

only when

that component

is actually needed.

---

# 💭 Interview Questions

<details>
<summary>What is Bundling?</summary>

Bundling is the process of combining multiple JavaScript modules into optimized bundle files for efficient delivery to the browser.

</details>

<details>
<summary>Why is one large JavaScript bundle a problem?</summary>

Users must download unnecessary code even for features they never visit, increasing initial load time and reducing performance.

</details>

<details>
<summary>What is Code Splitting?</summary>

Code Splitting divides an application into smaller logical bundles so only the required code is downloaded when needed.

</details>

<details>
<summary>Difference between Static Import and Dynamic Import?</summary>

Static imports are loaded during the initial bundle creation, while dynamic imports load modules on demand and return a Promise.

</details>

<details>
<summary>Why do we need Suspense?</summary>

Lazy-loaded components take time to download. `Suspense` displays fallback UI during that loading period instead of letting the application fail or show nothing.

</details>

---

# 🧠 Mental Model

```text id="o6pr38"
Application

↓

Parcel

↓

Feature Bundles

↓

User Opens Feature

↓

Download That Bundle Only

↓

Render Feature
```

Think

```text id="lwmjv0"
Restaurant Menu

↓

Order Only What You Want

↓

Not Entire Menu
```

React follows the same philosophy.

---

# 🧠 Why did React designers create this feature?

Problem

```text id="tz8t17"
Applications Became Huge

↓

Initial Bundle Size Increased

↓

Slow Loading
```

Solution

```text id="n61jlwm"
Code Splitting

↓

Lazy Loading

↓

Download Only Required Features

↓

Faster Initial Load
```

Goal

> **Improve performance without changing the developer experience.**

---

# 🧠 React Philosophy

React believes

```text id="0l3s6f"
Don't Load

What You Don't Need
```

Instead of making users wait

for the entire application,

React loads

features

only when

they are actually used.

---

# ⚡ Quick Revision

- Parcel combines modules into bundles.
- One large bundle increases initial load time.
- Code Splitting divides the app into smaller feature bundles.
- Lazy Loading loads code only when required.
- `lazy()` creates lazily loaded components.
- `import()` performs dynamic imports and returns a Promise.
- `Suspense` shows fallback UI while lazy components are downloading.
- Feature-based chunking is preferred over random splitting.

---

# 🧪 Under the Hood

```text id="o5zjlwm"
Application Starts

↓

Parcel Generates Multiple Bundles

↓

Browser Downloads Main Bundle

↓

User Navigates to Grocery

↓

React Encounters lazy()

↓

Dynamic import() Starts

↓

Promise Pending

↓

Suspense Shows Fallback UI

↓

Grocery Bundle Downloaded

↓

Promise Resolved

↓

React Creates Grocery Component

↓

Virtual DOM

↓

Diffing

↓

React Fiber

↓

Reconciliation

↓

Grocery Page Appears
```
