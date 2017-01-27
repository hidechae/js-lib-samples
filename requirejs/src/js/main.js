require(['util'], (util) => {
  console.log("main.js loaded");
  let result = util.add(1, 2);
  console.log(`1 + 2 = ${result}`);
})