function test() {
  let a = "Hello";

  if (true) {
    let a = "Hello from block";
    console.log("block", a);
  }
  console.log("function", a);
}

test();
