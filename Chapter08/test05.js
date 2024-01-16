let text = "THIS IS A GOOD LETTER";
console.log(text.charAt(0).concat(text.slice(1).toLowerCase()));

text = "rewgaFognf sdFdfoGbdf dfFdfagdofgWdfd fgadfog dfgdafgoLfdf";
console.log(text.split(" ").map(x => x.toLowerCase()).map(x => x.charAt(0).toUpperCase().concat(x.slice(1))).join(" "));

let arr = ['a', 'o', 'i', 'e', 'u'];
arr.forEach((value, index) => text = text.replace(value, index));
console.log(text);