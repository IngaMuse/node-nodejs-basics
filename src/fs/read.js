import { readFile } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const readFilePath = path.resolve(__dirname, "files", "fileToRead.txt");
const read = async () => {
  const contentFile = await readFile(readFilePath, "utf-8").catch(() => {
    throw new Error("FS operation failed");
  });
  console.log(contentFile);
};

await read();
