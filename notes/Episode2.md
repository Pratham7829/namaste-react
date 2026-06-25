# 🚀 Episode 2 - Igniting Our App

> **Goal:** Samajhna ki React application actually kaise start hoti hai, npm kya hai, package.json ka purpose kya hai, bundlers ki need kyu padi aur Parcel internally kya karta hai.

---

## 🤔 Why do we need a Build Tool?

Episode 1 me hum React ko CDN se use kar rahe the.

```html
<script src="react.js"></script>
```

Ye approach learning ke liye theek hai.

Lekin real-world applications me ye approach use nahi hoti.

Socho tumhari application me:

* React
* ReactDOM
* Redux
* Axios
* Tailwind
* 100+ JavaScript files
* 1000+ Images

Ab agar har library CDN se load karni pade to application maintain karna bahut difficult ho jayega.

Isliye hume ek **Project Management System** aur **Build Tool** ki zarurat padti hai.

---

## 🧠 What is NPM?

Most beginners think

> NPM = Node Package Manager

Reality thodi different hai.

NPM is a **package manager**.

Iska kaam hai:

* Packages install karna
* Dependencies manage karna
* Project information maintain karna

NPM khud package nahi hai.

Ye ek package manager hai.

---

## 🧠 Package kya hota hai?

Package simply kisi aur developer dwara likha hua reusable code hota hai.

Example:

Tum calculator bana rahe ho.

Kisi aur ne pehle hi calculator library bana di.

Instead of reinventing,

Tum us package ko install kar loge.

Exactly isi tarah React bhi ek package hai.

---

## ⚙️ Initializing a Project

```bash
npm init
```

Ya

```bash
npm init -y
```

Ye command project ke andar ek important file banati hai:

```text
package.json
```

---

## 🧠 package.json

Ye project ka **identity card** hai.

Isme project ke baare me information hoti hai.

Example:

```json
{
  "name": "namaste-react",
  "version": "1.0.0"
}
```

Initially isme dependencies nahi hoti.

Jaise hi packages install karte hain,

Ye automatically update ho jata hai.

---

## 🤔 Why package.json?

Imagine tum apna project kisi friend ko bhejte ho.

Kya tum usko pura `node_modules` folder bhejoge?

No.

Sirf

```text
package.json
```

aur

```text
package-lock.json
```

bhejna enough hota hai.

Friend simply run karega

```bash
npm install
```

Aur saare packages automatically install ho jayenge.

---

## 💻 Installing React

```bash
npm install react
```

React install ho jayega.

Lekin browser me render karne ke liye ReactDOM bhi chahiye.

```bash
npm install react-dom
```

---

## 🧠 Dependencies

Dependencies = Packages jinpar hamara project depend karta hai.

Example:

Project React use kar raha hai.

To React ek dependency hai.

package.json me ye kuch aisa dikhega:

```json
"dependencies": {
    "react": "...",
    "react-dom": "..."
}
```

---

## 🤔 node_modules kya hai?

Ye folder dekhke beginners dar jaate hain 😂

Actually,

Ye folder sirf installed packages ka collection hai.

Tum directly isme kabhi coding nahi karte.

NPM automatically ise manage karta hai.

---

## ⚠️ Important Observation

Kabhi bhi

```text
node_modules
```

GitHub pe push nahi karte.

Reason?

Ye folder bahut bada hota hai.

Har developer apni machine pe

```bash
npm install
```

run karke ise dubara generate kar sakta hai.

---

## 🧠 package-lock.json

Ye beginners ke liye confusing file hoti hai.

Question:

Package already package.json me hai.

To ye file alag kyu?

Difference:

package.json

> Batata hai kaunsi dependency chahiye.

package-lock.json

> Batata hai exactly kaunsa version install hua tha.

Ye ensure karta hai ki har developer ki machine pe same versions install ho.

---

## 🤔 Bundler ki Need kyu padi?

Application me bahut saari files hoti hain.

* JavaScript
* CSS
* Images
* Fonts
* SVG
* JSON

Browser directly itni sari cheeze efficiently manage nahi karta.

Bundler ka kaam hai

Sab resources ko optimize karna.

---

## 🧠 What is Parcel?

Parcel ek **Bundler** hai.

Ye hamare project ko production-ready banata hai.

Hum Parcel ko manually use nahi karte.

Hum bas command chalate hain.

Parcel internally bahut saare kaam karta hai.

---

## 💻 Install Parcel

```bash
npm install -D parcel
```

Question:

Ye `-D` kya hai?

Answer:

Development Dependency

Ye sirf development ke time use hogi.

Production code ka part nahi banegi.

---

## 🧠 Dependencies vs Dev Dependencies

### Dependencies

Application run karne ke liye required.

Example:

* React
* ReactDOM

---

### Dev Dependencies

Sirf development ke liye.

Example:

* Parcel
* ESLint
* Prettier

Application users ko Parcel ki zarurat nahi.

Developer ko hoti hai.

---

## ⚙️ Parcel Internally kya karta hai?

Socho tumne project run kiya.

```bash
npm parcel index.html
```

Internally Parcel:

```
Read Files

↓

Resolve Dependencies

↓

Bundle Files

↓

Optimize

↓

Start Dev Server

↓

Watch File Changes

↓

Auto Reload Browser
```

Tum ek command chalate ho.

Parcel piche dozens of operations perform karta hai.

---

## 💡 Superpowers of Parcel

Parcel sirf bundling nahi karta.

Ye automatically provide karta hai:

* Development Server
* Hot Module Replacement (HMR)
* File Watching
* Faster Builds
* Caching
* Image Optimization
* Minification
* Compression
* Tree Shaking (Production)
* Code Bundling

Isliye modern React projects me bundler use kiya jata hai.

---

## 🧠 HMR (Hot Module Replacement)

Question:

File save karte hi browser automatically refresh kaise hota hai?

Reason:

HMR.

Ye pura page reload nahi karta.

Sirf changed modules update karta hai.

Result:

Development bahut fast ho jati hai.

---

## 💡 Cache

Parcel cache create karta hai.

Isliye second build first build se fast hoti hai.

Cache delete karna ho:

```bash
rm -rf .parcel-cache
```

Windows me manually delete kar sakte ho.

---

## 🔍 Important Observations

* npm package nahi hai.
* package.json project ki identity hai.
* node_modules manually edit nahi karte.
* package-lock.json versions lock karta hai.
* Parcel development ko easy banata hai.
* Dev Dependency production me nahi jaati.

---

## ⚠️ Common Mistakes

❌ npm = Node Package Manager

Ye historical name hai.

Practically ise package manager hi samjho.

---

❌ node_modules GitHub pe upload kar dena.

Never.

---

❌ package-lock.json delete kar dena.

Generally avoid karo.

---

## 🧠 Mental Model

Imagine tum ghar bana rahe ho.

```
package.json
↓
Shopping List

node_modules
↓
Purchased Material

Parcel
↓
Construction Manager

Browser
↓
Final House
```

Har component ka apna role hai.

---

## 💭 Interview Questions

<details>
<summary>Why do we need package.json?</summary>

It stores project metadata and dependency information so that anyone can recreate the project using `npm install`.

</details>

<details>
<summary>Difference between dependency and devDependency?</summary>

Dependencies are required to run the application.

Dev dependencies are only required during development.

</details>

<details>
<summary>Why don't we push node_modules to GitHub?</summary>

Because it is huge and can always be regenerated using `npm install`.

</details>

<details>
<summary>What are the superpowers of Parcel?</summary>

Bundling, HMR, Development Server, Caching, Tree Shaking, Minification, Image Optimization, File Watching, Compression, etc.

</details>

---

## ⚡ Quick Revision

* npm manages packages.
* package.json stores project information.
* node_modules contains installed packages.
* package-lock.json locks exact versions.
* Parcel is a bundler.
* React & ReactDOM are dependencies.
* Parcel is usually a dev dependency.
* HMR updates only changed modules.
* Cache makes rebuilds faster.
