let bigintA = BigInt(Number.MAX_SAFE_INTEGER);
let intB = Number.MAX_SAFE_INTEGER;
console.log(bigintA); // 9007199254740991n
console.log(bigintA == intB);// true
console.log(bigintA === intB);// false
console.log(bigintA * 2n); // 18014398509481982n
