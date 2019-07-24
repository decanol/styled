# Creating test-passed code

## Code in __index.js__:

```js

module.exports = function styled(base = null) {

 return function (pieces, ...functions) {

     return function (args = {}) {
         var result = '';
         if (base !== null) {
             result += base(args);
         }
         result += pieces[0];
         for (var i = 0; i < functions.length; ++i) {
             result += functions[i](args) + pieces[i + 1];
         }
         return result.replace(/(?:\r\n|\r|\n|\t)/g,'');
     }
 }
};

```

## How does it work:

#### Set a default parameter for "base":

```js

module.exports = function styled(base = null) {/*...*/};

```


```js

return function (pieces, ...functions) {/*...*/};

```

```js

return function (args = {}) {/*...*/};

```

```js

  var result = '';
         if (base !== null) {
             result += base(args);
         }
         result += pieces[0];
         for (var i = 0; i < functions.length; ++i) {
             result += functions[i](args) + pieces[i + 1];
         }
         
```


#### Here is deleting all lines breaking, tabulation and unnecessary spaces:

```js

return result.replace(/(?:\r\n|\r|\n|\t)/g,'');

```
