function test() {
  let a = "Hello";

  if (true) {
    let a = "Hello";
    console.log("block", a);
  }
  console.log("function", a);
}

test();
