import { access, writeFile } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "files", "fresh.txt");
const content = "I am fresh and young";

const create = async () => {
  await access(filePath).then(
    () => {
      throw new Error("FS operation failed");
    },
    async () => await writeFile(filePath, content)
  );
};

await create();
