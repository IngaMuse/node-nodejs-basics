import { readdir } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.resolve(__dirname, "files");
const list = async () => {
  const filesList = await readdir(srcPath).catch(() => {
    throw new Error("FS operation failed");
  });
  console.log(filesList);
};

await list();
