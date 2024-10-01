import { access, writeFile } from "node:fs/promises";
import path from "path";

const filePath = path.resolve("src", "fs", "files", "fresh.txt");
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
