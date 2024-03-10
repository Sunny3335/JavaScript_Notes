// rest parameters

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     this above code gives the 5,6,7,8,9 when we use string template and when using , then it will print the whole the array.
//     console.log(`c is`, c);
//     but this will only returns the value in array like [5,6,7,8,9]
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers) {
    console.log(numbers);
    console.log(Array.isArray(numbers));
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,5,4,2,10);
console.log(ans);