import fs from "fs/promises";
import { access } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const wrongFilename = path.resolve(__dirname, "files", "wrongFilename.txt");
const properFilename = path.resolve(__dirname, "files", "properFilename.md");

const rename = async () => {
  await access(properFilename).then(
    () => {
      throw new Error("FS operation failed");
    },
    async () => {
      await fs.rename(wrongFilename, properFilename).catch(() => {
        throw new Error("FS operation failed");
      });
    }
  );
};

await rename();
