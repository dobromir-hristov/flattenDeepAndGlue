# Introduction

**ObjectToBrSeparatedString** is a small function that expands objects or arrays of strings to `</br>` separated string rows.
The reason I made this module us to easily use Laravel's validation messages with [sweetAlert2](https://github.com/limonte/sweetalert2) or [toastr](https://github.com/CodeSeven/toastr).
If you don't want to create a separated toast for each error, the plugin creates a string with rows for each error message value.

## How to use
> The examples use ES2015 syntax
### With module loader
```js
import ObjectToString from 'ObjectToBrSeparatedString'

const 
  messageToTransform = { name: 'Name is required', email: 'Email is required' },
  transformedMessage = ObjectToString(messageToTransform) // 'Name is required <br/>Email is required'
```

### In the Browser
```html
<script src="path/to/objectToBrSeparatedString.js"></script>

<script>
    var 
        messageToTransform = { name: 'Name is required', email: 'Email is required' },
        transformedMessage = ObjectToString(messageToTransform) // 'Name is required <br/>Email is required'
</script>
```