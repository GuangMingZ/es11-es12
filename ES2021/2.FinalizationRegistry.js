const a = {};
const obj = new WeakRef(a);
const fina = new FinalizationRegistry((v) => {
  console.log(v);
});

fina.register(a, "a被回收了");
console.log(a); // {}

/**** 假设a被回收 ****/

// 打印：a被回收了
console.log(obj.deref()); // undefined
