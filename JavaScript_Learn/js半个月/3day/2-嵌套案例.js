let printFu = function (n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n"); //
  }
};
printFu(5);
