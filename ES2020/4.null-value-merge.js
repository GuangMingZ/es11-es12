let a = 0,
  b = true;
let c = a ? a : b; // 方式1-三目运算符
let d = a || b; // 方式2-逻辑运算符||
console.log(c); // true
console.log(d); // true

let e = a ?? b 
console.log(e); // 0