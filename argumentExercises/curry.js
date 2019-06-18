Function.prototype.curry = function(numArgs) {
  const _curry = function(numArgs) {
    let args = Array.from(arguments).slice(1);
    if (args.length === numArgs) {
      return this.apply(null, ...args);
    } else {
      numArgs = numArgs - args.length;
      return _curry;
    }
  }
  return _curry;
}

function sum() {
  let args = Array.from(arguments);
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}


const x = sum.curry(4);

console.log(x(1, 2, 3, 4);

