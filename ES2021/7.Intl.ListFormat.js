const arr = ["Pen", "Pencil", "Paper"];

let obj = new Intl.ListFormat("en", { style: "short", type: "conjunction" });
console.log(obj.format(arr)); // Pen, Pencil, & Paper

obj = new Intl.ListFormat("zh-Hans-CN", {
  style: "short",
  type: "conjunction",
});
console.log(obj.format(arr)); // Pen, Pencil, Paper

obj = new Intl.ListFormat("en", { style: "long", type: "conjunction" });
console.log(obj.format(arr)); // Pen, Pencil, and Paper

obj = new Intl.ListFormat("en", { style: "narrow", type: "conjunction" });
console.log(obj.format(arr)); // Pen, Pencil, Paper

// 传入意大利语标识
obj = new Intl.ListFormat("it", { style: "short", type: "conjunction" });
console.log(obj.format(arr)); // Pen, Pencil e Paper

// 传入德语标识
obj = new Intl.ListFormat("de", { style: "long", type: "conjunction" });
console.log(obj.format(arr)); // Pen, Pencil e Paper
