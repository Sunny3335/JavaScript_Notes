// console.log can print something on console
// console.log("hello world");

// const fun = function () {
//   console.log("hello world");
// };
// const fun=()=> console.log("hello world");
// fun();

// const fun=()=> {
//   return 5;
// }
// console.log(fun());
// const cars=['BME','KID','KIDU','KIDI'];
// cars.push("fjnf")
// console.log(cars)
// console.log(cars[4]);

// let n=prompt("please enter the num");
// for(let i=0; i<=n;i++){
//     console.log(i);
// }

// const person={
//     "name": "John Doe",
//     "address": 34,
//     "city": "N.Y",
//     "country": "USA",
//     "phone": "Ph: 12345"
// }
// console.log(typeof person)
// console.log(typeof person.address)
// console.log(typeof person.name)

const ages=[32,12,11,2];

function ageFilter(ages){
    return ages<18;
}
// let agFilter= ageFilter();
// console.log(agFilter);
const result=ages.filter(ageFilter);

console.log(result);
