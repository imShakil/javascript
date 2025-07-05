# Javascript Class

JavaScript Classes are templates for JavaScript Objects. Use the keyword `class` to create a class. Always add a method named `constructor()`.

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method
    age() {
        return this.age;
    }
}
```

## The Constructor Method

The constructor method is a special method:

- It has to have the exact name "constructor"
- It is executed automatically when a new object is created
- It is used to initialize object properties
- If you do not define a constructor method, JavaScript will add an empty constructor method.
