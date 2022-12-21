const createAdder = (x) => {
  return (y) => x + y;
}

const add3 = createAdder(3);

console.log(add3(4));
console.log(add3(10));

const createRequester = (options) => {
  return (otherOptions) => {
    return Object.assign(
      {}, options, otherOptions
    );
  }
}

const customRequest = createRequester({
  headers: {'X-Custom': 'myKey'}
});

const usersPromise = customRequest({ url: '/users'});
const tasksPromise = customRequest({ url: '/tasks'});
console.log(usersPromise);
console.log(tasksPromise);