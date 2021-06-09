const str = "<text>JS</text><text>正则</text>";
const matchStr = str.match(/<text>(.*?)<\/text>/);
const allMatchs = str.matchAll(/<text>(.*?)<\/text>/g);
console.log(matchStr[0]);
console.log(allMatchs);
for (const match of allMatchs) {
  console.log(match[0]);
}
