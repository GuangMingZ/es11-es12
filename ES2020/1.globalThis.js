// 在全局对象中挂载一个`v`属性，赋值为`true`:
// es11之前的解决方案
const getGlobal = function () {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};
getGlobal().v = true;
console.log(getGlobal().v); // true

// es11用如下方式定义
globalThis.v1 = true;
console.log(globalThis.v1); // true
