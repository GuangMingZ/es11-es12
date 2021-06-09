let str = "a+b+c";
let s1 = str.replace(/\+/g, " ");
let s2 = str.split("+").join(" ");
let s3 = str.replaceAll("+", " ");

console.log(s1);
console.log(s2);
console.log(s3);
