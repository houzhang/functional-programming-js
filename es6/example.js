const array = (...elements) => {
  return elements;
}

console.log(array(1,2,3));

const log = (...args) => {
  console.log(...args);
  console.log(args);
}

log('hello', 'world');

const langs = ['JavaScript', 'Ruby', 'Java'];
const [js, ...rest] = langs;
console.log(js);
console.log(rest[0]);
console.log(rest[1]);

const [js1] = langs;
console.log(js1);

const head = ([x]) => x;
console.log(head([1, 2, 3]));

console.log(Object.assign(
  {a: 'a'},
  {b: 'b'},
  {a: 'a1'},
  {}
));