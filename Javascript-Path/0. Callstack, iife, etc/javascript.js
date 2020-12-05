//www.youtube.com/watch?v=v0QTqHXiVNw

//callstack
https: function hello() {
  console.log("Helo");
}

function myName() {
  console.log("Nalendro");
}

function callAll() {
  myName();
  hello();
}
callAll();
console.log("Selesai");

//callback, promises and async wait
const sayName = (name, cb) => {
  console.log("running some code");
  console.log("running some code");
  console.log("running some code");
  console.log(`Name${name}`);
  cb();
};
function callback() {
  console.log("End code");
}
sayName("Helo", callback);
