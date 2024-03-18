// setInterval
// console.log("script start");
// setInterval(() => {
//   let total=0;
//   for(let i=0;i<10;i++){
//     total=total+i;
//   }
//   console.log(total);
//   console.log(Math.random()); // Math.random() is a function that will give a random number between 0 and 1
// }, 5000);
// console.log("script end");

// make color changing
const body = document.body;
console.log(body);
const button = document.querySelector("button");
const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${green}, ${blue})`;
  body.style.background = rgb;
}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervalId); // used to stop execution
  button.textContent = body.style.background;
});

// console.log(intervalId);

//use of floor and ceil function
// floor gives rounded minimum number (lower limit)
// ceil gives the rounded maximum number (upper limit)
//floor used to rounds a number DOWN to the nearest integer like (3.5 -> 3,-3.9 -> -4 )
//ceil used to rounds a number UP to the nearest integer like (0.2 -> 1, -3.5 -> -3)

// touch fileName.extensionName used to create the file
// code fileName.extensionName used to open the file
