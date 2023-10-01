const resolved = Promise.resolve(42);
const rejected = Promise.reject(-42);

const allSettledPromise = Promise.allSettled([resolved, rejected]);

allSettledPromise.then(function (results) {
   console.log(results);
});