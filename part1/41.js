// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
// let { bandName:var1, famousSong:var2, ...restProps } = band; // here bandName variable name changed to var1 and store the value from the band object. so, we can access var1 like variable

console.log(bandName); // it gives the undefine because it value changed to var1.
// console.log(var1); // bandName changed to var1 so we have to always used var1 in place of bandName.
// bandName="wujnfj";
// console.log(bandName);
console.log(restProps); // it will print the object of rest of the properties.
console.log(Array.isArray (restProps)); // false because it is object