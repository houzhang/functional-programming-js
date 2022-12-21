const add = x => y => x + y;

const add3 = add(3);

console.log(add3(4));

const request = defaults => options => {
  return Object.assign(
    {}, defaults, options
  )
}

const customRequest = request({
  headers: {'X-Custom': 'myKey'}
});

console.log(customRequest({url: '/users'}))
console.log(customRequest({url: '/tasks'}))