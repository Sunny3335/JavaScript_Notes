// hashtag generator
// you have required to implement a function that make a string to hashtag where each word is to be capitalized together without spaces.

// constraint
// 1. if the length of string greater than 280 character or in case of empty string or in case of only white spaces then it will return the false value.

const generateHashtag = (str) => {
  if(str.length > 280 || str.trim().length==0){
    return false;
  }
  hashtag=str.split(" ");

  hashtag=hashtag.map((curEle)=>
    curEle.replace(curEle[0], curEle[0].toUpperCase()));

  hashtag=`#${hashtag.join("")}`;
  return hashtag;

};

console.log(generateHashtag("do not watch IPL"));
