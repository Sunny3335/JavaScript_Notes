// lexical scope
// it means lexical scope is the space where the function is defined and  all its variables are stored.

const myVar = "value1"; // this variable is in global scope so it is called by the the all function and valid for all lexical environment .

function myApp(){


    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();