// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//   console.log(value);
// })


// then()
// then method hamesha promise return karta hai


function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  })
}

myPromise()
  .then((value) => {
    console.log(value);
    value += "bar";
    // return value;
    // here promise is returning , we only apply the then function on promise not on string
    return Promise.resolve(value);
    // return Promise.resolve(undefined); // if  you do this way it will work same as above and return the undefined value.
  })
  .then((value) => {
    console.log(value);
    value += "baaz";
    return value;
  })
  .then(value => { 
    console.log(value); // return the promises
  })
  .catch((error)=>{
    return Promise.reject(error);
  })


