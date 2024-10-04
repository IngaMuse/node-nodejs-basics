const parseArgs = () => {
  const argv = process.argv.slice(2);

  const result = argv
    .filter((el) => el.startsWith("--"))
    .map((el, index) => `${el.slice(2)} is ${argv[index*2 + 1]}`)
    .join(", ");

  console.log(result);
};

parseArgs();
