// question: Longest word in a string

// make a function to find the longest word from the string and returns the first one that encountered in the case of multiple words.

// constrains
// input string  may contains alphabetic. digits, spaces and punctuations

// the input string  is non-empty

// the input string may contains multiple word separated by commas

// Note: if input string contains empty and whitespace then function should return false.
// the function should ignore the leading and trailing whitespace.

// approaches that i learning:
// using the comparison function but comparison function is in the array not in the string so i have to convert the string to array.

// str="           suhsnus             ";
// ans=str.trim(); // string is immutable.
// console.log(ans.length);
// console.log(str.length);
// trim() // it remove the trailing and leading zero.

// strArr=str.split();// it split the string into a array with single element as string
// strArr=str.split(""); // it split the every character of the words into a array as a individual string
// strArr=str.split(" "); // it split on the basis of single spaces as a individual string.

// length // length is not the function so i should not write this as length()

// words=words.sort(); // it sort the array on the  basis of ASCII value means unique code.
// A-65, Z-90, a-97, z-122.

// return words.at(-1); // this can also be write in case of to find the last element of th

// code:

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  // now apply comparison function in sort function
  // words=words.sort((a,b)=>a.length-b.length);
  // console.log(words);
  // return words[words.length-1];

  // also use the reduce methods
  return words.reduce((accum, curWord) => (
    curWord.length ? curWord : accum
  ),"");
};

console.log(findLongestWord("I am the student of Tezpur University"));
