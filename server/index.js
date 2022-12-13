//calculate 100 numbers of pi
var pi = 0;
for (var i = 0; i < 1000000000000; i++) {
  pi += (4 * Math.pow(-1, i)) / (2 * i + 1);
}
console.log(pi);
