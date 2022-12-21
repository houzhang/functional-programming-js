const partialFromBind = (fn, ...args) => {
  return fn.bind(null, ...args);
}

const partial = (fn, ...args) => {
  return (...otherArgs) => {
    return fn(...args, ...otherArgs);
  }
}

const add = (x, y) => x + y;

const add3 = partialFromBind(add, 3);
console.log(add3(2));

const add4 = partial(add, 4);
console.log(add4(5));