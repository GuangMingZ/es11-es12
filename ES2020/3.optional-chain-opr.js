// 可选链操作符
const user = {
  info: {
    name: "hahahh",
  },
};
// 在es11之前的写法
let name1 = user && user.info && user.info.name;
//es11之后的写法
let name2 = user?.info?.name;
console.log(name1); // hahahh
console.log(name2); // hahahh

user.info = null;
name1 = user && user.info && user.info.name;
name2 = user?.info?.name;
console.log(name1); // null
console.log(name2); // undefined
