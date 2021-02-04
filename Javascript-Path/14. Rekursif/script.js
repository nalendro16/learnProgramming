function rekrusif(n) {
  if (n === 0) return 1;
  return n * rekrusif(n - 1);
}
var print = rekrusif(5);
console.log(print);
