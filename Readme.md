# 📘 TypeScript Practice Summary

A complete guide to TypeScript basics and intermediate concepts with code examples and one-line explanations.

---

### Day 1

## 📌 Number — Used to store numeric values.

```ts
let a: number = 12;
console.log(a);
```

---

## 📌 Boolean — Used to store true or false values, or can be undefined.

```ts
let isLoggedIn: boolean | undefined;
console.log("Before assigning", isLoggedIn);
isLoggedIn = true;
console.log("After assigning", isLoggedIn);
```

---

## 📌 String — Used to store textual data.

```ts
let fName: string = "Dinesh";
console.log(fName);
```

---

## 📌 Array — Can hold multiple values of a type, or mixed types.

```ts
let mixedArr: (number | string)[] = [1, 2, 3, "dinesh", "chandani"];
console.log(mixedArr);
```

---

## 📌 Tuple — A fixed-length array with known types in order.

```ts
let tupleExample: [number, string] = [22, "Chandani"];
console.log(tupleExample);
```

---

## 📌 Enum — Defines named constants that can be used as types.

```ts
enum Role {
  admin = "Dinesh",
  user = 10,
}
console.log(Role[10]); // undefined
console.log(Role["Dinesh"]); // error
```

---

## 📌 Union Type — A variable that can hold multiple possible types.

```ts
let a: number | string = "dinesh";
a = 12;
console.log(a);
```

---

## 📌 Any Type — A flexible type that allows anything (use with care).

```ts
let a: any = "dinesh";
a = true;
console.log(a);
```

---

## 📌 Unknown Type — Similar to `any` but requires type checking before use.

```ts
let a: unknown = "dinesh";
a = 12;
console.log(a);
```

---

## 📌 Literal Type — A type that allows only specific values.

```ts
let color: "red";
color = "red";
// color = "green"; // ❌ Error
```

---

## 📌 Object Type — Used to define the shape/structure of objects.

```ts
let developer: {
  skills: string[];
  name: string;
  age?: number;
};
developer = {
  skills: ["JavaScript", "NodeJS"],
  name: "Dinesh",
};
```

---

## 📌 Type Alias — Create custom names for types to reuse.

```ts
type buttonSize = "big" | "small" | "medium";
let myBTNSIZE: buttonSize = "small";
console.log(myBTNSIZE);
```

---

## 📌 Complex Type — Real-world objects using type alias.

```ts
type myGroup = {
  name: string;
  friendNames: string[];
  anyPlans?: string[];
};
let newGroup: myGroup = {
  name: "abc",
  friendNames: ["abc", "pqr"],
};
console.log(newGroup);
```

---

## 📌 Function Type — Define the parameter and return types.

```ts
let greet = (name: string) => `Welcome, ${name}`;
console.log(greet("Dinesh"));
```

---

## 📌 Type Inference — TypeScript auto-detects the variable type.

```ts
let age = 25; // inferred as number
```

---

## 📌 Intersection Types — Combine multiple types using `&`.

```ts
type employeeName = { name: string };
type employeeId = { id: number };
type employeeDetails = employeeName & employeeId;

const newEmployee: employeeDetails = {
  name: "Dinesh",
  id: 101,
};
console.log(newEmployee);
```

---

## 📌 Interfaces — Define the blueprint for an object structure.

```ts
interface employee {
  name: string;
  age?: number;
  id: string;
}

interface salaryStatus {
  payment: number;
  perks?: string;
}

interface getEmployeeDetails extends Pick<employee, "name">, salaryStatus {
  isHappy: boolean;
}

const Newemployee: getEmployeeDetails = {
  name: "DC",
  payment: 30000,
  isHappy: false,
};
console.log(Newemployee);
```

---

## 📌 Class — Template for creating objects with data and behavior.

```ts
class BottleFactory {
  constructor(public name: string, public shape: string) {
    this.name = name;
    this.shape = shape;
  }

  read() {
    console.log(`Bottle name is ${this.name} and the shape is ${this.shape}`);
  }
}

const circularBottle = new BottleFactory("Melton", "Circular");
circularBottle.read();
```

---

## 📌 Access Modifiers — Control access to class members.

- `public`: Accessible from anywhere.
- `private`: Accessible only inside the class.
- `protected`: Accessible inside the class and its subclasses.

```ts
class chargingPoint {
  constructor(
    public nameOfVeh: string,
    private price: number,
    protected isGood: string
  ) {
    this.nameOfVeh = nameOfVeh;
    this.price = price;
  }

  getBill() {
    console.log(
      `The vehicle is ${this.nameOfVeh} and the charging amount is ${this.price}`
    );
  }

  getReviews() {
    console.log(`The review is ${this.isGood}`);
  }
}

const newChargingPoint = new chargingPoint("Activa", 1299, "Not too good");
newChargingPoint.getBill();
newChargingPoint.getReviews();
```

---

## ✅ How to Run TypeScript Code

1. 📦 Install TypeScript globally (if not installed):

```bash
npm install -g typescript
```

2. 🛠️ Compile TypeScript to JavaScript:

```bash
tsc filename.ts
```

3. ▶️ Run the compiled JavaScript:

```bash
node filename.js
```

---

## 🏁 Conclusion

This `README.md` summarizes important TypeScript concepts with clean code and one-liners. Great for beginners and quick reference.

> Made with ❤️ by Dinesh Shinde
