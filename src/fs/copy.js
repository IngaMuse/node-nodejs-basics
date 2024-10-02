import { access, cp } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.resolve(__dirname, "files");
const destPath = path.resolve(__dirname, "files-copy");

const copy = async () => {
  await access(srcPath).catch(() => {
    throw new Error("FS operation failed");
  });
  await access(destPath).then(
    () => {
      throw new Error("FS operation failed");
    },
    async () =>
      await cp(srcPath, destPath, { recursive: true }, (err) => {
        if (err) {
          console.error(err);
        }
      })
  );
};

await copy();
