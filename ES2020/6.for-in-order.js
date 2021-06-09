const obj = {
  x2: "x2",
  x1: "x1",
  3: "3",
  1: "1",
  2: "2",
  "3xx": "3xx",
};
for (let key in obj) {
  console.log(key); // 1 2 3 x2 x1 3xx
}
