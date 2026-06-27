# 🚀 Episode 8 - Let's Get Classy (Part 1)

> **Goal:** Understand what Class Components are, why they exist, how state works inside them and how React loads a Class Component.

---

## 🤔 Why do Class Components even exist?

Today almost everyone writes

```jsx
const Header = () => {
  return <h1>Hello</h1>;
};
```

But React wasn't always like this.

Earlier,

Functional Components were just normal JavaScript functions.

They **could not**

- store state
- use lifecycle methods
- perform side effects

Only Class Components had these capabilities.

Later, React introduced Hooks,

and Functional Components became powerful enough to replace most Class Components.

Today,

Class Components still work,

but Functional Components are preferred.

---

## 🧠 Functional Component vs Class Component

We already know

```jsx
const Header = () => {
  return <h1>Hello</h1>;
};
```

This is nothing but

```text
Normal JavaScript Function
```

Similarly,

Class Component is nothing but

```jsx
class Header extends React.Component {}
```

which is simply

```text
Normal JavaScript Class
```

React has just defined some rules on top of it.

---

## Syntax

```jsx
class User extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

Notice one thing.

There is **no return statement outside render().**

React doesn't execute the whole class.

It executes

```text
render()
```

because

render() is responsible for describing the UI.

---

## 🤔 Why do we extend React.Component?

Question

Why not simply write

```jsx
class User {}
```

Because

React.Component already contains

a lot of functionality

like

- state management
- lifecycle methods
- setState()
- rendering behaviour

By extending it,

our class inherits all those features.

Exactly like normal JavaScript inheritance.

---

## Loading a Class Component

Suppose React sees

```jsx
<User />
```

Question

What does React do?

It **creates an object (instance)** of the class.

Think

```text
<User />

↓

new User()

↓

Constructor Called

↓

render()
```

This is extremely important.

A Class Component works because React creates its instance.

---

## Constructor

Whenever a class instance is created,

JavaScript automatically executes

```jsx
constructor();
```

Example

```jsx
class User extends React.Component {
  constructor() {
    console.log("Constructor");
  }
}
```

As soon as

```text
new User()
```

happens,

constructor runs.

This is pure JavaScript behaviour,

not React magic.

---

## Why do we write super(props)?

This is one of the most confusing topics.

Let's first understand JavaScript.

Suppose

```jsx
class User extends Person {}
```

Question

Can User directly use properties of Person?

No.

First,

Parent class constructor must execute.

That is done using

```jsx
super();
```

Now React.

```jsx
class User extends React.Component {}
```

Here,

our parent class is

```text
React.Component
```

So before using anything from React.Component,

we must call

```jsx
super();
```

---

### Why super(props)?

Suppose Parent passes

```jsx
<User name="Pratham" />
```

React internally sends

```jsx
props;
```

to the constructor.

If we want to access them,

we write

```jsx
constructor(props){

    super(props);

}
```

Now

```jsx
props.name;
```

or

```jsx
this.props.name;
```

becomes available.

> 💡 **Mental Model**
>
> `super(props)` simply forwards the props to the parent (`React.Component`) so that React can properly initialize the component.

---

## State inside Class Components

Remember

Functional Components

```jsx
const [count, setCount] = useState(0);
```

Class Components don't have Hooks.

Instead,

they use

```jsx
this.state;
```

Example

```jsx
constructor(props){

    super(props);

    this.state={

        count:0

    };

}
```

Notice

State is created inside the constructor.

Reason?

Because constructor runs

when the class instance is created.

Every component instance gets its own state.

---

## Multiple State Variables

State is simply an object.

```jsx
this.state = {
  count: 0,

  user: "Pratham",

  isLoggedIn: true,
};
```

Nothing special.

Just an object containing multiple values.

---

## 🤔 Why don't we directly update state?

Suppose

```jsx
this.state.count++;
```

Looks fine.

But React doesn't know

that state changed.

Exactly same reason

why normal variables don't update UI.

React must be informed.

---

## this.setState()

Instead of

```jsx
this.state.count++;
```

React provides

```jsx
this.setState({
  count: 1,
});
```

Question

Why?

Because

this.setState()

does two things.

```text
Update State

↓

Tell React

↓

Component Should Re-render
```

Direct assignment only changes the object.

React never gets notified.

---

## Updating Multiple State Variables

```jsx
this.setState({
  count: 1,

  user: "Akshay",
});
```

React merges the object

with the previous state

and then triggers a re-render.

You don't have to replace the entire state object manually.

---

## Internal Flow

Suppose

Button Click

↓

```jsx
this.setState({
  count: 1,
});
```

React internally

```text
Store New State

↓

Schedule Re-render

↓

render() executes again

↓

New Virtual DOM

↓

Diffing

↓

Reconciliation

↓

Updated UI
```

Notice

Exactly same flow

that we learnt with

```jsx
useState();
```

Only syntax is different.

---

## 🔍 Important Observations

- Class Components are normal JavaScript classes.
- React creates an instance whenever a Class Component is rendered.
- Constructor runs during instance creation.
- State is initialized inside the constructor.
- Never modify `this.state` directly.
- Always use `this.setState()` to update state.
- `this.setState()` updates state **and** tells React to re-render.

---

## ⚠️ Common Mistakes

❌ Forgetting `super(props)` when using `props` in the constructor.

❌ Updating state directly.

```jsx
this.state.count++;
```

Wrong.

Use

```jsx
this.setState({
  count: this.state.count + 1,
});
```

---

## 💭 Interview Questions

<details>
<summary>Why do Class Components extend React.Component?</summary>

Because `React.Component` provides built-in React features like state management, lifecycle methods and `setState()`.

</details>

<details>
<summary>Why do we write super(props)?</summary>

Because the parent (`React.Component`) constructor must be called before using `this`, and passing `props` ensures they are correctly initialized and available inside the component.

</details>

<details>
<summary>Why should we never update this.state directly?</summary>

React is not notified when state is modified directly. `this.setState()` both updates the state and schedules a re-render.

</details>

---

## 🧠 React Philosophy

React doesn't care

whether you use

```text
Class Component
```

or

```text
Functional Component
```

Its only concern is

```text
State Changes

↓

Re-render

↓

New Virtual DOM

↓

Diffing

↓

Reconciliation

↓

Updated UI
```

The rendering engine remains the same.

Only the syntax for managing state is different.

---

## ⚡ Quick Revision

- Class Components are normal JavaScript classes.
- They extend `React.Component`.
- React creates an instance when rendering a Class Component.
- Constructor runs first during instance creation.
- `super(props)` initializes the parent class and makes props available.
- State is stored in `this.state`.
- Update state using `this.setState()`.
- `this.setState()` triggers a re-render.

---

## 🧪 Under the Hood

```text
<User />

↓

React creates class instance

↓

constructor(props)

↓

this.state initialized

↓

render()

↓

React Elements created

↓

Virtual DOM

↓

Browser Paint

↓

User Click

↓

this.setState()

↓

New State Stored

↓

render() again

↓

Diffing

↓

React Fiber

↓

Reconciliation

↓

Updated UI
```

# 🚀 Episode 8 - Let's Get Classy (Part 2)

> **Goal:** Understand the complete Lifecycle of Class Components, why lifecycle methods exist, how Parent & Child components execute, and why API calls are made inside `componentDidMount()`.

---

## 🤔 What is a Component Lifecycle?

Think about a human.

```text id="9k2jhe"
Birth

↓

Life

↓

Death
```

Similarly,

every React Component also has a lifecycle.

```text id="4nn9mu"
Mount

↓

Update

↓

Unmount
```

React simply gives us methods to execute code at each stage.

---

## Three Phases of Every Component

```text id="7r1qwd"
Mount Phase

↓

Update Phase

↓

Unmount Phase
```

Think of them as

| Phase   | Meaning                                   |
| ------- | ----------------------------------------- |
| Mount   | Component is created and added to the DOM |
| Update  | State/Props changed                       |
| Unmount | Component is removed from the DOM         |

---

## Example

Suppose

```text id="b3ws9z"
<App>

↓

About

↓

UserClass
```

Component Tree

```text id="blh5uz"
App

↓

About

↓

UserClass
```

React always starts from the parent.

---

# Mount Phase

Suppose React sees

```jsx id="gkivmf"
<About />
```

React starts loading About.

Loading means

```text id="7gaxkg"
Create Instance

↓

constructor()

↓

render()

↓

DOM

↓

componentDidMount()
```

Remember this sequence.

---

## Why Constructor Runs First?

Because

React creates

```text id="3vvgtj"
new About()
```

Whenever a class is instantiated,

JavaScript automatically executes

```jsx id="i6zvui"
constructor();
```

This is not React.

This is pure JavaScript.

---

## After Constructor?

Once constructor finishes,

React immediately calls

```jsx id="hvsruq"
render();
```

Question

Why?

Because React now needs

the UI.

render() returns JSX,

which React converts into Virtual DOM.

---

## Then componentDidMount()

Many beginners think

componentDidMount()

runs before rendering.

Wrong.

Flow

```text id="rf4kq7"
constructor()

↓

render()

↓

DOM Updated

↓

componentDidMount()
```

Notice

The component has already appeared on screen.

Only then

componentDidMount()

is executed.

---

# Parent & Child Execution

Suppose

```jsx id="cb2wgi"
<About>
  <UserClass />
</About>
```

Both are Class Components.

Question

Which constructor executes first?

Let's see.

---

## Execution Order

### Parent Constructor

```text id="h6okqm"
About Constructor
```

---

### Parent Render

React executes

```text id="4d6fjr"
About Render
```

During render,

React finds

```jsx id="qz15r6"
<UserClass />
```

Now

React pauses

About

and starts loading UserClass.

---

### Child Constructor

```text id="xrkbs5"
User Constructor
```

---

### Child Render

```text id="x87k4j"
User Render
```

Now

both Parent and Child have finished rendering.

Question

Who gets mounted first?

---

## componentDidMount Order

Many people think

Parent

↓

Child

Wrong.

Actual order

```text id="4t7m6h"
Parent Constructor

↓

Parent Render

↓

Child Constructor

↓

Child Render

↓

Child componentDidMount()

↓

Parent componentDidMount()
```

Why?

Because

React first finishes mounting

the deepest child,

then moves upward.

Think

```text id="lk3mn0"
Bottom

↓

Up
```

This is exactly like recursion.

---

# Easy Analogy

Suppose

you are decorating a house.

Can you decorate

the whole house

before finishing rooms?

No.

First,

decorate rooms.

Then,

decorate house.

Exactly

Child first.

Parent later.

---

# Why componentDidMount() Exists?

Question

Why didn't React simply make API calls inside constructor?

Imagine

```jsx id="gmpw0u"
constructor(){

    fetchData();

}
```

API takes

```text id="e41skw"
3 Seconds
```

Question

Should user wait

3 seconds

before seeing anything?

Terrible UX.

Instead

React says

```text id="yk8bfr"
First

Render UI

↓

Then

Call API
```

This makes the application feel much faster.

---

# Why API Calls inside componentDidMount()?

Flow

```text id="8xg8tw"
constructor()

↓

render()

↓

Dummy UI

↓

Browser Paint

↓

componentDidMount()

↓

API Call

↓

State Update

↓

Re-render

↓

Real Data
```

Exactly the same idea

we learnt in

```jsx id="8w4tz2"
useEffect(() => {}, []);
```

Notice

Both

wait until

the component

has been rendered.

---

# Mounting Flow with API

Suppose

```jsx id="cm6z0o"
componentDidMount(){

    fetchData();

}
```

API returns

```text id="rvkjlwm"
User Data
```

Then

```jsx id="3x94vl"
this.setState(...)
```

Question

What happens now?

React starts

Update Phase.

---

# Update Phase

Whenever

```text id="vlgm12"
State

↓

Changes
```

React again executes

```text id="4mxpkm"
render()
```

with

new state.

Flow

```text id="h5m27h"
this.setState()

↓

New State

↓

render()

↓

Diffing

↓

Reconciliation

↓

Updated DOM

↓

componentDidUpdate()
```

Notice

componentDidUpdate()

runs

after

the updated UI

has already appeared.

---

# componentDidUpdate()

Question

Why does React provide this?

Suppose

you want

to execute code

every time

data changes.

Examples

- Analytics
- Logging
- DOM Measurement
- Additional API Calls (carefully)

React provides

```jsx id="mb8f1w"
componentDidUpdate();
```

for exactly that.

---

# Render Phase vs Commit Phase

This is one of the most important React concepts.

React internally works in

two phases.

---

## Render Phase

React only calculates

"What should the UI look like?"

No DOM changes happen here.

```text id="54w6ok"
constructor()

↓

render()

↓

Virtual DOM
```

Only calculations.

---

## Commit Phase

Now React

applies

those changes

to the Real DOM.

Then

```text id="6k3h7w"
componentDidMount()

componentDidUpdate()
```

execute.

Think

```text id="mq53d8"
Render Phase

↓

Planning

-----------------

Commit Phase

↓

Execution
```

---

# React Optimization

Suppose

Parent has

5 Child Components.

React first performs

Render Phase

for

all children.

Only after

everything is ready,

React commits

all DOM changes together.

This batching makes React faster.

Instead of updating DOM repeatedly,

React updates it efficiently.

---

# Complete Mount + Update Flow

```text id="2s59x7"
Parent Constructor

↓

Parent Render

↓

Child Constructor

↓

Child Render

↓

Browser Paint

↓

Child componentDidMount()

↓

Parent componentDidMount()

↓

API Call

↓

this.setState()

↓

Render Again

↓

Diffing

↓

Reconciliation

↓

Browser Update

↓

componentDidUpdate()
```

---

## 🔍 Important Observations

- Every component goes through Mount → Update → Unmount.
- Constructor always executes before render.
- `componentDidMount()` runs after the component is mounted.
- Child `componentDidMount()` executes before Parent `componentDidMount()`.
- API calls are usually made inside `componentDidMount()` because the UI is already visible.
- State updates trigger the Update Phase.
- `componentDidUpdate()` runs after every successful update.
- React separates work into Render Phase and Commit Phase.

---

## ⚠️ Common Mistakes

❌ Making API calls inside constructor.

❌ Thinking `componentDidMount()` runs before rendering.

❌ Confusing Render Phase with Commit Phase.

❌ Forgetting that `setState()` inside `componentDidMount()` starts a new update cycle.

---

## 💭 Interview Questions

<details>
<summary>Why are API calls usually made inside componentDidMount()?</summary>

Because React first renders the component and paints the UI. Fetching data afterward prevents blocking the initial render and provides a better user experience.

</details>

<details>
<summary>What is the execution order of Parent and Child lifecycle methods during mounting?</summary>

Parent Constructor → Parent Render → Child Constructor → Child Render → Child componentDidMount() → Parent componentDidMount().

</details>

<details>
<summary>Difference between Render Phase and Commit Phase?</summary>

Render Phase calculates the new UI (Virtual DOM). Commit Phase applies changes to the Real DOM and then executes lifecycle methods like `componentDidMount()` and `componentDidUpdate()`.

</details>

---

## 🧠 React Philosophy

React follows a very important rule:

```text id="5lq3ki"
Calculate Everything First

↓

Update DOM Later
```

Instead of modifying the DOM step by step,

React first prepares the complete UI,

then commits all changes together.

This batching makes React efficient.

---

## ⚡ Quick Revision

- Every component has three phases: Mount, Update and Unmount.
- Mount sequence: Constructor → Render → componentDidMount().
- Child `componentDidMount()` executes before Parent `componentDidMount()`.
- API calls are placed inside `componentDidMount()` because the component is already visible.
- `setState()` starts the Update Phase.
- Update sequence: Render → Diffing → Reconciliation → componentDidUpdate().
- React internally works in two phases: Render Phase and Commit Phase.

---

## 🧪 Under the Hood

```text id="cs7v19"
<App>

↓

React Creates Parent Instance

↓

Parent Constructor

↓

Parent Render

↓

React Finds Child

↓

Child Constructor

↓

Child Render

↓

Render Phase Complete

↓

Commit Phase Starts

↓

DOM Updated

↓

Child componentDidMount()

↓

Parent componentDidMount()

↓

API Call

↓

this.setState()

↓

React Fiber Starts Update

↓

New Virtual DOM

↓

Diffing

↓

Reconciliation

↓

Updated DOM

↓

componentDidUpdate()
```

# 🚀 Episode 8 - Let's Get Classy (Part 3)

> **Goal:** Understand the Unmount phase, cleanup logic, why `componentWillUnmount()` exists, how it relates to `useEffect` cleanup, and understand the complete lifecycle of a React Component.

---

## 🤔 We have Mount and Update...

Till now we learnt

```text
Mount

↓

Update
```

Question:

Can a component live forever?

No.

Imagine our application.

```text
Home

↓

About

↓

Contact

↓

Home
```

Whenever we move from

```
About

↓

Home
```

the About component disappears.

React removes it from the DOM.

This process is called

```text
Unmounting
```

---

## What is Unmounting?

Unmounting simply means

> React removes a component from the DOM because it is no longer required.

Think

```text
Mount

↓

Component Appears

-----------------------

Unmount

↓

Component Disappears
```

---

## Why does React give us componentWillUnmount()?

Suppose

```jsx
componentDidMount(){

    setInterval(()=>{

        console.log("Hello");

    },1000);

}
```

Question

What happens when user leaves this page?

Does interval automatically stop?

❌ No.

JavaScript doesn't know

that React removed the component.

Interval continues forever.

Result

```text
Memory Leak

↓

Unnecessary CPU Usage

↓

Performance Issues
```

---

## componentWillUnmount()

React gives one final chance.

```jsx
componentWillUnmount(){

}
```

This method executes

just before

the component is removed.

Perfect place for cleanup.

---

## Example

```jsx
componentDidMount(){

    this.timer=setInterval(()=>{

        console.log("Running");

    },1000);

}
```

Cleanup

```jsx
componentWillUnmount(){

    clearInterval(this.timer);

}
```

Flow

```text
Component Mounted

↓

Interval Started

↓

Component Removed

↓

componentWillUnmount()

↓

clearInterval()

↓

Everything Clean
```

---

# Why Cleanup is Important?

Imagine

User opens

```text
About

↓

Home

↓

About

↓

Home

↓

About
```

Every visit starts

one more interval.

Without cleanup

```text
Interval 1

Interval 2

Interval 3

Interval 4
```

Now

every second

all intervals execute.

Huge waste of memory.

---

## useEffect Cleanup

Exactly same thing happens

inside Functional Components.

Example

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);
}, []);
```

Question

Who clears the timer?

Nobody.

Need cleanup.

---

## Return Function

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

That returned function is called

when

```text
Component Unmounts
```

Think

```text
useEffect()

↓

Setup

↓

return()

↓

Cleanup
```

---

# Why does useEffect return a Function?

Think

```text
componentDidMount()

↓

Do Something

----------------------

componentWillUnmount()

↓

Undo It
```

React combined

both ideas

inside one Hook.

```jsx
useEffect(() => {
  // Setup

  return () => {
    // Cleanup
  };
}, []);
```

Beautiful design.

---

# Two useEffects

Question

Can we write

multiple useEffects?

Absolutely.

Example

```jsx
useEffect(() => {
  console.log("API");
}, []);
```

Second

```jsx
useEffect(() => {
  console.log("Search Changed");
}, [searchText]);
```

Both are independent.

Think

```text
Effect 1

↓

API

-------------------

Effect 2

↓

Search
```

Much cleaner than

writing everything

inside one giant useEffect.

---

# Class Component Equivalent

In Class Components

there is no

```jsx
useEffect();
```

Instead

logic gets divided.

Example

```text
Mount Logic

↓

componentDidMount()

----------------------

Update Logic

↓

componentDidUpdate()

----------------------

Cleanup

↓

componentWillUnmount()
```

Notice

React separated

three phases.

Hooks combine them

more elegantly.

---

# ⚠️ Don't Compare Lifecycle Methods Directly

Many tutorials say

```text
componentDidMount()

=

useEffect([])
```

This is

**not completely true.**

Why?

Because

Hooks and Class Components

have different mental models.

They may achieve

similar goals,

but they are not exact replacements.

Remember

```text
Don't compare syntax.

Understand behaviour.
```

---

# Complete Lifecycle

Suppose

User opens

About Page.

Flow

```text
constructor()

↓

render()

↓

Browser Paint

↓

componentDidMount()

↓

API Call

↓

setState()

↓

render()

↓

Diffing

↓

Reconciliation

↓

Browser Update

↓

componentDidUpdate()

↓

User Leaves Page

↓

componentWillUnmount()

↓

Cleanup
```

Entire lifecycle

in one diagram.

---

# Mount vs Update vs Unmount

| Phase   | Purpose                          |
| ------- | -------------------------------- |
| Mount   | Component created for first time |
| Update  | State or Props changed           |
| Unmount | Component removed                |

Think

```text
Birth

↓

Life

↓

Death
```

Exactly same.

---

# React Philosophy

Question

Why doesn't React automatically stop timers?

Because

React only manages

```text
UI
```

It doesn't know

what external resources

your component created.

Examples

- Timers
- WebSockets
- Event Listeners
- API Subscriptions

Developer created them.

Developer should clean them.

---

# Real World Examples

Whenever you create

```text
setInterval()

↓

Cleanup Required
```

Whenever you add

```text
window.addEventListener()

↓

Cleanup Required
```

Whenever you open

```text
WebSocket

↓

Cleanup Required
```

General Rule

```text
If you Start Something

↓

You should Stop It
```

---

# Mental Model

Imagine

renting a hotel room.

```text
Mount

↓

Check-In

↓

Use Room

↓

Unmount

↓

Check-Out
```

Question

Can you leave

lights

AC

TV

running

while leaving?

No.

Exactly

Cleanup means

switching everything off

before leaving.

---

## 🔍 Important Observations

- Every mounted component will eventually unmount.
- `componentWillUnmount()` is mainly used for cleanup.
- Cleanup prevents memory leaks.
- `useEffect` cleanup is written inside the returned function.
- Multiple `useEffect`s are encouraged.
- Each Effect should handle one responsibility.

---

## ⚠️ Common Mistakes

❌ Forgetting to clear intervals.

❌ Forgetting to remove event listeners.

❌ Putting unrelated logic inside one huge useEffect.

❌ Thinking cleanup runs only when the page refreshes.

Cleanup runs

whenever

React removes

that component.

---

## 💭 Interview Questions

<details>
<summary>Why do we need componentWillUnmount()?</summary>

It allows developers to clean up resources such as timers, event listeners and subscriptions before the component is removed from the DOM.

</details>

<details>
<summary>Why does useEffect return a function?</summary>

The returned function is React's cleanup mechanism. It runs before the component unmounts (and before the effect re-runs when dependencies change), allowing resources to be released safely.

</details>

<details>
<summary>Can we use multiple useEffects in one component?</summary>

Yes. In fact, React encourages splitting unrelated side effects into separate `useEffect` calls for better readability and maintainability.

</details>

---

## ⚡ Quick Revision

- Components go through Mount → Update → Unmount.
- `componentWillUnmount()` is used for cleanup.
- Cleanup prevents memory leaks.
- `useEffect` cleanup is written inside the returned function.
- If you start a timer, event listener or subscription, you should also stop it.
- Multiple `useEffect`s are completely valid.
- Focus on understanding the behavior of Hooks and lifecycle methods rather than trying to map them one-to-one.

---

## 🧪 Under the Hood

```text
User Opens About Page

↓

React Creates Component

↓

Mount Phase

↓

componentDidMount()

↓

Timer Started

↓

API Call

↓

State Updated

↓

Update Phase

↓

render()

↓

Diffing

↓

React Fiber

↓

Reconciliation

↓

Updated UI

↓

User Navigates Away

↓

componentWillUnmount()

↓

Cleanup

↓

Interval Cleared

↓

Component Removed from DOM
```
