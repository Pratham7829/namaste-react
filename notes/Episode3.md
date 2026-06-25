# 🚀 Episode 3 - Laying the Foundation

> **Goal:** Understand what JSX actually is, why React introduced it, how Babel works, and how React Components are created and rendered.

---

## 🤔 Why do we need JSX?

Till now we were creating elements like this:

```js
const heading = React.createElement("h1", { id: "heading" }, "Hello World");
```

Question:

Is this wrong?

❌ No.

It is perfectly valid React code.

But...

Imagine creating this UI.

```html
<div>
  <h1>Hello</h1>
  <p>Welcome</p>
  <button>Click Me</button>
</div>
```

Using `React.createElement()` this becomes

```js
React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hello"),
  React.createElement("p", {}, "Welcome"),
  React.createElement("button", {}, "Click Me"),
);
```

😵 Readability almost khatam ho gayi.

React needed a better way to describe UI.

That better syntax is **JSX**.

---

## 🧠 What is JSX?

Many beginners think

> JSX = HTML

This is **wrong**.

JSX **looks like HTML** but it is **not HTML**.

It is a **JavaScript syntax** that makes writing UI much easier.

Example

```jsx
const heading = <h1>Hello World</h1>;
```

This is much cleaner than

```js
React.createElement(...)
```

---

## 🧠 JSX is NOT understood by Browser

Browser understands only

- HTML
- CSS
- JavaScript

Question:

Then how does browser understand JSX?

Answer:

**It doesn't.**

Before browser sees JSX,

it gets converted into normal JavaScript.

---

## ⚙️ Babel

Question:

Who converts JSX into JavaScript?

Answer:

**Babel**

Babel is called a **JavaScript Compiler / Transpiler**.

Flow:

```text
JSX

↓

Babel

↓

React.createElement()

↓

React Element (JS Object)

↓

root.render()

↓

Real DOM

↓

Browser
```

### Example

JSX

```jsx
const heading = <h1>Hello World</h1>;
```

Babel converts it into

```js
const heading = React.createElement("h1", null, "Hello World");
```

> 💡 JSX is just syntactic sugar over `React.createElement()`.

---

## 🤔 Compiler vs Transpiler

Compiler

Converts code from one language to another.

Example:

C → Machine Code

Transpiler

Converts one version/syntax of a language into another.

Example:

JSX → JavaScript

ES6 → ES5

Babel is generally referred to as a **Transpiler**.

---

## 🧠 Single Line JSX

```jsx
const heading = <h1>Hello World</h1>;
```

Nothing special.

---

## 🧠 Multi Line JSX

Whenever JSX spans multiple lines,

always wrap it inside parentheses.

✅ Correct

```jsx
const heading = (
  <div>
    <h1>Hello</h1>
  </div>
);
```

Without parentheses,

JavaScript may insert semicolons automatically (ASI),
leading to unexpected behavior.

---

## 🤔 React Elements vs React Components

This is one of the most confusing topics.

### React Element

A React Element is **an object** describing what should appear on the screen.

Example

```jsx
const heading = <h1>Hello</h1>;
```

Internally

```text
React Element

↓

JavaScript Object
```

---

### React Component

A Component is simply a **JavaScript function** that returns JSX.

Example

```jsx
const HeadingComponent = () => {
  return <h1>Hello</h1>;
};
```

Notice the difference.

Element

```jsx
const heading = <h1>Hello</h1>;
```

Component

```jsx
const HeadingComponent = () => <h1>Hello</h1>;
```

> 🧠 **Mental Model**
>
> - React Element → Final product (object)
> - React Component → Factory that creates React Elements

---

## 🧠 Types of Components

### Class Components (Old Way)

```jsx
class Header extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

Uses classes.

Contains lifecycle methods.

Still supported.

Less common in modern React.

---

### Functional Components (Modern Way)

```jsx
const Header = () => <h1>Hello</h1>;
```

Simple JavaScript function.

Easy to read.

Uses Hooks (later episodes).

Preferred today.

---

## 🤔 Why Functional Components became popular?

Because

- less code
- easier to understand
- easier state management using Hooks
- better readability

---

## Rendering a Component

Question:

How does React know we want to execute this function?

Component

```jsx
const Header = () => <h1>Hello</h1>;
```

Render

```jsx
root.render(<Header />);
```

React sees

```jsx
<Header />
```

and internally does something similar to

```js
Header();
```

The returned JSX is then rendered.

---

## Component Composition

One component can use another component.

Example

```jsx
const Title = () => <h1>Namaste React</h1>;

const Header = () => (
  <div>
    <Title />
    <p>Welcome</p>
  </div>
);
```

This is called

**Component Composition**

Think of LEGO blocks.

Small components combine to create bigger components.

---

## 🧠 Superpower of JSX — JavaScript inside {}

Anything inside

```jsx
{
}
```

is treated as JavaScript.

Example

```jsx
const name = "Pratham";

<h1>Hello {name}</h1>;
```

Output

```text
Hello Pratham
```

More examples

```jsx
<h1>{10 + 20}</h1>

<h1>{Math.random()}</h1>

<h1>{new Date().getFullYear()}</h1>
```

React evaluates the JavaScript expression first,
then renders the result.

> **Important:** Inside `{}` you can write **JavaScript expressions**, not statements.

✅ Valid

```jsx
{
  10 + 20;
}
{
  user.name;
}
{
  isLoggedIn ? "Hi" : "Login";
}
```

❌ Invalid

```jsx
{
    if(true){
        ...
    }
}
```

Because `if` is a statement, not an expression.

---

## React Element inside a Component

```jsx
const title = <h1>Namaste React</h1>;

const Header = () => <div>{title}</div>;
```

Perfectly valid.

Because `title` itself is a React Element.

---

## Element inside Element

```jsx
const title = (
  <div>
    <h1>Hello</h1>
  </div>
);
```

A React Element can contain other React Elements.

Exactly like HTML nesting.

---

## Component inside Component

```jsx
const Title = () => <h1>Title</h1>;

const Header = () => (
  <div>
    <Title />
  </div>
);
```

This is the foundation of React.

Applications are just components inside components.

---

## Calling Components like Functions

Since Functional Components are just JavaScript functions,

this also works.

```jsx
const Header = () => <h1>Hello</h1>;

{
  Header();
}
```

But preferred way is

```jsx
<Header />
```

Reason?

JSX syntax is cleaner and React can optimize it better.

---

## 🛡️ JSX Prevents Cross Site Scripting (XSS)

Imagine

```js
const name = "<script>alert('Hacked')</script>";
```

Now

```jsx
<h1>{name}</h1>
```

Question:

Will this execute?

❌ No.

React automatically escapes values.

Output becomes

```text
<script>alert('Hacked')</script>
```

instead of executing it.

This is one of the biggest security advantages of JSX.

> ⚠️ Unless you intentionally use `dangerouslySetInnerHTML`, React protects you from XSS in normal JSX rendering.

---

## 🔍 Important Observations

- JSX is **not HTML**.
- JSX is **not understood by the browser**.
- Babel converts JSX into `React.createElement()`.
- Components are just JavaScript functions.
- Components return React Elements.
- `{}` allows JavaScript expressions inside JSX.
- React escapes values by default to prevent XSS attacks.

---

## ⚠️ Common Mistakes

❌ Thinking JSX is HTML.

❌ Forgetting parentheses in multiline JSX.

❌ Writing statements (`if`, `for`) inside `{}`.

❌ Using lowercase for component names.

```jsx
<header />
```

React treats lowercase tags as HTML elements.

Components should always start with a capital letter.

```jsx
<Header />
```

---

## 💭 Interview Questions

<details>
<summary>Why do we need JSX if React.createElement() already exists?</summary>

JSX makes UI code much more readable and maintainable. Babel converts it back into `React.createElement()`, so there is no loss of functionality.

</details>

<details>
<summary>Is JSX HTML?</summary>

No. JSX is a JavaScript syntax extension that looks like HTML but gets transpiled into JavaScript.

</details>

<details>
<summary>Difference between React Element and React Component?</summary>

A React Element is an object describing UI. A React Component is a function (or class) that returns React Elements.

</details>

<details>
<summary>Why do component names start with a capital letter?</summary>

React uses capitalization to distinguish custom components (`<Header />`) from native HTML tags (`<header>`).

</details>

---

## 🧠 Mental Model

```text
JSX

↓

Babel

↓

React.createElement()

↓

React Element (JavaScript Object)

↓

React Component returns Elements

↓

root.render()

↓

Real DOM

↓

Browser
```

---

## ⚡ Quick Revision

- JSX is syntactic sugar over `React.createElement()`.
- Browser never understands JSX directly.
- Babel transpiles JSX into JavaScript.
- React Elements are objects.
- React Components are functions returning React Elements.
- Functional Components are the modern way of writing React.
- Components can be nested (Component Composition).
- `{}` allows JavaScript expressions inside JSX.
- React automatically escapes values to protect against XSS attacks.
