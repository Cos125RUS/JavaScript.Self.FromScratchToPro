let uri = "How's it going?";
let encode = encodeURIComponent(uri);
console.log(encode);
let decode = decodeURIComponent(encode);
console.log(decode);