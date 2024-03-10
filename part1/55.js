// function returning function
// heigher order function if we doing callback as well as function returing function along with together then it is called heiher order function
function myFunc(){
    function hello(){
        return "hello world"
    }
    // console.log(hello());
    return hello; // returning function
}

const ans = myFunc();
console.log(ans());