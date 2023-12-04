function narcissistic(value) {
  return ('' + value).split('').reduce(function(p, c) {
    return p + Math.pow(c, ('' + value).length);
  }, 0) == value;
}
// return ('' + value) convert a number data type to string data type
