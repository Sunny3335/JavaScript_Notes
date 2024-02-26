const rootNode =document.getRootNode();
// console.log(rootNode); // gives the body and head element .. returns the document node
const htmlEle=rootNode.childNodes[0]; // NodeList(3) [head, text, body]
// it will give the node list so we can traverse it like array.
// console.log(htmlEle); // it is first html node
//console.dir(htmlEle); // gives the object of html
console.log(htmlEle.childNodes); // return head text and body..
// const headnode=htmlEle.childNodes[0];
// const textnode=htmlEle.childNodes[1];
// const bodynode=htmlEle.childNodes[2];
// console.log(textnode);
// console.log(bodynode);
// console.log(headnode);

console.log(htmlEle.parentNode); // document
console.log(htmlEle.nextSibling);
