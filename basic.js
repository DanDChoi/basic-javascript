function A(callback) {
  callback();
}

function B() {
  console.log("callback !");
}

A(B);
