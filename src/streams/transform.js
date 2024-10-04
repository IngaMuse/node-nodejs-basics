import { Transform } from "node:stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });
  await pipeline(process.stdin, reverseTransform, process.stdout);
};

await transform();
