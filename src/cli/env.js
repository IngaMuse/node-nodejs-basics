const parseEnv = () => {
  const { env } = process;

  const result = Object.keys(env)
    .filter((key) => key.startsWith("RSS_"))
    .map((key) => `${key}=${env[key]}`)
    .join("; ");

    console.log(result);
};

parseEnv();
