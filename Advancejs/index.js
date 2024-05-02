let a=5;
console.log(a);
// global scope also follow across the files

{
  // console.log(a);
  // let will creates temporal dead Zone.
  // Temporal Zone--> Area under the block above the varibale declaration line.
  let a=53;
}

{
  const say=()=>console.log(a);
  let a="tre"
  say();
}