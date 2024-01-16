let uri = "http://localhost/submit?name=valerii panov";
let encodedUri = encodeURI(uri);
console.log(encodedUri);
let decodedUri = decodeURI(encodedUri);
console.log(decodedUri);
console.log();

let encodedUriComponent = encodeURIComponent(uri);
console.log(encodedUriComponent);
let decodedUriComponent = decodeURIComponent(encodedUriComponent);
console.log(decodedUriComponent);