# JS variables
- **var** - has a function scope and **does hoist**
- **let** - has a block scope and **does not hoist**
- **const** - has a block scope, does not hoist and creates a **read-only reference** to a value. It **does not mean** the value it holds is **immutable**, just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.