function sayHi() {
  console.log(name); // it return the undefined value because it get hoisted and also initialized with undefined value
  console.log(age); // let keyword variable can not be accessed before declaration because it get hoisted and not initialized with undefined value.
  var name = 'Lydia';
  let age = 21;
}

sayHi();
