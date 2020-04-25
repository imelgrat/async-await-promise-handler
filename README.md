# Promises - using async/await

Async functions let us tag functions as asynchronous, and these functions will then return promises, eventually resolving to whatever value is returned (or rejecting with whatever error is thrown).

The `await` expression causes `async function` execution to pause until a `Promise` is settled (that is, fulfilled or rejected), and to resume execution of the `async` function after fulfillment. When resumed, the value of the `await` expression is that of the fulfilled Promise.

One common mistake is to try using await in top-level code. This will not work and will end in a syntax error, as await can only be used inside asynchronous functions. However, we can use a simple trick and wrap the await call into an anonymous async function (as shown in the example above).