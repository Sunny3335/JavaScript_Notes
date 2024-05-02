const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2; // here this is normal function so it can access the shape object means it gives the value of this.radius.
  },
  perimeter: () => 2 * Math.PI * this.radius, // With arrow functions, the this keyword refers to its current surrounding scope.
  // here this.radius gives the undefined because this keyword defined to the surrounding of this scope in case of arrow function
  // here this.radius-> undefined so when we multiply undefined with the some value then it will be NAN.
};

console.log(shape.diameter());
console.log(shape.perimeter());
console.log(Math.PI); // 3.14