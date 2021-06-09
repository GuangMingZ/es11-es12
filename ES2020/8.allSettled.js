async function fulfilled() {
  return Promise.allSettled([
    Promise.reject({ code: 500, msg: "服务异常" }),
    Promise.resolve({ code: 200, list: [] }),
    Promise.resolve({ code: 200, list: [] }),
  ]).then((res) => {
    console.log("all = ", res);
    // 过滤掉 rejected 状态
    return new Promise((resolve) => {
      resolve(
        res.filter((el) => {
          return el.status !== "rejected";
        })
      );
    });
  });
}

fulfilled().then((res) => {
  console.log("fulfilled = ", res);
});
