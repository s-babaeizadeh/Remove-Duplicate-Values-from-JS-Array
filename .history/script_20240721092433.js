function test() {
  var a = "Hello";
  let b = "Bye";

  if (true) {
    let a = "Hello from block";
    var b = "Goodbay";
    console.log("block", a);
    console.log("block", b);
  }
  console.log("function", a);
}

test();
