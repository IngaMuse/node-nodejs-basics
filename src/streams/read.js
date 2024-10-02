import path from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "node:fs";
import { pipeline } from "stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const readFile = path.resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const stream = createReadStream(readFile, "utf-8");
  await pipeline(stream, process.stdout);
};

await read();
