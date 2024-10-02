import path from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const writeFile = path.resolve(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const stream = createWriteStream(writeFile, "utf-8");
  process.stdin.pipe(stream);
};

await write();
