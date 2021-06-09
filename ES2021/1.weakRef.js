let obj = {
  name: "Cache",
  size: "unlimited",
};
const myWeakRef = new WeakRef(obj);

console.log(myWeakRef.deref());
console.log(myWeakRef.deref().name);
console.log(myWeakRef.deref().size);
