// setInterval
// console.log("script start");
// setInterval(() => {
//   console.log(total);
//   console.log(Math.random()); // Math.random() is a function that will give a random number between 0 and 1
// }, 500);
// console.log("script end");
const body = document.body;
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

console.log(intervalId);

//use of floor and ceil function
//floor used to rounds a number DOWN to the nearest integer like (3.5 -> 3,-3.9 -> -4 )
//ceil used to rounds a number UP to the nearest integer like (0.2 -> 1, -3.5 -> -3)

// touch fileName.extensionName used to create the file
// code fileName.extensionName used to open the file
