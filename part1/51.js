// default parameters

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a, b = 0) { // if we are not setting the value of b then it will return undefined in case of passing of only one argument in the function .
    
    /* if(typeof b==="undefined"){
        b=0;
    } */
    return a+b;
}

const ans = addTwo(4, 8);
const ans1 = addTwo(4);
console.log(ans);
console.log(ans1);