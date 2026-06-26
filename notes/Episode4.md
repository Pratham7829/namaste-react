# 🚀 Episode 4 - Talk is Cheap, Show Me the Code

> **Goal:** Learn how to break a UI into reusable components and how to generate UI dynamically using data instead of hardcoding everything.

---

## 🤔 How should we think while building a React App?

Suppose someone asks you to build a food ordering application.

Most beginners immediately start writing code.

Instead,

React developers first think in terms of **Components**.

Question yourself:

> "Is UI ke different independent parts kaun kaun se hain?"

Because React applications are nothing but **a collection of small reusable components.**

---

## 🧠 Breaking UI into Components

For our Food Ordering App (Namaste Food), we can divide the UI like this:

```text
App

│

├── Header
│     ├── Logo
│     └── NavItems
│
├── Body
│     ├── Search
│     └── RestaurantContainer
│             ├── RestaurantCard
│             ├── RestaurantCard
│             ├── RestaurantCard
│             └── ...
│
└── Footer
      ├── Copyright
      ├── Links
      ├── Address
      └── Contact
```

Notice something...

Every big component is made up of smaller components.

This is exactly how React applications grow.

---

## 🧠 Component Tree

Instead of imagining one huge webpage,

think of a **tree**.

```text
App

↓

Header
Body
Footer

↓

RestaurantContainer

↓

RestaurantCard
```

Whenever you build a UI,

always think

> "Can this part become a separate component?"

If yes,

make it a component.

---

## 🤔 Problem with Hardcoded Cards

Initially we write

```jsx
<RestaurantCard />
<RestaurantCard />
<RestaurantCard />
<RestaurantCard />
```

Looks okay.

Now imagine

Swiggy has

10,000 restaurants.

Will we write

```jsx
<RestaurantCard />
```

ten thousand times?

Obviously impossible.

We need a way to reuse the same component with different data.

---

## 🧠 Props

Props solve this problem.

Think of Props as

> Arguments passed to a function.

Normal Function

```js
function greet(name) {
  return "Hello " + name;
}

greet("Pratham");
greet("Akshay");
```

Same function.

Different input.

Different output.

Exactly same idea in React.

Component

```jsx
<RestaurantCard
    name="Domino's"
/>

<RestaurantCard
    name="KFC"
/>
```

Same Component.

Different Props.

Different UI.

---

## ⚙️ How Props Work

Component

```jsx
const RestaurantCard = (props) => {
  console.log(props);

  return <h2>{props.name}</h2>;
};
```

When React sees

```jsx
<RestaurantCard name="Domino's" />
```

Internally imagine something like

```js
RestaurantCard({
  name: "Domino's",
});
```

Exactly like calling a normal JavaScript function.

> 💡 Passing props to a component is conceptually similar to passing arguments to a function.

---

## 🧠 Destructuring Props

Instead of writing

```jsx
props.name;
props.rating;
props.cuisine;
```

everywhere,

we can destructure.

```jsx
const RestaurantCard = ({
    name,
    rating,
    cuisine
}) => {
    ...
};
```

Now directly use

```jsx
{
  name;
}

{
  rating;
}

{
  cuisine;
}
```

Cleaner.

More readable.

---

## 💡 Destructuring on the Fly

React developers usually destructure directly in the parameter.

Instead of

```jsx
const RestaurantCard = (props) => {
  const { name, rating } = props;
};
```

We directly write

```jsx
const RestaurantCard = ({ name, rating }) => {};
```

Both are same.

Second one is just cleaner.

---

## 🤔 Why do we store restaurant data separately?

Instead of

```jsx
<RestaurantCard
    name="Domino's"
    rating="4.5"
/>

<RestaurantCard
    name="KFC"
    rating="4.3"
/>
```

again and again,

we store all restaurants in an array.

```js
const restaurants = [
  {
    name: "Domino's",
    rating: 4.5,
  },
  {
    name: "KFC",
    rating: 4.3,
  },
];
```

Now UI becomes driven by data.

---

## 🧠 Config Driven UI

This is one of the biggest ideas in modern frontend.

UI should not decide what to render.

**Data should decide.**

Imagine Swiggy.

Morning

```text
Restaurant Count

↓

100
```

Evening

```text
Restaurant Count

↓

150
```

Did developers write 50 new cards?

No.

Backend sent new data.

Frontend automatically rendered 50 more cards.

This is called

> **Config Driven UI**

The UI changes because the **configuration/data changes**, not because the code changes.

---

## Rendering Cards Dynamically

Instead of

```jsx
<RestaurantCard />
<RestaurantCard />
<RestaurantCard />
```

we loop over data.

```jsx
restaurants.map((restaurant) => <RestaurantCard resData={restaurant} />);
```

Flow

```text
Array

↓

map()

↓

RestaurantCard

↓

Rendered UI
```

This is how almost every React application works.

---

## 🤔 Why do we need Keys?

Imagine current list

```text
A
B
C
```

Now new restaurant comes.

```text
A

NEW

B

C
```

Without keys,

React compares position.

It thinks

```text
B became NEW

C became B

New became C
```

React unnecessarily updates multiple items.

Even though

only one new card was inserted.

---

## With Keys

Suppose every restaurant has an id.

```text
1
2
3
```

New restaurant

```text
1

99

2

3
```

Now React immediately knows

Restaurant

99

is new.

Everything else is unchanged.

So React only renders

the new card.

This makes updates much more efficient.

> ⚠️ Keys help React identify which list items have changed, been added, or removed.

---

## Why NOT use Array Index as Key?

Many beginners write

```jsx
key = { index };
```

Looks fine.

But imagine

Current List

```text
0 Apple

1 Banana

2 Mango
```

Insert

Orange

at first position.

Now

```text
0 Orange

1 Apple

2 Banana

3 Mango
```

Notice...

Every index changed.

React thinks

every item changed.

Actually,

only one new item was inserted.

Using index destroys the identity of list items.

---

### When is index acceptable?

Only when

- list is static
- items never reorder
- items never insert/delete

Otherwise,

always use a unique id.

---

## 🔍 Important Observations

- Think in Components, not pages.
- Components become reusable using Props.
- Props are read-only.
- UI should be generated from data.
- `map()` is heavily used in React.
- Every item inside a list should have a unique key.

---

## ⚠️ Common Mistakes

❌ Hardcoding multiple cards.

Instead,

store data in an array and render using `map()`.

---

❌ Using index as key.

Only use it as a last resort.

---

❌ Thinking props can be modified inside a component.

Props are immutable.

A child component should never modify its props.

---

## 💭 Interview Questions

<details>
<summary>Why do we use Props?</summary>

Props allow us to pass data from a parent component to a child component, making components reusable.

</details>

<details>
<summary>What is Config Driven UI?</summary>

A UI where the rendered interface depends on data/configuration rather than hardcoded elements. Changing the data automatically changes the UI.

</details>

<details>
<summary>Why are keys required while rendering lists?</summary>

Keys help React identify which items have changed, been added, or removed, allowing efficient updates instead of re-rendering the entire list.

</details>

<details>
<summary>Why should we avoid using array index as a key?</summary>

When items are inserted, deleted, or reordered, indices change. React loses the identity of list items and may perform unnecessary re-renders or preserve the wrong component state.

</details>

---

## 🧠 Mental Model

```text
Data

↓

Props

↓

Component

↓

React Element

↓

Browser UI
```

React doesn't build UI by manually creating cards.

It repeatedly uses **the same component** with **different data**.

That's why React applications are scalable.

---

## 🧪 Experiment

Create an array:

```js
const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Mango" },
];
```

Render it using:

```jsx
fruits.map((fruit) => <h2 key={fruit.id}>{fruit.name}</h2>);
```

Now insert a new fruit in the middle.

Observe how React behaves with:

- `key={fruit.id}`
- `key={index}`

This small experiment will make the purpose of keys crystal clear.

---

## ⚡ Quick Revision

- Break every UI into small reusable components.
- Components receive data using **Props**.
- Passing props is conceptually similar to passing arguments to a function.
- Destructure props for cleaner code.
- Modern UIs are **Data/Config Driven**.
- Use `map()` to render lists dynamically.
- Always provide a unique `key` while rendering lists.
- Avoid using array indices as keys unless the list is static and never changes.
