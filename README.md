# Introduction

**flattenDeepAndGlue** is a small function that expands objects or arrays of strings to separated strings, <br> by default.
The reason I made this module us to easily use Laravel's validation messages with [sweetAlert2](https://github.com/limonte/sweetalert2) or [toastr](https://github.com/CodeSeven/toastr).
If you don't want to create a separated toast for each error, the plugin creates a string with rows for each error message value.

## How to use
> The examples use ES2015 syntax
### With module loader
```js
import flatten from 'flatten-deep-with-glue'

const 
  messageToTransform = { name: 'Name is required', email: 'Email is required' },
  transformedMessage = flatten(messageToTransform) // 'Name is required <br/>Email is required'
```

### In the Browser
```html
<script src="path/to/flattenDeepAndGlue.js"></script>

<script>
    var 
        messageToTransform = { name: 'Name is required', email: 'Email is required' },
        transformedMessage = flattenDeepAndGlue(messageToTransform) // 'Name is required <br/>Email is required'
</script>
```

You could also pass deeply nested objects like `[5, 'error', { name: 'Required' }]` and will get `5,error,Required`.
The second parameter is the separator so `flatten(myMessage, ',')` would output a comma separated list of `myMessage`'s values.
Passing false to the separator param will just return a the flattened array without transforming it into a string