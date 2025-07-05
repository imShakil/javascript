# Javascript Modules

JavaScript modules allow you to break up your code into separate files. This makes it easier to maintain a code-base. Modules are imported from external files with the `import statement`. Modules also rely on type="module" in the `<script>` tag.

## Import

You can import modules into a file in two ways, based on if they are named exports or default exports. Named exports are constructed using curly braces. Default exports are not.

```js
// default export
import message from "./message.js";

// named export
import { name, age } from "./person.js";
```

## Export

Modules with functions or variables can be stored in any external file.
There are two types of exports: `Named Exports` and `Default Exports`:

- named exports:

    ```js
    const name = "Jesse";
    const age = 40;

    export {name, age};
    ```

- default exports:

    ```js
    const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
    };

    export default message;
    ```

> Modules only work with the `HTTP(s)` protocol. A web-page opened via the `file:// protocol` cannot use `import / export`.

