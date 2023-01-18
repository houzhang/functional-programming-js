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

function doubleNumbers(array) {
  return array.map(x => x * 2);
}

console.log(doubleNumbers([1, 2, 3]));

const createPoint = (x, y) => Object.freeze([x, y]);

const movePoint = ([x, y], dx, dy) => {
  return Object.freeze([x + dx, y + dy]);
}

let point = createPoint(0, 0);

point = movePoint(point, 1, 1);
console.log(point);

point = movePoint(point, 1, 1);
console.log(point);


const array1 = [1,2,3,4,5];
const add1 = (x) => x + 1;
console.log(array1.map(add1));

const validArticles = articles => articles.filter(article !== null && article !== undefined);

const compact = xs => xs.filter(x => x !== null && x!== undefined);

console.log(compact(['a1', null, 'a2']));
