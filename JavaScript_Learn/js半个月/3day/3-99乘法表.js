let print99 = function () {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j}*${i}=${i * j}\t`);
    }
    process.stdout.write("\n");
  }
};

print99();
