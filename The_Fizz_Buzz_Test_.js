function fizzBuzz(number) {
  return Array.apply(null, Array(number))
    .map(function (_, i) {
      return i + 1;
    })
    .map((x) =>
      x % 15 === 0 ? "FizzBuzz" : x % 5 === 0 ? "Buzz" : x % 3 === 0 ? "Fizz" : x
    );
}
