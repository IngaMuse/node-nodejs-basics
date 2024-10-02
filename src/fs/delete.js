import { rm } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRemove = path.resolve(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  await rm(fileToRemove).catch(() => {
    throw new Error("FS operation failed");
  });
};

await remove();
