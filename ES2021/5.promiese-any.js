// const promise1 = new Promise((resolve, reject) => {
//   console.log("promise1 done!");
//   reject("我promise1失败了");
// });

// const promise2 = new Promise((resolve, reject) => {
//   console.log("promise2 done!");
//   setTimeout(resolve, 500, "我promise2成功了");
// });

// const promise3 = new Promise((resolve, reject) => {
//   console.log("promise3 done!");
//   setTimeout(resolve, 100, "我promise3成功了");
// });

// Promise.any([promise1, promise2, promise3]).then((value) => {
//   console.log("promise.any = ", value); // 我promise3成功了
// });

const promise1 = new Promise((resolve, reject) => {
  console.log("promise1 done!");
  reject("我promise1失败了");
});

const promise2 = new Promise((resolve, reject) => {
  console.log("promise2 done!");
  reject("我promise2失败了");
});

const promise3 = new Promise((resolve, reject) => {
  console.log("promise3 done!");
  reject("我promise3失败了");
});

Promise.any([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});
