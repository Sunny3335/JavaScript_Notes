for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
  console.log("first"); // var is globally defined so it print three times 3. because it has been fixed the value of var for 3.
}
console.log("hii");
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
  console.log("sec");
}
console.log("end");
